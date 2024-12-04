// lesson 6 :  Building  a [Node server]  +   using the [express] framework     :

// This is the main initialized file using the [node server] , and lncluding using  the main definition of the node events :

 // A] Importing Section  :
  // 1] Importings required for creating  [Node Web Server] using the [express] framework   :   
     
    // a-  importing the {express} custom class from the  [node custom module] :    
    const express  = require('express') ;
    
    // b-  importing the {path} class from the  [node core common module]     :    
    const path = require('path') ;
    
     
  //  -------------------------------------------------------------
  //  -------------------------------------------------------------
 
//  B] [Express Server configuration processes steps] section :
  
  // 1] Define the { Port(s) } to be used for connecting with the [localhost] OR with other custom node server {3500} :
   const PORT = process.env.PORT || 3500 ;

  // 2] Define the {app} as extracted variable from the defined express  [instead of the   {server} defined variable ]  :
   const app =  express() ;


  // 3] Define the several  routes using the {get} method on the express +  assign an annonomous function of the reqiured method => [instead of define {server} variable in default node ]  :

    // a- Define the main route of the [index page : '/'] using the {get} method on the express +  assign an annonomous function of the reqiured method => [instead of define {server} variable in default node ]  :
    app.get('/'  , (req , res)  => {
      // 1- [sending a dare testing text ]  => this message  will be dispalyed at the page : 
      // res.send('welcome to the express web server !') ;

      // 2- [sending a file from the [views] folder of the server]  =>  this file  will be displayed the current req url , by using several methods    : 
        // 1- basic  method syntax :  res.sendFile('./views/file.ext' , { root : 'main path value  of the file  root :  [__dirname] } ) ;  
        // res.sendFile('./views/index.html' , {root : __dirname }  ) ;
        
        // 2- node [path join()] method  syntax :  res.sendFile(path.join(__dirname,   'views' , 'filename.extension' ) ;  
        res.sendFile(path.join( __dirname , 'views' , 'index.html')  ) ;
    });
  
  
    // b-  Define the main route of the [ new-page : '/new-page.html'] using the {get} method on the express +  assign an annonomous function of the reqiured method => [instead of define {server} variable in default node ]  :
    app.get('/new-page.html',  (req , res ) => {
      res.sendFile( path.join(__dirname , 'views' ,  'new-page.html' ) ) ;
    }) ;


 
    // im here >>>>>>>>>>>>>>> [#11:23] 
//  --------------------------------------------------------------------------


  // ] Launching the [Listen] process on the defined variable of server {app} [to be able to listen its request] :
   app.listen(PORT , () => console.log(`Server running on port : ${PORT} `)  )


 // -------------------------------------------------------------------------
 // -------------------------------------------------------------------------
 