// lesson 8 :  Continue Building a [Node server]  using the [express] framework  +  using the [middleware]  + organazied  [MVC] including the next types   :

  // First : Middleware Section  =>   
    // I- [Custom  Middleware] =>  
      // 1-  {app.use()}  -> define a custom middleware of calling a ouside defined event of [ {logger}  : logging  entries inside the assigned file  within event method ] 
      // 2-  {app.use()}  -> define a custom middleware of calling outside defined event of [ {errorHandler} : logging errror entieds insdie teh assinged file within the event method 
      
    
    // II- [Third-party middleware {cors}]  => 
      // Using the imported file of [ corsOptions.js ] that inlcluding  main  defined a middleware handler method [that calling the  imported  third-party library of the 'cors' ]  , by using 3 steps of definitnon :
        // 1- Define the accepted request host [whiteList]       
        // 2- Define  {corsOption} object  that including =>  [cors] configuraions properties  of handling the recieved request hosts + solve cors issue
        // 3- Define the main middleware method of [third-party] type , by calling the imported {cors} as an imported  method with assigning the upper defined object {corsOptions} as its  paramter

    // III- [Built-in Middleware] =>  that used in the previous lesson : 
      // 1- {app.use}  -> Define the basic route of the express server                  
      // 2- {app.get}  -> Define several main routes of the server                   
      // 3- {app.all}  -> Define the error route as the last route                   


  // -------------------------------------------------------------------
  // -------------------------------------------------------------------

  // Second : Routes definition  Section [according to the {MVC} design pattern ]  =>   
    //  I/ Main [MVC] methods used for organizing Routes  =>
      // 1- Method of the main index route {'/'}  + handling return   => imported  from  the [routes/root.js]            
      // 2- Method of the inner route {'/employees'} +  crud operation method  =>  imported from  the [routes/api/employees.js]            

// ---------------------------------------------

// This is the main initialized file using the [node server] , and lncluding using  the main definition of the node events :

// A] Importing Section  :

  // 1]  Required importings for [node  web server] : 
    //  importing the {path} class from the  [node core common module]     :    
    const path = require('path');


  // 2] Required  Importings for creating [Node Web Server] using the [express] framework   :   
    //  importing the {express} custom class from the  [node custom module] :    
    const express = require('express');


  // 3] Required  Importings for Middlleware of the [third-party] type :       
    // a- Exracting the {cors} from [cors] library that requried for using the [third-party middleware] type   :    
    const cors = require('cors') ;   // => [ by importing and using  third party middleware => we will solve the problem to the [cors that displayed in the browser devtool  ] when request come from the oustsiders host ] 

    // b- import the   external  defined  third-party middleware method {corsOptions} =>  to be able use it here   :  
    const corsOptions = require('./config/corsOptions') ;   


  // 4] Required Importing of [Events defined Custom middleware] from outside files    :   
    // a)  Importing {logger} defined and exported function from the {logEvents.js} file to be used  here inside express method - instead of define the custom middleware here  -  :
    const { logger } = require('./middleware/logEvents');

    // b) Importing {errorHandler Errorlog event } defined and exported function from the {errorHandler.js} file to be used  here [inside express method] - instead of define the custom middleware here    -  :
    const errorHandler = require('./middleware/errorHandler');

    // c) Importing {logEvents} defiend and exported function from  the {logEvents.js} file to be here int  the [server.js] => not need for now    :
    // const logEvents = require('./middleware/logEvents') ;

//  -------------------------------------------------------------
//  -------------------------------------------------------------

//  B] [Express Server public configuration definitions processes steps] section :

    // 1] Define the { Port(s) } to be used for connecting with the [localhost] OR with other custom node server {3500} :
    const PORT = process.env.PORT || 3500;

    // 2] Define the {app} as extracted variable from the defined express  [instead of the   {server} defined variable ]  :
    const app = express();

// --------------------------------------------------------------------------
// --------------------------------------------------------------------------

