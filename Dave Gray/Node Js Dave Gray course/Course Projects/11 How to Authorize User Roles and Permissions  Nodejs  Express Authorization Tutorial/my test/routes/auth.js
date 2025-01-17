
// This is the file responsible of the [Authentication ] process  , by importing and   using the deifined related functions in the {autCotorlles.js} : 

  // 1- deal with the defind {model/users.js} datasource  
  // 2- required the main defined functions and methods of the  [authentication]  from  {controllers/authController.js  }      
// -----------------------------------------

// A] Importing secton :   

  // 1- Import the express  :
    const express = require('express');

  // 2- Import the Router tool from express  :
    const router  = express.Router() ;

  // 3- Import the file of defined Authentication function :
    const authController   = require('../controllers/authController')  ; 
// --------------------------------

// B] Route Definition section : 
  // 1- Define Route of handling registeration process by using the [post Curd operation](due we are posting the new user into the DB - registration - ) of inner  defined handleNewUser from inside the imported file :
    router.post( '/' , authController.handleLogin) ;
//  --------------------------------
  
// C] Exporting the upper defined [router] :
 module.exports  = router ; 

  






  




