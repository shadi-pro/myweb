// 27 forEach With Set And Map :
/* Main lessons functions :
  1- Looping inside the {Set()  Object} using the {forEach} -> [simple [printing elements values + Keys ]]
  2- Looping inside the {Map() Object} using the {forEach} -> [simple [printing elements values + Keys ]] 
*/
  // ---------------------------------------------------------------------

// 27 forEach With Set And Map:

function myTest() {
  "use strict";
  alert("Welcome to 27 forEach With Set And Map");

  var dis = document.getElementById("note");

  var x = prompt(
    ` Please choose one of following functions from below  :
    1- Looping inside the {Set()  Object} using the {forEach} -> [simple [printing elements values + Keys ]]
    2- Looping inside the {Map() Object} using the {forEach} -> [simple [printing elements values + Keys ]] 
    ` );

  if (x == 1) {
  
    forEachSet();
  
  } else if (x == 2) {
  
    forEachMap();

  // } else if (x == 3) {
    
    // forEachFunc();
    
  // } else if (x == 4) {

    // descSymb();

  // } else if (x == 5) {

    // iteratorSymb();

  // } else if (x == 6) {

    // setSpread();

  } else {
    alert("No option has been selected !");
  }
  // =========================================================================

  // 1] Looping inside the {Set()  Object} using the {forEach} -> [simple [printing elements values + Keys ]] :
  function forEachSet() {
    alert(
      "Welcome to  Looping inside the {Set()  Object} using the {forEach} -> [simple [printing elements values + Keys ]] "
    );

    dis.innerHTML = "";

    // Defining Set Object :
      let  mySet  = new Set([1 , 2 , 2  , 2 , 3 , 5 , 4 , 5 ]) ; 
      
      // Looping inside the {Set Object} using forEach() loop   => [printing only the value of the set element ]: 
        mySet.forEach(ElemValue => {
          console.log( ` ${ElemValue}  ` ) ;          
          dis.innerHTML += ` ${ElemValue} ` ;
        }) ;

        console.log( ` ${'#'.repeat(20)} ` ) ;
        dis.innerHTML += ` ${'#'.repeat(20)} `  ;
        
        // Looping inside the {Set Object} using forEach() loop   => [printing both the value and key of the set element (with the same value due to the set object has no key) ]: 
        mySet.forEach((ElemValue , ElemKey) => {
          console.log( ` ${ElemValue} - ${ElemKey}  ` ) ;          
          dis.innerHTML += ` ${ElemValue} - ${ElemKey} ` ;
        }) ;

        console.log( ` ${'#'.repeat(20)} ` ) ;
        dis.innerHTML += ` ${'#'.repeat(20)} `  ;
  
        //  -------------------------------------------
  }

  // =============================================================
  // 2]  Looping inside the {Map() Object} using the {forEach} -> [simple [printing elements values + Keys ]]  :
  function forEachMap() {

      alert(
        "Welcome to  Looping inside the {Map() Object} using the {forEach} -> [simple [printing elements values + Keys ]]   "
      );

      dis.innerHTML = "";

      // Defining Set Object :
        let  myMap  = new Map([ ['A' , 1 ] , ['B', 3] , ['C' , 5] , ['D' , {}] ]) ; 
        
      // Looping inside the { Map Object} using forEach() loop   => [printing only the value of the Map element ]: 
        myMap.forEach(ElemValue => {
          console.log( ` ${ElemValue}  ` ) ;  
          dis.innerHTML += ` ${ElemValue} ` ;
        }) ;

        dis.innerHTML += ` ${'#'.repeat(20)} `  ;
        console.log( ` ${'#'.repeat(20)} ` ) ;
        
        // Looping inside the { Map Object} using forEach() loop   => [printing both the value and key of the Map element  ]: 
        myMap.forEach((ElemValue , ElemKey) => {
          console.log( ` ${ElemKey}  - ${ElemValue}   ` ) ;
          dis.innerHTML += ` ${ElemKey} -  ${ElemValue} ` ;
        }) ;
        
        dis.innerHTML += ` ${'#'.repeat(20)} `  ;
        console.log( ` ${'#'.repeat(20)} ` ) ;
      
  }
  // =============================================================
  // =============================================================
  // ===========================================================

}

function display() {
  document.getElementById("note").innerHTML =
    myTest + "\n\n" + "=".repeat(90) + "\n\n";
}
