
// This is [Refresh Token jwt]  handling controling  -> will be required for [refresh token route] definitoin  : 

//  I] Datasource definition section   :
// 1- Define {users} DataBase object  datasource as an imported  from the {model/users.json} :
const usersDB = {
  users: require('../model/users.json'),
  setUsers: function (data) { this.users = data }
}
//  --------------------------------------------------
                     
// II] importing section  :

// 1- Define the [JWT] from the installed {jsonwebtoken} node custom module library  :   
const jwt = require('jsonwebtoken');

// 2- Imported {.env} file  and its configurations using the imported  [dotenv] library      :    
require('dotenv').config();

// -------------------------------------------------

//  III] [RefreshToken Handling] function section -> (the default authnticatoin procedurs +  JWT procedures) :
const handleRefreshToken = (req, res) => {
  // 1- Define a cookies (that will  be used  in handling refresh token)   ;      
  const cookies = req.cookies;

  // 2- Checking if there is a [cookie & jwt] , and return an error of [UnAuthorized]  if there is NOT returned value of the [cookies] or [jwt] or both : 
  if (!cookies?.jwt) return res.sendStatus(401);

  // 3- Testing print of the retured value of  {cookies.jwt}] :      
  // console.log(cookies.jwt);

  // 4- Define [refreshToken]  a variable  with the return value of { cookies.jwt}   :      
  const refreshToken = cookies.jwt;

  // 5- Checking if the inserted/requested [refreshToken] is equal to the [refreshToken] that in the database [usersDB : refreshToken] , or not  -> ( if this varaible has a value ->  means the equlaity) :
  const foundUser = usersDB.users.find(person => person.refreshToken === refreshToken); // [if this variable has a value is =>  means an equality 'matching']  

  // 6- Return an error of [Forbiden code '403' ]  to the response if [foundUser] is NOT-existed  [means the [refreshToken] of this user has not found ] : 
  if (!foundUser) return res.sendStatus(403);

  // 7- Start [jwt verfying ] process (after passing the upperstep of : finding {refreshToken} is existed in the [usersDB] for this user) , according to next steps :
  jwt.verfy(
     refreshToken,
    process.env.REFRESH_TOKEN_SECRET,
    (err, decoded) => {
      // a- send an error of [Forbiden code '403'] if there is a return error  or the username is not equal the encoced value  :
      if (err || foundUser.username !== decoded.username) return res.sendStatus(403);

      // b- Creating a [Access Token] - after the [refresh token] has verfied in upper steps  -   :
      const accessToken = jwt.sign(
        { "username": decoded.username },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: '30s' }
      );

      // c- Sending the upper created  [accessToken] jwt to the json respsone  :          
      res.json({ accessToken })
    }
  );
}
// ----------------------------------------------

// IV] Exporting section    :  
// Exporting the defined function of handling the  process [handleRefreshToken] as object to be able to pull/call the full name of the controller when is being used inside route file :
module.exports = { handleRefreshToken }
