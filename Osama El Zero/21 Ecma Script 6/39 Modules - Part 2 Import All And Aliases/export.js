// This is an {export.js} JS file to export script to another Js file {import.js} + with using {Aliases} & {Import All} :


// Group Exporting scripts Method :
// Defining a variables , array and function to group xporting to another  Js file 
let a = 'This variable has been exported from export.js file [using Group "export" keyword + [with using {Aliase}] ] ' ;
let b = 'This variable has been exported from export.js file [using Group "export" keyword + [without using {Aliase}] ] ' ;

let arr = ['Array of names Imported [using Group "export" keyword] from another Js file {export.js} [with using {Aliase}] ' , 'Shadi' , 'sayed' ,  'Ahemd'] ;
let arr1 = ['Array of names Imported [using Group "export" keyword] from another Js file {export.js} [without using {Aliase}]' , 'Shadi' , 'sayed' ,  'Ahemd'] ;

function sayHello(name) {
    alert(`Hello ${name} , this function has been Imported [using Group "export" keyword] from another JS file {export.js} `) ;
    console.log(`Hello ${name}` ) ;
}

function sayHello1(name) {
    alert(`Hello ${name} , this function has been Imported [using Group "export" keyword] from another JS file {export.js} `) ;
    console.log(`Hello ${name}` ) ;
}

// Group exporting certain elements :
export{
a as myVar , 
b  , 
arr ,
arr1 as myArr,
sayHello , 
sayHello1
}
// ------------------------------------------------------------------
// ------------------------------------------------------------------

// Calling function of the {export.js} file : 
function display() {
    document.getElementById("note").innerHTML =
      myTest + "\n\n" + "=".repeat(90) + "\n\n";
  }
  
