"use strict";
// [TS] lesson =>   6 Type Annotations With Arrays :
// 6 Type Annotations With Arrays 
/* this including following methods  :
    1- using multiple certain type annotation within variable  definition
    2- using array type annotation within array definition [single array type annotation ]
    3- using {Any array} type annotation within array definition
*/
function display() {
    let z = prompt(`Choose from the next methods  :
    1- using multiple certain type annotation within variable  definition 
    2- using array type annotation within array definition [single array type annotation ]
    3- using array type annotation within array definition [Multiple array type annotation ]
    `);
    if (z == 1) {
        alert('welcome to [using multiple certain type annotation within variable definition ] ');
        // 1] Defining variable with [(2) : string | number] Mutilple of types of {Type Annotation} :  
        let strNumVar = 'shadi';
        // Printing the basic value [string] of the defined (before re-assigning) :
        console.log(`Defined variable by {mixed Types Annotation [string | number] (before re-assigning) } as following  : 
                ${strNumVar}
            `);
        // Re-Assigning new value [another of the available datatype in the definition (number)] to the defiened varaible  :
        strNumVar = 188;
        // Printing the changed value of the defiend (after re-assigning) :
        console.log(`Defined variable by {mixed Types Annotation [string | number] (after re-assigning) } as following  : 
                ${strNumVar}
            `);
        // -----------------------------
        // 2] Defining variable with [(3) : string | number | boolean] Mutilple of types of {Type Annotation} :  
        let strNumBolVar = 'shadi';
        // Printing the basic value [string] of the defined (before re-assigning) :
        console.log(`Defined variable by {mixed Types Annotation [string | number | boolean] (before re-assigning) } as following  : 
                ${strNumBolVar}
            `);
        // Re-Assigning new value [another of the available datatype in the definition (number)] to the defiened variable  :
        strNumBolVar = 188;
        // Printing the changed value of the defiend (after re-assigning) :
        console.log(`Defined variable by {mixed Types Annotation [string | number | boolean] (after re-assigning) } as following  : 
                ${strNumBolVar}
            `);
        // Re-Assigning new value [another of the available datatype in the definition (boolean)] to the defiened variable  :
        strNumBolVar = true;
        // Printing the changed value of the defiend (after re-assigning) :
        console.log(`Defined variable by {mixed Types Annotation [string | number | boolean] (after re-assigning) } as following  : 
                ${strNumBolVar}
            `);
    }
    else if (z == 2) {
        alert('welcome to [using array type annotation within array definition [single array type annotation ] ');
        // Defining array with [using single-string array Type Annotation ]  :
        let strArr = ['shadi', 'ali', 'ahmed'];
        // Looping inside the defined array [with single-string array type annotation] :
        for (let i = 0; i < strArr.length; i++) {
            console.log(strArr[i].repeat(3));
        }
        // Defining array with [using single-number array Type Annotation ]  :
        let numArr = [1, 3, 4];
        // Looping inside the defined array [with single-number array type annotation] :
        for (let i = 0; i < numArr.length; i++) {
            console.log(numArr[i]);
        }
    }
    else if (z == 3) {
        alert('Welcome to {Any array} type annotation within array definition   ');
        // [] Defining array with [using multiple-any Array Type Annotation] :
        let anyArr = ['shadi', 'ali', 'ahmed', 100, true];
        // Looping inside the defined array [with any Array type annotation] :
        for (let i = 0; i < anyArr.length; i++) {
            console.log(anyArr[i]);
        }
    }
    else {
        alert('no choice has been choosen! ');
    }
}
