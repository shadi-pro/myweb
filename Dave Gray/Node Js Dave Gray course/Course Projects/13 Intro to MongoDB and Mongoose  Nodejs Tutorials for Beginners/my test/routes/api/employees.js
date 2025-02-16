
// Define the main {Routes} according to the Express methodology + assing its {CRUD operatinons}  { for api routes } opts pattern on this server  [using  external source of defiend method of each crud of the  {employeesController} ]  =>  [ by assing each one inside it's related method] :
  //  this file will provide the user roles authoizied by  importing and using the defined [roles list]  , as following   : 
    //  any  user  can access the employees database => [so we  did not use  {verifyRoles()} with (get)  crud opt with the  route ] 
    //  only [Admin] & [Editor]  users  can access the employees database  +  posting new entires  => [ so we use the  { verifyRoles()} with (post) crud opt of  this route ] 
    //  only [Admin] & [Editor]  users  can access the employees database  +  updating (put) entires in the database   => [ so we use the  { verifyRoles()} with (put) crud opt of  this route ] 
    //  only [Admin] users only can access the employees database  +   delet from the database    =>  [ so we use the {verifyRoles}  with (delete) crud  opt of this route ] 

// ---------------------------------------------------------
 
//  I] Imporitng section   :    
  // a- Importing the main [express server] :
    const express = require('express') ;
  //-------------------------------------------
    
  // b- Define the main [express Router] :   
    const router  = express.Router()   ;
  //-------------------------------------------
    
  // c- Importing the [controller file] (that including all defined handling crud methods) :  
    const employeesController = require('../../controllers/employeesController') ;

  // d- Importing the  [roles_list] form the defined file   )  :  
    const  ROLES_LIST = require('../../config/roles_list') ;

  // e- Impoprting the defined [roles verifying Middleware] file :      
    const verifyRoles =  require('../../middleware/verifyRoles') ;
 
// ------------------------------------------ 

//  II] Define  main middleware function     :
  // a- Define the main routes using the express router +  including assigning all it's CRUD operations for each route  ( by calling each operation using the chained method ) :
  // 1- [first route :  main employees  ] :  Define all CRUD opts of the main index || home page route - to access DB datasource 'employees.json'   : 
    router.route('/')  
      // .get(verifyJWT, employeesController.getAllEmployees)   // get all elements operation [include using (verifyJWT) before the protecting route's contrling file - according to first method (not used here  )    - ]      
      .get(employeesController.getAllEmployees)    //  no need to the [verifyRoles] get all elements operation [will be protected  using (verifyJWT) -according to second method wihtn the main server file  -  Not need verify user role here (any user type can log)    ] 
      .post( verifyRoles(ROLES_LIST.Admin , ROLES_LIST.Editor ) ,  employeesController.createNewEmployee)    // create new element  operation + [will use the verify role here : only [[Admin]] & [[Editor]] user can reach employees and create new employee (posting)     -     ] 
      .put(verifyRoles(ROLES_LIST.Admin , ROLES_LIST.Editor ) , employeesController.updateEmployee)        // update an existed entry + [ will use the verify role here : only [[Admin]]  + [[Editor]] user can update in the database         ]    
      .delete(verifyRoles(ROLES_LIST.Admin) , employeesController.deleteEmployee) ;   // delete a certain element [  only the admin can delete the form database   ]
    // ---------------------------

  // 2- [second route : dynamic route ] : Define the CRUD operation of the main dynamic page route  [only one crud of : getting requested element] :  
    router.route('/:id')
    .get(employeesController.getEmployee) ; 

// ---------------------------

// e- exporting the defined {router} class :
module.exports = router ;  
