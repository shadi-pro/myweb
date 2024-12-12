// lesson 7 :  Continue Building a [Node server]  using the [express] framework  +  using the [middleware]  , including the next types   :
// I- Built-in middleware =>  that used in the previous lesson : 
  // 1- [app.use] ->            
  // 2- [app.all] ->                 
  // 3- [res.get] ->                 
// II- Custom  middleware =>  that  will be used ins this lesson            
// III- Third-party {cors}  => use it define a middleware  handler method [that calling  a defined and  imported  error event  ]
// ---------------------------------------------

// This is the main initialized file using the [node server] , and lncluding using  the main definition of the node events :

// A] Importing Section  :

//  1]  Required importings for [node  web server] : 
  //  importing the {path} class from the  [node core common module]     :    
  const path = require('path');


// 2] Required  Importings for creating [Node Web Server] using the [express] framework   :   
  //  importing the {express} custom class from the  [node custom module] :    
  const express = require('express');


// 3] Required  Importings for Middlleware of the [third-party] type :   
  //  importing the {cors} library from the  [cors] requried to use the [third-party middleware] type   :    
  const cors = require('cors') ;   // => [ by imprting and usgin  third party middleware => we iwill solve the problem to the [cors that displayed in the browser devtool  ] when request come from the oustsiders host ] 


// 4] Required Importing of the usedd Events    :   
  //  a)  Importing {logger} defined and exported function from the {logEvents.js} file to be used  here inside express method - instead of defien the custommiddleware here  -  :
  const { logger } = require('./middleware/logEvents');

  // b) Importing {errorHandler} defined and exported function from the {errorHandler.js} file to be used  here [inside express method] - instead of define the custommiddleware here    -  :
  const errorHandler = require('./middleware/errorHandler');

  // c) Importing {logEvents} defiend and exported function from  the {logEvents.js} file to be here int  the [server.js] => not need for now    :
  // const logEvents = require('./middleware/logEvents') ;

//  -------------------------------------------------------------
//  -------------------------------------------------------------

//  B] [Express Server public configuration processes steps] section :

  // 1] Define the { Port(s) } to be used for connecting with the [localhost] OR with other custom node server {3500} :
  const PORT = process.env.PORT || 3500;

  // 2] Define the {app} as extracted variable from the defined express  [instead of the   {server} defined variable ]  :
  const app = express();

// --------------------------------------------------------------------------
// --------------------------------------------------------------------------

// C] Define {Handlers methods} using different middlewares types   : 

// I] [Custom Middleware] type   :   
  // 1] Calling the Defined and imported [Custom Middleware {Custom Logger} ]  as the return of the express defined method of {app.use()}   => 
  app.use(logger);
// --------------------------------------

// II] [ Third-party  Middleware] type to handlwe the reqjest host and solve the cors issue    :   
  // A] Define a [whitelist] array of the accepted hosts to be handled as allowed to access to the our backend [your website  , your localhost ,  the virtual custom server - such as the react -  ]   : 
  const whiteList = ['https://www.yourdomain.com', 'http://localhost:3500', 'http://127.0.0.1:5500'];


  // B] Define a object that using {cors} properties to handle the [whitelist] array   to be able to access to the our backend ]  : 
  const corsOptions = {
    // The firt property to handle the comming host , through a anonymous function    : 
    origin: (origin, callback) => {
      // Create a condition of the recived origin value (host sender request) :
      if (whiteList.indexOf(origin) !== -1 || !origin) {  // if the comming request host  IS  existed in  previous defined list of the accepted host  OR the no request host came at all ]
        callback(null, true);
      } else {
        callback(new Error('Not allowed by Cors '));
      }
    },
    // the second property of cors objerct of the halding the received request :     
    optionSeccessStatus: 200
  }

  // C]  Define the main middleware method of [third-party] type , by calling the imported {cors} as an imported  method with assigning the upper defined object {corsOptions} as its  paramter  :   
  app.use(  cors(corsOptions) ) ;     // [{cors}  => refers to the crosss oringin resourse sharing  ]

// --------------------------------------


// III] Define [Built-in Middleware] Type  :   
//  1] Define public methods :  
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

// 2]  Define the method the public folder's files reader to be accesable to  all other files in the project server  [extrated from the express] :
  app.use(express.static(path.join(__dirname, '/public')));

