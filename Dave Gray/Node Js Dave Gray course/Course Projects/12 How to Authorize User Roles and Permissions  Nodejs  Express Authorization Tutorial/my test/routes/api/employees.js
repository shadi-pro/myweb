
// Define the main {Routes} according to the Express methodology + assing its {CRUD operatinons}  { for api routes } opts pattern on this server  [using  external source of defiend method of each crud of the  {employeesController} ]  =>  [ by assing each one inside it's related method] :

// a- Importing the main [express server] :
  const express = require('express') ;
//-------------------------------------------
  
// b- Define the main [express Router] :   
  const router  = express.Router()   ;
//-------------------------------------------
  
// c- Importing the [controller file] (that including all defined handling crud methods) :  
  const employeesController = require('../../controllers/employeesController') ;

// d- Impoprting the defined [jwt verifying Middleware] file :      
  // const verifyJWT =  require('../../middleware/verifyJWT') ;
 
// ------------------------------------------ 

// d- Define the main routes using the express router +  including assigning all it's CRUD operations for each route  ( by calling each operation using the chained method ) :
  // 1- [first route] :  Define all CRUD opts of the main index || home page route - to access DB datasource 'employees.json'   : 
  router.route('/')
      
    // .get(verifyJWT, employeesController.getAllEmployees)       // get all elements operation [include using (verifyJWT) before the protecting route's contrling file - according to first method - ] 

    .get(employeesController.getAllEmployees)       // get all elements operation [will be protected  using (verifyJWT)  -   according to  second method wihtn the main server file  -  ] 
    .post(employeesController.createNewEmployee)    // create new element  operation
    .put(employeesController.updateEmployee)        // update an existed entry    
    .delete(employeesController.deleteEmployee) ;   // delete a certain element 
    // ---------------------------

  // 2- [second route] : Define the CRUD operation of the main dynamic page route  [only one crud of : getting requested element] :  
    router.route('/:id')
    .get(employeesController.getEmployee) ; 

// ---------------------------

// e- exporting the defined router class :
module.exports = router ;  
