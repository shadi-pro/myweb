// 38 Modules - Part 1 Import & Export :

/* Main lessons functions :
1- Use {Modules - Export  & Import} => to export [variables ,functions , Array ] from js and Import it from another JS    
  */
 // ---------------------------------------------------------------------

 // 38 Modules - Part 1 Import & Export:
import {a , arr , sayHello , b ,arr1 , sayHello1} from './export.js';

function myTest() {
  "use strict";
  alert("Welcome to 38 Modules - Part 1 Import & Export");

  var dis = document.getElementById("note");

  // var x = prompt(
  //   ` Please choose one of following functions from below  :
  //   1- Use {Modules - Export  & Import} => to export files from js and Import it from another JS  [within files {export.js} & {import.js} ]  
  //   `
  // );

  // if (x == 1) {
    // arrFind();
  
  // } else if (x == 2) {
  
    // arrFindIndex();
  
  // } else if (x == 3) {
  
    // arrCopyWitin();

  // } else if (x == 4) {
    // MapWeakMapForEach();
  // } else if (x == 5) {
    // MapWeakMapDeletNull();

    // } else if (x == 6) {

    // setSpread();
  // } else {
    // alert("No option has been selected !");
  // }
  // =========================================================================

  // 1] Use {Array.find(element with condition )} => to find the first [element's value] applying the find condition   :
  
    // This is an {export.js} JS file to export script to another Js file {import.js} :
  
    // [A] Importing/Using the exoprted Elements [by solo keyword] by using {import {} from 'export.js' } :
  
    console.log(`Solo Imported variable is :  ${a}, 
      Solo Imported array is : ${arr}  
      Solo Imported function is : ${sayHello("shadi")}  
      `);
  
    for (let i of arr) {
      console.log(i);
    }
  
    // -------------------------------------
  
    // [B] Importing/Using the exoprted Elements [by Grouped keyword] by using {import {} from 'export.js' } :
  
    console.log(`Group Imported variable is :  ${b}, 
      Group Imported array is : ${arr1}  
      Group Imported function is : ${sayHello1("shadi")}  
      `);
  
    for (let i of arr1) {
      console.log(i);
    }
  
    // ---------------------------------------------------------------
    // ---------------------------------------------------------------
  
  


  // function arrFind() {
  //   alert(
  //     "Welcome to Use {Array.find(element with condition )} => to find the first [element's value] applying the find condition "
  //   );

  //   dis.innerHTML = "";

  //   console.log(` ${"=".repeat(90)} `) ;
  // }
  //  -------------------------------------------
  // =============================================================
  
  // 2] Use {Array.findIndex(element with condition )} => to find the first [element's index] applying the find condition   :
  
  // =============================================================

  // 3] Use {Array.copyWithin(start copy & replace index , start from find index of group of elements , end before  index of group of elements ) } => to copy & Replace group of elemenst in the array elements :
  
  // =============================================================
  // ===========================================================
}
// =============================================================
// =============================================================

// Calling function of the {main.js} file :
function display() {
  document.getElementById("note").innerHTML =
    myTest + "\n\n" + "=".repeat(90) + "\n\n";
}
