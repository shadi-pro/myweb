
// This file including =>  Setting/defining (2) [api routes]  as next :
// a- First [api route + CRUD opts]  { '/' } of conoecting main home page with defined datasource of {employees.json} -accordign to the express method - including following CRUD operations :
    //  1- {get}    => get and display all data from the imported and defined datasource {employees.json }    
    //  2- {post}   => add new entyr of the data into the defined datasource {employees.json} 
    //  3- {put}    => update a certain data entry of the defined datasource  {employees.json}  
    //  4- {delete} => delete a certain data entyr from the defined  datasoucre  {employees.json} 
// ---------------------------------------- 

// b- Second api  dynamic route {'/:id' } of conoecting with defined datasource of {employees.json} -according to the express method - including following CRUD operations :
    //  1- {get}    => get and display the specific data comoing from request [id] from the imported and defined datasource {employees.json }    
     
// ---------------------------------------- 

// A ] Importings section :
//  1- required for express and node server  : 
const express = require('express');
const router = express.Router();
// const path = require('path'); [not need it here]

// 2- [Connecting to dataBase source] required for data source to be connect with [  in future we will use the real DB conecting  techs instead ] : 
const data = {};
data.employees = require('../../data/employees.json');
// -------------------------------------------------

// B] Define API routes [according to the expresss and node techs method ] =>  [this will provide more ability and features to control the 'http' properties] :
//  1] define a main [root Api Route] with all of its CRUD opts : 
router.route('/').get((res, req) => {
    res.json(data.employees);
  }).post((res, req) => {
    res.json({
      "firstname": req.body.firstname,
      "lastname": req.body.lastname
    });
  }).put((res, req) => {
    res.json({
      "firstname": req.body.firstname,
      "lastname": req.body.lastname
    });
  }).delete((res, req) => {
    res.json({ "id": req.body.id });
  });
//  --------------------------------------

//  2] define the a [dynamic API Route] of [id api route] (assign the [id] property by the incomming value of the [id] form the request) : 
router.route('/:id')
  .get((res, req) => {
    res.json({ "id": req.params.id })
  });

// -------------------------------------------------

//  C] Exporting section  :
module.exports = router;  