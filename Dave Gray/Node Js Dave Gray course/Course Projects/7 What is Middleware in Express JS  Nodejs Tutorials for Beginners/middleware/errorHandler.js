// This file include the custom middleware of error hanlder   :

//  Improting the defined {logEvents} from its file {logEvents.js}  :  
const {logEvents}  = require('./logEvents')   ; 
// ------------------------------------------

// Define  the  custom error event method : 
const  errorHandler  = ( err , req , res , next ) =>  { 
  // calling the impported event logger to be used to log error inside the error file :
  logEvents(`${err.name} : ${err.message}`  , 'errLog.txt')   ;  

  console.log(err.stack) 
  
  // this message  will be sent to  be displayed in the page ]
  res.status(500).send(err.message) ;    
}     
// --------------------------------------------
 
//  Exporting the defined the  {custom error event method : errorHandler}   => to be able to use it inside the {server.js} file  :  
  module.exports = errorHandler  ;



 