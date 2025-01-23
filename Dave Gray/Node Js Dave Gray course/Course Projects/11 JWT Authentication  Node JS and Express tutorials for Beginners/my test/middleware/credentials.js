
// This file is a middlewware to handle the credentials to fix the cors bug issue :  
  // -- this file will use the defined [allowedOrigins] array from the [config] folder    

// --------------------------------------

// 1]  importings   :  
 const   allowedOrigins  = require('../config/allowedOrigins')  ;

// ------------------------------------------


// 2] define the  main middleware function : 
const credentials = (res ,req ,next )  => {
  
  //  geting the value of the requested origin :  
  const origin  =  req.headers.origin ;
  
  // Setting the [acess-control-allow-credentials] with true if the allowed origins include the requested origin :  
  if  (  allowedOrigins.includes( origin) ) {
    res.header('Access-Control-Allow-Credentials' , true  ) ; // [that the cors are looking for ]
  } 
  next();
}
 
// -------------------------------------


// 3] Exporting the defined method of the  middleware defined method   : 
module.exports   = credentials ;  