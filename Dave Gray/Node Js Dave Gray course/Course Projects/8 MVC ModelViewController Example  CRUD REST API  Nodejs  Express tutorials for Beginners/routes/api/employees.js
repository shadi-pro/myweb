// Define the main express routes and api steps of this server :

// a- Importing the main express server  :
  const express = require('express') ;
//-------------------------------------------
  
// b- Define the main express Router :   
  const router  = express.Router()   ;
//-------------------------------------------
  
// c-  Define a vjarilge of  all  imported  defined  handlers methods :  
  const employeesController = require('../../controller/employeesController') ;


// d- Define the main routes using the express router +  including all it's  CRUD operations for each route  (using the chained method ) : 
  // 1- Define the main index || home page route : 
  router.route('/')
    // we will use the [employees controller] file  to handle this operation - instead of calling all of the  object -  :
    // .get((req,res) => {    
    //    res.json(data.employees);  
    // }) 
    .get(employeesController.getAllEmployees) // get operation 
    .post(employeesController.createNewEmployee)  // create new entry operation
    .put(employeesController.updateEmployee)  //  update an existed entry    
    .delete(employeesController.deleteEmployee) ; 
// ---------------------------

  // 2- Define the main  dynamic page route : 
    router.route('/:id')
    .get(employeesController.getEmployee) ; 

// ---------------------------


// e- exporting the defined router class :
module.exports = router ;  
