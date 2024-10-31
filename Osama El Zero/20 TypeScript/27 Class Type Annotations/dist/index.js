"use strict";
// [TS] lesson =>  27 Class Type Annotations :
/* This lesson including following methods  :
   1-  Define a class including  properties and methods [with using datatype annotaation ] in [TS]
*/
function display() {
    let z = prompt(`Choose from the next methods  :
       1-   Define a class including  properties and methods [with using datatype annotaation ] in [TS]
     `);
    if (z == 1) {
        alert(`welcome to Test Define an Interface with extending another single interface `);
        console.log(`welcome to Test Define an Interface with extending another single interface `);
        // A] Define the main Class : 
        class User {
            // Define the class constructor function :  
            constructor(username, salary) {
                this.u = username;
                this.s = salary;
                // Define a function propeorty : 
                this.msg = () => {
                    return `[From the class constructor => functional property ] Hello ${this.u} , your salary is : ${this.s} `;
                };
            }
            // Define a general method of class  : 
            sayHello() {
                return `[From the class general method ] Hello ${this.u} , your salary is :  ${this.s} `;
            }
        }
        // B] Extracting a new object from the defined class  : 
        let userOne = new User('shadi', 6000);
        // C  prinnting the extracted object's properties aned methods  from calss 
        console.log(`
             The extracted object's first propeprty is 
                 ${userOne.u}
            The extracted  object's first propeprty is
                ${userOne.s}
            The extracted  object's function property  is  
                ${userOne.msg()}
            `);
        // D ] Printing the extracted object's general class method :
        console.log(` Extracted object's general class method ${userOne.sayHello()}  `);
        // ----------------------------------------------
        // } else if (z == 2) {
        //     alert(`welcome to Test Define an Interface with extending another multiple interfaces  `);  
        //     console.log(`welcome to Test Define an Interface with extending another multiple interfaces   `);  
        //     // A] Define the main {Interaface object} [with in the main page ] : 
        //     interface Inter {
        //         id : number ,   
        //         username: string 
        //     } 
        // // B] Defining a new {Interaface object} : 
        //     interface Inter1 { 
        //         city : string  
        //     } 
        // // C] Defining another new {Interaface object} with extending another Multiple defined Interface  : 
        //     interface Inter2 extends Inter, Inter1  { 
        //         country : string  
        //     } 
        //   // D] Define an Object with using datatype annotation of defined {Extended Interface object}  : 
        //     let obj : Inter2  = {
        //         id : 100 ,
        //         username : 'shadi' , 
        //         city : 'City' , 
        //         country : 'Egypt'  
        //     } ;
        // // E] Call and Print the defined object's porperties : 
        //     console.log('The defined object overall as following : ' );
        //     console.log(obj);
    }
    else {
        console.log('No valid choice!');
    }
}
