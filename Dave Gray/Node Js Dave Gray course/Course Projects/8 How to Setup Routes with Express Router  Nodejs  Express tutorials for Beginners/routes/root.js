//   # [11:26] =>

// This file including =>  setting up the [main route] of [views/]  files :
  // using express method to define a route inside the main root  of  [views/] main file :  

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

  // 1- [First Route] {views/index.html} file :
// a- Define the main route of the [index page : '^/$' || 'index.html' ] using the {get} method on the express +  assign an annonomous function of the reqiured method => [instead of define {server} variable in default node ]  :
    router.get('^/$|index(.html)?', (req, res) => {
      // 1- [sending a dare testing text ]  => this message  will be dispalyed at the page : 
      // res.send('welcome to the express web server !') ;

      // 2- [sending a file from the [views] folder of the server]  =>  this file  will be displayed the current req url , by using several methods    : 

      // a) basic  method syntax :  res.sendFile('./views/file.ext' , { root : 'main path value  of the file  root :  [__dirname] } ) ;  
      // res.sendFile('./views/index.html', { root: __dirname });

      // b) node [path join()] method  syntax :  res.sendFile(path.join(__dirname,   'views' , 'filename.extension' ) ;  
      res.sendFile(path.join( __dirname , '..' , 'views' , 'index.html')  ) ;
    });
  // -----------------------------------

  // 2- [Second Route] {views/new-page.html} file :
    // b-  Define the another route of the [ new-page : '/new-page.html'] using the {get} method on the express +  assign an annonymous function of the reqiured method => [instead of define {server} variable in default node ]  :
    router.get('/new-page.html', (req, res) => {
      res.sendFile(path.join(__dirname,  '..' ,   'views', 'new-page.html'));
    });
  // -----------------------------------

  // 3- [Third Route] {views/old-page.html} file :
    // c-  Define the  another route with a re-directing into another page  :
    router.get('/old-page(.html)?', (req, res) => {
      // we need to assign the redirecting code of the '301' , because the defualt assinged code is the  '302' which will  not display the requested redirected page   
      res.redirect(301, '/new-page.html');
    });
  // -----------------------------------
  // ---------------------------------------------------
  // ---------------------------------------------------

  // C] Exporting  the defined {router}  :  
  module.exports = router ; 

   // ------------------------------------------- 


 



