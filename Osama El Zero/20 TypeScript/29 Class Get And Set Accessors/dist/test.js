"use strict";
// [TS] lesson =>  29 Class Get And Set Accessors :
console.log(`welcome to Test Define  a Class with using [get() and set()] methods to access to a private properties ] in the in [TS] `);
// A] Define the main Class with using [Class Modifires & Special properties {readonly | optional ?} & Type Annotation  ] : 
class User {
    // Define the class constructor function , with [allocating the defined properties by contructor parmeters ] :  
    constructor(_username, _salary, _city) {
        this._username = _username;
        this._salary = _salary;
        this._city = _city;
        // Define a functional property : 
        this.msg = function () {
            return `From the class constructor => functional property  
                    Hello ${this._username} [username : pulbic]  
                    your salary is : ${this._salary} [salary: private]
                    your city is : ${this._city} [city : protected]
                `;
        };
    }
    // Define the get() method [to get the private property {_username} ] :
    get username() {
        return this._username;
    }
    // Define the set() method [to set the private property {_username} ] :
    set username(value) {
        this._username = value;
    }
    // Define the get() method [to get the protected property {_city} ] :
    get city() {
        return this._city;
    }
    // Define the set() method [to set the protected property {_city} ] :
    set city(value) {
        this._city = value;
    }
    // Define a general method of class  : 
    sayHello() {
        return `
                    [From the class general method] :
                    Hello ${this._username} [username : pulbic]  
                    your salary is : ${this._salary} [salary: private]
                    your city is : ${this._city} [city : protected] 
                `;
    }
}
// B] Extracting a new object from the defined class [access class's properties from the outside the class]  : 
let userOne = new User('shadi', 6000, 'cairo');
// C1] Printing the defined {private} [_username] property by using get method [before modified by set() ] :
console.log(userOne.username);
// D1] Set the defined {private} property [_username] by using set() method   :
userOne.username = 'shadi sayed';
// E1] Get the defined {private} property [_username] by using get() method [after modification by {set()} method] :
console.log(userOne.username);
// --------------------------------
// C2] Printing the defined {private} property [_city] by using get method [before modified by set() ] :
console.log(userOne.city);
// D2] Set the defined {private} property [_city] by using set() method   :
userOne.city = 'Alexanderia';
// E2] Get the defined {private} property [_city] by using get() method [after modification by {set()} method] :
console.log(userOne.city);
// --------------------------------
// F] printing the extracted object's functaionl method  : 
console.log(userOne.msg());
// G] printing the extracted object's General method  : 
console.log(userOne.sayHello());
// ----------------------------------------------
