// Define the main routes here to be exported into the server file :
 
//  A]  Importing section :   
const express = require('express') ;
const router  =  express.Router()  ;
const path  = require('path') ;
// --------------------------------------


// B] Define main routes : 
// Define the main page route of {index}    :
router.get('^/$|index(.html)?' , (req , res) => {
   res.sendFile(path.join(__dirname , '..'  , 'views' , 'index.html') ) ;
} ) ;
 
// Define the route of  the {new-page} :
// router.get('/new-page(.html)?' , (req , res) => {
//    res.sendFile(path.join(__dirname , '..'  , 'views' , 'new-page.html') ) ;
// } ) ;

// Define the route of  the {old-page} [redierction ] :
// router.get('/old-page(.html)?' , (req , res) => {
//    res.redirect( 301 ,  '/new-page.html') ;    // assign the 301 instead of (302) by  the defualt  
// } ) ;

// ---------------------------------
// C] Export the defined routes :
module.exports =  router ;


