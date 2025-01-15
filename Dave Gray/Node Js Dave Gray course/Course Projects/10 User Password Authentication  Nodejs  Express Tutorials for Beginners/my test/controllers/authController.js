    
//  This file inlcude all functions and methods responsible for [Authentication process] , with the next properties   :
  // 1- the defined functions here  will require the defined datasource of the  "users.json"  from [model]      :      
  // 2- all defined functions here will be called by the defined route of registration  {routes/register.js}    
// 

// [Authenctication] conceptual  steps :
    // a-- Checking for the existancey of [username] and  [password] values  in the current defined imported     
    // b-- sending a server error if the [username] is NOT existed   
    // c-- Persuing a success Login process if the requrested password is matched with the existed passwaord in the [usersDB]    
    // d-- Sending an server Error if the requrested password is  NOT matched with the existed passwaord in the [usersDB]           
    
// -------------------------------------------------------------------------

//  I] Datasource definition section   :
  // 1- Define {users} DataBase object  datasource as an imported  from the {model/users.json} :
  const  usersDB = {
    users : require('../model/users.json') , 
    setUsers :  function (data) { this.users = data }
  } 
//  --------------------------------------------------

// II] importing section     :
 
  // 1-  Define the [bcrypt] from the installed node custom module library  :   
    const bcrypt = require('bcrypt') ; 
// -------------------------------------------------

//  III] [Authentication Handling] function section  :
const handleLogin = async ( req  , res) => {
  // 1-  define the [user] and [pwd] [as destructed values] of the retunred requested value from the user from to be checked later  : 
  const  {user, pwd } =  req.body ; 

  // 2- Checking from the returned values username or password if it is not existed + and send response error code + message  : 
  if ( !user || !pwd ) return res.status(400).json({ 'message' : 'Username or/and password are required !'  }) ;

  // 3- Checking if the inserted/requested [ username] is existed in the [usersDB] , or not  :
  const foundUser = usersDB.users.find( person => person.username  === user) ; 

  // 4- return an error of [unAuthurized code '401' ]  to the response if [foundUser] is not-existed  [means the username  has not found ] : 
  if  (!foundUser) return res.sendStatus(401);  
   
  // 5- Start [password evaluating] process (after passing the upper step of : finding  {usename} is existed in the [usersDB] ) , according to next steps  : 
   
    // a-  apply the {match}  comparison method on the [requested password] with the existed [password] in the current DB , by usinghte {bcrypt}  imported library  :  
    const match = await bcrypt.compare( pwd , foundUser.password) ;     // [ if the match has a value => that means the password is found in DB]
     
    // b-  assign a success code into the [response]  of server if the [match] varaible has a value  : 
     if ( match) {
      //  [in next lessons] : here we will add  [JWTs] Creation  as (2) types of access token ...
    
      res.json({ "success" : `User ${user} Logged in successfully ` }) ;
      
    } else {
       res.sendStatus(401) ;    // [unAuthorized code]
    }
  
} 
// ----------------------------------------------

// IV] Exporting section    : 
 
 // Exporting the defined function of handling the  process [handleLogin] as object to be able to pull/call the full name of the controller when is being used inside route file :
 module.exports  =  {handleLogin}  ;


