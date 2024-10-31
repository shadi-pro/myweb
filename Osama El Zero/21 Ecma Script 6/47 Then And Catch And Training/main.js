// 47 Then And Catch And Training : 

 /* Lessons including , following functions/Methods :
    1- Testing the one status responding of the promise() object
    2- Testing the {Promise()} object by using the percentage probablities of teh each {resolve} and {reject} with {then()} method only
    3- Testing both {then} & {catch} methods to handle the promise object results of {resolve} and {reject} statuses
    4- Testing only {then} method to handle the promise object {reject} status only
    5- Conceptual example on the {callback Hell} || {callback Doom} 
 */

 // ---------------------------------------------------------------------


function myTest() {
  "use strict";
  alert("Welcome to 47 Then And Catch And Training");

  var dis = document.getElementById("note");

  var x = prompt(
    ` Please choose one of following functions from below  :
    1- Testing the one status responding of the promise() object
    2- Testing the {Promise()} object by using the percentage probablities of each {resolve} and {reject} with {then()} method only
    3- Testing both {then} & {catch} methods to handle the promise object results of {resolve} and {reject} statuses
    4- Testing only {then} method to handle the promise object {reject} status only  
    5- Conceptual example on the {callback Hell} || {callback Doom}  
    `
  );

  if (x == 1) {
    promOneResp();
  
  } else if (x == 2) {
  
    promThenBoth();
  
  } else if (x == 3) {
 
    promThenCatchBoth();

  } else if (x == 4) {
    
    promThenOnlyReject();
  
  } else if (x == 5) {
     
    callBackHell();

    // } else if (x == 6) {

    // setSpread();
  
  } else {
    alert("No option has been selected !");
  }
  
  // =========================================================================

  // 1] Testing the one status responding of the promise() object :
 
  function promOneResp() {
    alert(
      "Welcome to Testing the one status responding of the promise() object  "
    );

    dis.innerHTML = "";

    // A]  Defining the main promise object :
      const myPromise = new Promise( (resolve, reject) => {
        
        // Giving the cases values of each parameters :  (resolve) and (reject) results [fixed values ] :
        resolve('Fulfuling Resolve') ;  // This the first  [true]  status of the promise => will be executed 
        reject('Rejecting the Reject') ; // This status will be ignored
      
      }) ; 

    // B] Using {Then()} to handle the promise's results values  :
       myPromise.then(
        (resolved) => console.log(resolved) ,
        (rejected) => console.log(rejected) 
       );


    // printing a seperator :  
      console.log(` ${"=".repeat(50)} `) ;
    //  -------------------------------------------
  }
  
  // =============================================================
  // =============================================================
  // 2] Testing the {Promise()} object by using the percentage probablities of teh each {resolve} and {reject} with {then()} method only :
  
  function promThenBoth() {
    alert(
      "Welcome to Testing the {Promise()} object by using the percentage probablities of teh each {resolve} and {reject} with {then()} method only  "
    );

    dis.innerHTML = "";

    // A]  Defining the main promise object :
      const myPromise = new Promise( (resolve, reject) => {
        
        // Giving the cases values of each parameters :  (resolve) and (reject) results [Probablities simaulation of random numbers ] :

          //  Assinging random numbers cases of [smaller than 90%] probalities  : 
          if (Math.random() * 100 < 90 )  {
            resolve('[Resolve result ] =>  true!');
          } else {
            reject(Error('[Reject result ] => False!'));
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
  // 3] Testing both {then} & {catch} methods to handle the promise object results of {resolve} and {reject} statuses :
  
  function promThenCatchBoth() {
    alert(
      "Welcome to Testing both {then} & {catch} methods to handle the promise object results of {resolve} and {reject} statuses    "
    );

    dis.innerHTML = "";

    // A]  Defining the main promise object :
      const myPromise = new Promise( (resolve, reject) => {
            
        // Giving the cases values of each parameters :  (resolve) and (reject) results [Probablities simaulation of random numbers ] :

        //  Assinging random numbers cases of [smaller than 90%] probalities  : 
          if (Math.random() * 100 < 90 )  {
            resolve('[Resolve result ] =>  true!');
          } else {
            reject(Error('[Reject result ] => False!'));
          }
          
      }) ; 

    // Execute {Then()} => for status {resolved} & {catch()} => for status {reject} , [by chained form] of the main {promise} object  : 
      myPromise.then(
        // Assign the {then()}'s first functional paramater value as the [resolve] main {promise}'s parameter :  
        (resolved) => console.log(resolved)
      ).catch(
        // Assign the {catch()}'s second functional paramater value as the [reject] main {promise}'s parameter :  
        (rejected) => console.log(rejected)         
      );


 
  // printing a seperator :  
    console.log(` ${"=".repeat(50)} `) ;
    //  -------------------------------------------
  }
  
  // =============================================================
  // =============================================================
  
  // 4] Testing only {then} method to handle the promise object {reject} status only :
  
  function promThenOnlyReject() {
    alert(
      "Welcome to Testing only {then} method to handle the promise object {reject} status only "
    );

    dis.innerHTML = "";

    // A]  Defining the main promise object :
    const myPromise = new Promise( (resolve, reject) => {
          
      // Giving the cases values of each parameters :  (resolve) and (reject) results [Probablities simaulation of random numbers ] :

      //  Assinging random numbers cases of [smaller than 90%] probalities  : 
        if (Math.random() * 100 < 50 )  {
          resolve('[Resolve result ] =>  true!');
        } else {
          reject(Error('[Reject result ] => False!'));
        }
        
    }) ; 

    // Execute {Then()} only of the main {promise} object for only {reject} status : 
      myPromise.then(
        null, // Assign the {then()}'s first functional paramater value with [null] as the [resolve] main {promise}'s parameter   
        (rejected) => console.log(rejected) // Assign the {then()}'s second functional paramater value as the [reject] main {promise}'s parameter
      ) ; 

 
    // printing a seperator :  
        console.log(` ${"=".repeat(50)} `) ;
    //  -------------------------------------------
  }
  
  // =============================================================
  // =============================================================

  // 5] Conceptual example on the {callback Hell} || {callback Doom} :
  
  function callBackHell() {
    alert(
      "Welcome to Conceptual example on the {callback Hell} || {callback Doom}   "
    );

    dis.innerHTML = "";

    
    // A] Defining the nested callback functions [Callback Hell]  :
    
      firstRequest(function(response) {
        secondRequest(response, function(nextResponse) {
          thirdRequest(nextResponse, function(finalResponse) {
            console.log('final response is : ' + finalResponse);
          } , failureCallback); 
        } , failureCallback);
      } , failureCallback) ;
      
    
    // B] using {then()} & {catch()} attached with the callback functions :
      firstRequest.then(
        (response) => secondRequest(response) 
        ).then(
          (nextResponse) => thirdRequest(nextResponse) 
          ).then(
            (finalResponse) => console.log('Final Response is : ' + finalResponse) 
      ).catch(failureCallback) ;


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
