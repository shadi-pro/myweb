// 32 Generators Part 1 Intro And Whats Generators :

/* Main lessons functions :
  1- Create Gerator function with static single value(s)
  2- Create Gerator function with [static array] values 
  3- Create Gerator function with Dynamic arrays + using for loop statement with parameters of the array variable 

*/
// ---------------------------------------------------------------------

// 32 Generators Part 1 Intro And Whats Generators:

function myTest() {
  "use strict";
  alert("Welcome to 32 Generators Part 1 Intro And Whats Generators");

  var dis = document.getElementById("note");

  var x = prompt(
    ` Please choose one of following functions from below  :
    1- Create Gerator function with static single value(s)
    2- Create Gerator function with [static array] values 
    3- Create Gerator function with Dynamic arrays + using for loop statement with parameters of the array variable 
    `
  );

  if (x == 1) {
    genStatSingVal();
  
  } else if (x == 2) {
  
    genStatArr();
  
  } else if (x == 3) {
  
    genDynArr();

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
  
  function genStatSingVal() {
    alert(
      "Welcome to Create custom iterable object with custom iterartion rules -> Iterating inside the custom object to get the [properties keys names]  "
    );

    dis.innerHTML = "";

    // Defining gerarator function with using single values :
      function * genSin() {
        yield 1; 
        yield 2; 
        yield 3; 
        yield 4; 
      }
      
    // Assigning the function into a variable  : 
      let genSinVar = genSin(); 


    // Get the type of the generator function :
      console.log( typeof(genSinVar) ) ; 
  
      
    // Printing the next() method values [all values of the next() method   ] of the Generator function :  
      console.log(genSinVar.next().value);
      console.log(genSinVar.next().value);
      console.log(genSinVar.next().value);
      console.log(genSinVar.next().value);
      // dis.innerHTML += genSinVar.next().value ;
    //  -------------------------------------------
  
    // Printing the next generator function [whole function after printing all values of the next method   ]  :  
      console.log(genSinVar.next());
      dis.innerHTML += genSinVar.next() ;
    //  -------------------------------------------
    
    // // Iterating/Looping on object elements using [{for of}] => to print the [object keys names] :  
    //   for (let elem of myObj) {
    //     console.log(elem);
    //     dis.innerHTML += elem ;
    //   }    
    //  -------------------------------------------

  }
  // =============================================================

  // 2] Create Gerator function with [static array] values   :
  
  function genStatArr() {
    alert(
      "Welcome to Create Gerator function with [static array] values   "
    );

    dis.innerHTML = "";
  
    // Defining gerarator function with using both array and single values :
    function * genStat() {
      yield * [1,2,3,4] ; 
      yield 5; 
      yield 6; 
      yield 7; 
    }
    
    // Assigning the function into a variable  : 
      let genStatVar = genStat(); 


    // Printing the next() method values [all values of the next() method   ] of the Generator function :  
      console.log(genStatVar.next().value);
      console.log(genStatVar.next().value);
      console.log(genStatVar.next().value);
      console.log(genStatVar.next().value);
      console.log(genStatVar.next().value);
      console.log(genStatVar.next().value);

      // This will be the last of the next value :  
      console.log(genStatVar.next().value);
      // dis.innerHTML += genSinVar.next().value ;
    //  -------------------------------------------

    // Printing the next generator function [whole function after printing all values of the next method   ]  :  
      console.log( `The whole function structure after printing all values of next mehtod is ` );
      console.log(genStatVar.next());
      // dis.innerHTML += genSinVar.next() ;
    //  -------------------------------------------
  
    
  // Iterating/Looping on object elements using [{for of}] => to print the [object's values] :  
    // for (let elem of myObj) {
    //   console.log(elem);
    //   dis.innerHTML += elem ;
    // }  

  }
  // =============================================================
  // ===========================================================

  // 3] Create Gerator function with Dynamic arrays + using for loop statement with parameters of the array variable  :
  
  function genDynArr() {
    alert(
      "Welcome to Create Gerator function with Dynamic arrays + using for loop statement with parameters of the array variable   "
    );

    dis.innerHTML = "";
    
    
    // Declaring the external array to be used in the generator function  : 
      let arr = [1 , 2 , 3 , 4 ,5] ;


    // Defining gerarator function with using Dynamic array as parameter + for() loop statement -> to be yield  by the each value of the array  : 
    function * genDyn(num) {
      for (let i = 0 ; i < num.length ; i++) {
        yield num[i]; 
      }
    }
    
    // Assigning the function into a variable  : 
      let genDynVar = genDyn(arr); 

      
    // Printing the next() method values [all values of the next() method   ] of the Generator function :  
      console.log(genDynVar.next().value);
      console.log(genDynVar.next().value);
      console.log(genDynVar.next().value);
      console.log(genDynVar.next().value);
      console.log(genDynVar.next().value);

      // This will be the last of the next value :  
      console.log(genDynVar.next().value);
      // dis.innerHTML += genSinVar.next().value ;
    //  -------------------------------------------

    // Printing the next generator function [whole function after printing all values of the next method   ]  :  
      console.log( `The whole function structure after printing all values of next mehtod is ` );
      console.log(genDynVar.next());
      // dis.innerHTML += genSinVar.next() ;
    //  -------------------------------------------
  
  }
  // =============================================================
  // ===========================================================
}

function display() {
  document.getElementById("note").innerHTML =
    myTest + "\n\n" + "=".repeat(90) + "\n\n";
}
