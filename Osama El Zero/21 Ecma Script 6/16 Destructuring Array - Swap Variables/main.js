// 16 Destructuring Array - Swap Variables:
/* Main lessons functions :
   1- Swaping by old JS   
   2- Swaping by new ES6 JS   
 */
// ---------------------------------------------------------------------

// 16 Destructuring Array - Swap Variables:

function myTest() {
  "use strict";
  alert("Welcome to 16 Destructuring Array - Swap Variables");

  var dis = document.getElementById("note");

  var x = prompt(
    ` Please choose one of following functions from below  :
      1- Swaping by old JS   
      2- Swaping by new ES6 JS   
    `
  );

  if (x == 1) {
  
    oldSwap();
  
  } else if (x == 2) {
  
    desSwap();

  // } else if (x == 3) {

    // desMLArrDefVEscElem();

  // } else if (x == 4) {

  // desArrRes();

  // } else if (x == 5) {

  // allFuncsObj();

  } else {
    alert("No option has been selected !");
  }

  // =========================================================================

  // 1] Swaping by old JS :
  function oldSwap() {
    alert(
      "Welcome to Using Swaping by old JS"
    );

    dis.innerHTML = "";

    // Defining [2 variables] :
    var book = 'video', 
        video = "book"  ;
      
    // Define Stashing variable with first of two variables :
    var stash = book ; 

   // Allocating the two variables values into each other [inorder to set one of them by the right value ]: 
     book = video ;

   // Allocating the second variable value into stash : 
      video = stash;


    // printing the both variables being swaped by using old js:
    console.log(`
      1] Swaped variables [by using old Js method] as following : 
         first varaiable [video] is :   ${video}
         second varaiable [book] is :   ${book}
      `);

    dis.innerHTML += ` 1] Swaped variables [by using old Js method] as following : 
    first varaiable [video] is :   ${video}
    second varaiable [book] is :   ${book}
 `;
  }

  // =============================================================
    // 2] Swaping by new ES6 JS :
  function desSwap() {

      alert(
        "Welcome to Using Swaping by new ES6 JS "
      );

      dis.innerHTML = "";

      // Defining [2 variables] :
      var book = 'video', 
          video = "book"  ;
    

      // Direct swaping using the ES6 new mehtod :
      [video, book] = [book, video];

      // printing the both variables being swaped by using old js:
      console.log(`
        1] Swaped variables [by using old Js method] as following : 
          first varaiable [video] is :   ${video}
          second varaiable [book] is :   ${book}
        `);

      dis.innerHTML += ` 1] Swaped variables [by using old Js method] as following : 
      first varaiable [video] is :   ${video}
      second varaiable [book] is :   ${book}
  `;

 }
 
  // =============================================================
    // 3] Destructuring Array's Elements with [Escaped elements with Nested multi levels array]  :


  // =============================================================

  // 4] Destructuring Array's Elements with [ Rest operator with simple array] :
  
  // =============================================================
}

function display() {
  document.getElementById("note").innerHTML =
    myTest + "\n\n" + "=".repeat(90) + "\n\n";
}
