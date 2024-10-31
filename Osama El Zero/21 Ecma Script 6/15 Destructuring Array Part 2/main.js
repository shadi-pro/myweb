// 15 Destructuring Array Part 2 :
/* Main lessons functions :
   1- Destructuring Array's Elements with [ Nested multi levels array ]  
   2- Destructuring Array's Elements with [Default Values of non existed elements in the main array & nested multi levels array] 
   3- Destructuring Array's Elements with [ Escaped with Nested multi levels array] 
   4- Destructuring Array's Elements with [ Rest operator with Nested multi levels array]
 */
// ---------------------------------------------------------------------

// 15 Destructuring Array Part 2 :

function myTest() {
  "use strict";
  alert("Welcome to 15 Destructuring Array Part 2 ");

  var dis = document.getElementById("note");

  var x = prompt(
    ` Please choose one of following functions from below  :
    1- Destructuring Array's Elements with [ Nested multi levels array ]  
    2- Destructuring Array's Elements with [ Default Values of non existed elements in the main array & nested multi levels array] 
    3- Destructuring Array's Elements with [ Escaped with Nested multi levels array] 
    4- Destructuring Array's Elements with [ Rest operator with Nested multi levels array]
    `
  );

  if (x == 1) {
  
    desMLArr();
  
  } else if (x == 2) {
  
    desMLArrDefV();

  } else if (x == 3) {

    desMLArrDefVEscElem();

  } else if (x == 4) {

    desArrRes();

  // } else if (x == 5) {

  // allFuncsObj();

  } else {
    alert("No option has been selected !");
  }

  // =========================================================================

  // 1] Destructuring Array's Elements with [ Nested multi levels array ]   :
  function desMLArr() {
    alert(
      "Welcome to Using Destructuring Array's Elements with [ Nested multi levels array ]   "
    );

    dis.innerHTML = "";

    // Defining [Multi levels Nested Array] :
    const food = [ 'Burger', 'Pizza' , 'Rice' , 'Meat' , 'Checken' , ['banana' , 'apple' , 'mango' , ['orange1' , 'orange2' , 'orange3'] ] ];
      
    // Destructuring the [Multi levels Nested array] into several variables by using ES6 js [Re-Decleration]   :
    const [one , two , three , four , five , [ fr1 , fr2 , fr3  , [ o1 ,o2  , o3 ] ] ] = food;

    // printing the extracted variables from the [Multi levels nested Array] by using [Re-Decleration] :
    console.log(`
      1] Extracted variables from the [Multi levels Nested array] by using [Re-Decleration] [Ordinary Destructuring]: 
        My favourite meals are  ${one} , ${two} , ${three} , ${four} ,${five} 
        My favourite fruit are  ${fr1} , ${fr2} , ${fr3}  
        My favourite orange type are  ${o1} , ${o2} , ${o3}  
    `);

    dis.innerHTML += ` 1] Extracted variables from the [Multi levels Nested array] by using [Re-Decleration] [Ordinary Destructuring]: 
    My favourite meals are  ${one} , ${two} , ${three} , ${four} ,${five}
    My favourite fruit are  ${fr1} , ${fr2} , ${fr3}  
    My favourite orange type are  ${o1} , ${o2} , ${o3}  
  ` ;
  }

  // =============================================================
    // 2] Destructuring Array's Elements with [ Default Values of non existed elements in the main array & nested multi levels array]  :
  function desMLArrDefV() {

      alert(
        "Welcome to Using Destructuring Array's Elements with [ Default Values of non existed elements in the main array & nested multi levels array]  "
      );

      dis.innerHTML = "";

    // Defining Multi levles Nested Array :
    const food = [ 'Burger', 'Pizza' , 'Rice' , 'Meat' , 'Checken' , ['banana' , 'apple' , 'mango' , ['orange1' , 'orange2' , 'orange3'] ] ];
        
    // Destructuring the [Multi levels Nested array] + [non existed elements default values] into several variables by using ES6 js [Re-Decleration]   :
    const [one , two , three , four , five , six="def Food" , [ fr1 , fr2 , fr3 , [ o1 ,o2, o3 , o4 = 'def orange' ] ] ] = food;

    // printing the extracted variables from the [Multi levels nested Array] + [non existed elements default values] by using [Re-Decleration] :
    console.log(`
      2] Extracted variables from the [Multi levels Nested array] + [non existed elements default values]  by using [Re-Decleration] [Ordinary Destructuring]: 
        My favourite meals are  ${one} , ${two} , ${three} , ${four} , ${five} , ${six}
        My favourite fruit are  ${fr1} , ${fr2} , ${fr3}  
        My favourite orange type are  ${o1} , ${o2} , ${o3} , ${o4}  
    `);

    dis.innerHTML += ` 2] Extracted variables from the [Multi levels Nested array] + [non existed elements default values] by using [Re-Decleration] [Ordinary Destructuring]: 
    My favourite meals are  ${one} , ${two} , ${three} , ${four} , ${five} , ${six}
    My favourite fruit are  ${fr1} , ${fr2} , ${fr3}  
    My favourite orange type are  ${o1} , ${o2} , ${o3} , ${o4}
  `;

 }
 
  // =============================================================
    // 3] Destructuring Array's Elements with [Escaped elements with Nested multi levels array]  :
  function desMLArrDefVEscElem() {

      alert(
        "Welcome to Use Destructuring Array's Elements with [Escaped elements with Nested multi levels array] "
      );

      dis.innerHTML = "";
    
    // Defining [Multi levels Nested Array] :
    const food = [ 'Burger', 'Pizza' , 'Rice' , 'Meat' , 'Checken' , ['banana' , 'apple' , 'mango' , ['orange1' , 'orange2' , 'orange3'] ] ];
        
    // Destructuring the [Multi levels Nested array] + [Escaped elements] into several variables by using ES6 js [Re-Decleration]   :
    const [one , , three , four , , [ fr1 , , fr3 , [ o1 ,o2, ] ] ] = food;

    // printing the extracted variables from the [Multi levels nested Array] + [Escaped elements] by using [Re-Decleration] :
    console.log(`
      Main array elements are: ${food}
      3] Extracted variables from the Multi levels Nested array + [Escaped elements] by using [Re-Decleration] [Ordinary Destructuring]: 
        My favourite meals are  ${one} , ${three} , ${four} 
        My favourite fruit are  ${fr1} , ${fr3}  
        My favourite orange type are  ${o1} , ${o2}  
    `);

    dis.innerHTML += ` Main array elements are: ${food}
    3] Extracted variables from the [Multi levels Nested array] + [Escaped Elements]  by using [Re-Decleration] [Ordinary Destructuring]: 
    My favourite meals are : ${one} , ${three} , ${four} 
    My favourite fruit are : ${fr1} , ${fr3}  
    My favourite orange type are :  ${o1} , ${o2}
  `;

  }
  // =============================================================

  // 4] Destructuring Array's Elements with [ Rest operator with simple array] :
  function desArrRes() {

      alert(
        "Welcome to Use Destructuring Array's Elements with [Rest operator with simple array] "
      );

      dis.innerHTML = "";
    
     // Defining Array :
     const food = [ 'Burger', 'Pizza' , 'Rice' , 'Meat' , 'Checken' , 'fruit' , 'vegetable' ];
      

     // Destructuring the simple array into several variables by using ES6 js [Re-Decleration] + [Rest operator with simple array] :
     const [one , two , three , ...otherFood  ]  = food;
 
     // printing the extracted variables from the array by using [Re-Decleration] + [Rest Operator with simple array] :
     console.log(`Main Array is ${food} 
       4] Extracted variables from the array by using [Re-Decleration] + [Rest Operator with simple array] :
         My favourite meals are  ${one} , ${two} , ${three} , ${otherFood}  
     `);
 
     dis.innerHTML += ` Main Array is ${food}
      4] Extracted variables from the array by using [Re-Decleration] + [Rest Operator with simple array]  : 
      My favourite meals are ${one} , ${two} , ${three} , ${otherFood} 
       ==================================
     `;    
  }
  // =============================================================
}

function display() {
  document.getElementById("note").innerHTML =
    myTest + "\n\n" + "=".repeat(90) + "\n\n";
}
