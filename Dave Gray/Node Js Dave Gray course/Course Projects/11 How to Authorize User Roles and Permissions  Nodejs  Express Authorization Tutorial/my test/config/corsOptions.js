//  {corsOptions} :  This file will include some of defined method required for [third-party middelware] , to called   and  used inside it's middelware method  assingment  the {server} file [for cleaning up the server file scripts  ]  :

// Define required methods for defining the [third-party middleware], to be used inside the {server.js}  : 
// [ corsOptions.js ]  inlclude main defined a middleware handler steps method [that calling the  imported  third-party library of the 'cors' ]  , by using 3 steps of definitnon :
// 1- Define the accepted request host [whiteList]       
// 2- Define  {corsOption} object  that including =>  [cors] configuraions properties  of handling the recieved request hosts + solve cors issue
// 3- Define the main middleware method of [third-party] type , by calling the imported {cors} as an imported  method with assigning the upper defined object {corsOptions} as its  paramter
// -----------------------------------------------------------

// 1] Define a [whitelist] array of the accepted hosts to be handled as allowed to access to the our backend [your website  , your localhost ,  the virtual custom server - such as the react -  ]   : 
const whiteList = [
  'https://www.yourdomain.com',
  'http://localhost:3500',
  'http://127.0.0.1:5500'
];


// 2] Define a object of {cors} configutration properties to handle the [whitelist] array to be able to access to the our backend] : 
const corsOptions = {
  // a- The first property to handle the comming host , through a anonymous function    : 
  origin: (origin, callback) => {
    // Create a condition of the recived origin value (host sender request) :
    if (whiteList.indexOf(origin) !== -1 || !origin) {  // if the comming request host  IS  existed in  previous defined list of the accepted host  OR the no request host came at all ]
      callback(null, true);
    } else {
      callback(new Error('Not allowed by Cors '));
    }
  },
  // b- the second property of cors object of the hanlding the received request :     
  optionSuccessStatus: 200
}

// ------------------------------------------------------------------------

// 3] exporting the upper defined   object  {corsOptions}   to be used inside the {server.js}  within the [third-party middleware]   definition :
module.exports = corsOptions;







