
//  This Middleware file  will handle the jwt verification , by executing  the next tasks :
  //  -  Recieving , verify , and securing  the [AccessToken] & [Refresh Token]     
  //  -   will include the  serverals  modifications  of  the [user roles] 


// ----------------------------------

// I] Importing section   :
  //  Define the [jwt] using the [jsonwebtoken] library :         
  const jwt = require( 'jsonwebtoken' ) ; 

  // importing the [.env]  file inner definitions using  [dotenv] library  :
  require('dotenv').config();
// --------------------------------------- 

// II] Event middleware function definition of verifying the jwt  :  
  const verifyJWT= (res , req , next) => {

    // 1-  Getting the requested authorization Haeder value as a defined variable (including the modify of the [users roles]  ) :
    // const  authHeader = req.headers['authorization'] ;  [the old method before using the users roels -not matched wiht using  users roles  -  ]
    // const  authHeader = req.headers['authorization'] || req.headers['Authorization']  ;  //  [first  Modify requried for (users roles)    : suitable with the using users roles  ]  
    
    //  [first  Modify requried for (users roles) suitable with the using users roles  ]  
    const authHeader = req.headers.authorization || req.headers.Authorization;
    // const authHeader  =  req.headers.authorization  ;  
      
    // 2-  Checking if defined recieved [authHeader] (is not a null value) OR (NOT is starting with 'Bearer ') and  [send code error of [unAuthorized] to the server if it is not recived] :
    if (!authHeader?.startsWith('Bearer '))  return res.sendStatus(401) ;    // [ { 401 : Unauthorized error} if we NOT reciving the {authHeader} OR the heaeder is starting with 'Bearer' + second  modify required for  (users roles)  ]    

 
    // 3- Define the [Token] as modified splittted value  from the recieved [authHeader]    :  
    // [by splitting the value of given [authorizedHeader] according the first character after the empty space]      
    const  token = authHeader.split(' ')[1]  ;    


    // 4- Assign [JWT] Verifying configuration object parameters , by using the {.verify()} method    [ including  the  deifnd token ,  other pamarters + call back parameters hanlding ] :  
    jwt.verify(   
      // a- assign the defined [token] variable (of a modified value) as the requested [Access Token]  name  :
      token , 

      // b- assign the main Access Token value :
      process.env.ACCESS_TOKEN_SECRET,   
      
      // c-  Assign the callback function inner (2) parameters of the {error} and {encoded}   :
      (err , decoded )  => {
        // 1) Handling  [invalid Token error] => by Sending it  as [Forbbiden error]  : 
        if  (err)  return  res.sendStatus(403) ;  // [ { 403 :  invalid  error} : means you are forbidon from the access] 
        
        //  2) Set the [user] requested value with the decoded username value [ third modify: using  parent 'userInfo' to set the property  ] :
        req.user =  decoded.UserInfo.username ;   // [ third modify required  for the (users roles)  ]  
         
        //  3) Set the [roles] requested value with the decoded roles property   value [ fourth modify:  using  parent 'userInfo' to set the e propertty    ] :
        req.roles  =  decoded.UserInfo.roles ;    //   [ fourth modify  requred for ( users roles)   ]    

        next();
      }   
    ) ;

  }  
//   ---------------------------------------------- 

// III]  Exporting the defined [verifyJWT]   :
  module.exports = verifyJWT ;






