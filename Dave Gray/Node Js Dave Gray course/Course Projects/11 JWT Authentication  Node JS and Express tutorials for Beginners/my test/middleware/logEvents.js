//   lesson 4 : Testing  [ Node events ] of the advanced   [Node Core Modules] :

console.log('==================== Welcome to Node.js course -> lesson 10  Building [ Authentciaton + Regisration ] using {Express.js} node server   =============================== ')

//  This lesson will include practical using of the [Node Events] of  npm modlues proceudures and methods acording to the express    :

// A] Using (2) different kinds of the imported node core :  [node custom modules ] & [node core modules ] => to Define a custom function to be exproeted into an event defiend inside  another    

// B] Define a Custom function to be used as Event's method   

// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------

//  A] Importing  (2) different kinds of  node core =>  [node custom modules ] & [node core modules] :

// 1] Importing  [Common Core Modules]  :
// a-  importing a [fs] :
const fs = require('fs');

// b-  importing a [fs.promosises] :
const fsPromises = require('fs').promises;

// c-  importing a [path] :
const path = require('path');
// ------------------------------------------------------

// 2] Importing  [Custom Node Modules] :
// a- importing the  {format} from the installed [data-fns] library :
const { format } = require('date-fns');


// b- importing the {v4} from the installed [uuid] library :
const { v4: uuid } = require('uuid');

// --------------------------------------
// --------------------------------------

// B] [Basic function] => Define a {Custom function} of the Event [to be used inside an event method ] to be  using the both custom and core modules wihtin it [including modifications of the file new path] :
  //  The main (2) parmeters  of  this method  : 
    // -  (message)   -> the custom message value to be assinged when this method is being  called      
    // -  (logName)   -> the final file name that will bve used to log the logitem inside it  
  // = [logItem]    -> (not parameter)  : exteranl defiend custom value of thoe log to be log entry inside the file              
  
const logEvents = async (message , logName ) => {
  
  // 1- Define a variable of  the current data and time using the imported {format} :  
  const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}` ;

  // 2- Define a variable of the printing a  literal defined  variables +  the  function parameter : 
  const logItem = `${dateTime}\t ${uuid()} \t ${message}\n` ;

  // 3-  Testing Print the defiend combined  variable   :
  console.log(logItem);

  // 4- Using  the  [try-catch]  for the [fs promises]  to create anew file and log certain messge inside  + catching the errors  :
  try {
    // a- Adding the directory of  'logs' if it is not existed [With taking in consideration  the new paht of this file  {logEvents.js}  ]   :   
    if (!fs.existsSync(path.join(__dirname ,'..' , 'logs'))) {
      await fsPromises.mkdir(path.join(__dirname , '..' , 'logs'));
    }

    // b- Appending/write the upper defined [logItem] variable inside a new log file into the file system using the [fsPromises] , and using the final  file path as recieved parameter [logName] when this event method is being called  :  
    await fsPromises.appendFile(path.join(__dirname , '..' ,  'logs' ,  logName ) , logItem ); 

  } catch (err) {
    console.error(err);
  }
};
// ---------------------------------------

//  [function uses the basic function] : Define antoher function of the {Handlers methods} as [custom middlewares] type that calling hte upper defined function {logEvents} ,
 //   [To log custom message into the console ] : 
const logger = (req , res ,  next ) => {
  // 1-  Calling the upper defined event function {logEvents & its parameters : (message , logName  ) } here to be exectued once in this method is being called ,  including (2) next parameters   :
    // - (message)  :   contain of the following :           
      //  [req.method] =>  the request method type (get ,  post , fetch ) 
      //  [req.headers.origin]  =>  where request comming from (the place that sending the request ) 
      //  [req.url] => request url   
    // - (logName)[reqLog.txt]  => represent the (final name of file to be used to write this log in) 'reqLog.txt;'  
    logEvents(` ${req.method} \t ${req.headers.origin} \t  ${req.url} `  , 'reqLog.txt' ) ; 

    // 2-  Testing print of the request method and path :
    console.log(`${req.method} ${req.path} `);  
    
    // 3- persuing the (next) command due to this is a custom middlewaree  :
    next(); 
}

// ---------------------------------------

// Exporting both of defined {logEvents} {logger} functions  => [to be able to use inside another file [server.js] as event method :  
module.exports = {logEvents , logger };
 
