//   lesson 4 : Testing  [ Node events ] of the advanced   [Node Core Modules] :

console.log('==================== Welcome to Node.js course -> lesson 4 [Node events] of the advaned [Node Core Modules]      =============================== ')

// This lesson will include practical using of the [Node Events] of  npm modlues proceudures  and methods   :

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


// B] Define a {Custom function}  [to be used inside an event method ] to be  usign  the both custom and core modules wihtin it :
const logEvents = async (message) => {
  
  // 1- Define a variable of  the current data and time using the imported {format} :  
  const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;

  // 2- Define a variable of the printing a  literal defiend  varialbes +  the  function parmater : 
  const logItem = `${dateTime}\t ${uuid()} \t ${message}\n`;

  // 3-  Testing Print the defiend combined  variable   :
  console.log(logItem);

  // 4- Using  the  [try-catch]  for the [fs promises]  to create anew file and log certain messge inside  + catching the errors  :
  try {
    // a- Adding the directory of  'logs' if it is not existed   :   
    if (!fs.existsSync(path.join(__dirname, 'logs'))) {
      await fsPromises.mkdir(path.join(__dirname, 'logs'));
    }

    // b- Appending a new file into the file system using the [fsPromises] , and including  the [logItem]  variable upper defined : 
    await fsPromises.appendFile(path.join(__dirname, 'logs', 'eventLog.txt'), logItem);

  } catch (err) {
    console.error(err);
  }
};
// ---------------------------------------
// ---------------------------------------

// Exporting the defined {logEvents} function  => [to be able to use inside another file [index.js] wintin a event method      :  
module.exports = logEvents;



