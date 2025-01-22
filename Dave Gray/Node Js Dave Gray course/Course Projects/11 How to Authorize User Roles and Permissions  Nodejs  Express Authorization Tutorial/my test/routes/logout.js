
//  [logout route] file :   
    //   -  define a defualt route usintg the get crud + calling the [logout] controllering file   

// -------------------------------------------------



// I]  Importing section    :
const express  = require ('express')   ;

const router   =  express.Router()    ;

const  logoutController  =  require ('../controllers/logoutController')    ;
// ----------------------------------


// II]    Definition of the main route  section :
  // define a router with using the (get) crud opt  :   
  router.get('/'  ,  logoutController.handleLogout );
  // ----------------------------------



// III]   Exporting section       :
module.exports =  router ;

// ----------------------------------






