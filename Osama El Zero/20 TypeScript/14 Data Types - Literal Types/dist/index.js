"use strict";
// [TS] lesson =>  14 Data Types - Literal Types :
/* This lesson including following methods  :
    1- Create a custom [Type Alias variable] with [limited Literals values] and use it in define a {function output datatype}
    2- Create a custom [Type Alias variable] with [limited Literals values] and use it in define a {Variable datatype} with limited values
*/
function display() {
    let z = prompt(`Choose from the next methods  :
    1- Create a custom [Type Alias variable] with [limited Literals values] and use it in define a {function output datatype}  
    2- Create a custom [Type Alias variable] with [limited Literals values] and use it in define a {Variable datatype} with limited values 
    `);
    if (z == 1) {
        alert(`welcome to Testing Create a custom [Type Alias variable] with [limited Literals values] and use it in define a {function output datatype}  `);
        console.log(`welcome to Testing Create a custom [Type Alias variable] with [limited Literals values] and use it in define a {function output datatype} `);
        // B] Define main function using the {Custom Type Aliase} as output datatype => to assure that return value will be one of assigned values  :
        function disConds(num1, num2) {
            if (num1 === num2) {
                return 0;
            }
            else if (num1 > num2) {
                return 1;
            }
            else {
                return -1;
            }
        }
        // C] Calling the function of using  different Comparisonal values  : 
        console.log(disConds(20, 20) ) ;
        console.log(disConds(20, 15)) ;
        console.log(disConds(20, 30) ) ;
    }
    else if (z == 2) {
        alert(`welcome to Testing Create a custom [Type Alias variable] with [limited Literals values] and use it in define a {Variable datatype} with limited values       `);
        console.log(`welcome to Testing Create a custom [Type Alias variable] with [limited Literals values] and use it in define a {Variable datatype} with limited values      `);
        // B] Define several variables using the {Custom Type Aliase} as limited values  :
        let var1 = 0;
        let var2 = 1;
        let var3 = -1;
        // C] Printing all defined variables using type annotation of [Type Aliase] with [literal types]  :
        console.log(`First variable defined by using type annotation of [Type Aliase] with [literal types]  is :
                ${var1}            
                Second variable defined by using type annotation of [Type Aliase] with [literal types]  is :
                ${var2}            
                Third variable defined by using type annotation of [Type Aliase] with [literal types]  is :
                ${var3}                        
            `);
    }
    else {
        alert('no choice has been choosen! ');
    }
}