// 3] Define the several routes using the {get} method on the express +  assign an annonymous function of the reqiured method => [instead of define {server} variable in default node ]  :

  // a- Define the main route of the [index page : '^/$' || 'index.html' ] using the {get} method on the express +  assign an annonomous function of the reqiured method => [instead of define {server} variable in default node ]  :
  app.get('^/$|index(.html)?', (req, res) => {
    // 1- [sending a dare testing text ]  => this message  will be dispalyed at the page : 
    // res.send('welcome to the express web server !') ;

    // 2- [sending a file from the [views] folder of the server]  =>  this file  will be displayed the current req url , by using several methods    : 

    // a) basic  method syntax :  res.sendFile('./views/file.ext' , { root : 'main path value  of the file  root :  [__dirname] } ) ;  
    res.sendFile('./views/index.html', { root: __dirname });

    // b) node [path join()] method  syntax :  res.sendFile(path.join(__dirname,   'views' , 'filename.extension' ) ;  
    // res.sendFile(path.join( __dirname , 'views' , 'index.html')  ) ;
  });
  // -----------------------------------

  // b-  Define the another route of the [ new-page : '/new-page.html'] using the {get} method on the express +  assign an annonymous function of the reqiured method => [instead of define {server} variable in default node ]  :
  app.get('/new-page.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'new-page.html'));
  });
  // -----------------------------------

  // c-  Define the  another route with a re-directing into another page  :
  app.get('/old-page(.html)?', (req, res) => {
    res.redirect(301, '/new-page.html'); // we need to assign the redirecting code of the '301' , because the defualt assinged code is the  '302' which will  not display the requested redirected page   
  });
  // -----------------------------------

  // d- Define Routes  with  returned  chained functions => by using  (2) methods    : 

    // [first Method ]  : [return default built-in paramters ] method  :
    // d/1 Define a custom Route handlers of reaching a  [hello || hello.html] => [using the first method ]  :
    app.get('/hello(.html)?', (req, res, next) => {
      console.log('Attempt to reach a hello.html inner page ');
      next()   // calling the next chained function 
    }, (req, res) => {
      res.send('hello world !');
    });
    // --------------------------------------
    
    // [second Method] : [return  array of defiend  functions parameters ]    :  
    // d/2 Define a custom Route handlers of calling (3)  seperated defined  methods  => [using the second method ]  :
    //  Define the first seperated function :
    const one = (res, req, next) => {
      console.log('this the first seperated function  ');
      next();
    }

    // Define the second seperated function :
    const two = (res, req, next) => {
      console.log('this the second seperated function  ');
      next();
    }

    // Define the third seperated function :
    const three = (res, req) => {
      console.log('this the third seperated function  ');
      // res.send('Finshed !') ;
    }

    // Define the main router of  ['chain' with optional followed after by '.html' ] that chaining all of previous (3) functions  as array parameter  :  
    app.get('/chain(.html)?', [one, two, three]);

// -----------------------------------

  // e- Define the last route with using the [app.use()]  of  '*' and followed by any value => and display the inner 404 error page {404.html} incase of any No existed path is written  =>
    // by using the {app.all()} that more for routing error due accepting all of http methods :
    // app.use() -> used for middleware definition , and not accepting the rejects          
    // app.all() -> used more for routing , and accept all of 'http' methods  
    // app.get('/*',  (req , res ) => {
    app.all('*', (req, res) => {
      res.status(404);

      // define a condition  of the returned extesion of html  :    
      if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html')); // we need to use both the method of {statusCode} & {sendFile} in a chained to make the error page is not as [200]  

      } else if (req.accepts('json')) {
        res.json({ error: "404 is not found! " }); // Send a json error if   error is type of json    

      } else {
        res.type('txt').send('404 is not found! '); // Send an error if error is any type else       
      }

    });

//  --------------------------------------------------------------------------

//  Define [Custom middleware method of Error handler] by express method of calling the defined and imported  :
app.use(errorHandler);

//  --------------------------------------------------------------------------
//  --------------------------------------------------------------------------

// ] Launching the [Listen] process on the defined variable of server {app} [to be able to listen its request] :
app.listen(PORT, () => console.log(`Server running on port : ${PORT} `))

// -------------------------------------------------------------------------
// -------------------------------------------------------------------------