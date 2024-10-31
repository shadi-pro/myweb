// [TS] lesson =>  10 Function Rest Parameter :

/* This lesson including following methods  :  
    1- Use the [Rest parameter] to [Array Type Annotation] & [Output Type] & [for{} loop] application
    2- Use the [Rest parameter] to [Array Type Annotation] & [Output Type] & [forEach{} loop] application
*/

function display() {
    let z: any = prompt(`Choose from the next methods  :
    1- Use the [Rest parameter] to [Array Type Annotation] & [Output Type] & [for{} loop] application
    2- Use the [Rest parameter] to [Array Type Annotation] & [Output Type] & [forEach{} loop] application
    `);


    if (z == 1) {
        alert(`welcome to Testing  Use the [Rest parameter] to [Array Type Annotation] & [Output Type] & [for{} loop] application `);
        console.log(`welcome to Testing  Use the [Rest parameter] to [Array Type Annotation] & [Output Type] & [for{} loop] application   `);
          
        // A]  Define the main function with using [Rest Parameter] & [Output DataType :string] :
        function sumRest ( ...myPars : number[] ) : string {
                    
            // Define a Variable to use it in Acummulating result with parameters number :
            let result = 0;
            
            // Looping inside the [Parameters array] of the [Rest Parameter] => {using for() Loop} :
            for (let  i = 0; i < myPars.length ; i++ ) {
                result += myPars[i] ;
            }
             
            // myPars.forEach( (num)=> result += num ) 

            // Printing the return of the function [as mixed string and number datatype] :
            return ` The final Result of function accumultation =  ${result} ` ;
        }

        // Calling the function  with using several numbers :
        console.log(` Calling the function with using several numbers [Normal numbers + Float numbers + numeric value of boolean value (1)] :
            ${sumRest(10 , 30 , 50 , 10.5 , +true)}
        `);
 
 
    } else if (z == 2) {
        alert(`welcome to Testing Use the [Rest parameter] to [Array Type Annotation] & [Output Type] & [forEach{} loop] application `);                
        console.log(`welcome to Testing Use the [Rest parameter] to [Array Type Annotation] & [Output Type] & [forEach{} loop] application `);                
 
        // A]  Define the main function with using [Rest Parameter] & [Output DataType : number] :
        function sumRest ( ...myPars : number[] ) :number {
            
            // Define a Variable to use it in Acummulating result with parameters number :
            let result = 0;
            
            // Looping inside the [Parameters array] of the [Rest Parameter] => {using forEach() Loop}  :
            myPars.forEach( (num)=> result += num ) 

            // Printing the return of the function [as a number datatype] :
            return result ;
        }
        
       // Calling the function  with using several numbers :
        console.log(` Calling the function with using several numbers [Normal numbers + Float numbers + numeric value of boolean value (1)] :
            ${sumRest(10 , 30 , 50 , 10.5 , +true)}
        `); 

      } else {
        alert ('no choice has been choosen! ');
    }

}

 
