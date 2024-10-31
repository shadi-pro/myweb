// 26 forEach And Discussions :
/* Main lessons functions :
   1- Looping inside the Array using the {for} -> [simple [printing elements values + index ]]
   2- Looping inside the Array using the {forEach} -> [simple [printing elements values + index ]]
   3- Looping inside the Array using the {forEach} -> [Calling function of [printing elements values + index ]]    
*/
  // ---------------------------------------------------------------------

// 26 forEach And Discussions:

function myTest() {
  "use strict";
  alert("Welcome to 26 forEach And Discussions");

  var dis = document.getElementById("note");

  var x = prompt(
    ` Please choose one of following functions from below  :
    1- Looping inside the Array using the {for} -> [simple [printing elements values + index ]]
    2- Looping inside the Array using the {forEach} -> [simple [printing elements values + index ]]
    3- Looping inside the Array using the {forEach} -> [Calling function of [printing elements values + index ]]    
   ` );

  if (x == 1) {
  
    forSimp();
  
  } else if (x == 2) {
  
    forEachSimp();

  } else if (x == 3) {
    
    forEachFunc();
    
  // } else if (x == 4) {

    // descSymb();

  // } else if (x == 5) {

    // iteratorSymb();

  // } else if (x == 6) {

    // setSpread();

  } else {
    alert("No option has been selected !");
  }
  // =========================================================================

  // 1] Looping inside the Array using the {for} -> [simple [printing elements values + index ]]  :
  function forSimp() {
    alert(
      "Welcome to  Looping inside the Array using the {for} -> [simple [printing elements values + index ]] "
    );

    dis.innerHTML = "";

    // Defining Array :
      let  arr  = ['A' , 'B' , 'C' , '' , 'D' , 'F'] ; 
      
      // Looping inside the array using  for loop statment : 
        for (let i = 0 ; i < arr.length ; i++) {
        console.log( `${i} -  ${arr[i]}  ` ) ;
        dis.innerHTML += `${i} -  ${arr[i]} ` ;
      }
    
    //  -------------------------------------------
  }

  // =============================================================
  // 2] Looping inside the Array using the {forEach} -> [simple [printing elements values + index ]] :
  function forEachSimp() {

      alert(
        "Welcome to Looping inside the Array using the {forEach} -> [simple [printing elements values + index ]]  "
      );

      dis.innerHTML = "";

      // Defining Array :
        let arr = ['A' , 'B' , 'C' , '' , 'D' , 'F'] ; 
          
      // Looping inside the array using  {for} loop statment => [printing the Array element & index] : 
      for (let i = 0 ; i < arr.length ; i++) {
        console.log( `${i} -  ${arr[i]}  ` ) ;
        dis.innerHTML += `${i} -  ${arr[i]} ` ;
      }

      // Printing seperator :
        console.log(`${'#'.repeat(15)} `) ;
        dis.innerHTML += `${'#'.repeat(15)} ` ;
      
      // Looping inside the array using {forEach} loop statment => [printing the Array element only] : 
        arr.forEach(el => {
          console.log(el)  ;  
        });
        
      
      // Looping inside the array using {forEach} loop statment => [printing the Array element [el] & index [i]] : 
        arr.forEach((el , i) => {
            console.log(` ${i} - ${el}`)  ;  
        });
        
      }
  // =============================================================
  
  // 3] Looping inside the Array using the {forEach} -> [Calling function of [printing elements values + index ]]    :
  function forEachFunc() {

      alert(
        "Welcome to Looping inside the Array using the {forEach} -> [Calling function of [printing elements values + index ]]  "
      );

      dis.innerHTML = ""       
      
      // Defining Array :
        let arr = ['A' , 'B' , 'C' , '' , 'D' , 'F'] ; 

      // Defining the funciton : 
        function loopFunc (el, i) {
          console.log(` ${el} - ${i} `)  ;  
      }
      
      // Looping inside the array using {forEach} loop statment  (using inner callback function) => [printing the Array element & index] : 
        // arr.forEach((el , i) => {
        //   console.log(` ${i} - ${el}`)  ;  
        // });


    // Calling the defined functino inside the foreach (calling predefined callback function)  :
      arr.forEach(loopFunc);

  }
  // =============================================================
  // ===========================================================

}

function display() {
  document.getElementById("note").innerHTML =
    myTest + "\n\n" + "=".repeat(90) + "\n\n";
}
