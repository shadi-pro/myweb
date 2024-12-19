
// This file include the main [  {error handler} : custom middleware definition] of  => by calling and usiung the  imported basic function of the event {logEvents}  :

//  Improting the defined {logEvents} from its file {logEvents.js}  :  
const {logEvents}  = require('./logEvents')   ; 
// ------------------------------------------

// Define  the custom error event method [custom middleware] : 
const  errorHandler  = ( err , req , res , next ) =>  { 

  // calling the impported event logger to be used to log error inside the error file , and assign it's paramters of the error built-in static values , as following     :
    //  (message) => conatatcaterd val;ud of both :  [ error name  + error message ]
    //  (logName) =>   the specified file for error   [errLog.txt]
  logEvents(`${err.name} : ${err.message}`  , 'errLog.txt')   ;  

  console.log(err.stack) 
  
  // this message will be sent to  be displayed in the page ]
  res.status(500).send(err.message) ;    
}     
// --------------------------------------------
 
//  Exporting the defined the  {custom error event method : errorHandler}   => to be able to use it inside the {server.js} file  :  
  module.exports = errorHandler  ;



 