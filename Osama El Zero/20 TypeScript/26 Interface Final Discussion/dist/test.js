"use strict";
// [TS] lesson =>  25 Interface Extend :
/* This lesson including following methods  :
       1- Define an Interface with extending another single interface
       2- Define an Interface with extending another multiple interfaces
    */
// -----------------------
// First Example : 
console.log(`welcome to Test Define an Interface with extending another single interface  `);
// C Define an Object with using datatype annotation of defined {Extended Interface object}  : 
let obj = {
    id: 100,
    username: 'shadi',
    city: 'City',
};
// D]  Call and Print the defined object's porperties : 
console.log('The defined object overall as following : ');
console.log(obj);
//------------------------------------------------
// Second Example : 
console.log(`welcome to Test Define an Interface with extending another multiple interfaces   `);
// D] Define an Object with using datatype annotation of defined {Extended Interface object}  : 
let obj1 = {
    id: 100,
    username: 'shadi',
    city: 'City',
    country: 'Egypt'
};
// E] Call and Print the defined object's porperties : 
console.log('The defined object overall as following : ');
console.log(obj1);
