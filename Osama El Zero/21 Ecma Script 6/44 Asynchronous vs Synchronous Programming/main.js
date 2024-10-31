// 44 Asynchronous vs Synchronous Programming:

 /* Lessons including , following functions/Methods :
    1- using {Synchronous} method with in a concptual example    
    >> using {Asynchronous} method => will be studied in next lessons    
 */

 // ---------------------------------------------------------------------


function myTest() {
  "use strict";
  alert("Welcome to 44 Asynchronous vs Synchronous Programming");

  var dis = document.getElementById("note");

  var x = prompt(
    ` Please choose one of following functions from below  :
    1- First Example => [using {Synchornous} method with in a concptual example ]  
    `
  );

  if (x == 1) {
    SynchronousTest();
  
  // } else if (x == 2) {
  
    // mixLifeCycTest();
  
  // } else if (x == 3) {
 
    // mixAdvLifeCycTest();

  // } else if (x == 4) {
    
    // mixCompLifeCycTest();
  
  // } else if (x == 5) {
    // MapWeakMapDeletNull();

    // } else if (x == 6) {

    // setSpread();
  } else {
    alert("No option has been selected !");
  }
  // =========================================================================

  // 1] Use [ {Synchornous} method with in a concptual example ]   :
  
  function SynchronousTest() {
    alert(
      "Welcome to Use Use [ {Synchronous} method with in a concptual example ]   "
    );

    dis.innerHTML = "";

    // A] Creating multiple Tasks to test workgin of the {Synchronous} method  : 
      
      //  First Printing Task [will be executed at first once ] :     
        console.log('First');
        
      //  Alerting message Task [will be executed at second and still hang and delaying the next Tasks, untill is being finished ] :     
        alert('Delaying') ; 
        
      // Second Printing Task [will be executed at but after the  Delayed previous Task  ]   :     
        console.log('Second');
        
    
  // B] Printing the conclusion and display description  : 
        console.log(` The conclusion and display description of Call Stack lifecycle :  
          First Printing Task [will be executed at first once ]
          Alerting message Task [will be executed at second and still hang and delaying the next Tasks, untill is being finished ] 
          Second Printing Task [will be executed at but after the  Delayed previous Task  ] 
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
