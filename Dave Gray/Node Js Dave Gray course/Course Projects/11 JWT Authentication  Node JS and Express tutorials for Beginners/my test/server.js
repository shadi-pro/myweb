
// lesson 10 :  Re-factoring Continue Building a [Node server]  using the [express] framework  +  using the [middleware]  + organazied  [MVC] including the next types   :

  // First : Middleware Section  =>   
    // I] [Custom  Middleware] =>  
      // 1-  {app.use()}  -> define a custom middleware of calling a ouside defined event of [ {logger}  : logging  entries inside the assigned file  within event method ] 
      // 2-  {app.use()}  -> define a custom middleware of calling outside defined event of [ {errorHandler} : logging errror entieds insdie teh assinged file within the event method 
      
    
    // II] [Third-party middleware {cors}]  => 
      // Using the imported file of [ corsOptions.js ] that inlcluding  main  defined a middleware handler method [that calling the  imported  third-party library of the 'cors' ]  , by using 3 steps of definitnon :
        // 1- Define the accepted request host [whiteList]       
        // 2- Define  {corsOption} object  that including =>  [cors] configuraions properties  of handling the recieved request hosts + solve cors issue
        // 3- Define the main middleware method of [third-party] type , by calling the imported {cors} as an imported  method with assigning the upper defined object {corsOptions} as its  paramter
        // 4- Define the route of middleware of protection [ authenticatoin verfiying] 

    // III] [Built-in Middleware] =>  that used in the previous lesson ( methods used   ) : 
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

    // b- import the external defined {third-party middleware} method {corsOptions} =>  to be able use it here   :  
    const corsOptions = require('./config/corsOptions') ;      //  including the new modified path (according to the MVC )         


  // 4] Required Importing of [Events defined Custom middleware] from external files :   
    // a)  Importing {logger} defined and exported function from the {logEvents.js} file to be used here inside express method - instead of define the custom middleware here  -  :
    const { logger } = require('./middleware/logEvents');

    // b) Importing {errorHandler Errorlog event } defined and exported function from the {errorHandler.js} file to be used  here [inside express method] - instead of define the custom middleware here    -  :
    const errorHandler = require('./middleware/errorHandler');

  // c) Importing {verifyJWT} the middleware file to be used here for protecting routes [   we will use it for access {employees route} - but not for {root} {auth} , {register} routes - ] :
    const verifyJWT = require('./middleware/verifyJWT') ;

  
    // d) Importing {cookiesParser}  library from the node core modlue   :
    const  cookiesParser = require('cookie-parser') ;


    // e) Importing defined middleware of  {credentials}   :
    const   credentials  = require('./middleware/credentials') ;

//  -------------------------------------------------------------
//  -------------------------------------------------------------

//  B] [Express Server public configuration definitions processes steps] section :

    // 1] Define the { Port(s) } to be used for connecting with the [localhost] OR with other custom node server {3500} :
    const PORT = process.env.PORT || 3500;

    // 2] Define the {app} as extracted variable from the defined express  [instead of the {server} defined variable ]  :
    const app = express();

// --------------------------------------------------------------------------
// --------------------------------------------------------------------------

