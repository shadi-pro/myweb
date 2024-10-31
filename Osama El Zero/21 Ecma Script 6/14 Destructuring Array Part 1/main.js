// 14 Destructuring Array Part 1 :
/* Main lessons functions :
   1- Destructuring/Extraction Array [Ordinary Destructuring]
   2- Destructuring Array's Elements with [Predefined Elements] 
   3- Destructuring Array's Elements with [Default Values of non existed elements in the main array] 
   4- Destructuring Array's Elements with [Escaped elements from the main array] 
 */
// ---------------------------------------------------------------------

// 14 Destructuring Array Part 1 :

function myTest() {
  "use strict";
  alert("Welcome to 14 Destructuring Array Part 1 ");

  var dis = document.getElementById("note");

  var x = prompt(
    ` Please choose one of following functions from below  :
    1- Destructuring/Extraction Array [Ordinary Destructuring]        
    2- Destructuring Array's Elements with [Predeclared Elements] 
    3- Destructuring Array's Elements with [Default Values of non existed elements in the main array] 
    4- Destructuring Array's Elements with [Escaped elements from the main array] 
    `
  );

  if (x == 1) {
  
    desArr();
  
  } else if (x == 2) {
  
    desArrPreDec();

  } else if (x == 3) {

    desArrDefElems();

  } else if (x == 4) {

    desArrDefElemsEsc();

  // } else if (x == 5) {

  // allFuncsObj();

  } else {
    alert("No option has been selected !");
  }

  // =========================================================================

  // 1] Using Destructuring/Extraction Array [Ordinary Destructuring] :
  function desArr() {
    alert(
      "Welcome to Using Destructuring/Extraction Array [Ordinary Destructuring] "
    );

    dis.innerHTML = "";

    // Defining Array :
    const food = [ 'Burger', 'Pizza' , 'Rice' , 'Meat' , 'Checken' ];
      

    // Destructuring the array into several variables by using ES6 js [Re-Decleration]   :
    const [one , two , three , four , five] = food;

    // printing the extracted variables from the array by using [Re-Decleration] :
    console.log(`
      1] Extracted variables from the array by using [Re-Decleration] [Ordinary Destructuring]: 
        My favourite meals are  ${one} , ${two} , ${three} , ${four} ,${five} 
    `);

    dis.innerHTML += ` 1] Extracted variables from the array by using [Re-Decleration] [Ordinary Destructuring] : 
    My favourite meals are ${one} , ${two} , ${three} , ${four} ,${five} 
      ==================================
    `;    
  }

  // =============================================================
    // 2] Destructuring Array's Elements with [Predefined Elements]  :
    function desArrPreDec() {

      alert(
        "Welcome to Using Destructuring Array's Elements with [Predefined Elements] "
      );

      dis.innerHTML = "";

    // Defining some variables of the same name of array's properties :
      let one = 'old one' ,
        two = 'old two' ,
        three = 'old three' ,
        four = 'old four' ,
        five = 'old five' ;

    
    // Defining Array :
    const food = [ 'Burger', 'Pizza' , 'Rice' , 'Meat' , 'Checken' ];
      

    // Destructuring the array [of predefined varaibles] into several variables by using ES6 js [Re-Assignment + Pre-defined] :
     [one , two , three , four , five] = food;

    // printing the extracted variables from the array by using [Re-Assignment + Pre-defined]:
    console.log(`
      2] Extracted variables from the array by using [Re-Assignment + Pre-defined] : 
        My favourite meals are ${one} , ${two} , ${three} , ${four} ,${five} 
    `);

    dis.innerHTML += ` 2] Extracted variables from the array by using [Re-Assignment + Pre-defined] : 
    My favourite meals are  ${one} , ${two} , ${three} , ${four} ,${five} 
      ==================================
    `;  

  }

  // =============================================================
    // 3] Destructuring Array's Elements with [Default Values of non existed elements in the main array] :
    function desArrDefElems() {

      alert(
        "Welcome to Use Destructuring Array's Elements with [Default Values of non existed elements in the main array] "
      );

      dis.innerHTML = "";
    
    // Defining Array :
    const food = [ 'Burger', 'Pizza' , 'Rice' , 'Meat' , 'Checken' ];
      

    // Destructuring the array into several variables by using ES6 js [Re-Decleration] + [Default Values of non existed elements in the main array]   :
    const [one , two , three , four , five , six = "Default"] = food;

    // printing the extracted variables from the array by using [Re-Decleration] + [Default Values of non existed elements in the main array] :
    console.log(`
      3] Extracted variables from the array by using [Re-Decleration] + [Default Values of non existed elements in the main array] : 
        My favourite meals are  ${one} , ${two} , ${three} , ${four} ,${five} , ${six} 
    `);

    dis.innerHTML += ` 3] Extracted variables from the array by using [Re-Decleration] + [Default Values of non existed elements in the main array] : 
    My favourite meals are ${one} , ${two} , ${three} , ${four} ,${five} , ${six}
      ==================================
    `;    
  }
  // =============================================================

  // 4] Destructuring Array's Elements with [Escaped elements from the main array] :
    function desArrDefElemsEsc() {

      alert(
        "Welcome to Use Destructuring Array's Elements with [Escaped elements from the main array] "
      );

      dis.innerHTML = "";
    
     // Defining Array :
     const food = [ 'Burger', 'Pizza' , 'Rice' , 'Meat' , 'Checken' ];
      

     // Destructuring the array into several variables by using ES6 js [Re-Decleration] + [Escaped elements from the main array] :
     const [one , , three , four ,  ]  = food;
 
     // printing the extracted variables from the array by using [Re-Decleration] + [Escaped elements from the main array] :
     console.log(`
       4] Extracted variables from the array by using [Re-Decleration] + [Escaped elements from the main array] :
         My favourite meals are  ${one} , ${three} , ${four}  
     `);
 
     dis.innerHTML += ` 4] Extracted variables from the array by using [Re-Decleration] + [Escaped elements from the main array]  : 
     My favourite meals are ${one} , ${three} , ${four} 
       ==================================
     `;    
  }
  // =============================================================
}

function display() {
  document.getElementById("note").innerHTML =
    myTest + "\n\n" + "=".repeat(90) + "\n\n";
}
