
// This is the file responsible of the [registration] process => [post crud opteration ] : 

  // 1- deal with  the defind {model/users.js} datasource     
  // 2- requried the main defined functions and methods of the  [registaraion]  from  {controllers/registerController.js  }      
// ----------------------------------------

// A] Importing secton :   

  // 1- Import the express  :
    const express = require('express');

  // 2- Import the Router tool from express  :
    const router  = express.Router() ;

  // 3- Import the file  of  defiend registration function :
    const registerController   = require('../controllers/registerController')  ;  
// --------------------------------

// B] Route Definition  section : 
  // 1- Define Route of handling registeration process by using the [post Curd operation](due we are posting the new user into the DB - registration - ) of inner  defined handleNewUser from inside the imported file :
    router.post( '/' , registerController.handleNewUser) ;
//  --------------------------------
  
// C] Exporting the upper defined [router] :
 module.exports  = router ; 


