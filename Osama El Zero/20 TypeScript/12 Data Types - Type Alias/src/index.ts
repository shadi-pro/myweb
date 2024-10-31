// [TS] lesson =>  12 Data Types - Type Alias :

/* This lesson including following methods  :  
    1-  Define a variable with Type Annotation of defined [Single Type Aliase]   
    2-  Define a variable with Type Annotation of defined [Multiple Type Aliase]   
*/

function display() {
    let z: any = prompt(`Choose from the next methods  :
    1-  Define a variable with Type Annotation of defined [Single Type Aliase]   
    2-  Define a variable with Type Annotation of defined [Multiple Type Aliase]    
    `);


    if (z == 1) {
        alert(`welcome to Testing Define a variable with Type Annotation of defined [Single Type Aliase] `);
        console.log(`welcome to Testing Define a variable with Type Annotation of defined [Single Type Aliase] `);
          
        // A]  Define a {Single Type Aliase} of datatype [string] :
        type str = string ; 
        
        // B]  Define variable with type annotation of defined type Aliase [string] :
        let singleString : str = 'shadi'; 
        
        // Re-assignment of the defined varaible with [another string value] :
        singleString = 'ali';

        // Printing the defined variable with defined [Single Type Aliase] after {Re-assignment}  :
        console.log( singleString); 
 
    } else if (z == 2) {
        alert(`welcome to Testing Define a variable with Type Annotation of defined [Multiple Type Aliase] `);  
        console.log(`welcome to Testing Define a variable with Type Annotation of defined [Multiple Type Aliase] `);  
 
        // A]  Define a {Multiple Type Aliase} of datatypes [string] & [number] :
        type strNum = string | number ; 
        
        // B]  Define variable with one Type Annotation of of defined types Aliase [string] || {number} :
        let mulVar : strNum = 'shadi'; 
        
        // Printing the defined variable with Type Annotation of defined [Multiple Type Aliase] {main value}  :
        console.log( mulVar); 
 
        // Re-assignment of the defined variable with another value of available datatypes in defined [Multiple Type Aliase]  :
        mulVar = 50 ;
        
        // Printing the defined variable with Type Annotation of defined [Multiple Type Aliase] after {Re-assignment}  :
        console.log( mulVar); 
         
      } else {
        alert ('no choice has been choosen! ');
    }

}
 