"use strict";
// [TS] lesson =>  30 Class Static Members :
/* This lesson including following methods  :
   1-  Define a Class with using {static class member} & access the class static member [count static property] using general method in the in [TS]
   2-  Define a Class with using {static class member} with {class modifires} & [get() and set()] methods & access the class static member member [count static property] using general method && [get() and set()] methods
*/
function display() {
    let z = prompt(`Choose from the next methods  :
       1-  Define a Class with using {static class member} & access the class static member [count static property] using general method in the in [TS]  
       2-  Define a Class with using {static class member} with {class modifires} & [get() and set()] methods & access the class static members  using general method && [get() and set()] methods
     `);
    if (z == 1) {
        alert(`welcome to Test Define a Class with using {static class member} & access the class static member [count static property] using general method in the in [TS] `);
        console.log(`welcome to Test Define a Class with using {static class member} & access the class static member [count static property] using general method in the in [TS] `);
        // A] Define the main Class with using [Class static members & Type Annotation & Getters and Setters ] : 
        class User {
            // Define Method with using [static functional property] & [Datatype Annotation : void (without return value)]  :
            static getCount() {
                console.log(`${User.count} objects extracted `);
            }
            // Define the class constructor function , with [ Defining inner property with {Class Modifier} & {Datatype Annotation} ] & [Static defined property with increament ] :  
            constructor(username) {
                this.username = username;
                // Adding increament to the class's static defined property to be applied each time of extracting new object :
                User.count++;
            }
        }
        // Define [static property] with [Datatype Annotation : number ] [without using class Modifiers]:
        User.count = 0;
        // B] Extracting several objects from the defined class  : 
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
        // ----------------------------------------------
        console.log('#'.repeat(15));
    }
    else if (z == 2) {
        alert(`welcome to Test Define a Class with using {static class member} with {class modifires} & [get() and set()] methods & access the class static member member [count static property] using general method && [get() and set()] methods `);
        console.log(`welcome to Test Define a Class with using {static class member} with {class modifires} & [get() and set()] methods & access the class static member member [count static property] using general method && [get() and set()] methods  `);
        // A] Define the main Class with using [Class static members & Type Annotation & Getters and Setters ] : 
        class User {
            // Define Method with using [static functional property] & [class Modifiers] & [Datatype Annotation : void] -> [with using class Modifiers] :
            static getCount() {
                console.log(`${User._created} objects extracted `);
            }
            //  Define a {get()} method with using [static functional property] & [class Modifiers] -> [to get the private static property {count} ] :
            static get created() {
                return User._created;
            }
            //  Define a {set()} method with using [static functional property] & [class Modifiers] -> [to get the private static property {count} ] :           
            static set created(value) {
                User._created = value;
            }
            // Define the class constructor function , including [Defining Inner property with {Class Modifier} + {Datatype Annotation}] & [Static defined property with increament ] :  
            constructor(username) {
                this.username = username;
                // Adding increament to the class static defined property to be applied each time of extracted new object :
                User._created++;
            }
        }
        // Define [static property] [with using class Modifiers {private} with [Datatype Annotation : number ]  :
        User._created = 0;
        // B] Extracting several objects from the defined class : 
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
        // Execute the [get()] static class method [to get the defined private static property value ] : 
        console.log(User.created);
        // Execute the [set()] static class method [to re-set the defined private static property value ] : 
        User.created = 10;
        // Execute the [get()] static class method [to get the defined private static property value after being updated  ] : 
        console.log(User.created);
        // ----------------------------------------------
        console.log('#'.repeat(15));
    }
    else {
        console.log('No valid choice!');
    }
}
