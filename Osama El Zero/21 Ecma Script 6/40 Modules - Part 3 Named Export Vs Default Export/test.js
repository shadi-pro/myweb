//  40 Modules - Part 3 Named Export Vs Default Export :
 
//  import * as all from `./export.js`;
//  import * as all from `./import.js`;

//  all.myFunc();

function myTest() {
    "use strict";
    alert("Welcome to 40 Modules - Part 3 Named Export Vs Default Export");
  
    // var dis = document.getElementById("note");
    alert('Hello shadi for testing the responding ');
    
  
      const myObj = {
          name : 'shadi',
          age :  30
      }
       
      let objVar = myObj ;
  
      console.log(myObj);
      alert(myObj);
  
      // myObj.forEach((i) => {
      //   console.log(elem ) ;
      //   console.log(i ) ;
      
      // });
  
  
  
      const {name , age} = myObj  ;   
  
      console.log(
      ` first object element is : ${name} 
        second object element is : ${age}
      `)
  
  
    // =============================================================
    // ===========================================================
  }
  
  // myTest();
  
  // =============================================================
  // =============================================================
  
  // Calling function of the {main.js} file :
  // function display() {
  //   document.getElementById("note").innerHTML =
  //     myTest + "\n\n" + "=".repeat(90) + "\n\n";
  // }
  