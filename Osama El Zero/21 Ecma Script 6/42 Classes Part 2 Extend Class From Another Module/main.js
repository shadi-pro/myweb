// 42 Classes Part 2 Extend Class From Another Module :

 /* General Steps ;
    > Exporting Class into another Module :
    -> Import it with in the other Module {import.js} 
    -> Extending the imported Class into a child Class
 */

 // ---------------------------------------------------------------------

 // 42 Classes Part 2 Extend Class From Another Module:

function myTest() {
  "use strict";
  alert("Welcome to 42 Classes Part 2 Extend Class From Another Module");

  var dis = document.getElementById("note");

  var x = prompt(
    ` Please choose one of following functions from below  :
    =>> Creating new class in a module -> import it in a new module -> Extend new class from the imported parent classes , as following steps :
     > Exporting Class into another Module :
    -> Import it with in the other Module {import.js} 
    -> Extending the imported Class into a child Class :      
    `
  );

  if (x == 1) {
    extendClassImpClass();
  
  // } else if (x == 2) {
  
    // newConstructor();
  
  // } else if (x == 3) {
 
    // arrCopyWitin();

  // } else if (x == 4) {
    // MapWeakMapForEach();
  // } else if (x == 5) {
    // MapWeakMapDeletNull();

    // } else if (x == 6) {

    // setSpread();
  } else {
    alert("No option has been selected !");
  }
  // =========================================================================

  // 1] Use { the old method to create the constructor function } => and all it's relaated methods   :
  
  // function oldConstructor() {
  //   alert(
  //     "Welcome to Use Use { the old method to create the constructor function } => and all it's relaated methods   "
  //   );

  //   dis.innerHTML = "";

  //     // Defining main Constructor function using [old method ] : 
  //       function User(name ,age) {
  //         this.name = name;
  //         this.age = age;
  //       }

  //     // Defining new first method of the Constructor function by usinig  [old JS Method] :
  //       User.prototype.getInfo = function () {
  //           console.log(` Hello ${this.name}
  //           Your age is ${this.age}
  //         `) ;
  //       } 

  //     // Defining new Second method of the Constructor function by using  [old JS Method] :
  //       User.prototype.getDays  = function () {
  //           console.log(` Your age by days is ${this.age * 365}
  //         `) ;
  //       } 

  //     // Printing the main prototype of the constructor function  :
  //       console.log( User.prototype); 
        
        
  //     // Exracting new objects from the Contructor function [using old method + new method] : 
  //       const firstUser = new User('Shadi' , 36);

  //     // Executing/running  the first method of the new created objects [using old method + new method] :   
  //       firstUser.getInfo();
  
  //     // Executing/running the second method of the new created objects [using old method + new method] :   
  //      firstUser.getDays();  
        
  //     // Printing the Extracted Object's {Properties}  [using old method + new method] : 
  //       console.log( `The first property of the constructor function is [as one property of the exracted object of the constuctor function ]  : `);
  //       console.log(firstUser.name);
        
  //       console.log( `The second property of the constructor function is [as one property of the exracted object of the constuctor function ]  : `);
  //       console.log(firstUser.age);

  //     // Printing the Extracted Object's {Methods} syntax [using old method + new method] : 
  //       console.log( `The first method syntax of the constructor function  is [as one method of the exracted object of the constuctor function ] : `);  
  //       console.log(firstUser.getDays);
        
  //       console.log( `The second method syntax of the constructor function  is [as one method of the exracted object of the constuctor function ] : `);  
  //       console.log(firstUser.getInfo);

  
  //   // printing a seperator :  
  //   console.log(` ${"=".repeat(90)} `) ;
  //   //  -------------------------------------------
  // }
  
  // =============================================================
  // =============================================================
  // =============================================================
  // ===========================================================
}

function display() {
  document.getElementById("note").innerHTML =
    myTest + "\n\n" + "=".repeat(90) + "\n\n";
}
