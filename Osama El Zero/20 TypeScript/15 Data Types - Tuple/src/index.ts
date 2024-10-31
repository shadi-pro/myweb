// [TS] lesson =>  15 Data Types - Tuple :

/* This lesson including following methods  :  
    1- Define a Tuple with [Normal Mode] & Add new Element(s) & Destructuring Tuple & Printng elements  
    2- Define a Tuple with [Readonly Mode] & Destructuring Tuple  & Printng elements  
*/

function display() {
    let z: any = prompt(`Choose from the next methods  :
    1- Define a Tuple with [Normal Mode] & Add new Element(s) & Destructuring Tuple & Printng elements  
    2- Define a Tuple with [Readonly Mode] & Destructuring Tuple  & Printng elements  
    `);


    if (z == 1) {
        alert(`welcome to Testing Define a Tuple with [Normal Mode] & Add new Element(s) & Destructuring Tuple & Printng elements  `);
        console.log(`welcome to Testing Define a Tuple with [Normal Mode] & Add new Element(s) & Destructuring Tuple & Printng elements   `);
          
        // A]  Define a Tuple using [Normal Mode] :
            let tupleN : [string, number , boolean] = ['shadi' , 100 , true] ;             
        
        // B]  Printing the Tuple elements :
            console.log(`
            First Tuple's Indexed Element value is ${tupleN[0]}
            Second  Tuple's Indexed Element value is ${tupleN[1]}
            Third Tuple's Indexed Element value is ${tupleN[2]}
            `)

        // C]  Add new element into a Tuple using [push()] Method :
            tupleN.push(false) ; 
 
        // D] Printing All Tuple elements after adding new elements :
            console.log (tupleN) ; 
 
        // E] Destructuring the Tuple :
           const [name , id , status] = tupleN;

          
        // D] Printing Tuple Destructured elements :
          console.log(`
            Name Destructured Element value is ${name}
            Id Destructured Element value is ${id}
            Status Destructured Element value is ${status}
          `)
 

    } else if (z == 2) {
        alert(`welcome to Testing Define a Tuple with [Readonly Mode] & Destructuring Tuple & Printng elements `);  
        console.log(`welcome to Testing Define a Tuple with [Readonly Mode] & Destructuring Tuple & Printng elements `);  
  
        // A] Define a Tuple using [Readonly Mode] :
        let tupleN : readonly [string, number , boolean] = ['shadi' , 100 , true] ;             
        
        // B] Printing the [readonly Tuple] elements :
            console.log(`
            First Tuple's Indexed Element value is ${tupleN[0]}
            Second  Tuple's Indexed Element value is ${tupleN[1]}
            Third Tuple's Indexed Element value is ${tupleN[2]}
            
            All Tuple's Elements values are ${tupleN}
            `)

        // *] Can Not => Add new element into a [readonly Tuple]   :
            // tupleN.push(false) ; 
 
         
        // C] Destructuring the [readonly Tuple] :
           const [name , id , status] = tupleN;

          
        // D] Printing [readonly Tuple] Destructured elements :
          console.log(`
            Name Destructured Element value is ${name}
            Id Destructured Element value is ${id}
            Status Destructured Element value is ${status}
          `)
 
        } else {
        alert ('no choice has been choosen! ');
    }
}
 