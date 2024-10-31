"use strict";
// [TS] lesson =>  22 Interface Declaration :
/* This lesson including following methods  :
    1-  Define an Object with data annotation of defined {Interface} object , with using [readonly , optional]
    2-  Define a function with data annotation of defined {Interface} object , with using [readonly , optional]
    */
function display() {
    let z = prompt(`Choose from the next methods  :
       1-  Define an Object with data annotation of defined {Interface} object , with using [readonly , optional]
       2-  Define a Function with data annotation of defined {Interface} object , with using [readonly , optional]
     `);
    if (z == 1) {
        alert(`welcome to Test Define an [Object] with data annotation of defined {Interface} object , with using [readonly , optional]   `);
        console.log(`welcome to Test Define an [Object] with data annotation of defined {Interface} object , with using [readonly , optional]  `);
        // B] Define an Object with using datatype annotation of defined {Interface object}  : 
        let myObj = {
            id: 100,
            username: 'shadi',
            country: 'Egypt'
        };
        // C] Re-assining / Modifying the object's properties  : 
        myObj.id = 1000;
        // myObj.username => [can not e modifed ,due it is a readonly ]
        myObj.country = 'KSA';
        // D] Access and print the object's porperties after modification   : 
        console.log(`
                First object's property modfied value  ${myObj.id}
                Second object's property modfied value  ${myObj.username}
                Thrid object's property modfied value  ${myObj.country} 
            `);
    }
    else if (z == 2) {
        alert(`welcome to Test Define a Function with data annotation of defined {Interface} object , with using [readonly , optional]  `);
        console.log(`welcome to Test  Define a Function with data annotation of defined {Interface} object , with using [readonly , optional] `);
        // B] Define a Function  with using parmneter of datatype annotation of defined {Interface object}  : 
        function showData(data) {
            console.log(`
                    The id is ${data.id}
                    The username is ${data.username}
                    The country is ${data.country}
                `);
        }
        ;
        // C] Execut and print the Function with  ( paramter used the  Interface object used in  defining the datatype  : 
        showData({ id: 1515, username: 'Shadi', country: 'Syria' });
    }
    else {
        console.log('No valid choice!');
    }
}
