"use strict";
// [TS] lesson =>  22 Interface Declaration :
/* This lesson including following methods  :
       1- Define an Interface with Method(s) [without using parameters]
       2- Define an Interface with Method(s) [with using parameters]
    */
function display() {
    let z = prompt(`Choose from the next methods  :
       1- Define an Interface with Method(s) [without using parameters]    
       2- Define an Interface with Method(s) [with using parameters] 
     `);
    if (z == 1) {
        alert(`welcome to Test Define an Interface with Method(s) [without using parameters]  `);
        console.log(`welcome to Test Define an Interface with Method(s) [without using parameters]  `);
        // B] Define an Object with using datatype annotation of defined {Interface object} , including methods used it's assigned datatypes in the {Interface} : 
        let obj = {
            id: 100,
            username: 'shadi',
            // Declaring a method of get one of object property of the same datatype of the asssigned method's datatype 
            sayHello() {
                return `Hello ${this.username} `;
            },
            sayWelcome() {
                return `Hello ${this.username} `;
            }
        };
        // C]  Call and Print the object's porperties : 
        console.log(`
                First object's defined property value is ${obj.id}
                Second object's defined property value is ${obj.username}
                First object's defined method value is ${obj.sayHello()} 
                Second object's defined method value is ${obj.sayWelcome()} 
            `);
    }
    else if (z == 2) {
        alert(`welcome to Test Define an Interface with Method(s) [with using parameters]  `);
        console.log(`welcome to Test Define an Interface with Method(s) [with using parameters]  `);
        // B] Define an Object with using datatype annotation of defined {Interface object} , including methods used it's assigned datatypes in the {Interface} : 
        let obj = {
            id: 100,
            username: 'shadi',
            country: 'Egypt',
            // Declaring a method of get one of object property of the same datatype of the asssigned method's datatype [with addition process with a number ]
            plus(n) {
                return n + 100;
            },
            // [with substraction process with one of the object numeric property ]
            sub(n) {
                return n - obj.id;
            }
        };
        // C] Printing/calling the object's methods [with assigning parameters values] 
        console.log(obj.plus(100));
        console.log(obj.sub(100));
    }
    else {
        console.log('No valid choice!');
    }
}
