// 19 Enhanced Object Literals:
/* Main lessons functions :
  1- Shorthand object property VALUE [incase of assigning predefined ] by using [old JS] & [new ES6]
  2- Shorthand in Object method syntax by using [old JS] & [new ES6]  
  3- Shorthand in Assigning Computed object property's KEYNAME by using [old JS] & [new ES6]
*/
// ---------------------------------------------------------------------

// 19 Enhanced Object Literals:

function myTest() {
  "use strict";
  alert("Welcome to 19 Enhanced Object Literals");

  var dis = document.getElementById("note");

  var x = prompt(
    ` Please choose one of following functions from below  :
    1- Shorthand object assigning property VALUE [incase of assigning predefined ]
    2- Shorthand in Object method syntax
    3- shorthand in Assigning Computed dynamic object property's KEYNAME 
    `
  );

  if (x == 1) {
  
    ObjAssVarProp();
  
  } else if (x == 2) {
  
    ObjDefMethod();

  } else if (x == 3) {

    objDynPropKeyName();

  // } else if (x == 4) {

  // desArrRes();

  // } else if (x == 5) {

  // allFuncsObj();

  } else {
    alert("No option has been selected !");
  }

  // =========================================================================

  // 1] Shorthand object assigning property [incase of assigning predefined ] => [by using old JS] & [ES6]  :
  function ObjAssVarProp() {
    alert(
      "Welcome to Using Shorthand object assigning property's VALUES [incase of assigning predefined ] => [by using old JS] & [ES6]  "
    );

    dis.innerHTML = "";

    // Defining external variable :
      const username  = 'shadi',   
          city  = 'cairo';   
    
    
    // Defining main  Object including properties VALUES of predefined variables [by using old Js] :
    const obj = {
      username : username,
      city : city  
    } ;

    // Defining main Object including properties VALUES with predefined variables [by using ES6 Js] :
    const obj1 = {
      username,
      city  
    } ;
      
    // printing the  Object after adding new properties of perdifed variables by using [old JS] & [ES6] :
    
    console.log('1] Object [by using old JS] as following : ');
    console.log(obj);
    
    console.log('1] Object [by new ES6 JS] as following : ');
    console.log(obj1);

    
    dis.innerHTML += `1] Object [by using old JS] as following :  `;
    dis.innerHTML +=  obj ;
    dis.innerHTML += `1] Object [by using new ES6 JS] as following : `;
    dis.innerHTML +=   obj1 ;
  }

  // =============================================================
    // 2] Shorthand in Object method syntax by using [old JS] & [new ES6] :
  function ObjDefMethod() {

      alert(
        "Welcome to Using Shorthand in Object method syntax by using [old JS] & [new ES6] "
      );

      dis.innerHTML = "";

     // Defining main Object including method [by using old js] :
     const obj = {
      myMethod : function(param) {
        return param;  
      } 
    } ;

    // Defining main Object including method [by using new ES6 js] :
     const obj1 = {
      myMethod (param) {
        return param;  
      }  
    } ;

  // Printing the object's method :
    console.log(`2] Object method return by [using old] JS :`);
    console.log(obj.myMethod('This is the return of the object method from parameter'));
    
    console.log(`2] Object method return by shorthand method [using new ES6] JS :`)
    console.log(obj1.myMethod('the return of the object method from parameter'));

    
    dis.innerHTML += `2] Object's method [by using old JS] as following :  `;
    dis.innerHTML +=  obj.myMethod('This is the return of the object method by old JS from parameter')  ;
    dis.innerHTML += `2] Object's method [by using new ES6 JS] as following : `;
    dis.innerHTML +=  obj1.myMethod('This is the return of the object by new ES6 JS from parameter') ;

  }
  
  
  // =============================================================
    // 3] Shorthand in Assigning Computed object property's keyname by using [old JS] & [new ES6] :
    function objDynPropKeyName() {

      alert(
        "Welcome to Using Shorthand in Assigning Computed object property's KEYNAME by using [old JS] & [new ES6] "
      );

      dis.innerHTML = "";

  // Define the variable to be used into assign new property KEYNAME  :   
    const myVar = 'newKey';

  // Defining main Object [by old method ]  :
     const obj = {
      username : 'shadi'
    } ;
    
    // Adding and Assign new property's KEYNAME Dynamically (the value of predefined varaible) to the object by [using old Js] :
    obj[myVar] = 'Prop value';     

  
  // Defining main Object with shorthand method to add new property KEYNAME [by using Dynamic predefined variable value]  by using [ES6] :
     const obj1 = {
      username : 'shadi',
      [myVar] : 'Prop value' 
    } ;

  // Printing the object by both the methods of [old Js] & [ES Js] :
 
    console.log(`3] Object including computed dynamic KEYNAME  by using [old JS] : `) ;  
    console.log(obj);
    
    
    console.log(`3] Object including computed dynamic KEYNAME  by using [new ES6 JS] : `) ; 
    console.log(obj1);
  
 
    dis.innerHTML += `3] Object including computed dynamic KEYNAME  by using [old JS] : ` ;
    dis.innerHTML +=   obj ;    
    dis.innerHTML += 'Object including computed dynamic KEYNAME  by using new [ES6 JS] :' ;
    dis.innerHTML +=   obj1 ;  

  }  

  // =============================================================

  // 4] Destructuring Array's Elements with [ Rest operator with simple array] :
  
  // =============================================================
}

function display() {
  document.getElementById("note").innerHTML =
    myTest + "\n\n" + "=".repeat(90) + "\n\n";
}
