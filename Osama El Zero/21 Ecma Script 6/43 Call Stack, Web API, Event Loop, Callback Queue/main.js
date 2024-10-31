// 43 Call Stack, Web API, Event Loop, Callback Queue:

 /* Lessons including , following functions/Methods :
    1- {Call Stack}
    2- {Web API}
    3- {Event Loop}
    4- {Callback Queue}
 */

 // ---------------------------------------------------------------------


function myTest() {
  "use strict";
  alert("Welcome to 43 Call Stack, Web API, Event Loop, Callback Queue");

  var dis = document.getElementById("note");

  var x = prompt(
    ` Please choose one of following functions from below  :
    1- First Example => [Comparisonal Testing of Call Stack Executing lifeCycle between through [simple (2) functions]  ]  
    2- Second Example => [Comparisonal Testing of Call Stack Executing lifeCycle between through meixed [simple & callback setTimeout()  (2) functions]  ]  
    3- Third Example => [Comparisonal Advanced Testing of Call Stack Executing lifeCycle between through meixed [simple & callback setTimeout()  (2) functions]  ]  
    4- Fourth Example => [Comparisonal Advanced complex Testing of Call Stack Executing lifeCycle between through meixed [simple & callback setTimeout()  (2) functions]  ]  
    `
  );

  if (x == 1) {
    simpleLifeCycTest();
  
  } else if (x == 2) {
  
    mixLifeCycTest();
  
  } else if (x == 3) {
 
    mixAdvLifeCycTest();

  } else if (x == 4) {
    
    mixCompLifeCycTest();
  
  // } else if (x == 5) {
    // MapWeakMapDeletNull();

    // } else if (x == 6) {

    // setSpread();
  } else {
    alert("No option has been selected !");
  }
  // =========================================================================

  // 1] Use [Comparisonal Testing of Call Stack Executing lifeCycle between through [simple (2) functions]  ]   :
  
  function simpleLifeCycTest() {
    alert(
      "Welcome to Use [Comparisonal Testing of Call Stack Executing lifeCycle between through [simple (2) functions]  ]   "
    );

    dis.innerHTML = "";

    // A] Defining (2) simple functions : 
      
      // Define the first funciton [simple function]:   
        function first() {
          console.log('First');
        }

    // Define the second function [by using nested calling ]
      function second() {
          first();
          console.log('Second');
        }

    // Executing the second function :        
      second();

  // B] Printing the conclusion and display description   : 
        console.log(` The conclusion and display description of Call Stack lifecycle :  
          Second function will display the first function return at first 
          Then the second CONSOLE function return will be displayed 
        `);


    // printing a seperator :  
    console.log(` ${"=".repeat(90)} `) ;
    //  -------------------------------------------
  }
  
  // =============================================================
  // =============================================================

  // 2] Use [Comparisonal Testing of Call Stack Executing life Cycle between through mixed [simple & callback setTimeout()  (2) functions]  ]   :
  
  function mixLifeCycTest() {
    alert(
      "Welcome to Use [Comparisonal Testing of Call Stack Executing lifeCycle between through meixed [simple & callback setTimeout()  (2) functions]  ]   "
    );

    dis.innerHTML = "";

    // A] Defining (3) mixed functions of simple & {webAPI} functions  : 
      
      // Define the first function [printing] :   
        console.log('First');

      // Define the second function [window callback function of the webAPI  ]:   
        window.setTimeout(() => console.log('Second')  , 0 ) ;      

      // Define the third function [Printing]
        console.log('third');

        // B] Printing the conclusion and display description   : 

      console.log(` The conclusion and display description of {Call Stack lifecycle} :  
        At first => the First simple function will be added to the [Call Stack] list  => and will be displayed [first] 
        Second => the second function of The window callback function will be added to the {callback Queue} => will be delayed after all functions in {Call Stack} are being executed 
        Third => The third simple function will be added to the [Call Stack] list and will be displayed [second] 
      `);
        
      
    // printing a seperator :  
    console.log(` ${"=".repeat(90)} `) ;
    //  -------------------------------------------
  }
  
  // =============================================================
  // =============================================================

  // 3] Use [Comparisonal Advanced Testing of Call Stack Executing lifeCycle between through meixed [simple & callback setTimeout()  (2) functions]  ]   :
  
  function mixAdvLifeCycTest() {
    alert(
      "Welcome to Use [Comparisonal Advanced Testing of Call Stack Executing lifeCycle between through  [Printing the variable by using {call stack} , before it is being defined by using callback setTimeout() ]  ]  "
    );

    dis.innerHTML = "";

    // A] Printing the variable function by using [setTimeout] method of [web API] ,  before is being initializing/defined    : 
        
      // 1) printing function by using callback {webApI} function : {setTimeout()} :  
      window.setTimeout(() => console.log(myVar) , 0 );  // [Executed at Last after all of the call Stack functions] 

     // Define the variable after printing function :  
      let myVar = 100 ;  // [Executed at first because it is one the {call stack} function ] 
      
      // processing the defined variable after printing function : 
      myVar += 200 ;  // [Executed at second because it is one the {call stack} function , and come after the first function in the {call Stack} funtions    ] 

      
      // B] Printing the conclusion and display description   : 
      console.log(` The conclusion and display description of {Call Stack lifecycle} :  
        Although the printing function come before the definiton of the variable 
        , but Printing function of one of the {webAPI} => so it has been added into the {callback Queue} to be executed after all {Call stack} functoins    
        And the Definting the variable is in {call Stack}
      `);
        
 
    // printing a seperator :  
    console.log(` ${"=".repeat(90)} `) ;
    //  -------------------------------------------
  }
  
  // =============================================================
  // =============================================================

  // 4] Use [Comparisonal Advanced complex Testing of Call Stack Executing lifeCycle between through meixed [simple & callback setTimeout()  (2) functions]  ]  :
  
  function mixCompLifeCycTest() {
    alert(
      "Welcome to Use [Comparisonal Advanced complex Testing of Call Stack Executing lifeCycle between through meixed [ [2] simple functions & callback setTimeout() [2] functions]  ]  "
    );

    dis.innerHTML = "";

      // A] Defining (4) mixed functions of simple {Call Stack} & {webAPI} functions  : 
      
       // Define the first function [window callback function of the webAPI] => {will be proceesed at last}       
          window.setTimeout(() => console.log('Last')  , 1000 ) ;      

        // Define the second function [simple function] {Call Stack} => {will be proceesed at first}
          console.log('One');

        // Define the third function [Simple function] {Call Stack} => {will be proceesed at second}
          console.log('two');
          
        // Define the fourth function [window callback function of the webAPI] => {will be proceesed at third}
          window.setTimeout(() => console.log('three')  , 0 ) ;      


      // B] Printing the conclusion and display description : 
          console.log(` The conclusion and display description of {Call Stack lifecycle} :  
            At first => the First {callback} function will be added to the [callback Queue] => and delayed after all functions in {Call Stack} are being executed  
            Second => the second {Call Stack} function be added to the {call stack} => and will processed at [First] 
            Third => the third {Call Stack} function be added to the {call stack} => and will processed at [Second] 
            fourth => The fourth {callback} function will be added to the [callback Queue] => and delayed after all functions in {Call Stack} and after {callback Queue} functions with shorter time fo the (Settimeout) function     
          `);
            
 
    // printing a seperator :  
    console.log(` ${"=".repeat(90)} `) ;
    //  -------------------------------------------
  }
  
  // =============================================================
  // =============================================================




}

function display() {
  document.getElementById("note").innerHTML =
    myTest + "\n\n" + "=".repeat(90) + "\n\n";
}
