// 36 New Array Methods Part 1 :

/* Main lessons functions :
  1- Array.of(Elements to create the new array of it) => [2 examples: using old method in JS , using new method array.of() to Create array of given values ]
  2- Create new Array from anohter Iterables variables using Array.from(Iterable variable , MapFunc , This ) => [2 examples: using direct array , using calculated array ]
  3- Array.fill(Value to fill the existed array with , start from position , end before position) => [3 examples: direct array , with using starting position , with using End position  ]
  */
 // ---------------------------------------------------------------------

 // 36 New Array Methods Part 1:

function myTest() {
  "use strict";
  alert("Welcome to 36 New Array Methods Part 1");

  var dis = document.getElementById("note");

  var x = prompt(
    ` Please choose one of following functions from below  :
    1- Array.of(Elements to create the new array of it) => [2 examples: using old method in JS , using new method array.of() to Create array of given values ]
    2- Create new Array from anohter Iterables variables using Array.from(Iterable variable , MapFunc , This ) => [2 examples: using direct array , using calculated array ]
    3- Array.fill(Value to fill the existed array with , start from position , end before position) => [3 examples: direct array , with using starting position , with using End position  ]
    `
  );

  if (x == 1) {
    arrOf();
  
  } else if (x == 2) {
  
    arrFrom();
  
  } else if (x == 3) {
  
    arrFill();

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

  // 1] Create new arrays using Array.of(Elements to create the new array of it) => [2 examples: using old method in JS , using new method array.of() to Create array of given values ] :
  
  function arrOf() {
    alert(
      "Welcome to Array.of(Elements to create the new array of it) => [2 examples] "
    );

    dis.innerHTML = "";

    var z = prompt(
      ` Please choose one of following functions from below  :
      1- Using the old JS method { Array(value(s)) } to create new Array of given values . 
      2- Using the new ES6 method {Array.of(Elements to create the new array of it)} 
      `
    );
  
    
    if (z == 1) {
      
      // Defining (3) arrays [from given values] using old method { Array() } :
        let oldArr1 = Array(100 , 200),
            oldArr2 = Array('A' , 'B' , 'C'),
            oldArr3 = Array(100);

      // printing all defined arrays , and it's lengthes :
        console.log(`The First array is : ${oldArr1} || with length : ${oldArr1.length} 
        The Second array is : ${oldArr2} || with length : ${oldArr2.length} 
        The Third array is : ${oldArr3} || with length : ${oldArr3.length} 
        `); 
        
        // printing a seperator :  
        console.log(` ${"=".repeat(90)} `) ;

      } else if (z == 2) {
       
        // Defining (3) arrays [from given values] using new method { Array.of() } :
          let newArr1 = Array.of(100 , 200),
              newArr2 = Array.of('A' , 'B' , 'C'),
              newArr3 = Array.of(100);
  
        // printing all defined arrays , and it's lengthes :
          console.log(`The First array is : ${newArr1} || with length : ${newArr1.length} 
          The Second array is : ${newArr2} || with length : ${newArr2.length} 
          The Third array is : ${newArr3} || with length : ${newArr3.length} 
          `); 

        // printing a seperator :  
          console.log(` ${"=".repeat(90)} `) ;

      } else {
      alert("No option has been selected !");
    }
          
    // printing a seperator :  
    console.log(` ${"=".repeat(90)} `) ;
    //  -------------------------------------------
  }
  // =============================================================
  
  // 2] Create new Array from anohter Iterables variables using Array.from(Iterable variable , MapFunc , This ) => [2 examples: using direct array , using calculated array ] :
  
  function arrFrom() {
    alert(
      "Welcome to Create new Array from anohter Iterables variables using Array.from(Iterable variable , MapFunc , This ) => [2 examples: using direct array , using calculated array ]  "
    );

    dis.innerHTML = "";

    var z = prompt(
      ` Please choose one of following functions from below  :
      1- Using direct array . 
      2- Using calculated array 
      `
    );
  
    if (z == 1) {
      
      // Defining default an array [using new ES6 method {Array.of() } ]  :
        let arr = Array.of(100 , 200, 300 , 500);
            
      // Creating new array from the previous defined array [without using any calculations - Map Function  ] :
        let newArr = Array.from(arr); 

      // printing all defined arrays :
        console.log(`The First main array is : ${arr} 
        The Second array [without using any calculations - Map Function] is : ${newArr} 
        `); 

        // printing a seperator :  
        console.log(` ${"=".repeat(90)} `) ;
        
      } else if (z == 2) {
        
        // Defining default an array [using new ES6 method {Array.of() } ]   :
          let arr = Array.of(100 , 200, 300 , 500);
              
        // Creating new array from the previous defined array [without using any calculations - Map Function  ] :
          let newCalcArr = Array.from(arr, num => num + 100); 
  
        // printing all defined arrays :
          console.log(`The First main array is : ${arr} 
          The Second array [with using any calculations {+100} - Map Function ] is : ${newCalcArr} 
          `);       
        
        // printing a seperator :  
        console.log(` ${"=".repeat(90)} `) ;
          
    } else {
      alert("No option has been selected !");
    }

    // printing a seperator :  
    console.log(` ${"=".repeat(90)} `) ;

    //  -------------------------------------------
  }
  // =============================================================

  // 3] Filling Array using {Array.fill(Value to fill the existed array with , start from position , end before position)} => [3 examples: direct array with default positions  , with using starting position , with using End position  ] :
  
  function arrFill() {
    alert(
      "Welcome to Filling Array using {Array.fill(Value to fill the existed array with , start from position , end before position) }=> [3 examples: direct array with default positions  , with using starting position , with using End position  ] "
    );

    dis.innerHTML = "";

    var z = prompt(
      ` Please choose one of following functions from below  :
      1- Using direct array with out default positions 
      2- with using starting position 
      3- with using starting position + End position
      `
    );
  
    if (z == 1) {
      
      // Defining default an array [using new ES6 method {Array.of() } ]  :
        let arr = Array.of(100 , 200, 300 , 500 , 600 , 700 , 1000);
            
      //  Filling the all predefined with one value  [Replacement]:
        arr.fill(10); 

        // printing main array after being filled with value [with using default value of start/End positions ] :
        console.log(`The  main array after filled by using the {.fill(10)} [using default value of start/End positions] as following : ${arr} 
        `); 

        // printing a seperator :  
        console.log(` ${"=".repeat(90)} `) ;
      
      } else if (z == 2) {
        
        // Defining default an array [using new ES6 method {Array.of() } ]  :
        let arr = Array.of(100 , 200, 300 , 500 , 600 , 700 , 1000);
        
        //  Filling the all predefined with one value  [with using start position : 2 third element + default value of End position]:
        arr.fill(10, 2); 
        
        // printing main array after being filled with value [with start position only + default value of End position ]  :
        console.log(`The  main array after filled with value [with start position only : [2] third element ]  by using the {.fill(10 , 2)} as following : ${arr} 
        `); 
    
        // printing a seperator :  
        console.log(` ${"=".repeat(90)} `) ;
          
      } else if (z == 3)  {
        
        // Defining default an array [using new ES6 method {Array.of() } ]  :
          let arr = Array.of(100 , 200, 300 , 500 , 600 , 700 , 1000);
              
        //  Filling the all predefined with one value  [with using start position : 2 third element +  End position value of 4 fifth element ]:
          arr.fill(10, 2 , 4); 
  
        // Printing main array after being filled with value [with start position : 2 + End position : 4 ]  :
          console.log(`The  main array after filled with value [with start position : [2] + End position : [4]  ]  by using the {.fill(10 , 2 , 4)} as following : ${arr} 
          `);           
        
        // printing a seperator :  
          console.log(` ${"=".repeat(90)} `) ;
        
    } else {
      alert("No option has been selected !");
    }

    // printing a seperator :  
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
