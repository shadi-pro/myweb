// 12 Data Types - Type Alias : 

 /* Lessons including , following functions/Methods :
    1-  
    2-   
 */

 // ---------------------------------------------------------------------


function myTest() {
  "use strict";
  alert("Welcome to 9 Function Optional and Default Parameters");

  var dis = document.getElementById("note");

  var x = prompt(
    ` Please choose one of following functions from below  :
    
    `
  );

  // if (x == 1) {
    // promiseAll();
  
  // } else if (x == 2) {
  
    // promiseRace();
  
  // } else if (x == 3) {
 
    // GetFirstRepoXMLProm();

  // } else if (x == 4) {
    
    // GetAllRepoXMLProm();
  
  // } else if (x == 5) {
     
    // callBackHell();

    // } else if (x == 6) {

    // setSpread();
  
  // } else {
    // alert("No option has been selected !");
  // }
  
  // =========================================================================

  // 1] using {Promise.all()} to fulfill all deined promises  :    
 
  function promiseAll() {
    alert(
      "Welcome to using {Promise.all()} to fulfill all deined promises :"
    );

      // A] Defining new promsises :
      // 1] Define new first promise :
      const firstPromise = new Promise( (resolve , reject)=> {
        
        let connect = true;

        if (connect) {
          resolve('first promise fulfilled ');
        } else {
          reject('first promise rejected! ');
        }
      });
      
      // 2] Define new second promise :
      const secondPromise = new Promise( (resolve , reject)=> {
        
        let settings = true;

        if (settings) {
          resolve('Second promise fulfilled ');
        } else {
          reject('Second promise rejected! ');
        }
      });

      // 3] Define new third promise :
      const thirdPromise = new Promise( (resolve , reject)=> {
        
        let configs = true;

        if (configs) {
          resolve('Third promise fulfilled ');
        } else {
          reject('Third promise rejected! ');
        }
      });

      // B] Using {Promise.all()} to fulfill all promises :
      Promise.all([firstPromise, secondPromise , thirdPromise]).then(
        (resolved) =>  {
          console.log(resolved);
        }
      );

    // printing a seperator :  
      console.log(` ${"=".repeat(50)} `) ;
    //  -------------------------------------------
  }
  
  // =============================================================
  // =============================================================

  // using {Promise.race()} to fulfill the fastest promise among the defined prmises : 
  function promiseRace() {
    alert(
      "Welcome to using {Promise.race()} to fulfill the only fastest promise among the defined prmises  : "
    );

      // A] Defining new promsises :

      // 1] Define new first promise [based on timeout] :
      const firstPromise = new Promise( (resolve , reject)=> {

        window.setTimeout(()=> {
          resolve('First promise has been fulfilled');
        } , 50 );

      });
      
      // 2] Define new second promise [based on timeout]:
      const secondPromise = new Promise( (resolve , reject)=> {
        window.setTimeout( ()=> {
          resolve('Second promise has been fulfilled');
        }, 100 );

       });

       // 3] Define new third promise [based on timeout]:
      const thirdPromise = new Promise( (resolve , reject)=> {
        window.setTimeout( ()=> {
          resolve('Third promise has been fulfilled');
        }, 500 ) ;

       });

      // B] Using {Promise.race()} to fulfill only the fastest promise :
      Promise.race([firstPromise, secondPromise, thirdPromise]).then(
        (resolved) =>  {
          console.log(resolved);
        }
      );


    // printing a seperator :  
      console.log(` ${"=".repeat(50)} `) ;
    //  -------------------------------------------
  }
  
  // =============================================================
  // =============================================================
  

}

function display() {
  document.getElementById("note").innerHTML =
    myTest + "\n\n" + "=".repeat(90) + "\n\n";
}
