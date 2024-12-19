// Define the main  and api routes CRUD ops pattern on this server  [using  external source of defiend method of each crud  the  {employeesController} ] :

// a- Importing the main express server  :
  const express = require('express') ;
//-------------------------------------------
  
// b- Define the main express Router :   
  const router  = express.Router()   ;
//-------------------------------------------
  
// c-  Importing the controller file that including the all defined handling crud methods :  
  const employeesController = require('../../controllers/employeesController') ;
// ------------------------------------------


// d- Define the main routes using the express router +  including all it's  CRUD operations for each route  ( by calling each operation using the chained method ) :
  // 1- [first route] :  Define all CRUD ops of the main index || home page route : 
  router.route('/')
    // we will use the [employees controller] file  to handle this operation - instead of calling all of the  object -  :
    // .get((req,res) => {    
    //    res.json(data.employees);  
    // }) 
    .get(employeesController.getAllEmployees)    // get all elemnts  operation 
    .post(employeesController.createNewEmployee) // create new element  operation
    .put(employeesController.updateEmployee)     // update an existed entry    
    .delete(employeesController.deleteEmployee) ;   // delete a certain element 
    // ---------------------------

  // 2- [second route] : Define the  CRUD  operation of the main dynamic page route : 
    router.route('/:id')
    .get(employeesController.getEmployee) ; 

// ---------------------------

// e- exporting the defined router class :
module.exports = router ;  
