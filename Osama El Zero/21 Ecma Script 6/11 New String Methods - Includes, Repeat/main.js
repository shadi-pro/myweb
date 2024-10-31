// 11 New String Methods - Includes, Repeat :
/* Main lessons functions :
   1- Using includes() by [default position] + [cutome position] value 
   2- Using repeats() by [cutome Number]  
 */
// ---------------------------------------------------------------------

// 11 New String Methods - Includes, Repeat :

function myTest() {
  "use strict";
  alert("Welcome to 11 New String Methods - Includes, Repeat ");

  var dis = document.getElementById("note");

  var x = prompt(
    ` Please choose one of functions from below options :
    1- Using includes() by [default position] + [cutome position] value 
    2- Using repeats() by [cutome Number]  
    `
  );

  if (x == 1) {
  
    includesMethod();
  
  } else if (x == 2) {
  
    repeatsMethod();

  // } else if (x == 3) {

    // repeatsMethod();

  // } else if (x == 4) {

  // endCustLeng();

  // } else if (x == 5) {

  // allFuncsObj();

  } else {
    alert("No option has been selected !");
  }

  // =========================================================================

  // 1] Using includes() by [default position] + [cutome position] value  :
  function includesMethod() {
    alert(
      "Welcome to Using includes() by [default position] + [cutome position] value "
    );

    dis.innerHTML = "";

    // Defining string variable :
    let str = "Hello Im Shadi Web Developer",
      res = str.includes("Hello"),
      resC = str.includes("Im", 6);

    // Checking of the existance of certain string within the Main String using includes() method by using [Default position value] :
    console.log(
      "The result of checking Result of existance of string [Hello] with [Default position value] at start is ",
      str.includes("Hello")
    );

    dis.innerHTML += `1] The result of checking Result of existance of string [Hello] with [Default position value] at start is : 
                    ${res}   
                    ==================================
                `;

    // Checking of the existance of certain string within the Main String using includes() method by using [Custom position value] :
    console.log(
      "Checking of the existance of certain string[Im] within the Main String using includes() method by using [Custom position value (6)] at start is ",
      str.includes("Im", 6)
    );

    dis.innerHTML += `2] Checking of the existance of certain string[Im] within the Main String using includes() method by using [Custom position value (6)] is : 
                    ${resC}   
                    ==================================
                `;
  }
  // ------------------------------------------------------------
 
    // 2] Using repeats() by [cutome Number] :
    function repeatsMethod() {
      alert(
        "Welcome to Using repeats() by certain repeatance value  "
      );

      dis.innerHTML = "";

      // Defining string variable :
      let str = "Hello Im Shadi Web Developer",
         strR = str.repeat(4);

      // Printing of the String for several certain times by using repeats() method :
      console.log(
        "The result of Printing of the String for several certain times [4] by using repeats() method is ",
        strR
      );

      dis.innerHTML += `1] The result of Printing of the String for several certain times [4] by using repeats() method is : 
                ${str.repeat(4)}   
                ==================================
            `;
    }

  // =============================================================
}

function display() {
  document.getElementById("note").innerHTML =
    myTest + "\n\n" + "=".repeat(90) + "\n\n";
}
