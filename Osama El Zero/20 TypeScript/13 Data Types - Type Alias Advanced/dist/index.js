"use strict";
// [TS] lesson =>  13 Data Types - Type Alias Advanced :
/* This lesson including following methods  :
    1- Defining an object of [Type Alieses] & using it within a function of multiple datatypes & Type it
    2- Defining an object of [Type Alieses] & another {Extended Object} of [Type Aliases] using it within a function of multiple datatypes & Type it
    3- Defining an object of [Type Alieses] & another {Extended Object} of [Type Aliases] using it within several variables datatypes & Type it
*/
function display() {
    let z = prompt(`Choose from the next methods  :
    1- Defining an object of [Type Alieses] & using it within a function of multiple datatypes & Type it    
    2- Defining an object of [Type Alieses] & a nother {Extended Object} of [Type Aliases] using it within a function of multiple datatypes & Type it          
    3- Defining an object of [Type Alieses] & another {Extended Object} of [Type Aliases] using it within several variables datatypes & Type it
    `);
    if (z == 1) {
        alert(`welcome to Testing Defining an object of [Type Alieses] & using it within a function of multiple datatypes & Type it   `);
        console.log(`welcome to Testing Defining an object of [Type Alieses] & using it within a function of multiple datatypes & Type it   `);
        // B]  Define main function using the defiend [object of type alieses] with one paremeter  :
        function getValues(par) {
            console.log(` the value of the first [object of type alieses] is :  ${par.als1} `);
            console.log(` the value of the second [object of type alieses] is :  ${par.als2} `);
            console.log(` the value of the third [object of type alieses] is :  ${par.als3} `);
            console.log(` the value of the fourth [object of type alieses] is :  ${par.als4} `);
        }
        // C] Calling the function of using the defeined [object type aliaes] with assigning values of the function : 
        getValues({
            als1: 'shadi',
            als2: 100,
            als3: 'shadi',
            als4: true,
        });
    }
    else if (z == 2) {
        alert(`welcome to Testing Defining an object of [Type Alieses] & a nother {Extended Object} of [Type Aliases] using it within a function of multiple datatypes & Type it  `);
        console.log(`welcome to Testing Defining an object of [Type Alieses] & a nother {Extended Object} of [Type Aliases] using it within a function of multiple datatypes & Type it  `);
        // C]  Define main function using the {EXTENDED} defiend [object of type alieses] with one paremeter  :
        function getValues(par) {
            console.log(` the value of the first [object of type alieses] is :  ${par.als1} `);
            console.log(` the value of the second [object of type alieses] is :  ${par.als2} `);
            console.log(` the value of the third [object of type alieses] is :  ${par.als3} `);
            console.log(` the value of the fourth [object of type alieses] is :  ${par.als4} `);
            console.log(` the value of the Fifth [object of type alieses] is :  ${par.x} `);
        }
        // D] Calling the function of using the defeined [object type aliaes] with assigning values of the function : 
        getValues({
            als1: 'shadi',
            als2: 100,
            als3: 'shadi',
            als4: true,
            x: false
        });
    }
    else if (z == 3) {
        alert(`welcome to Testing Defining an object of [Type Alieses] & another {Extended Object} of [Type Aliases] using it within several variables datatypes & Type it`);
        console.log(`welcome to Testing Defining an object of [Type Alieses] & another {Extended Object} of [Type Aliases] using it within several variables datatypes & Type it`);
        // Define new variables using one property of [Type Aliases Object] ^& property of [Type Aliases Extended Object] :
        let var1 = 'shadi', var2 = 500, var3 = 'syaed', var4 = false, var5 = true;
        // Printing the defined varialbles by using object of  [Type Aliases Object] :   
        console.log(`
                First varialbe is ${var1}
                Second varialbe is ${var2}
                Third varialbe is ${var3}
                Fourth varialbe is ${var4}
                Fifth varialbe is ${var5}
            `);
    }
    else {
        alert('no choice has been choosen! ');
    }
}
