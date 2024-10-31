// This is an {import.js} JS file to import script from another Js file {export.js} :

// [A] Importing/Using the exoprted Elements [by solo keyword] by using {import {} from 'export.js' } :

import { a, arr, sayHello } from "./export.js";

console.log(`Solo Imported variable is :  ${a}, 
Solo Imported array is : ${arr}  
Solo Imported function is : ${sayHello("shadi")}  
`);

for (let i of arr) {
  console.log(i);
}

// -------------------------------------

// [B] Importing/Using the exoprted Elements [by Grouped keyword] by using {import {} from 'export.js' } :

import { b, arr1, sayHello1 } from "./export.js";

console.log(`Group Imported variable is :  ${b}, 
Group Imported array is : ${arr1}  
Group Imported function is : ${sayHello1("shadi")}  
`);

for (let i of arr1) {
  console.log(i);
}

// ---------------------------------------------------------------
// ---------------------------------------------------------------


// Calling function of the {import.js} file :
function displayImport() {

    myTestImport();

    document.getElementById("note").innerHTML =
    myTestImport + "\n\n" + "=".repeat(90) + "\n\n";
}
