// This is an {export.js} JS file to export script to another Js file {import.js} :

// [A] Solo Exoprting scripts Method :
export let a = 'This variable has been exported from export.js file [using solo "export" keyword] ' ;

export let arr = ['Array of names Imported [using solo "export" keyword] from another Js file {export.js}' , 'Shadi' , 'sayed' ,  'Ahemd'] ;

export function sayHello(name) {
    alert(`Hello ${name} , this function has been Imported [using solo "export" keyword] from another JS file {export.js} `) ;
    console.log(`Hello ${name}` ) ;
}
// --------------------------------

// [B] Group Exoprting scripts Method :

// Defining a variables , array and function to group xporting to another  Js file 
let b = 'This variable has been exported from export.js file [using solo "export" keyword] ' ;

let arr1 = ['Array of names Imported [using solo "export" keyword] from another Js file {export.js}' , 'Shadi' , 'sayed' ,  'Ahemd'] ;

function sayHello1(name) {
    alert(`Hello ${name} , this function has been Imported [using Group "export" keyword] from another JS file {export.js} `) ;
    console.log(`Hello ${name}` ) ;
}

// Group exporting certain elements :
export{
b , 
arr1 ,
sayHello1
}
// ------------------------------------------------------------------
// ------------------------------------------------------------------
// Calling function of the {export.js} file : 
function display() {
    document.getElementById("note").innerHTML =
      myTest + "\n\n" + "=".repeat(90) + "\n\n";
  }
  
