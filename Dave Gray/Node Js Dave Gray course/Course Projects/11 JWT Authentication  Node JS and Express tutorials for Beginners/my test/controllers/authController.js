
//  This file inlcude all functions and methods responsible for [Authentication process] , with the next properties   :
// 1- the defined functions here  will require the defined datasource of the  "users.json"  from [model]      :      
// 2- all defined functions here will be called by the defined route of registration  {routes/register.js}    
// 

// [Authenctication] conceptual  steps :
// a-- Checking for the existancey of [username] and  [password] values  in the current defined imported     
// b-- sending a server error if the [username] is NOT existed   
// c-- Persuing a success Login process if the requrested password is matched with the existed passwaord in the [usersDB]    
// d-- Sending an server Error if the requrested password is  NOT matched with the existed passwaord in the [usersDB]           
// e-- adding the [jwt] Authentication security proceses   - after the  default autthcitcation   -


// -------------------------------------------------------------------------

//  I] Datasource definition section   :
// 1- Define {users} DataBase object  datasource as an imported  from the {model/users.json} :
const usersDB = {
  users: require('../model/users.json'),
  setUsers: function (data) { this.users = data }
}
//  --------------------------------------------------

// II] importing section  :

// 1- Define the [bcrypt] from the installed node custom module library  :   
const bcrypt = require('bcrypt');

// 2- Define the [JWT] from the installed {jsonwebtoken} node custom module library  :   
const jwt = require('jsonwebtoken');

// 3- Imported {.env} file  and its configurations using the imported  [dotenv] library :    
require('dotenv').config();

// 4- define the {fs} module [due we still need to write changes into a files , and not using the MongoDB or any other DB ] :   
const fsPromises = require('fs').promises;

// 5- define the {path} module  :   
const path = require('path');

// -------------------------------------------------

//  III] [Authentication Handling] function section -> (the default authentication procedures +  JWT procedures) :
const handleLogin = async (req, res) => {
  // 1- Define the [user] and [pwd] [as destructured values] from the retunred requested value from the user  : 
  const { user, pwd } = req.body;

  // 2- Checking from the returned values username or password if it is not existed + and send response error code + message  : 
  if (!user || !pwd) return res.status(400).json({ 'message': 'Username or/and password are required !' });

  // 3- Checking if the inserted/requested [user] is equal to the  username that in the database [usersDB : username] , or not  -> ( if this varaible has a value ->  means the equlaity) :
  const foundUser = usersDB.users.find(person => person.username === user); // [if this variable has a  value is =>  means an equality]  

  // 4- return an error of [unAuthurized code '401' ]  to the response if [foundUser] is not-existed  [means the username  has not found ] : 
  if (!foundUser) return res.sendStatus(401);

  // 5-  Start [password evaluating] process (after passing the upperstep of : finding {username} is existed in the [usersDB] ) , according to next steps :
  // -- apply the {match} comparison method on the [requested password] with the existed [password] in the current DB , by using the {bcrypt} imported library :  
  const match = await bcrypt.compare(pwd, foundUser.password);     // [ if the match has a value => that means the password is found in DB]


  // 6- Start the [JWT authentication prcodrues] uppon the upper defined {match} variable - if this var has a value-   :  
  if (match) {
    // a- starting creating the [JWT]  Authenctication procedures - before persuing the login process : 
    /// 1) Creating [JWTs] 's [access token] ->   [with passing the payload  inlcuding only the [userame] (NOT password) ] with both types of  access and refresh token    :
    const accessToken = jwt.sign(
      { "username": foundUser.username },  // [This is the payload]
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '30s' }  // [  This is a very short duration , just for testing to be able to see the [access token] , in the real time : 5 - 50 min ] 
    );

    /// 2) Create [JWTs] Creation our [refresh token]   :
    const refreshToken = jwt.sign(
      { "username": foundUser.username },   // [ passing through the username to be encoded by jwt later when verifying ]
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: '1d' }  // [ a testing duration time for [Refresh token]  , in the real time : 1 day  -  several days  ] 
    );


    // b-  Securing the [Refresh Token] + save it in the file [ using the file system module instead of using  the real database - we will modify thses steps by taking the {MongoDB} - ] :
    // The following step will allow secruting the refresh Token if the user logged out before the expiration duraton is up  :  
    /// 1)  Define a {otherUsers } which is the  filtered  [users]  that get all users expect the current foundUser    :
    const otherUsers = usersDB.users.filter(person => person.username !== foundUser.user);

    /// 2) Re-define the current user by the foundUser that including the [Refresh Token] , by adding the defined [Refresh token] to the upper defiend [founduser : which is found user that inserted his value  ]  :
    const currentUser = { ...foundUser, refreshToken };

    /// 3) Re-set the main datasource array [userDB] by adding both of upper defined [currentUser] & [otherUsers] -> by using  the {setter function} to the filtered new array of users [otherUsers]  :
    usersDB.setUsers([...otherUsers, currentUser]);

    /// 4) Saving the new [users] [after upper modifications] into datasource json format {users.json} [instead of using a real Database for now ] :    
    await fsPromises.writeFile(
      path.join(__dirname, '..', 'model', 'users.json'),
      JSON.stringify(usersDB.users)
    );


    // c- Securing the [Refresh Token] , by sending it [http cookies]  ( to be NOT vulneriable to the JS )  with following configurations :  
    ///  [any cookie is being sent with each request , but [httpOnly cookie] is perfect secured and not matched by the js ] 
    res.cookie(
      'jwt',   // [the cookie name] 
      refreshToken,  // [cookie value ]  
      { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 }   // [ cookie type &  cookie [1 day] duration by the miliiseconds ] 
    );


    // d- Securing the  [Access Token] , by sending it  to the secured node server memory JWT [this the user and frontend can grap] :  
    res.json({ accessToken });

    // e- Send a json success repsonse message [of the success log-in ] to the user :  
    // res.json({ "success" : `User ${user} Logged in successfully ` }) ;

  } else {
    res.sendStatus(401);    // [unAuthorized code]
  }

}
// ----------------------------------------------

// IV] Exporting section    : 

// Exporting the defined function of handling the  process [handleLogin] as object to be able to pull/call the full name of the controller when is being used inside route file :
module.exports = { handleLogin };


