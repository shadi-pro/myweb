// lesson 7 :  Continue Building a [Node server]  using the [express] framework  +  using the [middleware]  , including the next types   :
  // I- Built-in middleware =>  that used in the previous lesson            
  // II- Custom  middleware =>  that  will be used ins this lesson            
  // III- Third-party  middleware =>  ...            
// ---------------------------------------------


// This is the main initialized file using the [node server] , and lncluding using  the main definition of the node events :

 // A] Importing Section  :
  // [] Importings required for creating [Node Web Server] using the [express] framework   :   
     
    // 1]  importing the {express} custom class from the  [node custom module] :    
    const express  = require('express') ;
    
    // 2] importing the {path} class from the  [node core common module]     :    
    const path = require('path') ;

    // 3] importing the {cors} library from the  [cors] requried to use the [third-party middleware] type       :    
    // const cors = require('cors') ;

  // 4] Importing {logger} defined and exported function from the {logEvents.js} file to be used  here inside express method - instead of defien the custommiddleware here    -  :
    const {logger} = require('./middleware/logEvents') ;
  
   // 4] Importing {logEvents} defiend and exported function from  the {logEvents.js} file to be here int  the [server.js]     :
    // const logEvents = require('./middleware/logEvents') ;
 

 
  //    -------------------------------------------------------------
  //  -------------------------------------------------------------
 
//  B] [Express Server public configuration processes steps] section :
  
  // 1] Define the { Port(s) } to be used for connecting with the [localhost] OR with other custom node server {3500} :
   const PORT = process.env.PORT || 3500 ;

  // 2] Define the {app} as extracted variable from the defined express  [instead of the   {server} defined variable ]  :
   const app =  express() ;

  // --------------------------------------------------------------------------
  // --------------------------------------------------------------------------
  
  // C] Define {Handlers methods} using different  types of the middlewares  : 
    
  // I] [Custom Middleware] type   :   
  // 1] Calling the Defined and imported [Custom Middleware {Custom Logger} ]  as the return of the express defined method of {app.use()}   => 
    app.use( logger ) ;


// --------------------------------------
  // II] Define [Built-in Middleware] Type  :   
  //  1] Define public methods :  
  app.use(express.urlencoded({ extended : false })) ;
  app.use(express.json() ) ;
 
  // 2]  Define the method the public folder's files reader to be accesable to  all other files in the project server  [extrated form the express] :
  app.use(express.static(path.join(__dirname , '/public')) ) ;

  // 3] Define the several routes using the {get} method on the express +  assign an annonymous function of the reqiured method => [instead of define {server} variable in default node ]  :

    // a- Define the main route of the [index page : '^/$' || 'index.html' ] using the {get} method on the express +  assign an annonomous function of the reqiured method => [instead of define {server} variable in default node ]  :
    app.get('^/$|index(.html)?'  , (req , res)  => {
      // 1- [sending a dare testing text ]  => this message  will be dispalyed at the page : 
      // res.send('welcome to the express web server !') ;

      // 2- [sending a file from the [views] folder of the server]  =>  this file  will be displayed the current req url , by using several methods    : 
        
        // a) basic  method syntax :  res.sendFile('./views/file.ext' , { root : 'main path value  of the file  root :  [__dirname] } ) ;  
        res.sendFile('./views/index.html' , {root : __dirname }  ) ;
        
        // b) node [path join()] method  syntax :  res.sendFile(path.join(__dirname,   'views' , 'filename.extension' ) ;  
        // res.sendFile(path.join( __dirname , 'views' , 'index.html')  ) ;
    });
    // -----------------------------------

    // b-  Define the another route of the [ new-page : '/new-page.html'] using the {get} method on the express +  assign an annonymous function of the reqiured method => [instead of define {server} variable in default node ]  :
    app.get('/new-page.html',  (req , res ) => {
      res.sendFile( path.join(__dirname , 'views' ,  'new-page.html' ) ) ;
    }) ;
    // -----------------------------------

    // c-  Define the  another route with a re-directing into another page  :
    app.get('/old-page(.html)?',  (req , res ) => {
      res.redirect( 301 , '/new-page.html' ) ; // we need to assign the redirecting code of the '301' , because the defualt assinged code is the  '302' which will  not display the requested redirected page   
    }) ;
    // -----------------------------------

    // d- Define Routes  with  returned  chained functions => by using  (2) methods    : 
      
    // [The first  method ]  : [return default built-in paramters ] method  :
    // d/1 Define a custom Route handlers of reaching a  [hello || hello.html] => [using the first method ]  :
      app.get( '/hello(.html)?' ,  (req , res , next) => {
        console.log('Attempt to reach a hello.html inner page ') ; 
        next()   // calling the next chained function 
      } , (req, res) => {
        res.send('hello world !');
      } );
 
    // second  method : [return  array of defiend  functions parameters ]    :  

      // d/2 Define a custom Route handlers of calling (3)  seperated defined  methods  => [using the second method ]  :
        //  Define the first seperated function :
        const one  = (res , req , next ) => {
          console.log('this the first seperated function  ') ;
          next() ;
         }
        
        // Define the second seperated function :
        const two  = (res , req , next ) => {
          console.log('this the second seperated function  ') ;
          next() ;
        }
        
        // Define the third seperated function :
        const three  = (res , req  ) => {
          console.log('this the third seperated function  ') ;
          // res.send('Finshed !') ;
        }

      // Define the main router of  ['chain' with optional followed after by '.html' ] that chaining all of previous (3) functions  as array parameter  :  
        app.get('/chain(.html)?' , [one, two, three] ) ;


    // -----------------------------------
    // e-  Define the last route with of  '/' and foolwoed by any value => and display the inner 404 error page {404.html} incase of any No existed path is written  :
    app.get('/*',  (req , res ) => {
      res.status(404).sendFile(path.join( __dirname , 'views', '404.html') ) ; // we need to use both the method of {statusCode} & {sendFile} in a chained to make the error page is not as [200]  
    }) ;  
  
  //  --------------------------------------------------------------------------

  // ] Launching the [Listen] process on the defined variable of server {app} [to be able to listen its request] :
   app.listen(PORT , () => console.log(`Server running on port : ${PORT} `)  )

 // -------------------------------------------------------------------------
 // -------------------------------------------------------------------------
 