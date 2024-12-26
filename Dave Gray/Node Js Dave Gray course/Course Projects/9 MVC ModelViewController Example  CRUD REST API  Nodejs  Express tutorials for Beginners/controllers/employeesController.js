
//  This file will Include  :
  // a- Main [Data model]  object , including the next (2) properties   => 
    // 1-  [ main data property of hold all data ] => as a imported from the model json file    
    // 2-  [ data setter function ] => a defiend function using the upper property of the data    
   
  // b- Each Route's main defintions of CRUD custom handling methods of each route  (2 Routes) , as following   => 
    // First route [static route {'/'} ]  , with  next CRUD opts :
      // 1-  [get operation] 
      // 2-  [create new operation] 
      // 3-  [put/update operation] 
      // 4-  [delete operation]  

    // Second route [dynamic route ('/:id' ]  , with next handling :
      // 1-  [ Finding the requested element from the data object according to its {id}  ] 
      // 2-  [ Handling error by Send it wiht status code if the requested element has NO [id]   ] 
      // 3-  [ Sending the [ requested obtained employee]  after being filled into the  response parameter  ] 
  
  // c- [this file will include simulated scripts of js untill we use the real database ]     :  
// ---------------------------------------------------------
// ---------------------------------------------------------

// A] Define the main data object (using 2 methods ) :
  //  1] [ using first method : default Node method ] - [ will not be used ]  -  {this method is not include the assignning function inside  }  :
    //  a- Define an empty object of the data : 
      // const data = {};
    //  b- Define the [employees data] as extracted property from the main empty object by importing them from the main defined file  {employees.json} :  
      // data.employees = require('../model/employees.json');

  // 2] [using second method : Reactful method ] :   
    // Define a {data} object of the (2) properties as following [will be used ins the crud  opterations  methods   ]    :
    const data = {
      employees: require('../model/employees.json'),        // the main data property {array of objects } [to hold the all data as objects  ]   
      setEmployees: function (data) { this.employees = data }   // the main [data setter function]   
    }
//----- --------------------------------------
//----- --------------------------------------

