        
// Define main Routes according to the [MVC] pattern  , inlcuding  [index] home route here to be exported into the {server.js} file   :
 
//  A]  Importing section :   
const express = require('express') ;
const router  =  express.Router()  ;
const path  = require('path') ;
// --------------------------------------


// B] Define main routes +  handling return [according  to   using  MVC ] [instead of using the default method of  the  express  ]  : 
// Define the main page route of {index} [with using the regular expresssion ] :
router.get('^/$|/index(.html)?' , (req , res) => {
   res.sendFile(path.join(__dirname , '..'  , 'views' , 'index.html') ) ;
} ) ;
 
// Define the route of  the {new-page} (canceled) :
// router.get('/new-page(.html)?' , (req , res) => {
//    res.sendFile(path.join(__dirname , '..'  , 'views' , 'new-page.html') ) ;
// } ) ;

// Define the route of  the {old-page} [redierction] (canceled) :
// router.get('/old-page(.html)?' , (req , res) => {
//    res.redirect( 301 ,  '/new-page.html') ;    // assign the 301 instead of (302) by  the defualt  
// } ) ;

// ---------------------------------
// C] Export the router class  :
module.exports =  router ;

 