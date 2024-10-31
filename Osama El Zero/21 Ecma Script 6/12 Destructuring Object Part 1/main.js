// 12 Destructuring Object Part 1 :
/* Main lessons functions :
   1- Using Destructuring by old JS   
   2- Using Destructuring by ES6 [Default{Re-Declaration} method ]  
   3- Using Destructuring by ES6 [{Re-Assignment of predefined varialables } method]  
   4- Using Destructuring by ES6 [{Re-Decleration with default values of non Existed properties in the object method]  
 */
// ---------------------------------------------------------------------

// 12 Destructuring Object Part 1 :

function myTest() {
  "use strict";
  alert("Welcome to 12 Destructuring Object Part 1 ");

  var dis = document.getElementById("note");

  var x = prompt(
    ` Please choose one of functions from below options :
    1- Using Destructuring by old JS   
    2- Using Destructuring by ES6 [Default{Re-Declaration} method ]  
    3- Using Destructuring by ES6 [{Re-Assignment of predefined varialables } method]  
    4- Using Destructuring by ES6 [{Re-Decleration with default values of non Existed properties in the object method]   
    `
  );

  if (x == 1) {
  
    oldDes();
  
  } else if (x == 2) {
  
    ESDesRDec();

  } else if (x == 3) {

    ESDesRAss();

  } else if (x == 4) {

    ESDesRDecDef();

  // } else if (x == 5) {

  // allFuncsObj();

  } else {
    alert("No option has been selected !");
  }

  // =========================================================================

  // 1] Using Destructuring by old JS :
  function oldDes() {
    alert(
      "Welcome to Using Destructuring by old JS  "
    );

    dis.innerHTML = "";

    // Defining Object :
    var user = {
      name  : 'shadi',
      age  : 36 ,
      gender  : 'Male',
      website  : 'shindowpro'
    };
    
    // Destructuring the object into several variables by using old js   :
    var n = user.name,
      a = user.age,
      g = user.gender,
      w = user.website;


    // printing the extracted variables from the object by using [old Js] :
    console.log(`
      My name is ${n} 
       My age is ${a}
        Im  ${g} 
        my website is  ${w} 
    `);

    dis.innerHTML += `1] extracted variables from the object by using [old Js] : 
      My name is ${n} 
      My age is ${a}
      Im  ${g} 
      my website is  ${w} 
      ==================================
    `;
   }
  // ------------------------------------------------------------
 
    // 2] Using Destructuring by ES6 [Default{Re-Declaration} method ]  :
    function ESDesRDec() {
      alert(
        "Welcome to Using Destructuring by ES6 [Default{Re-Declaration} method ]    "
      );

      dis.innerHTML = "";

    // Defining Object :
    const user = {
      name  : 'shadi',
      age  : 36 ,
      gender  : 'Male',
      website  : 'shindowpro'
    };

    // Destructuring the object into several variables by using ES6 js [Re-Decleration]   :
    const {name ,age , gender, website}  = user;

    // printing the extracted variables from the object by using [Re-Decleration] :
    console.log(`
      My name is ${name} 
      My age is ${age}
        Im  ${gender} 
        my website is  ${website} 
    `);

    dis.innerHTML += ` 2] Extracted variables from the object by using [Re-Decleration] : 
      My name is ${name} 
      My age is ${age}
      Im  ${gender} 
      my website is  ${website} 
      ==================================
    `;    
  }

  // =============================================================
    // 3] Using Destructuring by ES6 [{Re-Assignment of predefined variables } method]     :
    function ESDesRAss() {

      alert(
        "Welcome to Using Destructuring by ES6 [{Re-Assignment of predefined variables } method]   "
      );

      dis.innerHTML = "";

    // Defining some variables of the same name of object's properties :
      let name = 'old Name' ,
        age = 'old age' ,
        gender = 'old gender' ,
        website = 'old website' ;


    // Defining Object :
    const user = {
      name  : 'shadi',
      age  : 36 ,
      gender  : 'Male',
      website  : 'shindowpro'
    };

    // Destructuring the object into several variables by using ES6 js [Re-Assignment] with the predefined object's properites values   :
    ( {name ,age , gender , website}  = user ) ;

    // printing the extracted variables from the object using ES6 js [Re-Assignment] with the predefined object's properites values   :
    console.log(`
      My name is ${name} 
      My age is ${age}
        Im  ${gender} 
        my website is  ${website} 
    `);

    dis.innerHTML += `3] Extracted variables from the object using ES6 js [Re-Assignment] with the predefined object's properites values ] : 
      My name is ${name} 
      My age is ${age}
      Im  ${gender} 
      my website is  ${website} 
      ==================================
    `;    
  }

  // =============================================================
    // 4] Using Destructuring by ES6 [Re-Decleration with default values of non Existed properties in the object method] :
    function ESDesRDecDef() {

      alert(
        "Welcome to Use Destructuring by ES6 [Re-Decleration with default values of non Existed properties in the object method] "
      );

      dis.innerHTML = "";
    
    // Defining Object :
    const user = {
      name  : 'shadi',
      age  : 36 ,
      gender  : 'Male',
      website  : 'shindowpro'
    };

    // Destructuring the object into several variables by using ES6 js [Re-Decleration with using default value of non existed properties]   :
    const {name ,age , gender, website , theme='red'}  = user ;

    // printing the extracted variables from the object :
    console.log(`
      My name is ${name} 
      My age is ${age}
        Im  ${gender} 
        my website is  ${website} 
        my theme is  ${theme} 
    `);

    dis.innerHTML += `4] Extracted variables from the object by using ES6 [Re-Decleration with using default value of non existed properties] : 
      My name is ${name} 
      My age is ${age}
      Im  ${gender} 
      my website is  ${website}
      my theme is  ${theme}  
      ==================================
    `;    
  }

  // =============================================================

}

function display() {
  document.getElementById("note").innerHTML =
    myTest + "\n\n" + "=".repeat(90) + "\n\n";
}