// B] Define the main custom handling method of the CRUD operations for the Route of => 
  // I] Define the CRUD operations of the first route : {route('/')} index || home page :  

    // 1] Define the method of the handling [get operation] of all employees data object : 
    const getAllEmployees = (req, res) => {
      // Assign the  obained  data of the employees inside the {res} parameter [with json form ] :   
      res.json(data.employees);
    }
    //   -------------------------------------------

    //  2] Define the method of the handling [post/create new log/element operation] of create a new employee and post it inside the data object [ using the  reactful method ] : 
    const createNewEmployee = (req, res) => {
  
      // a- define an object of a new employee [ including the incomming each field value of request new element] :
      const newEmployee = {
        id: data.employees[data.employees.length - 1].id + 1 || 1,
        firstname: req.body.firstname,
        lastname: req.body.lastname
      }

      // b- handle the error of the unexisted value of [first name] or [last name] of the inserted new element/employee - using the conditional + {res.status()}  method :
      if (!newEmployee.firstname || !newEmployee.lastname) {
        return res.status(400).json({ 'message': 'First or last names are required...' });
      }
 
      // c- Adding the new element object [after handling the error ]  into the  [current  data  json] file => using the {setEmployees} setter function to Add the new {newEmployee} object value into the data by assign newEmployee in to the destructured data    :
      data.setEmployees([...data.employees, newEmployee]);

      // json method  [ will not be used ]  : 
      // res.json({
      //   "firstname": req.body.firstname,
      //   "lastname": req.body.lastname
      // });

      // d- Assign the final {data} value ( after adding the new object - newEmployee - ]  ) into the [res] parameter , with use a new record code (201) :   
      res.status(201).json(data.employees);
    }
    //  -----------------------------------------------

    //  3] Define the method of the handling [put/update operation] of update an existed employee and post it inside the data object [ using the reactful method ] : 
    const updateEmployee = (req, res) => {

      // a- finding the requested [element] inside the current  data object , using the {find()} method - using its {id} as finding condition -   :  
      const employee = data.employees.find(emp => emp.id === parseInt(req.body.id))  ;

      // b- handling Error of the requested element [id] unexisted/not found  , by Sending an error status code (400)  :
      if (!employee) {
        return res.status(400).json({ "message": `Employee  ID ${req.body.id} not found ! ` });
      }

      //  c- check if the requested element has a [firstname] and assign the   obtained value if requested found :
      if (req.body.firstname) employee.firstname = req.body.firstname ;


      // d- check if the requested element has a [lastname] and assign the   obtained value if requested found    :
      if (req.body.lastname) employee.lastname = req.body.lastname;


      // e- define an filtered  array of all existed elements - except the current element  -  [ using  the filter() ]  :
      const filterArray = data.employees.filter(emp => emp.id !== parseInt(req.body.id));


      // f- define an unsorted array as accumaltated  the upper defined array of the all existed elements concatenated with the current updated element :
      const unsortedArray =  [ ...filterArray, employee ];


      // g-  adding the [ upper defined accumaltated array ] into the current main  data object , by using the setter function + with assign the [id] property value using the sort() method :
      data.setEmployees( unsortedArray.sort((a, b) => a.id > b.id ? 1 : a.id < b.id ? -1 : 0 ) );


      // h- sending the [employees] property of [new data] after being filled -> into the  response parameter as json form  :  
      res.json(data.employees);

      //  [old method ] - [ will not be used ]  :  
      // res.json({
      //   "firstname": req.body.firstname,
      //   "lastname": req.body.lastname
      // }) ;

    }
    // ---------------------------------------------------

    //  4] Define the method of the handling [delete/remove operation] of an existed employee from the current data object [ using the reactful method ] : 
    const deleteEmployee = (req, res) => {
      // a- finding the requested element/employee from the data object according to its {id}  :  
      const employee = data.employees.find(emp => emp.id === parseInt(req.body.id));

      // b- handling Error of the requested element [id] unexisted/not found  , by Sending an error status code (400)  :
      if (!employee) {
        return res.status(400).json({ "message": `Employee  ID ${req.body.id} not found ! ` });
      }

      // c-  define an filtered array of all existed elements - except the current reqested element -  [ by   using the filter()  ]  :
      const filterArray = data.employees.filter(emp => emp.id !== parseInt(req.body.id)) ;


      // d- set/assign  the upper defined [filtered array] of all existed elements (only)  inside  the data  [ using the setter function  +  destrucurtring method] :
      data.setEmployee([...filterArray]);


      // e- sending the [employees] property object (after being filled with filterd array ) into the  response parameter :  
      res.json(data.employees);


      // [old method -  [ will not be used ]  : 
      // res.json({ "id": req.body.id });
    }
// ----------------------------------------------- 
// ----------------------------------------------- 

  // II] Define the CRUD operations of the second route : the dynamic route of finding a dynamic element  =>  { ('/:id')}:  
    const getEmployee = (req, res) => {
      
      // a- finding the requested element/employee from the data object according to its {id}   :  
      const employee = data.employees.find(emp => emp.id === parseInt(req.body.id)) ;

      // b- handling Error of the requested element [id] unexisted/not found  , by Sending an error status code (400) :
      if (!employee) {
        return res.status(400).json({ "message": `Employee  ID ${req.body.id} not found ! ` });
      }

      // c- sending the [requested obtained employee only ]  after being  found  into the response parameter as json format :  
      res.json(employee);  


      // [old method] - [ will not be used ] -  :
      // res.json( {"id" : req.params.id} );
    }
// ----------------------------------------------- 
// ----------------------------------------------- 

// D] exporting all defined  handling crud methods of all defined routes :
module.exports = {
  getAllEmployees,
  createNewEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployee
}

