
//  This Middleware file  will handle the jwt verification , by executing  the next tasks :
  //  -  Recieving , verify , and securing  the [AccessToken] & [Refresh Token]     

// ----------------------------------

// I] Importing section   :
  //  Define the [jwt] using the [jsonwebtoken] library :         
  const jwt = require( 'jsonwebtoken' ) ; 

  // importing the [.env]  file inner definitions using  [dotenv] library  :
  require('dotenv').config();
// --------------------------------------- 

// II] Event middleware function definition  :  
  const verifyJWT= (res , req , next) => {

    // 1-  Getting the requested authorization Haeder value as a defined variable :
    // const  authHeader = req.headers.authorization;  // there is an issue ...
    const  authHeader = req.headers['authorization'] ; 
    
    // 2-  Checking if defined recieved [authHeader] is not a null value  [send code error of [unAuthorized] to the server if it is not recived ]  :
    if (!authHeader)  return res.sendStatus(401) ;    // [ { 401 : Unauthorized error} ]    

    // 3- Testing print of the recieved  [authHeader] to the console :
    console.log(authHeader) ;    // [ bearer token ]      

    // 4- Define the [Token] as modified splittted value  from the recieved [authHeader]    :  
    // [by splitting the value of given [authorizedHeader] according the first char after the empty space]      
    const  token = authHeader.split(' ')[1]  ;    


    // 5- Assign [JWT] Verifying configuration object parameters , by using the {.verify()} method :  
    jwt.verify(   
      // a- assign the defined [token] variable (of a modified value) as the requested [Access Token]  name  :
      token , 

      // b- assign the main Access Token value :
      process.env.ACCESS_TOKEN_SECRET,   
      
      // c-  Assign the callback function inner (2) parameters of the {error} and {encoded}   :
      (err , decoded )  => {
        // 1) Handling  [invalid Token error] => by Sending it  as [Forbiden error]  : 
        if  (err)  return  res.sendStatus(403) ;  // [ { 403 : forbidden error} : means you are forbidon from the access] 
        
        //  2) Set the [user] requested value with the decoded username value :
        req.user =  decoded.username ;     

        next();
      }   
    ) ;

  }  
//   ---------------------------------------------- 

// III]  Exporting the defined [verifyJWT]   :
  module.exports = verifyJWT ;






