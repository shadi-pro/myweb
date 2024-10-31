"use strict";
// [TS] lesson =>  24 Interface Reopen And Use Cases :
/* This lesson including following methods  :
       1- Define an Interface , and re-open it [from in different pages (simulation )]
    */
function display() {
    let z = prompt(`Choose from the next methods  :
       1- Define an Interface , and re-open it [from in different pages (simulation )] 
     `);
    if (z == 1) {
        alert(`welcome to Test Define an Interface , and re-open it [from in different pages (simulation )]  `);
        console.log(`welcome to Test Define an Interface , and re-open it [from in different pages (simulation )]  `);
        // C Define an Object with using datatype annotation of defined {Interface object}  : 
        let obj = {
            id: 100,
            username: 'shadi',
            // Declaring a method of get one of object property of the same datatype of the asssigned method's datatype 
            sayWelcome() {
                return `Hello ${this.username}
                    your id is ${this.id}
                    your city is ${this.city}
                    `;
            }
        };
        // C]  Call and Print the object's porperties : 
        console.log('The defined object overall as following : ');
        console.log(obj);
        // } else if (z == 2) {
        //     alert(`welcome to Test Define an Interface with Method(s) [with using parameters]  `);  
        //     console.log(`welcome to Test Define an Interface with Method(s) [with using parameters]  `);  
        //     // A] Define a {Interaface object}: 
        //         interface Inter {
        //             id : number ,   
        //             username: string ,  
        //             country  : string ;
        //             plus(n : number) : number , // => [assigning a datatype of the method with default way {with parameters}] 
        //             sub: (n : number) => number // => [assigning a datatype of the method with arrow function way {with parameters}]
        //         } 
        //     // B] Define an Object with using datatype annotation of defined {Interface object} , including methods used it's assigned datatypes in the {Interface} : 
        //         let obj : Inter  = {
        //             id : 100 ,
        //             username : 'shadi' , 
        //             country : 'Egypt', 
        //             // Declaring a method of get one of object property of the same datatype of the asssigned method's datatype [with addition process with a number ]
        //             plus(n) {
        //                 return  n + 100 ;
        //             } ,
        //             // [with substraction process with one of the object numeric property ]
        //             sub (n) {  // => [We not used the arrow function, due problem of using {this} operator ]
        //                 return n - obj.id  ;
        //             }
        //         } ;
        //     // C] Printing/calling the object's methods [with assigning parameters values] 
        //         console.log( obj.plus(100)) ;
        //         console.log( obj.sub(100)) ;
    }
    else {
        console.log('No valid choice!');
    }
}
