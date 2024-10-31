// 34 Generators Part 3 Create Infinite Numbers:

/* Main lessons functions :
  1- Looping inside the Genererator function it self 
  2- Looping inside the Iterator Genererator function  
  */
 // ---------------------------------------------------------------------

 // 34 Generators Part 3 Create Infinite Numbers:

function myTest() {
  "use strict";
  alert("Welcome to 34 Generators Part 3 Create Infinite Numbers");

  var dis = document.getElementById("note");

  var x = prompt(
    ` Please choose one of following functions from below  :
    1- looping inside the Genererator function it self 
    2- looping inside the Iterator Genererator function
    `
  );

  if (x == 1) {
    loopInGen();
  
  } else if (x == 2) {
  
    loopInGenIter();
  
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

  // 1] Looping inside the Genererator function it self  :
  
  function loopInGen() {
    alert(
      "Welcome to Looping inside the Genererator function it self  "
    );

    dis.innerHTML = "";

    // Defining Gerarator function with [  Yielding infinite values + Endless looping usig the {while} loop statement  ] :
        function * genFunc() {
          let i = 0 ;

          while (true) {
            yield i++ ;
          }

        }
        
       // Assigning the [generator function] into a external variable [Iterator ] : 
        let genFuncVar = genFunc(); 
       
        //  Manual Executing/Iterating  the generator function :  
          console.log(`Manual Executing some values from generator function using {genVar.next()} method : `) ;
          console.log(genFuncVar.next()) ;
          console.log(genFuncVar.next()) ;
          console.log(genFuncVar.next()) ;
          
      // Looping inside [Generator function it self] wih using break : 
        for(let elem of genFunc() ) {
        
          // Adding break when the Iterated value is > [20] :
          if ( elem > 20) {
            break; 
          }
          console.log(elem);

        }
        
    //  -------------------------------------------
  }
  // =============================================================

  // 2] Looping inside the Iterator Genererator function :
  
  function loopInGenIter() {
    alert(
      "Welcome to Looping inside the Iterator Genererator function  "
      );
      
    dis.innerHTML = "";

      // Defining Gerarator function with [  Yielding some values +  endless looping usig the {while} loop statement  ] :
        function * genFunc() {
          let i = 0 ;

          while (true) {
            yield i++ ;
          }

        }
        
       // Assigning the [generator function] into a external variable [iterator ] : 
        let genFuncVar = genFunc(); 
       
        //  Manual Executing/Iterating  the generator function :  
          console.log(`Manual Executing some values from generator function using {genVar.next()} method : `) ;
          console.log(genFuncVar.next()) ;
          console.log(genFuncVar.next()) ;
          console.log(genFuncVar.next()) ;
          
      // Looping inside [Generator function it self] : 
        for(let elem of genFuncVar ) {

          // Adding break when the Iterated value is > [20] :
          if ( elem > 20) {
            break; 
          }
          
          console.log(elem);          

        }
   
  }
  // =============================================================
  // ===========================================================
}

function display() {
  document.getElementById("note").innerHTML =
    myTest + "\n\n" + "=".repeat(90) + "\n\n";
}
