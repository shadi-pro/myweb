// 24 Symbol Part 1 :
/* Main lessons functions :
  1- Basic syntax [Defining + Assigning description ] of the Symbols variables datatype
  2- Practical Examples on usages of symbols with objects and properites 
*/
  // ---------------------------------------------------------------------

// 24 Symbol Part 1:

function myTest() {
  "use strict";
  alert("Welcome to 24 Symbol Part 1");

  var dis = document.getElementById("note");

  var x = prompt(
    ` Please choose one of following functions from below  :
    1- Basic syntax [Defining + Assigning description ] of the Symbols variables datatype
    2- Practical Examples on usages of symbols with objects and properites `
    );

  if (x == 1) {
  
    basicSymb();
  
  } else if (x == 2) {
  
    usgPropsSymb();

  // } else if (x == 3) {
    
    // mapHas();
    
  // } else if (x == 4) {

    // mapDelete();

  // } else if (x == 5) {

    // mapClear();

  // } else if (x == 6) {

    // setSpread();

  } else {
    alert("No option has been selected !");
  }
  // =========================================================================

  // 1] Basic syntax [Defining + Assigning description ] of the Symbols variables datatype :
  function basicSymb() {
    alert(
      "Welcome to Basic syntax [Defining + Assigning description ] of the Symbols variables datatype  "
    );

    dis.innerHTML = "";

    // Defining Empty Symbol variable   :
      const mySmb  = Symbol();   
      
    // Getting the datatype of the symbol variable :
        console.log(`The datatype of the Symbol variable`) ;   
        console.log(typeof mySmb) ;   
        // dis.innerHTML += `The datatype of the Symbol variable ${typeof mySmb} ` ;   
        // dis.innerHTML += `The datatype of the Symbol variable ${typeof mySmb} ` ;   

    // Printing the symbol variable :
        console.log(`The Symbol variable is : `) ;   
        console.log(mySmb) ;   
        
        // dis.innerHTML += `The  Symbol variable ` ;   
        // dis.innerHTML += mySmb  ;   


    // Defining Empty Symbol variable with description   :
      const mySmb1  = Symbol('Testing');   
      
  
    // Printing the symbol variable with description  :
        console.log(`The  Symbol variable `) ;   
        console.log(mySmb1) ;   
        // dis.innerHTML += `The  Symbol variable ${mySmb1} ` ;   
    //  -------------------------------------------
  }

  // =============================================================
  // 2] Practical Examples on usages of symbols with objects and properites  :
  function usgPropsSymb() {

      alert(
        "Welcome to Practical Examples on usages of symbols with objects and properites    "
      );

      dis.innerHTML = "";

      // Defining Empty Symbol variable with description   :
      const mySmb  = Symbol('Testing');   
    
      // Defining object using Symbol variable as one of it's property keyname  [Dynamic property keyname]  :
      let myObj  = {
        username : 'Shadi' ,
        website : 'shadi.com' ,
        [mySmb] : 'This is symbol variable Dynamic property keyname '
      };   
    
    // 1] Checking if the symbols variable is identically equaled:
      // Declaring (2) variables with the same type of Symbols datatypes :
        const mySymbolOne = Symbol('testing1'),
              mySymbolTwo = Symbol('testing2') ;

      // Printing the Result of Identiacal Equality of the both Symbols Variables object :
        console.log(mySymbolOne === mySymbolTwo ) ;  // => [Display {False} because of each one is unique] 
    // ---------------------------------------------------
      
    // 2] Checking if the symbols property keynames within the object can be displayed [using severals methods]:
      // a) Declaring another object and Symbol variable for Testing : 
        const mysymbol = Symbol('NewTesting');
      
        const myTestObj = {
          username : 'Shadi' , 
          website : 'shadi.com' , 
          [mysymbol] : 'This is the symbol varialbe to be hidden from user'  
        };
    
      // b) Looping inside the object properties using {for(){} } & expression {Object.enteries(objName)} Method : 
        // for (let val of Object.enteries(myTestObj) ) {
        //   console.log(val); // => [This Display all object properites except the symbol property keyname   ] 
        // }
    
      // c) Printing the object's all properties using Expression { Object.getOwnPropertyNames(objName) } Method : 
        console.log( Object.getOwnPropertyNames(myTestObj) ); 

      // d) Printing the object's all properties's keynames using Expression {Object.keys(objName)} Method : 
        console.log( Object.keys(myTestObj) ); 

      // e) Printing the object's all properties in form of string using Expression {JSON.stringfy(objName)} Method : 
        console.log( JSON.stringify(myTestObj) ); 

    
      // f) Printing the object's only properties of symbols using Expression {Object.getOwnPropertySymbols(objName)} method : 
        console.log( Object.getOwnPropertySymbols(myTestObj) ); 

        
      // g) Printing the object's whole properties including symbols using Expression {Object.getOwnPropertySymbols(objName)} method : 
        console.log( myTestObj ); 

  }
  
  // =============================================================

  // =============================================================

}

function display() {
  document.getElementById("note").innerHTML =
    myTest + "\n\n" + "=".repeat(90) + "\n\n";
}
