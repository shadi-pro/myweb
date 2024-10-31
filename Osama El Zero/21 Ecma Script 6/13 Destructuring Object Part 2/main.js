// 13 Destructuring Object Part 2 :
/* Main lessons functions :
   1- Destructuring/Extraction Object's properites with [custom names]        
   2- Destructuring/Extraction Object's properites with [custom names] & [default values] 
   3- Destructuring/Extraction Object's properites with [custom names] & [default values] & [with child object]
   4- Destructuring/Extraction Object's properites with [custom names] & [default values] & [with child object] & [only chld object] 
 */
// ---------------------------------------------------------------------

// 13 Destructuring Object Part 2 :

function myTest() {
  "use strict";
  alert("Welcome to 13 Destructuring Object Part 2 ");

  var dis = document.getElementById("note");

  var x = prompt(
    ` Please choose one of functions from below options :
    1- Destructuring/Extraction Object's properites with [custom names]        
    2- Destructuring/Extraction Object's properites with [custom names] & [default values] 
    3- Destructuring/Extraction Object's properites with [custom names] & [default values] & [with child object]
    4- Destructuring/Extraction Object's properites with [custom names] & [default values] & [with child object] & [only chld object] 
    `
  );

  if (x == 1) {
  
    desCustName();
  
  } else if (x == 2) {
  
    desCustNameDefVal();

  } else if (x == 3) {

    desCustNameDefValChild();

  } else if (x == 4) {

    desCustNameDefValChildOnly();

  // } else if (x == 5) {

  // allFuncsObj();

  } else {
    alert("No option has been selected !");
  }

  // =========================================================================

  // 1] Using Destructuring/Extraction Object's properites with [custom names] :
  function desCustName() {
    alert(
      "Welcome to Using Destructuring/Extraction Object's properites with [custom names]  "
    );

    dis.innerHTML = "";

    // Defining Object :
    const user = {
      name  : 'shadi',
      age  : 36 ,
      gender  : 'Male',
      website  : 'shindowpro'
    };

    // Destructuring the object into several variables by using ES6 js [Re-Decleration + custom name]   :
    const {name:n, age:a, gender:g, website:w}  = user;

    // printing the extracted variables from the object by using [Re-Decleration + custom name] :
    console.log(`
      2] Extracted variables from the object by using [Re-Decleration] + [custom name] : 
        My name is ${n} 
        My age is ${a}
        Im  ${g} 
        my website is ${w} 
    `);

    dis.innerHTML += ` 2] Extracted variables from the object by using [Re-Decleration] + [custom name] : 
      My name is ${n} 
      My age is ${a}
      Im  ${g} 
      my website is ${w} 
      ==================================
    `;    
  }

  // =============================================================
    // 2] Destructuring/Extraction Object's properites with [custom names] & [default values] :
    function desCustNameDefVal() {

      alert(
        "Welcome to Using Destructuring/Extraction Object's properites with [custom names] & [default values]    "
      );

      dis.innerHTML = "";

    // // Defining some variables of the same name of object's properties :
    //   let name = 'old Name' ,
    //     age = 'old age' ,
    //     gender = 'old gender' ,
    //     website = 'old website' ;

    // Defining Object :
    const user = {
      name  : 'shadi',
      age  : 36 ,
      gender  : 'Male',
      website  : 'shindowpro'
    };


    // Destructuring the object into several variables by using ES6 js [Re-Decleration + custom name  +  dafault values]   :
    const {name:n, age:a, gender:g, website:w, city:c="Cairo" }  = user;

    // printing the extracted variables from the object by using [Re-Decleration + custom name + default values] :
    console.log(`
    2] Extracted variables from the object by using [Re-Decleration] + [custom name] + [default values of non existed] : 
      My name is ${n} 
      My age is ${a}
      Im  ${g} 
      my website is ${w}  
      my website is ${c} 
    `);

    dis.innerHTML += ` 2] Extracted variables from the object by using [Re-Decleration] + [custom name] + [default values of non existed] : 
      My name is ${n} 
      My age is ${a}
      Im  ${g} 
      my website is ${w} 
      my city is ${c} 
      ==================================
    `;    
  }

  // =============================================================
    // 3] Destructuring/Extraction Object's properites with [custom names] & [default values] & [with child object] :
    function desCustNameDefValChild() {

      alert(
        "Welcome to Use Destructuring/Extraction Object's properites with [custom names] & [default values] & [with child object] "
      );

      dis.innerHTML = "";
    
    // Defining Object :
    const user = {
      name  : 'shadi',
      age  : 36 ,
      gender  : 'Male',
      website  : 'shindowpro', 
      langs :{
        html: '70%',
        css: '80%',
        js: '20%'
      }
    };

    // Destructuring the object into several variables by using ES6 js Re-Decleration [custom name + dafault values + with child object ]   :
    const {name:n, age:a, gender:g, website:w, city:c="Cairo", langs:{html:h, css, js:JS, python ='Python' } }  = user;

    // printing the extracted variables from the object by using [Re-Decleration + custom name + default values + with child object] :
    console.log(`
      3] Extracted variables from the object by using [Re-Decleration] + [custom name] + [default values of non existed properites in the object] + [with child object] : 
        My name is ${n} 
        My age is ${a}
        Im  ${g} 
        my website is ${w} 
        my city is ${c} 
        my Progress in Html ${h} 
        my Progress in CSS ${css} 
        my Progress in Html ${JS} 
        my Progress in Html ${python} 
    `);

    dis.innerHTML += ` 3] Extracted variables from the object by using [Re-Decleration] + [custom name] + [default values of non existed properites in the object] + [with child object] : 
    My name is ${n} 
    My age is ${a}
    Im ${g} 
    my website is ${w} 
    my city is ${c} 
    my Progress in Html ${h} 
    my Progress in CSS ${css} 
    my Progress in Html ${JS} 
    my Progress in Html ${python}  
      ==================================
    `;    
  }
  // =============================================================

  // 4] Destructuring/Extraction Object's properites with [custom names] & [default values] & [with child object] & [only chld object]  :
    function desCustNameDefValChildOnly() {

      alert(
        "Welcome to Use Destructuring/Extraction Object's properites with [custom names] & [default values] & [with child object] & [only chld object] "
      );

      dis.innerHTML = "";
    
    // Defining Object :
    const user = {
      name  : 'shadi',
      age  : 36 ,
      gender  : 'Male',
      website  : 'shindowpro', 
      langs :{
        html: '70%',
        css: '80%',
        js: '20%'
      }
    };

    // Destructuring the object into several variables by using ES6 js Re-Decleration [custom name + dafault values + with child object + Extract just only the child object ]   :
    const {html:h, css, js:JS, python:py ='20%' }  = user.langs ;

    // printing the extracted variables from the object by using [Re-Decleration + custom name + default values + with child object + Extract just only the child object ] :
    console.log(`
      4] Extracted variables from the object by using [Re-Decleration] + [custom name] + [default values of non existed properites in the object] + [with child object] + [extract only the child object] :
      my Progress is Html ${h} 
      my Progress is CSS ${css} 
      my Progress is JS ${JS} 
      my Progress is Python ${py} 
    `);

    dis.innerHTML += ` 4] Extracted variables from the object by using [Re-Decleration] + [custom name] + [default values of non existed properites in the object] + [with child object] + [extract only the child object] :  
    my Progress is Html ${h} 
    my Progress is CSS ${css} 
    my Progress is Js ${JS} 
    my Progress is Python ${py}  
      ==================================
    `;    
  }
  // =============================================================
}

function display() {
  document.getElementById("note").innerHTML =
    myTest + "\n\n" + "=".repeat(90) + "\n\n";
}