// C] Assign the imported {Events Handlers methods} of different middlewares types [custom  +  third-party]  : 

  // I] [Custom Middleware] type :    
    //  I]  / 1] Calling the Defined and imported [Custom Middleware {Logger} ]  as the return of the express defined method of {app.use()}   => 
    app.use(logger);
    // --------------------------------------
  

  //  I]  / 2] Calling the Defined and imported [  Middleware {credentials } ]  as the return of the express defined method of {app.use()}  [[  before calling the  corsOptions    ]]   => 
    app.use( credentials );
  // --------------------------------------

  // II] [ Third-party Middleware] type to handle the {{request host}} and solve the cors issue , by using the next (3) steps :   
    //  1] Define the main middleware method of [third-party] type , by calling the imported {cors} as an imported  method with assigning the external defined object {corsOptions} as its paramter (according MVC) :   
    app.use(  cors(corsOptions) ) ;     //  [ {cors}  => refers to the cross origin resource sharing ]

  // --------------------------------------

  // III] Define [Built-in Middleware] Type  :   
    // III] /  1] Define public express  methods :  
      // a- Built-in middleware to  handle urlencoded from data  [ content-type : application/x-www-form-urlnccoded ] :
      app.use(express.urlencoded({ extended: false }));
      
      //  b- Built-in middleware to handle json data :
      app.use(express.json());

      // c- Define a [custom middleware] for the [cookies] : 
      app.use(cookiesParser()) ;

      // d- Define the method of reading files from  [public] folder's  to be accessible for this [main root route]   in the project server  [extrated from the express] - within  allocating it to the main route - :
      app.use( '/' , express.static(path.join(__dirname, '/public')));


      //   this  next method has been [canceled ]due to [removing the 'subdir' subdirectory] : 
      // app.use( '/subdir' , express.static(path.join(__dirname, '/public')));
 
  // -----------------------------------  
  
  // D] Calling main imported Routes's  related Defined crud opts +  handling return  -  (according to the {mvc} )  => by Importing following :
     // 1-  [main Default Route  + Display return  ] method =>  from : [routes/root.js]   
     // 2-  [Api Routes + CRUD operations handlers methods ] => from : [routes/api/employees.js]   
     // 3-  [Auth Route + operations authentciation handler method ]   => from : [routes/auth.js]   
     // 4-  [Registration Route  + operations Registratoin  handler method  ]   => from : [routes/register.js]   
  
    //  1- Assign [Default Route] of the {'/'} : Define main index/home route + handling return , by calling the  main source of definition 'routes/root'  file :   
      app.use('/' , require('./routes/root') ) ;
      
      
    //  2- Assign [Default Route] of the {'/register'} : Define  sub route of the [registration]  of posting crud opt  of creating a new user , by calling the  main source of definition 'routes/register.js'  file :   
      app.use('/register' , require('./routes/register') ) ;
      

    //  3- Assign [Default Route] of the {'/auth'} : Define  sub route of the [Authentication] of posting crud opt of access the logged in a user , by calling the  main source of definition 'routes/auth.js'  file :   
      app.use('/auth' , require('./routes/auth') ) ;
    

    //  4- Assign [Default Route] of the {'/refresh'} : Define sub route  that realted [ Refresh Token] of geting crud opt of access the logged in a user  :   
      app.use('/refresh' , require('./routes/refresh') ) ;
    
    //  5- Assign [Default  Route] of the {'/logout'} : Define sub route that realted [ logout ] of gettign the new   :   
      app.use('/logout' , require('./routes/logout') ) ;
    

    //  6- Assign [verifyJWT] the (protector route) via protection middleware [- according to the second {public method}  -] before the desired route to be protected :    
      app.use(verifyJWT) ; // any thing after this line will use the verification of the JWT , but before will NOT use this protection  ]         


    //  7- Assign [Api Routes] of the {'/employees'} + routes's CRUD opts (by calling the  main source of definition 'routes/api/employees'  file  )    :    
      app.use('/employees' , require('./routes/api/employees') ) ;  
  // -----------------------------------

    //  III] / e-  Define the [route of non-defined requested route value (after all upper defined routes  )] with using the [app.use()] of '*' and followed by any value => and display the inner 404 error page {404.html} incase of any No existed path is written  =>
      // by using the {app.all()} that used more for routing error due accepting all of http methods , and better than the other express  methods  as following   :
      // -  app.use() -> used for middleware definition , and not accepting the rejects 
      // -  app.all() -> used more for routing   with provides more features , such as : [accept all of 'http' methods ] 
      app.all('*', (req, res) => {
        // assign the current response with error code :
        res.status(404);

        // define a condition of the returned extension of html  :    
        if (req.accepts('html')) {
          res.sendFile(path.join(__dirname, 'views', '404.html')); // we need to use both the method of {statusCode} & {sendFile} in a chained to make the error page is not as [200]  

        } else if (req.accepts('json')) {
          res.json({ "error": "404 is not found! " }); // [Send a json error if error is type of json]    

        } else {
          res.type('txt').send('404 is not found! '); // Send an error if error is any type else       
        }
      });

  //  --------------------------------------------------------------------------

  //  I] [Custom Middleware] type  / 2] Define [Custom middleware method of Error Event log handler] by express method of calling the defined and imported middleware method :
  app.use(errorHandler);  

//  --------------------------------------------------------------------------
//  --------------------------------------------------------------------------

// D] Launching the [Listen] process on the defined variable of server {app} [to be able to listen its request] :
   app.listen(PORT, () => console.log(`Server running on port : ${PORT} `)) 

// -------------------------------------------------------------------------
// -------------------------------------------------------------------------
