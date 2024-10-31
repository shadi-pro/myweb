// 41 Classes Part 1 Old and New Syntax :

/* Main lessons functions :
  1- Use { the old method to create the constructor function } => and all it's relaated methods 
  2- Use { the new ES6 method to create the constructor function  } => and all it's relaated methods
  */
 // ---------------------------------------------------------------------

 // 41 Classes Part 1 Old and New Syntax:

function myTest() {
  "use strict";
  alert("Welcome to 41 Classes Part 1 Old and New Syntax");

  var dis = document.getElementById("note");

  var x = prompt(
    ` Please choose one of following functions from below  :
    1- Use { the old method to create the constructor function } => and all it's relaated methods 
    2- Use { the new ES6 method to create the constructor function   } => and all it's relaated methods
    `
  );

  if (x == 1) {
    oldConstructor();
  
  } else if (x == 2) {
  
    newConstructor();
  
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
  
  function oldConstructor() {
    alert(
      "Welcome to Use Use { the old method to create the constructor function } => and all it's relaated methods   "
    );

    dis.innerHTML = "";

      // Defining main Constructor function using [old method ] : 
        function User(name ,age) {
          this.name = name;
          this.age = age;
        }

      // Defining new first method of the Constructor function by usinig  [old JS Method] :
        User.prototype.getInfo = function () {
            console.log(` Hello ${this.name}
            Your age is ${this.age}
          `) ;
        } 

      // Defining new Second method of the Constructor function by using  [old JS Method] :
        User.prototype.getDays  = function () {
            console.log(` Your age by days is ${this.age * 365}
          `) ;
        } 

      // Printing the main prototype of the constructor function  :
        console.log( User.prototype); 
        
        
      // Exracting new objects from the Contructor function [using old method + new method] : 
        const firstUser = new User('Shadi' , 36);

      // Executing/running  the first method of the new created objects [using old method + new method] :   
        firstUser.getInfo();
  
      // Executing/running the second method of the new created objects [using old method + new method] :   
       firstUser.getDays();  
        
      // Printing the Extracted Object's {Properties}  [using old method + new method] : 
        console.log( `The first property of the constructor function is [as one property of the exracted object of the constuctor function ]  : `);
        console.log(firstUser.name);
        
        console.log( `The second property of the constructor function is [as one property of the exracted object of the constuctor function ]  : `);
        console.log(firstUser.age);

      // Printing the Extracted Object's {Methods} syntax [using old method + new method] : 
        console.log( `The first method syntax of the constructor function  is [as one method of the exracted object of the constuctor function ] : `);  
        console.log(firstUser.getDays);
        
        console.log( `The second method syntax of the constructor function  is [as one method of the exracted object of the constuctor function ] : `);  
        console.log(firstUser.getInfo);

  
    // printing a seperator :  
    console.log(` ${"=".repeat(90)} `) ;
    //  -------------------------------------------
  }
  // =============================================================
  
  // 2] Use { the new ES6 method to create the constructor function  } => and all it's relaated methods  : 
  
  function newConstructor() {
    alert(
      "Welcome to Use { the new ES6 method to create the constructor function  } => and all it's relaated methods  "
    );

    dis.innerHTML = "";
    
    // Defining A new Class : 
      class User {
        
        constructor (name , age) {
          this.name = name;
          this.age = age;
        }
      
        // Define the first method of the constructor function :
          getInfo() {
            console.log( ` Hello ${this.name} , your age ${this.age}  ` );
          }
          
        // Define the second method of the constructor function :
          getDays() {
            console.log( `Your Age by Days is :  ${this.age * 365} Days ` );
          }
      }

      // Printing the main prototype of the constructor function [Using old method + new method] :
        console.log( User.prototype);  
        
      // Exracting new objects from the Contructor function [using old method + new method] : 
        const firstUser = new User('Shadi' , 36);

      // Executing/running the first method of the new created objects [using old method + new method] :   
       firstUser.getInfo();
  
      // Executing/running the second method of the new created objects [using old method + new method] :   
       firstUser.getDays();  
        
      // Printing the Extracted object's {Properties} [using old method + new method] : 
        console.log( `The first property of the constructor function is [as one property of the exracted object of the constuctor function ]  : `);
        console.log(firstUser.name);

        console.log( `The second property of the constructor function is [as one property of the exracted object of the constuctor function ] : `);
        console.log(firstUser.age);
    
    // Printing the Extracted Object's {Methods} [using old method + new method] : 
        console.log( `The first method of the constructor function  is [as one method of the exracted object of the constuctor function ] : `);
        console.log(firstUser.getDays);
        
        console.log( `The second method of the constructor function  is [as one method of the exracted object of the constuctor function ] : `);
        console.log(firstUser.getInfo);

        
    // Printing a seperator :
    console.log(` ${"=".repeat(90)} `) ;

    //  -------------------------------------------
  }
  // =============================================================  
  // =============================================================
  // =============================================================
  // ===========================================================
}

function display() {
  document.getElementById("note").innerHTML =
    myTest + "\n\n" + "=".repeat(90) + "\n\n";
}
