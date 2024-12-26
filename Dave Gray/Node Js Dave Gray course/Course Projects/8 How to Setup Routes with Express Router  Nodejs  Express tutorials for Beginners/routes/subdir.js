// This file including =>  setting up the [inner route] of [views/subdir/] directory and all of inner Routes
   // using express method to define a route of [subdir] folder and all of inner files :  
 
// --------------------------------------------------
// --------------------------------------------------

// A]  Importings section :

  // 1- import the main [express server] core module :
    const express = require('express') ;

  // 2- import the main [ Router ] class extracted from the express :
    const router  = express.Router() ;

  // 3- import the main [ path ]  core module :
    const path  =  require('path') ;
// -----------------------------------------------
// -----------------------------------------------

//  B] Setting up the Routes of files inside {views/subdir/} directory  : 

  // 1- [First Route] {views/subdir/index.html} file :
    // Define the main route of the [index page : '^/$' || 'index.html' ] using the {get} method on the express +  assign an annonomous function of the reqiured method => [instead of define {server} variable in default node ]  :
    router.get('^/$|index(.html)?', (req, res) => {
      // [sending a file from the [views] folder of the server]  =>  this file  will be displayed the current req url , by using several methods    : 

        // a) basic  method syntax :  res.sendFile('./views/file.ext' , { root : 'main path value  of the file  root :  [__dirname] } ) ;  
        // res.sendFile('./views/index.html', { root: __dirname });

        // b) node [path join()] method  syntax :  res.sendFile(path.join(__dirname,   'views' , 'filename.extension' ) ;  
        res.sendFile(path.join( __dirname , '..', 'views' , 'subdir' , 'index.html')  ) ;
    });
    // ------------------------------------------------ 


  // 2- [Second Route]  {views/subdir/test.html} file :
    // Define the inner route of the [test page : 'test.html' ] using the {get} method on the express +  assign an annonymous function of the reqiured method   :
    router.get('/test(.html)?', (req, res) => {
      // [sending a file from the [views] folder of the server]  =>  this file  will be displayed the current req url , by using several methods    : 

        // a) basic  method syntax :  res.sendFile('./views/file.ext' , { root : 'main path value  of the file  root :  [__dirname] } ) ;  
        // res.sendFile('./views/index.html', { root: __dirname });

        // b) node [path join()] method  syntax :  res.sendFile(path.join(__dirname,   'views' , 'filename.extension' ) ;  
        res.sendFile(path.join( __dirname , '..', 'views' , 'subdir' , 'test.html')  ) ;
    });
   //  -------------------------------------------------
  
 
  // ------------------------------------------- 
  // ------------------------------------------- 
  // C] Exporting  the defined {router}  :  
  module.exports= router ; 

   // ------------------------------------------- 