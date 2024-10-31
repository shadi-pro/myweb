"use strict";
// [TS] lesson =>  8 Type Annotations With Function :
/* This lesson including following methods  :
    1- Testing using ["noImplicityAny"] in {tsconfig.json} file -> with in defining function's parameters
    2- Testing using ["noImplicitReturns"] in the {tsconfig.json} file -> with Function's Return
    3- Testing using ["noUnusedLocals"] in the {tsconfig.json} file -> with Unused defined Local Variables
    4- Testing using ["noUnusedParameters"] in the {tsconfig.json} file -> with Unused Function's Parameters
    5- Testing using funtional {output} in defining a function
*/
function display() {
    let z = prompt(`Choose from the next methods  :
        1- Testing using ["noImplicityAny"] in {tsconfig.json} file -> with in defining function's parameters   
        2- Testing using ["noImplicitReturns"] in the {tsconfig.json} file -> with Function's Return   
        3- Testing using ["noUnusedLocals"] in the {tsconfig.json} file -> with Unused defined Local Variables 
        4- Testing using ["noUnusedParameters"] in the {tsconfig.json} file -> with Unused Function's Parameters 
        5- Testing using funtional {output} in defining a function 
    `);
    if (z == 1) {
        alert(`welcome to Testing using ["noImplicitAny"] in {tsconfig.json} file -> with in defining function's parameters  `);
        alert(`We have changed the "noImplicitAny" in to {true} `);
        console.log(`We have changed the "noImplicitAny" in to {true} `);
        /* Defining a function with certain properties :
            - "noImplicitAny": [true] with in the {tsconfig.json} file
            - Function's parameters has {any} type annotation
            - We will use [Quick fix] compiler check , to fix the problem by  => Infer the parameters type according usages of parameters ] to fix the Error of using {Any} type Annotation
            - The cause of problem is => due to change the {["noImplicitAny"]: true}
        */
        let showMsg = true;
        function showInfo(name, age, salary) {
            if (showMsg) {
                // Conditional Function Return :   
                return `This is the conditinoal Function Return , 
                    your name is : ${name}
                    your age is : ${age}
                    your salary is : ${salary}
                `;
            }
            // Main Fuction Return :
            return `This is the Main Function Return , 
                your name is : ${name}
                your age is : ${age}
                your salary is : ${salary}
            `;
        }
        // The Quick fix has infer the datatypes of the instead of using {any} => according the usages of parameters values with in the function , as following :   
        console.log(showInfo('shadi', 30, 7000));
    }
    else if (z == 2) {
        alert(`welcome to Testing using ["noImplicitReturns"] in the {tsconfig.json} file -> with Function's Return `);
        alert(`We have changed the "noImplicitReturns" in to {true} `);
        console.log(`We have changed the "noImplicitReturns" in to {true} `);
        /* Defining a function with certain properties :
            - "noImplicitReturns": [true] with in the {tsconfig.json} file
            - Function's parameters has a conditgional return , but has  NO main Function Return
            - We will use [Quick fix] compiler check , to fix the problem by  => Add the main Function Return
            - The cause of problem is => due to change the {["noImplicitReturn": true}
        */
        let showMsg = true;
        function showInfo(name, age, salary) {
            if (showMsg) {
                // Using a condtional return :
                return `This is the conditinoal Function Return , 
                your name is : ${name}
                your age is : ${age}
                your salary is : ${salary}
                `;
            }
            // The [Quick Fix] request to use main Function Return  as following : 
            // Main Function Return :
            return `This is the Main Function Return , 
            your name is : ${name}
            your age is : ${age}
            your salary is : ${salary}
            `;
        }
        // Executing the function   : 
        console.log(showInfo('shadi', 30, 7000));
    }
    else if (z == 3) {
        alert(`welcome to Testing using ["noUnusedLocals"] in the {tsconfig.json} file -> with Unused defined Local Variables `);
        // Define unused local variable : 
        // let varName = 'shadi';    
        // Due to assigning the ['noUnusedLocals' = true] -> The [Quick Fix] request to remove the unused defined variable  
    }
    else if (z == 4) {
        alert(`welcome to Testing using ["noUnusedParameters"] in the {tsconfig.json} file -> with Unused Function's Parameters `);
        function myFunc(name, age, salary) {
            // Main Function Return :
            // Note => salary paramter has not used with in the function [inspite it has been used within executing the function  ] =>  
            return `This is the Main Function Return , 
            your name is : ${name}
            your age is : ${age}
            your salary is :  ${salary} 
            `;
        }
        console.log(myFunc('Ali', 30, 9000));
    }
    else if (z == 5) {
        alert(`welcome to Testing using funtional {output} in defining a function  `);
        // Declaring a function with using the [output] :   
        function myFunc(name, age, salary) {
            // Main Function Return with [(string) datatype]  :
            return `This is the Main Function Return with [string] output , 
            your name is : ${name}
            your age is : ${age}
            your salary is : ${salary} 
            `;
        }
        console.log(myFunc('Ali', 30, 9000));
    }
    else {
        alert('no choice has been choosen! ');
    }
}
