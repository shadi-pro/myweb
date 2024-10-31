// 49 Ignoring The Pyramid Of Doom : 

 /* Lessons including , following functions/Methods :
    1- Ignoring the [Pyramid of Doom] || [callback Hell] by using {Promise()} an multiple [Then()] => within real example of getting all post of Database [count of all posts] || [First Post Value] || [Last Post Value] || [Count of all pages - each age hold 2 posts]  }
 */

 // ---------------------------------------------------------------------


function myTest() {
  "use strict";
  alert("Welcome to 49 Ignoring The Pyramid Of Doom");

  var dis = document.getElementById("note");

  var x = prompt(
    ` Please choose one of following functions from below  :
    1- Ignoring the [Pyramid of Doom] || [callback Hell] by using {Promise()} an multiple [Then()] => within real example of getting all post of Database [count of all posts] || [First Post Value] || [Last Post Value] || [Count of all pages - each age hold 2 posts]  }
    `
  );

  if (x == 1) {
    PromiseThenIgnoreCallbackHell();
  
  // } else if (x == 2) {
  
    // GetFirstRepoXML();
  
  // } else if (x == 3) {
 
    // GetFirstRepoXMLProm();

  // } else if (x == 4) {
    
    // GetAllRepoXMLProm();
  
  // } else if (x == 5) {
     
    // callBackHell();

    // } else if (x == 6) {

    // setSpread();
  
  } else {
    alert("No option has been selected !");
  }
  
  // =========================================================================

  // 1] Ignoring the [Pyramid of Doom] || [callback Hell] by using {Promise()} an multiple [Then()]  => within real example of getting all post of Database [count of all posts] || [First Post Value] || [Last Post Value] || [Count of all pages - each age hold 2 posts]  } :
 
  function PromiseThenIgnoreCallbackHell() {
    alert(
      "Welcome to Ignoring the [Pyramid of Doom] || [callback Hell] by using {Promise()} an multiple [Then()] => within real example of getting all post of Database [count of all posts] || [First Post Value] || [Last Post Value] || [Count of all pages - each age hold 2 posts]  } "
    );

    // dis.innerHTML = ""

    // A]  Defining/Extracting the main {Promise} new object :
      const myPromise = new Promise((resolve, reject) => { 
        let thePosts = ["A" , "B" , "C" , "D" , "E" , "F" , "G" , "H" , "I" , "J" , "K" , "L"];
        resolve(thePosts); 
      });  
      
      myPromise.then((result) => {
          console.log(`Total count of the Posts is ${result.length} `);
          return result;
        }).then( (result) => {
          console.log("#".repeat(15));
          console.log( `The first post is : ${result[0]}`);
          return result;
        }).then(
          (result) => {
            console.log("#".repeat(15));
            console.log( `The last post is : ${result[result.length - 1]}`);
            return result;
          }).then(
          (result) => {
            console.log("#".repeat(15));
            console.log( `The total number of pages is : ${result.length / 2}`);
            return result;
          })
        ;
     

    // printing a seperator :  
      console.log(` ${"=".repeat(50)} `) ;
    //  -------------------------------------------
  }
  
  // =============================================================
  // =============================================================


  // =============================================================
  // =============================================================
  

}

function display() {
  document.getElementById("note").innerHTML =
    myTest + "\n\n" + "=".repeat(90) + "\n\n";
}
