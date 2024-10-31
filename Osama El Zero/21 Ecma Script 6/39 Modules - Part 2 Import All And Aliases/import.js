// This is an {import.js} JS file to import script from another Js file {export.js} + with using {Aliases} & {Import All} :

// [A] Importing/Using the exported Elements [by solo keyword] by using {import {} from 'export.js' } :
 
// import { myArr, myArr , sayHello } from "./export.js";

// Importing all elements from the another file by using {import *} & {Aliase} of the all method   :
import * as all from "./export.js";

function myFunc() {
  console.log(`Imported variable by using {Aliase}  is :  ${all.myVar}, 
  Imported variable without using {Aliase}  is :  ${all.b}, 
  Imported Array with using {Aliase} is : ${all.myArr}  
  Imported Array without using {Aliase} is : ${all.arr}  
  Imported first function is : ${all.sayHello("shadi")}  
  Imported second function is : ${all.sayHello1("shadi")}  
  `);
  
  for (let i of all.arr) {
    console.log(i);
  }  
}

// export {
//   myFunc
// }

// ---------------------------------------------------------------
// ---------------------------------------------------------------

// Calling function of the {import.js} file :
// function displayImport() {
//     myTestImport();

//     document.getElementById("note").innerHTML =
//     myTestImport + "\n\n" + "=".repeat(90) + "\n\n";
// }
