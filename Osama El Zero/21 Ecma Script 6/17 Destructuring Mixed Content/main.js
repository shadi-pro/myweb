// 17 Destructuring Mixed Content:
/* Main lessons functions :
   1- Destructring nested Object including mixed child object and array        
   2- Destructring nested Object including only child objects         
 */
// ---------------------------------------------------------------------

// 17 Destructuring Mixed Content:

function myTest() {
  "use strict";
  alert("Welcome to 17 Destructuring Mixed Content");

  var dis = document.getElementById("note");

  var x = prompt(
    ` Please choose one of following functions from below  :
    1- Destructring nested Object including mixed child object and array        
    2- Destructring nested Object including only child object and array
    `
  );

  if (x == 1) {
  
    desNestObjMix();
  
  } else if (x == 2) {
  
    desNestObj();

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

  // 1] Destructring Nested Object including mixed child object and array  :
  function desNestObjMix() {
    alert(
      "Welcome to Using Destructring Nested Object including mixed child object and array "
    );

    dis.innerHTML = "";

    // Defining Nested Object including mixed object & array  :
    const obj = {
      username : 'shadi',
      city : 'cairo',
      skills: {
        html : '80%',
        css : '70%' ,
        js : [
          "react.js",
          "vue.js",
          "angular.js"
        ]      
      }
    } ;
      
  
   // Destructuring the nested object + using custom name by using ES6 :  
      const {username:name , city , skills: {html, css, js: [one ,two , three] } } = obj ;

    // printing the extraced variables from nested Object by [ES6] :
    console.log(`
      1] Extracted variables by using destructring method + with [custom name] [by using ES6] as following : 
         Im name is :   ${name}
         I live in  :   ${city}
         My skills are as following:  ${html} , ${css}
         My JS Frawork knowlede are as following:  ${one} , ${two} , ${three}
      `);

    dis.innerHTML += `1] Extracted variables by using destructring method + with [custom name] [by using ES6] as following : 
    Im name is :   ${name}
    I live in  :   ${city}
    My skills are as following:  ${html} , ${css}
    My JS Frawork knowlede are as following:  ${one} , ${two} , ${three}
 `;
  }

  // =============================================================
    // 2] Destructring nested Object including only child objects  :
  function desNestObj() {

      alert(
        "Welcome to Using Destructring nested Object including only child objects  "
      );

      dis.innerHTML = "";

     // Defining Nested Object including olny object   :
    const obj = {
      username : 'shadi',
      city : 'cairo',
      skills: {
        html : '80%',
        css : '70%' ,
        js : {
          frameOne : "react.js",
          frameTwo : "vue.js",
          frameThree : "angular.js"
        } 
      }
    } ;
      
  
   // Destructuring the nested object + using custom name by using ES6 :  
      const {username:name , city , skills: {html, css, js: {frameOne:one ,frameTwo:two , frameThree:three} } } = obj ;

    // printing the extraced variables from nested Object by [ES6] :
    console.log(`
      2] Extracted variables by using Destructring method + with [custom name] [by using ES6] as following : 
         Im name is :   ${name}
         I live in  :   ${city}
         My skills are as following:  ${html} , ${css}
         My JS Frawork knowlede are as following:  ${one} , ${two} , ${three}
      `);

    dis.innerHTML += `2] Extracted variables by using destructring method + with [custom name] [by using ES6] as following : 
    Im name is :   ${name}
    I live in  :   ${city}
    My skills are as following:  ${html} , ${css}
    My JS Frawork knowlede are as following:  ${one} , ${two} , ${three}
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
