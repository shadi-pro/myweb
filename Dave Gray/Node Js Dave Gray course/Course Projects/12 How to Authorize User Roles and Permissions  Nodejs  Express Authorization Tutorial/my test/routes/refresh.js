

//  This is a route for [refreshToken] by using the defiend {handleRefreshToken}    :    

//  ----------------------------------
  
// A] Importing secton :   
 
   // 1- Import the express  :
     const express = require('express');
 
   // 2- Import the Router tool from express  :
     const router  = express.Router() ; 
 
   // 3- Import the file of defined Authentication function :
     const refreshTokenController   = require('../controllers/refreshTokenController')  ; 
 // --------------------------------
 
 // B] Route Definition section : 
   // 1- Define Route of handling getting refresh Token process => by using the [get Curd operation](due we are getting the user [Refresh Token] that created via {handleRefreshToken()}  imported function from  -  {refershTokenController} file:
     router.get( '/' , refreshTokenController.handleRefreshToken ) ;
 //  --------------------------------
   
 // C] Exporting the upper defined [router] :
  module.exports  = router ; 
 
   
 
 
 
 
 
 
 