"use strict";
// [TS] lesson =>  30 Class Static Members :
console.log(`welcome to Test Define a Class with using {static class member} & access the class static member [count static property] using general method in the in [TS] `);
// A] Define the main Class with using [Class static members & Type Annotation & Getters and Setters ] : 
class User {
    // Define [static functional property] with [Datatype Annotation : void (without return value)]  :
    static getCount() {
        console.log(`${User.count} objects extracted `);
    }
    // Define the class constructor function , with [allocating the defined properties by contructor parmeters ] :  
    constructor(username) {
        this.username = username;
        // Adding increament to the class static defined property to be applied each time of extracted new object :
        User.count++;
    }
}
// Define [static property] with [Datatype Annotation : number ] [without using class Modifiers]:
User.count = 0;
// B] Extracting several objects from the defined class   : 
let userOne = new User('shadi');
let userTwo = new User('sayed');
let userThree = new User('mohamed');
// Printing each object extracted from the class :
console.log('The extracted objects from the class as following :');
console.log(userOne);
console.log(userTwo);
console.log(userThree);
console.log('Execute the general method of class of get` count of extracted objects [by using general void function] is :');
console.log(User.getCount);
console.log('#'.repeat(15));
// ------------------------------------------
console.log(`welcome to Test Define a Class with using {static class member} with {class modifires} & [get() and set()] methods & access the class static member member [count static property] using general method && [get() and set()] methods  `);
// A] Define the main Class with using [Class static members & Type Annotation & Getters and Setters ] : 
class User1 {
    // Define [static functional property] with [Datatype Annotation : void] [without using class Modifiers]:
    static getCount() {
        console.log(`${User1._created} objects extracted `);
    }
    //  Define a {get()} method [to get the private static {count} ] :
    static get created() {
        return User1._created;
    }
    //  Define a {set()} method [to get the private static {count} ] :           
    static set created(value) {
        User1._created = value;
    }
    // Define the class constructor function , with [ increasing the counter property bty each time of extracitng new object from the Class ] :  
    constructor(username) {
        this.username = username;
        // Adding increament to the class static defined property to be applied each time of extracted new object :
        User1._created++;
    }
}
// Define [static property] with [Datatype Annotation : number ] [with using class Modifiers {private} :
User1._created = 0;
// B] Extracting several objects from the defined class   : 
let userOne1 = new User1('shadi');
let userTwo1 = new User1('sayed');
let userThree1 = new User1('mohamed');
// Printing each object extracted from the class :
console.log('The extracted objects from the class as following :');
console.log(userOne1);
console.log(userTwo1);
console.log(userThree1);
console.log('Execute the general method of class of get` count of extracted objects [by using general void function] is :');
console.log(User1.getCount);
// Execute the [get()] static class method [to get private static defind property value ] : 
console.log(User1.created);
// Execute the [set()] static class method [to re-set private static defind property value ] : 
User1.created = 10;
// Execute the [get()] static class method [to get private static defind property value after being updated  ] : 
console.log(User1.created);
console.log('#'.repeat(15));
