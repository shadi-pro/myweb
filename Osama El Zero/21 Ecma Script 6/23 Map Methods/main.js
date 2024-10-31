// 23 Map Methods :
/* Main lessons functions :
  1- {mapObj.size} method 
  2- {mapObj.get()} method 
  3- {mapObj.has()} method 
  4- {mapObj.delete()} method 
  5- {mapObj.clear()} method 
*/

  // ---------------------------------------------------------------------

// 23 Map Methods:

function myTest() {
  "use strict";
  alert("Welcome to 23 Map Methods");

  var dis = document.getElementById("note");

  var x = prompt(
    ` Please choose one of following functions from below  :
    1- {mapObj.size} method 
    2- {mapObj.get()} method 
    3- {mapObj.has()} method 
    4- {mapObj.delete()} method 
    5- {mapObj.clear()} method     `
    );

  if (x == 1) {
  
    mapSize();
  
  } else if (x == 2) {
  
    mapGet();
    
  } else if (x == 3) {
    
    mapHas();
    
  } else if (x == 4) {

    mapDelete();

  } else if (x == 5) {

    mapClear();

  // } else if (x == 6) {

    // setSpread();

  } else {
    alert("No option has been selected !");
  }

  // =========================================================================

  // 1] {mapObj.size} method :
  function mapSize() {
    alert(
      "Welcome to {mapObj.size} method  "
    );

    dis.innerHTML = "";

    // Defining [Map object] and assign some elements with different datatypes  :
      let myMap  = new Map([  ['Name', 'shadi']  , ['age' , '30' ] , ['city' , 'cairo'] , [false , 'boolean value'] , [function myFucn() {} , 'function value' ] ]);   
      
    // Geting the size of the map object :
        console.log(`The count of the map object ${myMap.size}`) ;   
        dis.innerHTML += `The count of the map object ${myMap.size}` ;   
    // -------------------------------------------

    // // Printing the [Default Object] after assingning new [[Single Elements]] using [Direct Assign method] & [Notation Method]  :
    // console.log('1] [Default Object] after assingning new [[Single Element]] using [Direct Assign method] & [Notation Method] as following : ');
    // console.log(myObj);
    
    // dis.innerHTML += '1] [Default Object] after assingning new [[Single Element]] using [Direct Assign method] & [Notation Method] as following : ' ;
    // dis.innerHTML += myObj ;
        
    //  -------------------------------------------
  }

  // =============================================================
  // 2] {mapObj.get()} method :
  function mapGet() {

      alert(
        "Welcome to {mapObj.get()} method  "
      );

      dis.innerHTML = "";

      // Defining [Map object] and assign some elements with different datatypes :
      let myMap  = new Map([  ['Name', 'shadi']  , ['age' , '30' ] , ['city' , 'cairo'] , [false , 'boolean value'] , [function myFucn() {} , 'function value' ] ]);   
  
      // Geting the vlaue of certain element with certian keyname [false] of the map object :
          console.log(`The value of Element with keyname [false] the map object ${myMap.get(false)}`) ;   
          dis.innerHTML += `The value of Element with keyname [false] the map object ${myMap.get(false)}`  ;   
      // -------------------------------------------
  
      // // Printing the [Default Object] after assingning new [[Single Elements]] using [Direct Assign method] & [Notation Method]  :
      // console.log('1] [Default Object] after assingning new [[Single Element]] using [Direct Assign method] & [Notation Method] as following : ');
      // console.log(myObj);
      
      // dis.innerHTML += '1] [Default Object] after assingning new [[Single Element]] using [Direct Assign method] & [Notation Method] as following : ' ;
      // dis.innerHTML += myObj ;
          
        //  -------------------------------------------
  }
  
  // =============================================================
  // 3] {mapObj.has()} method :
  function mapHas() {

      alert("Welcome to {mapObj.has()} method ");

      dis.innerHTML = "";
 
      // Defining [Map object] and assign some elements with different datatypes :
      let myMap  = new Map([  ['Name', 'shadi']  , [30 , '30' ] , ['city' , 'cairo'] , [false , 'boolean value'] , [function myFucn() {} , 'function value' ] ]);   
  
      // Checking for existance of certain element in the map object :
          console.log(`The Result of existance of  Element with keyname [30] the map object ${myMap.has(30)}`) ;   
          dis.innerHTML += `The value of Element with keyname [30] the map object ${myMap.has(30)}`  ;   
      // -------------------------------------------
  
    }
    
    
    // =============================================================
    // 4] {mapObj.delete()} method  :
    function mapDelete() {

      alert(
        "Welcome to {mapObj.delete()} method  "
      );

      dis.innerHTML = "";

      // Defining [Map object] and assign some elements with different datatypes :
      let myMap  = new Map([  ['Name', 'shadi']  , [30 , '30' ] , ['city' , 'cairo'] , [false , 'boolean value'] , [function myFucn() {} , 'function value' ] ]);   
    
      // Delete one element of keyname [false] from the map object using {map.delete() } :
        myMap.delete(false) ;


      //  Printing count of the map object after deletion of one element :
          console.log(`The count of map object after deletion of one element is:  ${myMap.size} `) ;   
          dis.innerHTML += `The count of map object after deletion of one element is:  ${myMap.size} ` ;   
      // -------------------------------------------
      
      
  }
  
  // =============================================================
  // 5] {mapObj.clear()} method  :
  function mapClear() {

      alert(
        "Welcome to  {mapObj.clear()} method    "
      );

      dis.innerHTML = "";


      // Defining [Map object] and assign some elements with different datatypes :
      let myMap  = new Map([  ['Name', 'shadi']  , [30 , '30' ] , ['city' , 'cairo'] , [false , 'boolean value'] , [function myFucn() {} , 'function value' ] ]);   
    
      // Delete all elements from the map object using {map.clear() } :
        myMap.clear() ;
    
    
      //  Printing count of the map object after Clear all elements from the map object :
          console.log(`The count of map object after deletion of all elements is:  ${myMap.size} `) ;   
          dis.innerHTML += `The count of map object after deletion of all elements is:  ${myMap.size} ` ;   
      // -------------------------------------------


  }
  
  // =============================================================

}

function display() {
  document.getElementById("note").innerHTML =
    myTest + "\n\n" + "=".repeat(90) + "\n\n";
}

