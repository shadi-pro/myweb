
//  This file to solve the problem of using {fetch} with [cors] in the frontend :
    //  this file will contains a list of allowed origins , to be  used in the [corsoptions]   to solve the cors responeding 
    // this file will b used also in the middeware 

// ------------------------------------------

// 1-  Define the whitelist array  of the [allowed origins] : 
   //  the following hosts will be allowed to be access our backend , which can be classified into   :
      //  [your localhost]   [yourdomain] [virtual cutom server]       
const  allowedOrigins  = [
  'https://www.yoursite.com' , 
  'http://127.0.0.1:5500' , 
  'http://localhost:3500'  
]

// ---------------------


// 2]  Export the defined array :
module.exports =  allowedOrigins ;
