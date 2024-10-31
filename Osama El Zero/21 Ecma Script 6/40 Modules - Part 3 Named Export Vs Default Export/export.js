// This is an {export.js} JS file to export script to another Js file {import.js} + with using {Default Exporting } & {Named Exporting} :

// Defining a variables , array and function to group Exporting to another  Js file  : 

let a = 'This variable has been exported from export.js file [using Group "export" keyword + [with using {Aliase}] ] ' ;

let arr = ['Array of names Imported [using Group "export" keyword] from another Js file {export.js} [with using {Aliase}] ' , 'Shadi' , 'sayed' ,  'Ahemd'] ;

export default function sayHello(name) {
    alert(`Hello ${name} , this function has been Imported [using Group "export" keyword] from another JS file {export.js} `) ;
    console.log(`Hello ${name}` ) ;
}

const myObj = {
    name:  'shadi',
    age:   20 
}

// Exporting the object/any single variable [after defined]  by using {default exporting} : 
// export default myObj;


// Group exporting certain elements [Named Exporting] :
export{
    a ,  
    arr ,
    myObj 
}

// ------------------------------------------------------------------
// ------------------------------------------------------------------

// Calling function of the {export.js} file : 
function display() {
    document.getElementById("note").innerHTML =
      myTest + "\n\n" + "=".repeat(90) + "\n\n";
  }
  
