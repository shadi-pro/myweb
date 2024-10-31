// 46 Create Your First Promise : 

 /* Lessons including , following functions/Methods :
    1- Getting the datatype of the promise + Creating Basic promise object of the Database connection simulation [without using Then()]
    2- Creating {promise} object + {Then()} Method [basic form] of the Database connection simulation  
    3- Creating {promise} object + {Then()} Method [alternative form] of the Database connection simulation  
    4- Creating one Chained {Then()} Method with {promise} object , by of the Database connection simulation
 */

 // ---------------------------------------------------------------------


function myTest() {
  "use strict";
  alert("Welcome to 46 Create Your First Promise");

  var dis = document.getElementById("note");

  var x = prompt(
    ` Please choose one of following functions from below  :
    1- Getting the datatype of the promise + Creating Basic promise object of the Database connection simulation [without using Then()]
    2- Creating {promise} object + {Then()} Method [basic form] of the Database connection simulation  
    3- Creating {promise} object + {Then()} Method [alternative form] of the Database connection simulation  
    4- Creating one Chained {Then()} Method with {promise} object , by of the Database connection simulation
    `
  );

  if (x == 1) {
    typeBasicPromise();
  
  } else if (x == 2) {
  
    PromiseBasicThen();
  
  } else if (x == 3) {
 
    PromiseAltThen();

  } else if (x == 4) {
    
    PromiseChainThen();
  
  // } else if (x == 5) {
    // MapWeakMapDeletNull();

    // } else if (x == 6) {

    // setSpread();
  
  } else {
    alert("No option has been selected !");
  }
  
  // =========================================================================

  // 1] Getting the datatype of the promise + Creating Basic promise object of the Database connection simulation [without using Then()] :
 
  function typeBasicPromise() {
    alert(
      "Welcome to Getting the datatype of the promise + Creating Basic promise object of the Database connection simulation [without using Then()] "
    );

    dis.innerHTML = "";

    // A]  Defining the main promise object :
    const myPromise = new Promise( (resolve, reject) => {
      
      // Giving the cases values of each parameters :  (resolve) and (reject) results [as simulation of connection process] :
      
        // Creating the variable of the connection :
        let connection = true ; 

        // Assinging cases of connection cases :
        if (connection) {
          resolve('[Resolve result ] =>  Connection is success!');
        } else {
          reject('[Reject result ] => Connection is failed!');
        }
        
    }) ; 

  // B] Getting the datatype of the {promise} :
      console.log( typeof myPromise );
      alert( typeof myPromise );

    // printing a seperator :  
      console.log(` ${"=".repeat(50)} `) ;
    //  -------------------------------------------
  }
  
  // =============================================================
  // =============================================================
  // 2] Getting the datatype of the promise + Creating Basic promise object of the Database connection simulation [without using Then()] :
  
  function PromiseBasicThen() {
    alert(
      "Welcome to Creating {promise} object + {Then()} Method [basic form] of the Database connection simulation   "
    );

    dis.innerHTML = "";

    // A]  Defining the main promise object :
    const myPromise = new Promise( (resolve, reject) => {
      
      // Giving the cases values of each parameters :  (resolve) and (reject) results [as simulation of connection process] :
      
        // creating the variable of the connection :
        let connection = true ; 

        //  Assinging cases of connection cases : 
        if (connection) {
          resolve('[Resolve result ] =>  Connection is success!');
        } else {
          reject(Error('[Reject result ] => Connection is failed!'));
        }
        
    }) ; 

    // Execute {Then()} of the main {promise} object : 
      myPromise.then(
        
        // Assign the {then()}'s first functional paramater value as the [resolve] main {promise}'s parameter :  
        (resolved) => console.log(resolved),

        // Assign the {then()}'s second functional paramater value as the [reject] main {promise}'s parameter :  
        (rejected) => console.log(rejected)         
      ) ;
 

    // printing a seperator :  
      console.log(` ${"=".repeat(50)} `) ;
    //  -------------------------------------------
  }
  
  // =============================================================
  // =============================================================
  // 3] Creating {promise} object + {Then()} Method [shorthand form] of the Database connection simulation   :
  
  function PromiseAltThen() {
    alert(
      "Welcome to Creating {promise} object + {Then()} Method [alternative form] of the Database connection simulation    "
    );

    dis.innerHTML = "";

  //  Define th main {promise()} object : 
    const myPromise = new Promise( (resolve, reject) => {

        let connection = false ;

        if (connection) {
          resolve('Connection is True! ');
        
        } else {

          reject(Error('Connection is False! '));
                  
        }
      } );


    // Define the (2) functional parameters variables : 
      const resolved =  (resolved) => console.log(resolved),
            rejected = (rejected) => console.log(rejected);
      
      
    // using the defined functional parameters variables in the {then()} method's paramters : 
      myPromise.then( (resolved , rejected ) );
         

    // printing a seperator :  
    console.log(` ${"=".repeat(50)} `) ;
    //  -------------------------------------------
  }
  
  // =============================================================
  // =============================================================
  
  // 4] Creating one Chained {Then()} Method with {promise} object , by of the Database connection simulation :
  
  function PromiseChainThen() {
    alert(
      "Welcome to Creating one Chained {Then()} Method with {promise} object , by of the Database connection simulation "
    );

    dis.innerHTML = "";

    
    // A] Defining the main promise object :
    const myPromise = new Promise( (resolve, reject) => {
      
      // Giving the cases values of each parameters :  (resolve) and (reject) results [as simulation of connection process] :
      
        // Creating the variable of the connection :
        let connection = false ; 

        //  Assinging cases of connection cases : 
        if (connection) {
          resolve('[Resolve result ] =>  Connection is success!');
        } else {
          reject(Error('[Reject result ] => Connection is failed!'));
        }
        
    }).then(
      (resolved) => console.log(resolved) , 
      (rejected) => console.log(rejected) 
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
