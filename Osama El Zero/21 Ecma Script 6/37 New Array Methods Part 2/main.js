// 37 New Array Methods Part 2 :

/* Main lessons functions :
  1- Use {Array.find(element with condition function  )} => to find the first [element's value] applying the find condition  
  2- Use {Array.findIndex(element with condition function )} => to find the first [element's index] applying the find condition  
  3- Use {Array.copyWithin(start copy & replace index , start from find index of group of elements , end before  index of group of elements ) } => to copy & Replace group of elements in the array elements
  */
 // ---------------------------------------------------------------------

 // 37 New Array Methods Part 2:

function myTest() {
  "use strict";
  alert("Welcome to 37 New Array Methods Part 2");

  var dis = document.getElementById("note");

  var x = prompt(
    ` Please choose one of following functions from below  :
    1- Use {Array.find(element with condition )} => to find the first [element's value] applying the find condition  
    2- Use {Array.findIndex(element with condition )} => to find the first [element's index] applying the find condition  
    3- Use {Array.copyWithin(start copy & replace index , start from find index of group of elements , end before  index of group of elements ) } => to copy & Replace group of elemenst in the array elements
    `
  );

  if (x == 1) {
    arrFind();
  
  } else if (x == 2) {
  
    arrFindIndex();
  
  } else if (x == 3) {
  
    arrCopyWitin();

  // } else if (x == 4) {
    // MapWeakMapForEach();
  // } else if (x == 5) {
    // MapWeakMapDeletNull();

    // } else if (x == 6) {

    // setSpread();
  } else {
    alert("No option has been selected !");
  }
  // =========================================================================

  // 1] Use {Array.find(element with condition )} => to find the first [element's value] applying the find condition   :
  
  function arrFind() {
    alert(
      "Welcome to Use {Array.find(element with condition )} => to find the first [element's value] applying the find condition "
    );

    dis.innerHTML = "";

      // Defining main array [to find the certain value in it ] using  { Array.find() } :
        let arr = Array(100 , 200 ,300 ,400) ;
        
      // Finding the first element value in the array [with condition : greater 200 ] :  
        let found = arr.find(el => el > 200 ); 

      // Printing the founded value applying the applied condition  :
        console.log(`The main array is : ${arr}  
        The first founded [value] applying the assigned condition [element > 200] is ${found} 
        `); 
     
    // printing a seperator :  
    console.log(` ${"=".repeat(90)} `) ;
    //  -------------------------------------------
  }
  // =============================================================
  
  // 2] Use {Array.findIndex(element with condition )} => to find the first [element's index] applying the find condition   :
  
  function arrFindIndex() {
    alert(
      "Welcome to Use {Array.findIndex(element with condition )} => to find the first [element's index] applying the find condition   "
    );

    dis.innerHTML = "";
    
    // Defining main array [to find the certain value in it ] using  { Array.find() } :
    let arr = Array(100 , 200 ,300 ,400) ;
        
    // Finding the first element value in the array [with condition : greater 200 ] :  
      let found = arr.findIndex(el => el > 200 ); 

    // Printing the founded value applying the applied condition  :
      console.log(`The main array is : ${arr}  
      The first founded [index] applying the assigned condition [element > 200] is ${found} 
      `); 

    // printing a seperator :  
    console.log(` ${"=".repeat(90)} `) ;

    //  -------------------------------------------
  }
  // =============================================================

  // 3] Use {Array.copyWithin(start copy & replace index , start from find index of group of elements , end before  index of group of elements ) } => to copy & Replace group of elemenst in the array elements :
  
  function arrCopyWitin() {
    alert(
      "Welcome to Use {Array.copyWithin(start copy & replace index , start from find index of group of elements , end before  index of group of elements ) } => to copy & Replace group of elemenst in the array elements"
    );

    dis.innerHTML = "";

   
    // Defining main (3) array [using new ES6 method {Array.of() } ]  :
    let arr1 = [100 , 200, 300 , 500 , 600 , 700 , 1000];
    let arr2 = Array.of(100 , 200, 300 , 500 , 600 , 700 , 1000);
    let arr3 = Array.of(100 , 200, 300 , 500 , 600 , 700 , 1000);

      
    // Creating new Array by the main array modified by {Starting Copying & Replaement index:[0] - from the start of the array } , {Coping from index : [2] } , {Coping before index:[4] } :
      console.log(`The main Array is ${arr1}`)

      let arr10 = arr1.copyWithin( 0 , 2 , 4 ) ;

    // Printing the new created array :
      console.log(`new Array by the main array modified by {Starting Copying & Replaement index:[0] - from the start of the array } , {Coping from index : [2] } , {Coping before index:[4] }`);      
      console.log(arr10);      

    // Creating new Array by the main array modified by {Starting Copying & Replaement index:[2] - from the third position  } , {Coping from index : [3] } , {Coping before index:[4] } :
      console.log(`Main array is : ${arr2} ` );      
      
      let arr20 = arr2.copyWithin( 2 , 3 , 4 ) ;
      
    // printing the new created array :
      console.log(`new Array by the main array modified by {Starting Copying & Replaement index:[2] - from the third position  } , {Coping from index : [3] } , {Coping before index:[4] } ` );      
      console.log(arr20);      
      

    // Creating new Array by the main array modified by {Starting Copying & Replaement index:[3] - from the fourth position} , {Coping from index : [0] - from the start of the array} , {Coping before index:[3] } :  
    console.log(`Main array is : ${arr3} ` );      
    
    let arr30 = arr3.copyWithin( 3 , 0 , 3 ) ;
      
    // printing the new created array :
      console.log(`new Array by the main array modified by {Starting Copying & Replaement index:[3] - from the fourth position} , {Coping from index : [0] - from the start of the array} , {Coping before index:[3] } `);      
      console.log(arr30);      
    // -------------------------------------
    
    // printing a sepersator :  
    console.log(` ${"=".repeat(90)} `) ;
        
    //  -------------------------------------------
  }
  // =============================================================
  // =============================================================
  // ===========================================================
}

function display() {
  document.getElementById("note").innerHTML =
    myTest + "\n\n" + "=".repeat(90) + "\n\n";
}
