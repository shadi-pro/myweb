    
//  This file inlcude all functions and methods responsible for [Authentication process] , with the next properties   :
  // 1- the defined functions here  will require the defined datasource of the  "users.json"  from [model]      :      
  // 2- all defined functions here will be called by the defined route of registration  {routes/register.js}    
// 

// [Authenctication] conceptual  steps :
    // a-- Checking for the existancey of [username] and  [password] values  in the current defined imported     
    // b-- sending a server error if the [username] is NOT existed   
    // c-- Persuing a success Login process if the requrested password is matched with the existed passwaord in the [usersDB]    
    // d-- Sending an server Error if the requrested password is  NOT matched with the existed passwaord in the [usersDB]           
    // e-- adding the [jwt] Authentication security proecess   - after the  default autthcitcation   -

    
// -------------------------------------------------------------------------

//  I] Datasource definition section   :
  // 1- Define {users} DataBase object  datasource as an imported  from the {model/users.json} :
  const  usersDB = {
    users : require('../model/users.json') , 
    setUsers :  function (data) { this.users = data }
  } 
//  --------------------------------------------------

// II] importing section  :
 
  // 1- Define the [bcrypt] from the installed node custom module library  :   
    const bcrypt = require('bcrypt') ; 

  // 2- Define the [JWT] from the installed {jsonwebtoken} node custom module library  :   
    const jwt = require('jsonwebtoken'); 

  // 3- Imported {.env} file  and its configurations using the imported  [dotenv] library      :    
    require('dotenv').config(); 
 
  // 4- define the {fs} module [due we still need to write changes into a files , and not using the MongoDB or any other DB ] :   
    const fsPromises = require('fs').promises; 

  // 5- define the {path} module  :   
    const path = require('path') ; 

// -------------------------------------------------

//  III] [Authentication Handling] function section -> (the default authnticatoin procedurs +  JWT procedures) :
const handleLogin = async ( req  , res) => {
  // 1- Define the [user] and [pwd] [as destructured values] from the retunred requested value from the user  : 
  const  {user, pwd } =  req.body ; 

  // 2- Checking from the returned values username or password if it is not existed + and send response error code + message  : 
  if ( !user || !pwd ) return res.status(400).json({ 'message' : 'Username or/and password are required !'  }) ;

  // 3- Checking if the inserted/requested [user] is equal to the  username that in the database [usersDB : username] , or not  -> ( if this varaible has a value ->  means the equlaity) :
  const foundUser = usersDB.users.find( person => person.username  === user) ; // [if this variable has a  value is =>  means an equality]  

  // 4- return an error of [unAuthurized code '401' ]  to the response if [foundUser] is not-existed  [means the username  has not found ] : 
  if  (!foundUser) return res.sendStatus(401);  
   
  // 5- Start [password evaluating] process (after passing the upperstep of : finding {username} is existed in the [usersDB] ) , according to next steps :
  // -- apply the {match} comparison method on the [requested password] with the existed [password] in the current DB , by using the {bcrypt} imported library :  
  const match = await bcrypt.compare( pwd , foundUser.password) ;     // [ if the match has a value => that means the password is found in DB]
    
  // 6-  assign a success code into the [response]  of server if the [match] varaible has a value  : 
    if ( match) {
    // a- starting creating the [JWT]  Authenctication procedures - before persuing the login pocess : 
      // - Creating [JWTs] 's [access token] ->   [with passing the payload  inlcuding only the [userame] (NOT password) ] with both types of  access and refresh token    :
      const accessToken = jwt.sign(
        { "username" : foundUser.username } ,  // [This is the payload]
        process.env.ACCESS_TOKEN_SECRET ,
        {expiresIn : '30s'}  // [  This is a very short duration , just for testing to be able to see the [access token] , in the real time : 5 - 50 min ] 
      ) ; 
      
      // - Create [JWTs] Creation our [refresh token]   :
      const refreshToken = jwt.sign(
          { "username" : foundUser.username } , 
          process.env.REFRESH_TOKEN_SECRET ,
          {expiresIn : '1d'}  // [ a testing duration time  for [refresh token]  , in the real time : 1 day  -  several days  ] 
        ) ; 

    // # [15:00]  : 

    // b- Define another user varible to be able to logout  [if the current user is not the login user ] : 
      // - Define a filtered  [users]  that abondon the current foundUser :
        const otherUsers = usersDB.users.filter( person => person.username  !== foundUser.user ) ; 
      
        // - Redefine the current user by the foundUser  thaty including the [refresh Token] :
        const currentUser  =  {... foundUser , refreshToken }   ;          

      // -  Adding the defined [currentUser]  -> the filtered new array of uesrs [otherUsers]  :
        usersDB.setUser( [...otherUsers , currentUser]  ) ;

    // c- creating a file of new [users]  with json format [instead of using a real Database ] :    
      await fsPromises.writeFile(   
        path.join(__dirname , '..'  , 'model' ,  'users.json' )  , 
        JSON.stringfy (usersDB.users)
      ) ;
      
    // send a json success repsonse to the user :  
    res.json({ "success" : `User ${user} Logged in successfully ` }) ;
    
  } else {
      res.sendStatus(401) ;    // [unAuthorized code]
  }
   
} 
// ----------------------------------------------

// IV] Exporting section    : 
 
 // Exporting the defined function of handling the  process [handleLogin] as object to be able to pull/call the full name of the controller when is being used inside route file :
 module.exports  =  {handleLogin}  ;


