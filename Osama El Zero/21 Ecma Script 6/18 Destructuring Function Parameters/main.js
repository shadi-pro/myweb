// 18 Destructuring Function Parameters:
/* Main lessons functions :
  1- Assignment object properites values in function's parameters  => [by using old JS]  
  2- Assignment object properites values in function's parameters  => [by Destructring object inside function by ES6 JS] 
 */
// ---------------------------------------------------------------------

// 18 Destructuring Function Parameters:

function myTest() {
  "use strict";
  alert("Welcome to 18 Destructuring Function Parameters");

  var dis = document.getElementById("note");

  var x = prompt(
    ` Please choose one of following functions from below  :
    1- Assignment object properites values in function's parameters  => [by using old JS]  
    2- Assignment object properites values in function's parameters  => [by Destructring object inside function by ES6 JS] 
    `
  );

  if (x == 1) {
  
    ObjFuncParsOld();
  
  } else if (x == 2) {
  
    ObjFuncParsDes();

  // } else if (x == 3) {

    // desMLArrDefVEscElem();

  // } else if (x == 4) {

  // desArrRes();

  // } else if (x == 5) {

  // allFuncsObj();

  } else {
    alert("No option has been selected !");
  }

  // =========================================================================

  // 1] Assignment object properites values in function's parameters  => [by using old JS]  :
  function ObjFuncParsOld() {
    alert(
      "Welcome to Using Assignment object properites values in function's parameters  => [by using old JS]   "
    );

    dis.innerHTML = "";

    // Defining main Nested Object including mixed object & array  :
    const obj = {
      username : 'shadi',
      city : 'cairo',
      skills: {
        html : '80%',
        css : '70%' ,
        js : [
          "react.js",
          "vue.js",
          "angular.js"
        ]      
      }
    } ;
      
  // Defining the main function with using the object's prorperites  :
    function showInfo (obj) {
      
      // printing the properties from nested Object by using [old JS] :
      console.log(`
        1] Extracted variables by using [by using old JS] as following : 
           Im name is :   ${obj.username}
           I live in  :   ${obj.city}
           My skills are as following:  ${obj.skills.html} , ${obj.skills.css}
           My JS Frawork knowledge are as following:  ${obj.skills.js[0] } , ${obj.skills.js[1] } , ${obj.skills.js[2] }
        `);
    
      dis.innerHTML += `1] Extracted variables by using [by using old JS] as following : 
      Im name is :   ${obj.username}
      I live in  :   ${obj.city}
      My skills are as following:  ${obj.skills.html} , ${obj.skills.css}
      My JS Frawork knowledge are as following:  ${obj.skills.js[0] } , ${obj.skills.js[1] } , ${obj.skills.js[2] };`
    }
      
    // Operating the function :
    showInfo(obj);  

  }

  // =============================================================
    // 2] Assignment object properites values in function's parameters  => [by Destructring object inside function by ES6 JS]:
  function ObjFuncParsDes() {

      alert(
        "Welcome to Using Assignment object properites values in function's parameters  => [by Destructring object inside function by ES6 JS]"
      );

      dis.innerHTML = "";

     // Defining main Nested Object including mixed object & array  :
     const obj = {
      username : 'shadi',
      city : 'cairo',
      skills: {
        html : '80%',
        css : '70%' ,
        js : [
          "react.js",
          "vue.js",
          "angular.js"
        ]      
      }
    } ;
      
  // Defining the main function with using the object's prorperites  :
    function showInfo ( {username:name, city , skills:{html, css , js:[react , vue, angular] } } ) {
      
      // printing the properties Extracted from the main nested Object by using [new ES6 JS] :
      console.log(`
        2] Extracted variables by using [by using old JS] as following : 
           Im name is :   ${name}
           I live in  :   ${city}
           My skills are as following:  ${html} , ${css}
           My JS Frawork knowledge are as following:  ${react} , ${vue} , ${angular}
        `);
    
    dis.innerHTML += `2] Extracted variables from the main nested Object by using [new ES6 JS]  as following : 
      Im name is :   ${name}
      I live in  :   ${city}
      My skills are as following:  ${html} , ${css}
      My JS Frawork knowledge are as following:  ${react} , ${vue} , ${angular};`
    }
      
    // Operating the function :
    showInfo(obj);  

 }
 
  // =============================================================
    // 3] Destructuring Array's Elements with [Escaped elements with Nested multi levels array]  :


  // =============================================================

  // 4] Destructuring Array's Elements with [ Rest operator with simple array] :
  
  // =============================================================
}

function display() {
  document.getElementById("note").innerHTML =
    myTest + "\n\n" + "=".repeat(90) + "\n\n";
}
