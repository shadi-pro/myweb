// This is an {import.js} JS file to import script from another Js file {export.js} + with using {Default Exporitng } & {Named Exporitng } :

// [1] Importing/Using only the [default exported] Elements [by using {aliase} name]  
// [2] Importing/Using only the [default exported] Elements [without using {aliase} name]  
// [3] Importing/Using both [default exported] Element & {Named exported} Elements [by using {aliase} name]  
// [4] Importing/Using both [default exported] Element & {Named exported} Elements [without using {aliase} name]  


// import { myArr, myArr , sayHello } from "./export.js";

// [1] Importing/Using only the [Default exported] Elements [by using {aliase} name] :
  import sayH from "./export.js";


// [2] Importing/Using only the [Default exported] Elements [without using {aliase} name]  
  import sayHello from "./export.js" ;
  
  
// [3] Importing/Using both [Default exported] Element & {Named exported} Elements [by using {aliase} name]  
  import sayH, {a , arr , myObj} from './export.js' ;
  
// [4] Importing/Using both [Default exported] Element & {Named exported} Elements [without using {aliase} name]  
  import sayHello, {a , arr, myObj}  from './export.js' ;



  console.log(`Imported Single variable  is :  ${a}, 
  Imported Array with using  is : ${arr}  
  Imported function [using Aliase Name] is : ${sayH("shadi")}  
  Imported function [without using Aliase Name] is : ${sayHello("shadi")}  
  `);
  
  // Looping inside the imported array : 
  for (let i of arr) {
    console.log(i);
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
