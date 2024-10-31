// 35 Generators Part 4 Delegating Generators :

/* Main lessons functions :
  1- Creating the Master/Delegating Generator function +  other (2) generators functions    
  */
 // ---------------------------------------------------------------------

 // 35 Generators Part 4 Delegating Generators:

function myTest() {
  "use strict";
  alert("Welcome to 35 Generators Part 4 Delegating Generators");

  var dis = document.getElementById("note");

  var x = prompt(
    ` Please choose one of following functions from below  :
    1- Creating the Master/Delegating Generator function +  other (2) generators functions    
    `
  );

  if (x == 1) {
    loopInGen();
  
  // } else if (x == 2) {
  
    // loopInGenIter();
  
  // } else if (x == 3) {
  
    // compGenRet();

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

  // 1] Creating the Master/Delegating Generator function +  other (2) generators functions :
  
  function loopInGen() {
    alert(
      "Welcome to Creating the Master/Delegating Generator function +  other (2) generators functions   "
    );

    dis.innerHTML = "";

    // Defining (2) Gerarators functions  
        function * genFunc1() {
          yield 1 ;
          yield 2 ;
          yield 3 ;
        }
        
        function * genFunc2() {
          yield 'shadi' ;
          yield ' ahmed' ;
          yield 'ali' ;
        }
        
      // Defining master/delegate Gerarator function :  
            function * genAll() {
              yield * genFunc1;
              yield * genFunc2;
            }
            
       // Assigning the [Master/Delegate generator function] into a external variable [Iterator of master genrator function  ] : 
        let genFuncAllVar = genAll(); 
       
        //  Manual Executing/Iterating the generator function :  
          console.log(`Executing/printing  values from master generator function using {genFuncAllVar.next()} method : `) ;
          console.log(genFuncAllVar.next()) ;
          console.log(genFuncAllVar.next()) ;
          console.log(genFuncAllVar.next()) ;
          
      // Looping inside [ master Generator function iterator ]  : 
        for(let elem of genFuncAllVar ) {
          console.log(elem);
        }
        
    //  -------------------------------------------
  }
  // =============================================================

   
  // =============================================================
  // ===========================================================
}

function display() {
  document.getElementById("note").innerHTML =
    myTest + "\n\n" + "=".repeat(90) + "\n\n";
}
