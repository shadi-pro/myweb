  //  Including the all Route's  CRUD custom handling methods :
    
  
  // # [7:17]

  // a- Define the main data steps :
  //  1- Define an empty object of the data : 
  const data = {};

  //  2- Define the [employees data] as extracted property from the main empty object by importing them from the main defined file  {employees.json} :  
  data.employees = require('../../model/employees.json');
  //-------------------------------------------

  // b- Define the main custom handling method of the CRUD operations for the route of   =>  {route('/')} index || home page :  
    // 1- Define the method of the handling [get opertaion] of all employees data object : 
    const getAllEmployees = (req, res) => {
      // Assign the gotten data of the employees inside the {res} parameter :   
      res.json(data.employees);
    }

    //  2- Define the method of the handling [post/create opertaion] of create a new employee and post it inside  the  data object : 
    const createNewEmployee = (req, res) => {
      res.json({
        "firstname": req.body.firstname,
        "lastname": req.body.lastname
      });
    }

    //  3- Define the method of the handling [put/update opertaion] of  update an existed employee and post it inside the data object : 
    const updateEmployee = (req, res) => {
      res.json({
        "firstname": req.body.firstname,
        "lastname": req.body.lastname
      });
    }

    //  4- Define the method of the handling [delete/remove opertaion] of create a new employee and post it inside the data object : 
    const deleteEmployee = (req, res) => {
      res.json({ "id": req.body.id });
    }
  // ----------------------------------------------- 

  // c- Define the main custom handling method of the CRUD operations for the dynamic route of   =>  { ('/:id')}   :  
    const getEmployee = (req, res) => {
      res.json( {"id" : req.params.id} );
    }
  // ----------------------------------------------- 

  //  exporting  all defined  handling methods   :
  module.exports = { 
    getAllEmployees , 
    createNewEmployee ,
    updateEmployee ,
    deleteEmployee , 
    getEmployee
  }  



