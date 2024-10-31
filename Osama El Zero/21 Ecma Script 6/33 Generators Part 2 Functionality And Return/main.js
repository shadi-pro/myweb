// 33 Generators Part 2 Functionality And Return:

/* Main lessons functions :
  1- Comparisonal Testing of working of the [default function] & [generator function] 
  2- Comparisonal Testing of looping inside both  [genreator function 's Iterator] & [generator functionj it self ] by usging  the for of loop statement
  3- Testing of usage of keyword {return}  
  */
 // ---------------------------------------------------------------------

 // 32 Generators Part 1 Intro And Whats Generators:

function myTest() {
  "use strict";
  alert("Welcome to 32 Generators Part 1 Intro And Whats Generators");

  var dis = document.getElementById("note");

  var x = prompt(
    ` Please choose one of following functions from below  :
      1- Comparisonal Testing of working of the [default function] & [generator function] 
      2- Comparisonal Testing of looping inside both [genreator function's Iterator] & [generator functionj it self ] , by usign the for of loop statement
      3-  Testing of usage of keyword {return}  
    `
  );

  if (x == 1) {
    compGenDef();
  
  } else if (x == 2) {
  
    compGenIter();
  
  } else if (x == 3) {
  
    compGenRet();

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

  // 1] Comparisonal Testing of working of the [default function] & [generator function]   :
  
  function compGenDef() {
    alert(
      "Welcome to Comparisonal Testing of working of the [default function] & [generator function]   "
    );

    dis.innerHTML = "";

    // Defining Default function with [simple alerting , without using yielding values ] :
      function defFunc() {
        window.alert('Hello {Default function} this is step 1');
        console.log('Hello {Default function} this is step 1');
        
        window.alert('Hello {Default function} this is step 2');
        console.log('Hello {Default function} this is step 2');
        
        window.alert('Hello {Default function} this is step 3');
        console.log('Hello {Default function} this is step 3');
      }

      // Assigning the [default function] into a [external variable] : 
        let defFuncVar = defFunc(); 
      
        
      // Defining gerarator function with [simple alerting , without using yielding values ] :
        function * genFunc() {
          window.alert('Hello {Generator function} this is step 1');
          console.log('Hello {Generator function} this is step 1');
        
          window.alert('Hello {Generator function} this is step 2');
          console.log('Hello {Generator function} this is step 2');
        
          window.alert('Hello {Generator function} this is step 3');     
          console.log('Hello {Generator function} this is step 3');     
        }
        
       // Assigning the [generator function] into a external variable  : 
        let genFuncVar = genFunc(); 
       
        //  Manual Executing the generator function :  
        console.log(`Manual Executing the generator function using {genVar.next()} method [due to the generator function will not work directly as it is in te default function  ] : `) ;
        console.log(genFunc().next()) ;
        
        // console.log(genFunc().next()) ;
        // console.log(genFunc().next()) ;
        // console.log(genFunc().next()) ;
    //  -------------------------------------------

  }
  // =============================================================

  // 2] Comparisonal Testing of looping inside both [genreator function's Iterator] & [generator function it self ] , by using the for of loop statement :
  
  function compGenIter() {
    alert(
      "Welcome to Comparisonal Testing of looping inside both [genereator function's Iterator] & [generator function it self ] , by using the for of loop statement "
      );
      
    dis.innerHTML = "";
  
    // Defining generator function :
      function * genFunc() {
        yield 1; 
        yield 2; 
        yield 3; 
      }
      
    // Defining Default function :
      function defFunc() {
        return 'hello this is a default function'; 
      }
      
      // Allocating the generator function inside the variable :
      let genFuncVar =  genFunc();
      
      // Executing the Default function :
      console.log(defFunc());
      
      // Executing the Generator function :
      console.log(genFunc());
          
      // Printing the [Generator function it self - structure form ] : 
      console.log(`Printing the [Generator function it self - structure form ] as following  : `);
      console.log(genFunc);
   
      // Printing the [generator function Iterator] :
      console.log(`Printing the [generator function Iterator] as following  : `);
      console.log(genFuncVar);
      
      // Looping inside the genertor function [Iterator(the allocated var of the generator function)] using {for of } looping statement : 
      console.log(`Looping inside the [generator function Iterator(the allocated var of the generator function)] ... `);
      
      for (let elem of genFuncVar) {
        console.log(elem);
      }

    // Looping inside the genertor function [it self] using {for of } looping statement : 
      console.log(`Looping inside the [generator function it self] ... `);
      
      for (let elem1 of genFunc() ) {
        console.log(elem1);
      }
   
  }
  // =============================================================
  // ===========================================================

  // 3] Testing of usage of keyword {return} within the generator function   :
  
  function compGenRet() {
    alert(
      "Welcome to  Testing of usage of keyword {return}   "
    );

    dis.innerHTML = "";
    
      // Defining generator function [with using the return ] :
      function * genFunc() {
        yield 1; 
        yield 2; 
        return 3; 
        yield 4; 
      }

    // Allocating the generator function inside the variable :
      let genFuncVar =  genFunc();

      // printing the genFunc() structure :
      console.log(genFunc);
      
      // printing the genFunc() iterator :
      console.log(genFuncVar);

      // Printing the next mehtod of the generator function iterator [including the return keyword result (which will stop the yielding next results ) ] :
      console.log(`Printing the First Yield result [will equal value = 'theValue'  , done = 'false'] of the [Genrator function using next() method]: `);
      console.log(genFuncVar.next());
      
      console.log(`Printing the Second Yield result [will equal value = 'theValue'  , done = 'false'] of [Genrator function using next() method] : `);
      console.log(genFuncVar.next());
      
      console.log(`Printing the Return result [will equal value = 'theValue'  , done = 'false'] of [Genrator function using next() method] : `);
      console.log(genFuncVar.next());
      
      console.log(`Printing the Third Yield result [will equal value = 'theValue'  , done = 'false'] of [Genrator function using next() method] : `);
      console.log(genFuncVar.next());

      console.log(`Printing the Fourth Yield result [will equal value = 'undefind'  , done = 'true'] of [Genrator function using next() method] : `);
      console.log(genFuncVar.next());
      
  }
  // =============================================================
  // ===========================================================
}

function display() {
  document.getElementById("note").innerHTML =
    myTest + "\n\n" + "=".repeat(90) + "\n\n";
}
