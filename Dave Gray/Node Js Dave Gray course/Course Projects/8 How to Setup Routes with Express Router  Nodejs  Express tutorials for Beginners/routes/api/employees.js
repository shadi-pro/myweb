
// This file is the [api] to connoet and handle data of {}  using the express and node method : 
// # [ 21 : 00 ]


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
//  1] define the main route of [root  location ] with all of its CRUD opts   : 
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

//  2] define the a dynamic route of [id]     : 
router.route('/:id')
  .get((res, req) => {
    res.json({ "id": req.params.id })
  });

// -------------------------------------------------

//  C] Exporting section  :
module.exports = router;  