// C] Define {Events Handlers methods} using different middlewares types   : 

  // I] [Custom Middleware] type :    
    //  I]  / 1] Calling the Defined and imported [Custom Middleware {Logger} ]  as the return of the express defined method of {app.use()}   => 
    app.use(logger);
  // --------------------------------------

  // II] [ Third-party Middleware] type to handle the {{request host}} and solve the cors issue , by using the next (3) steps :   
    //  1] Define the main middleware method of [third-party] type , by calling the imported {cors} as an imported  method with assigning the upper defined object {corsOptions} as its  paramter :   
    app.use(  cors(corsOptions) ) ;     // [{cors}  => refers to the cross origin resourse sharing  ]

  // --------------------------------------

  // III] Define [Built-in Middleware] Type  :   
    // III] /  1] Define public methods :  
      // a- Built-in middleware to  handle urlencoded form data  [ content-type : application/x-www-form-urlnccoded ] :
      app.use(express.urlencoded({ extended: false }));
      
      //  b- Built-in middleware to handle json data :
      app.use(express.json());


      // c-  Define the method the public folder's files reader to be accesable to  all other files in the project server  [extrated from the express] :
      app.use( '/' , express.static(path.join(__dirname, '/public')));

      // app.use( '/subdir' , express.static(path.join(__dirname, '/public')));
    // -----------------------------------------------------


    // III]  / 3] Define the several routes using the {get} method on the express +  assign an annonymous function of the reqiured method => [instead of define {server} variable in default node ]  :
      // a- Define the main Route (according to the default method ) of the [index page : '^/$' || 'index.html' ] using the {get} method on the express +  assign an annonomous function of the reqiured method => [instead of define {server} variable in default node ]  :
       //  => [this method of main route defininion has canceld by  being replaced with  {root.js} according to [mvc] patern methodology    ] 
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
      // app.get('/new-page.html', (req, res) => {
      //   res.sendFile(path.join(__dirname, 'views', 'new-page.html'));
      // });
    // -----------------------------------

      // c-  Define the  another route with a re-directing into another page  :
      // app.get('/old-page(.html)?', (req, res) => {
      //   // we need to assign the redirecting code of the '301' , because the defualt assinged code is the  '302' which will  not display the requested redirected page   
      //   res.redirect(301, '/new-page.html');
      // });
    // -----------------------------------

    // d- Define Routes  with  returned  chained functions => by using  (2) methods    : 

      // [first Method ]  : [return default built-in paramters ] method  :
      // d/1 Define a custom  testing  Route handlers of reaching a  [hello || hello.html] => [using the first method ]  :
      // app.get('/hello(.html)?', (req, res, next) => {
      //   console.log('Attempt to reach a hello.html inner page ');
      //   next()   // calling the next chained function 
      // }, (req, res) => {
      //   res.send('hello world !');
      // });
      // --------------------------------------
      
      // [second Method] : [return  array of defiend  functions parameters ]    :  
      // d/2 Define a custom Route handlers of calling (3)  seperated defined  methods  => [using the second method ]  :
      //  Define the first seperated function :
      // const one = (res, req, next) => {
      //   console.log('this the first seperated function  ');
      //   next();
      // }

      // Define the second seperated function :
      // const two = (res, req, next) => {
      //   console.log('this the second seperated function  ');
      //   next();
      // }

      // Define the third seperated function :
      // const three = (res, req) => {
      //   console.log('this the third seperated function  ');
      //   // res.send('Finshed !') ;
      // }

      // Define the main router of  ['chain' with optional followed after by '.html' ] that chaining all of previous (3) functions  as array parameter  :  
      // app.get('/chain(.html)?', [one, two, three]);

  // -----------------------------------  
  
  // D] Defined main Routes + its crud opts +  handling return  -  (according to the {mvc} )  => by  Importing both :
     // 1-  [main Routes  + return  ] method =>  from : [routes/root.js]   
     // 2-  [Routes CRUD operations handlers methods  ]   => from : [routes/api/employees.js]   
  
    //  1- Route of the {'/'} : Define main index/home route + handling return , by importing it from  the 'routes/root' folder : //  
      app.use('/' , require('./routes/root') ) ;
      
    //  2- Routes of the {'/employees'} +  routes's CRUD opts    :    
      app.use('/employees' , require('./routes/api/employees') ) ;
    
    //  third route [canceled route ]  of subdir  :
    // app.use('/subdir' , require('./routes/subdir') ) ;  -> [ canceled ]
      
  // -----------------------------------

    //  III] / e-  Define the [last route of undefiend requested route value  ] with using the [app.use()] of '*' and followed by any value => and display the inner 404 error page {404.html} incase of any No existed path is written  =>
      // by using the {app.all()} that more for routing error due accepting all of http methods :
      // app.use() -> used for middleware definition , and not accepting the rejects          
      // app.all() -> used more for routing   with provides more features , such as : [accept all of 'http' methods ] 
      app.all('*', (req, res) => {
        // assing the current response with error code   :
        res.status(404);

        // define a condition of the returned extension of html  :    
        if (req.accepts('html')) {
          res.sendFile(path.join(__dirname, 'views', '404.html')); // we need to use both the method of {statusCode} & {sendFile} in a chained to make the error page is not as [200]  

        } else if (req.accepts('json')) {
          res.json({ error: "404 is not found! " }); // Send a json error if   error is type of json    

        } else {
          res.type('txt').send('404 is not found! '); // Send an error if error is any type else       
        }
      });

  //  --------------------------------------------------------------------------

  //  I] [Custom Middleware] type  / 2] Define [Custom middleware method of Error Event log handler] by express method of calling the defined and imported  :
  app.use(errorHandler);  

//  --------------------------------------------------------------------------
//  --------------------------------------------------------------------------

// D] Launching the [Listen] process on the defined variable of server {app} [to be able to listen its request] :
   app.listen(PORT, () => console.log(`Server running on port : ${PORT} `)) 

// -------------------------------------------------------------------------
// -------------------------------------------------------------------------
