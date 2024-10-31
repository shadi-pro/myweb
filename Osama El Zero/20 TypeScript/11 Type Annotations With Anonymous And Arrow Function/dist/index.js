"use strict";
// [TS] lesson =>  11 Type Annotations With Anonymous And Arrow Function :
/* This lesson including following methods  :
    1-  Define a variable {Anonymous} function with Type Annotation
    2-  Define a variable {Arrow} function with Type Annotation
*/
function display() {
    let z = prompt(`Choose from the next methods  :
        1-  Define a variable {Anonymous} function with Type Annotation  
        2-  Define a variable {Arrow} function with Type Annotation       
    `);
    if (z == 1) {
        alert(`welcome to Testing Define a variable {Anonymous function} with Type Annotation & Output Datatype   `);
        console.log(`welcome to Testing Define a variable {Anonymous function} with Type Annotation & Output Datatype `);
        // A]  Define variable { Anonymous} function with using [Tyhpe Annotation] & [Output DataType :number] :
        const anoFunc = function (num1, num2) {
            //   :
            return num1 + num2;
        };
        // Calling the Anonymous Function :
        console.log(anoFunc(10, 20));
    }
    else if (z == 2) {
        alert(`welcome to Testing Define a variable {Arrow function} with Type Annotation & Output Datatype  `);
        console.log(`welcome to Testing Define a variable {Arrow function}  with Type Annotation & Output Datatype  `);
        const aroFunc = (num1, num2) => num1 + num2;
        console.log(aroFunc(10, 20));
    }
    else {
        alert('no choice has been choosen! ');
    }
}
