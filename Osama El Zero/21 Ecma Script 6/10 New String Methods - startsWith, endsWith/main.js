// 10 New String Methods - startsWith, endsWith:
/* Main lessons functions :
   1- Using startsWith() by [default position] + [cutom position] value 
   2- Using endsWith() by [default string length] + [cutom string length] value 
 */
// ---------------------------------------------------------------------

// 10 New String Methods - startsWith, endsWith :

function myTest() {
  "use strict";
  alert("Welcome to 9 Rest parameter ");

  var dis = document.getElementById("note");

  var x = prompt(
    ` Please choose one of functions from below options :
    1- Using startsWith() by [default position] + [cutom position] value 
    2- Using endsWith() by [default string length] + [cutom string length] value 
    `
  );

  if (x == 1) {
    startW();
  } else if (x == 2) {
    endW();

    // } else if (x == 3) {

    //     endDefLeng();

    // } else if (x == 4) {

    //     endCustLeng();

    // } else if (x == 5) {

    //     allFuncsObj();
  } else {
    alert("No option has been selected !");
  }

  // =========================================================================

  // 1] Using startsWith() by [default position] + [custom position] value :
  function startW() {
    alert(
      "Welcome to Using Using startsWith() by [default position] + [custom position] value  "
    );

    dis.innerHTML = "";

    // Defining string variable :
    let str = "Hello Im Shadi Web Developer",
      res = str.startsWith("Hello"),
      resC = str.startsWith("Im", 6);

    // Checking of the existance of the StartsWith() method by using [Default position value] :
    console.log(
      "The result of checking of existance of string [Hello] with [Default position value] at start is ",
      str.startsWith("Hello")
    );

    dis.innerHTML += `1] The result of checking of existance of string [Hello] [Default position value] at start is : 
                    ${res}   
                    ==================================
                `;

    // Checking of the existance of the StartsWith() method by using [Custom position value] :
    console.log(
      "The result of checking of existance of string [Im] with [Custom position value (6)] at start is ",
      str.startsWith("Im", 6)
    );

    dis.innerHTML += `2] The result of checking of existance of string [Im] [Custom position value (6)] is : 
                    ${resC}   
                    ==================================
                `;
  }
  // ------------------------------------------------------------
 
    // 2] Using endsWith() by [default length] + [custom length] value :
    function endW() {
      alert(
        "Welcome to Using endsWith() by [default length] + [custom length] value  "
      );

      dis.innerHTML = "";

      // Defining string variable :
      let str = "Hello Im Shadi Web Developer",
        res = str.endsWith("Developer"),
        resC = str.endsWith("Web", 20);

      // Checking of the existance of the endsWith() method by using [Default Length value] :
      console.log(
        "The result of checking of existance of string [Developer] with [Default length value] at end is ",
        str.endsWith("Developer")
      );

      dis.innerHTML += `1] The result of checking of existance of string [Developer] [Default Length value] at end of string is : 
                ${res}   
                ==================================
            `;

      // Checking of the existance of the endsWith() method by using [Custom Length value] :
      console.log(
        "The result of checking of existance of string [Web] with [Custom Length value (20)] at end is ",
        str.endsWith("Web", 20)
      );

      dis.innerHTML += `2] The result of checking of existance of string [Web] [Custom Length value (20)] at end is : 
                ${resC}   
                ==================================
            `;
    }

  // =============================================================
}

function display() {
  document.getElementById("note").innerHTML =
    myTest + "\n\n" + "=".repeat(90) + "\n\n";
}
