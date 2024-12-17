//  Including the all Route's  CRUD custom handling methods  =>   [  this fiile will include simulated scripts of js untill we use the real databae ]     :  

// A] Define the main data object   (using 2 methods )

//  1- [ using first method : default json method ] - no use it  -    :
//  1- Define an empty object of the data : 
// const data = {};
//  2- Define the [employees data] as extracted property from the main empty object by importing them from the main defined file  {employees.json} :  
// data.employees = require('../model/employees.json');

// 2- [using second method : Reactful method ] :   
const data = {
  employees: require('../model/employees.json'),        // the main data property   
  setEmployees: function (data) { this.employees = data }   // the main data setter function   
}
//----- --------------------------------------
//----- --------------------------------------

// B] Define the main custom handling method of the CRUD operations for the route of   =>  {route('/')} index || home page :  
// 1] Define the method of the handling [get opertaion] of all employees data object : 
const getAllEmployees = (req, res) => {
  // Assign the  objained  data of the employees inside the {res} parameter [with json form ] :   
  res.json(data.employees);
}
//   -------------------------------------------

//  2] Define the method of the handling [post/create new element  opertaion] of create a new employee and post it inside the data object [ using the  reactful method ] : 
const createNewEmployee = (req, res) => {
  // a- define an object of a new employee :
  const newEmployee = {
    id: data.employees[data.employees.length - 1].id + 1 || 1,
    firstname: req.body.firstname,
    lastname: req.body.lastname
  }

  // b- handle the error of the unexisted value  of first name or last name :
  if (!newEmployee.firstname || !newEmployee.lastname) {
    return res.status(400).json({ 'message': 'First and last names are required...' });
  }

  // c-  using the {setEmployees} setter function to Add the new {newEmployee} object value into the data by assign newEmployee in to  the   destructured data    :
  data.setEmployees([...data.employees, newEmployee]);

  // json method  [we will not it ]  : 
  // res.json({
  //   "firstname": req.body.firstname,
  //   "lastname": req.body.lastname
  // });

  // d- Assign the final {data} value ( after adding the new object) into the [res] paramter , with  use a new record  code :   
  res.status(201).json(data.employees);
}
//  -----------------------------------------------

//  3] Define the method of the handling [put/update opertaion] of  update an existed employee and post it inside the data object [ using the reactful method ] : 
const updateEmployee = (req, res) => {
  // a- finding the requested element from the data object according to its {id}  :  
  const employee = data.employees.find(emp => emp.id === parseInt(req.body.id));

  // b- Send an error status code if the requested element has NO [id]  :
  if (!employee) {
    return res.status(400).json({ "message": `Employee  ID ${req.body.id} not found ! ` });
  }

  //  c- check if the requested element has a [firstname] and assign the   obtained value if requested found    :
  if (req.body.firstname) employee.firstname = req.body.firstname;


  // d- check if the requested element has a [lastname] and assign the   obtained value if requested found    :
  if (req.body.lastname) employee.lastname = req.body.lastname;


  // e-  Define an filtered  array of all existed elements - except the current element  -  [ using  the filter()  ]  :
  const filterArray = data.employees.filter(emp => emp.id !== parseInt(req.body.id));


  // f-  Define an unsorted array as accumaltated  the upper defined array of the all existed elements  +  and the current element  :
  const unsortedArray = [...filterArray, employee];


  // g- Adding the [unsorted  accumaltated array] into the current data object , by using the setter function + wiht assing the proper id value using the sort method :
  data.setEmployees(unsortedArray.sort((a, b) => a.id > b.id ? 1 : a.id < b.id ? -1 : 0));

  // h- sending the [employees] property after being filled into the  response parameter  :  
  res.json(data.employees);

  //  [old method ] - not use it  :  
  // res.json({
  //   "firstname": req.body.firstname,
  //   "lastname": req.body.lastname
  // }) ;

}
// ---------------------------------------------------

//  4] Define the method of the handling [delete/remove opertaion] of create a new employee and post it inside the data object [  using the reactful method ] : 
const deleteEmployee = (req, res) => {
  // a- finding the requested element from the data object according to its {id}  :  
  const employee = data.employees.find(emp => emp.id === parseInt(req.body.id));

  // b- Send an error status code if the requested element has NO [id]  :
  if (!employee) {
    return res.status(400).json({ "message": `Employee  ID ${req.body.id} not found ! ` });
  }

  // c-  Define an filtered array of all existed elements - except the current element  -  [ using  the filter()  ]  :
  const filterArray = data.employees.filter(emp => emp.id !== parseInt(req.body.id));


  // d- Set the filtered array of all existed elements only  into the data    [ using  the  setter function  ]  :
  data.setEmployee([...filterArray]);


  // e- Sending the [employees] property (after being filled) into the  response parameter  :  
  res.json(data.employees);


  // [old method - not use it ] : 
  // res.json({ "id": req.body.id });
}
// ----------------------------------------------- 
// ----------------------------------------------- 


// C] Define the main custom handling method of the CRUD operations for the dynamic route of finding a dynmic element   =>  { ('/:id')}   :  
const getEmployee = (req, res) => {
  // a- finding the requested element from the data object according to its {id}  :  
  const employee = data.employees.find(emp => emp.id === parseInt(req.body.id));

  // b- Send an error status code if the requested element has NO [id]  :
  if (!employee) {
    return res.status(400).json({ "message": `Employee  ID ${req.body.id} not found ! ` });
  }

  // c-  sending the    [ requested obtained employee]  after being filled into the  response parameter  :  
  res.json(employee); s


  // [old method] - not use -  :
  // res.json( {"id" : req.params.id} );
}
// ----------------------------------------------- 
// ----------------------------------------------- 

// D] exporting  all defined  handling crud methods   :
module.exports = {
  getAllEmployees,
  createNewEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployee
}



