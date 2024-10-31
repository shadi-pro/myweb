
// This is the {export.js} Module :

 /* General Steps ;
    >> Creating Class with propeties and mehtods [using ES6] :
    >> Exporting Class into another Module :
    -> Import it with in the other Module {import.js} 
    -> Extending the imnported Class into a child Class :      
 */


//  Creating new Class [by using ES6] method :
    class User {
        constructor(name , email) {
            this.name = name ;
            this.email = email; 
            this.age = age; 
            this.city = city; 
        } 

        //  Creating new First method :
        getInfo1(){
            console.log(` Hello from the First Method construction function : 
            Your name is ${this.name} 
            Your email is ${this.email} 
            `);           
        }

        // Creating new Second method :
        getInfo2()  {
            console.log(` Hello from the Second Method construction function : 
                Your Age is : ${this.age}            
                Your City is : ${this.city}            
            `);
        }
    }
// -----------------------------------

// Extracting a new object from the created class :
    const newObj = new User('Shadi' , 'sayed@gmail.com');

// Executing the extracted object' First Method [without any parameters]  :
    newObj.getInfo1();

// Executing the extracted object' Second Method [without any parameters] :
    newObj.getInfo2();


// ------------------------------------
// Exporting the created Class by using default method : 
    export default User;
// -----------------------------------

