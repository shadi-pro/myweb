// 31 Custom Iterable Object :

/* Main lessons functions :
  1- Create custom iterable object with custom iterartion rules -> Iterating inside the custom object to get the [properties keys names]
  2- Create custom iterable object with custom iterartion rules -> Iterating inside the custom object to get the [properties values]  
*/
// ---------------------------------------------------------------------

// 31 Custom Iterable Object:

function myTest() {
  "use strict";
  alert("Welcome to 31 Custom Iterable Object");

  var dis = document.getElementById("note");

  var x = prompt(
    ` Please choose one of following functions from below  :
    1- Create custom iterble object with custom iterartion rules -> Iterating inside the custom object to get the [properties keys names]
    2- Create custom iterble object with custom iterartion rules -> Iterating inside the custom object to get the [properties values]   
    `
  );

  if (x == 1) {
    custObjKeys();
  
  } else if (x == 2) {
  
    custObjValues();
  
  // } else if (x == 3) {
  
    // forOfLoop();

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

  // 1] Create custom iterable object with custom iterartion rules -> Iterating inside the custom object to get the [properties keys names] :
  
  function custObjKeys() {
    alert(
      "Welcome to Create custom iterable object with custom iterartion rules -> Iterating inside the custom object to get the [properties keys names] "
    );

    dis.innerHTML = "";

    // Defining main custom object :
      let myObj = {
        name : 'shadi' ,
        age : 25 ,
        website : 'shadipro.com' ,
        country : 'Egypt' ,
        favSkill : 'JS' ,
      
        // Defining method of name of [Symbol.iterator] : 
        [Symbol.iterator] () {
      
          // Defining counter variable :
          let step = 0; 
      
          // Defining properties variable of the of this Object's keys :  
          let properties =  Object.keys(this) ;
      
          // Assigning a [Symbol.iterator]'s function's return with value of next() method [containing properties: value  , done] : 
          return {
            next() { 
              /* Definging next() method return of:
               [value]: including properties variables [This object's keys values] with counter [step variable] 
               [done] : including counter increament and conditional True boolean value in case of the counter === object's keys length ]
              */
               return {
                value : properties[step] ,
                done: step++ === properties.length
              }
            }        
          } 
        }
      }
    // Printing the object elements :  
      console.log(myObj);
      dis.innerHTML += myObj ;
    //  -------------------------------------------
    
    // Iterating/Looping on object elements using [{for of}] => to print the [object keys names] :  
      for (let elem of myObj) {
        console.log(elem);
        dis.innerHTML += elem ;
      }    
    //  -------------------------------------------
  }
  // =============================================================

  // 2] Create custom iterable object with custom iterartion rules -> Iterating inside the custom object to get the [properties values] :
  
  function custObjValues() {
    alert(
      "Welcome to Create custom iterble object with custom iterartion rules -> Iterating inside the custom object to get the [properties values]   "
    );

    dis.innerHTML = "";
    
    // Defining main custom object :
    let myObj = {
      name : 'shadi' ,
      age : 25 ,
      website : 'shadipro.com' ,
      country : 'Egypt' ,
      favSkill : 'JS' ,
      
      // Defining method of name of [Symbol.iterator] : 
      [Symbol.iterator] () {
      
        // Defining counter variable :
        let step = 0; 
      
        // Defining properties variable of the of this Object's keys :  
        let properties =  Object.keys(this);
      
        // Assigning a [Symbol.iterator]'s function's return with value of next() method [containing properties: value  , done] : 
        return {
          next() { 
            /* Definging next() method return of:
              [value]: Including  value of custom object's properties values [according to the object's properties keys names] 
              [done] : Including counter increament and conditional True boolean value in case of the counter === object's keys length ]
            */
            return {
              value : myObj[ properties[step] ] , 
              done: step++ === properties.length
            }
          }        
        } 
      }
    }

  // Printing the object elements  :  
    console.log(myObj);
    dis.innerHTML += myObj ;

  // Iterating/Looping on object elements using [{for of}] => to print the [object's values] :  
    for (let elem of myObj) {
      console.log(elem);
      dis.innerHTML += elem ;
    }  

  }
  // =============================================================
  // ===========================================================
}

function display() {
  document.getElementById("note").innerHTML =
    myTest + "\n\n" + "=".repeat(90) + "\n\n";
}
