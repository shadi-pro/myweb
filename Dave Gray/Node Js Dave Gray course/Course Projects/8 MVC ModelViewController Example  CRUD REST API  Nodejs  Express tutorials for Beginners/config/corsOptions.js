//  {corsOptions} :  This file will include some of defined method required for  [third-party middelware] , and will be used in the {server} file [for cleaning up the server file scripts  ]    :

//   define required method for defining the [third-party middleware] , to be used inisde the {server.js}  : 

// 1] Define a [whitelist] array of the accepted hosts to be handled as allowed to access to the our backend [your website  , your localhost ,  the virtual custom server - such as the react -  ]   : 
const whiteList = [
  'https://www.yourdomain.com',
  'http://localhost:3500',
  'http://127.0.0.1:5500'
];


// 2] Define a object  of  {cors} configutration properties to handle the [whitelist] array   to be able to access to the our backend ]  : 
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
  // b- the second property of cors object of the halding the received request :     
  optionSuccessStatus: 200
}

// ------------------------------------------------------------------------

// 3] expoting the upper defined method  to be used insdie the {server.js}  within the [third-party middleware]   definition     :
module.exports = corsOptions;







