
// This is the {import.js} Module :
    
 /* General Steps ;
    -> Exporting Class into another Module :
    ->> Import it with in the other Module {import.js} 
    >> Extending the imnported Class into a child Class :      
 */

// Importing the exported Element from {export.js} :
import User from './export' ; 
// -------------------------------------------------


// Extending a [new child class {Admin} from the [imported parent Class {User} ] :
class Admin extends User {
    // Adding Main Child Class properties into the consturctor  : 
    constructor(name, email, age , city) {

        // using {super(prop1 , prop2 , prop3 , prop4) method } for Calling certian Inherited  properties'values  from Extended class {User} [as a shortcut method] into the new Class {Admin}   : 
        super(name , email , age , city);

    }
}

// Extracting new object from extended Parent class :
let fObj = new Admin('Shadi' , 'shadi@gmail.com' , 33 , 'cairo');


// Printing/Accessing [Inherited Properties] of {extracted object} from the {new child Class} :
    console.log(`
    Extracted Object from Extended Class's first property is ${fObj.name} 
    Extracted Object from Extended Class's second property is ${fObj.email} 
    Extracted Object from Extended Class's third property is ${fObj.age} 
    Extracted Object from Extended Class's fourth property is ${fObj.city} 
`) ;

// Printing/Accessing functional From of [Inherited Methods] of extracted object :
    console.log(`
    Extractd Object from Extended Class's First method is ${fObj.getInfo1} 
    Extractd Object from Extended Class's Second method is ${fObj.getInfo2} 
    `) ;
 
// Executing the methods of the extracted object's first method : 
    fObj.getInfo1();

// Executing the methods of the extracted object's second method : 
    fObj.getInfo2();


// Printing the Prototype of the Extended Class :
    console.log(Admin.prototype);
// ----------------------------------------------------------------------



