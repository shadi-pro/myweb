// 48 Promise And XMLHTTPRequest : 

 /* Lessons including , following functions/Methods :
    1- Creating new object from {XMLHttpRequest} -> to getting all API repo from the github account [as an JSON object] {with out using promise() }
    2- Creating new object from {XMLHttpRequest} -> to get the only first API repo from the github account [as an JSON object] {with out using promise() }
    3- Creating new object from {XMLHttpRequest} + {Promise()} + {then()} -> to get the only first API repos from the github account [as an JSON object] {with using promise() + then()  }
    4- Creating new object from {XMLHttpRequest} + {Promise()} + {then()} -> to get the only whole API repos from the github account [as an JSON object] {with using promise() + then()  }
 */

 // ---------------------------------------------------------------------


function myTest() {
  "use strict";
  alert("Welcome to 48 Promise And XMLHTTPRequest");

  var dis = document.getElementById("note");

  var x = prompt(
    ` Please choose one of following functions from below  :
    1- Creating new object from {XMLHttpRequest} -> to getting all API repo from the github account [as an JSON object] {with out using promise() }
    2- Creating new object from {XMLHttpRequest} -> to get the only first API repo from the github account [as an JSON object] {with out using promise() }
    3- Creating new object from {XMLHttpRequest} + {Promise()} + {then()} -> to get the only first API repos from the github account [as an JSON object] {with using promise() + then()  }
    4- Creating new object from {XMLHttpRequest} + {Promise()} + {then()} -> to get the only whole API repos from the github account [as an JSON object] {with using promise() + then()  }
    `
  );

  if (x == 1) {
    GetAllReposXML();
  
  } else if (x == 2) {
  
    GetFirstRepoXML();
  
  } else if (x == 3) {
 
    GetFirstRepoXMLProm();

  } else if (x == 4) {
    
    GetAllRepoXMLProm();
  
  // } else if (x == 5) {
     
    // callBackHell();

    // } else if (x == 6) {

    // setSpread();
  
  } else {
    alert("No option has been selected !");
  }
  
  // =========================================================================

  // 1] Creating new object from {XMLHttpRequest} to get all API repos from the github account [as a JSPON object] {with out using promise() } :
 
  function GetAllReposXML() {
    alert(
      "Welcome to Creating new object from {XMLHttpRequest} to get all API repos from the github account [as a JSON object] {with out using promise() } "
    );

    dis.innerHTML = "";

    // A]  Defining/Extracting the main {XMLHttpRequest} new object :
      let myRequest = new XMLHttpRequest(); 
      
    // Creating the Checking Request Function :
      myRequest.onreadystatechange = function () {
        
        // Get the All API JSON data object content according to the assigned request parameters [within the open method ] & [connection state and API status] :
        if (this.readyState === 4 && this.status === 200 ) {
      
          // Printing the value of the API response text value as [string value] :  
          console.log(this.responseText) ;

          // Printing the value of the API response text value as [object value] :  
          console.log(JSON.parse(this.responseText)) ;

          // Adding the APPI content to new element container in to the the web page :   
          let elem = document.createElement('div') ,
            elemTextNode = document.createTextNode(JSON.parse(this.responseText));
            
          // Appending the textNode into the new created element :
          elem.appendChild(elemTextNode);
          
          // Appending the new created element into the document web page :
          document.getElementById('api').appendChild(elem); 

        } else {
             // Printing the value of the API response text value as [string value] :  
            console.log('Unable to obtain API data , due to failed connection !') ;

            // // Printing the value of the API response text value as [object value] :  
            // console.log(JSON.parse(this.responseText)) ;

            // Adding the APPI content to new element container in to the the web page :   
            let elem = document.createElement('div') ,
              elemTextNode = document.createTextNode('Unable to obtain API data , due to failed connection !');
              
            // Appending the textNode into the new created element :
            elem.appendChild(elemTextNode);
            
            // Appending the new created element into the document web page :
            document.getElementById('api').appendChild(elem); 

        } 
 
      }

    // Open the Request by Giving the reqeust the API paramters with in the open() method =>   [method: get ,  URL:  my github account api , Asynchronous: true ] :         
      myRequest.open('GET' , 'https://api.github.com/users/shindowpro/repos' , true);
      // myRequest.open('GET' , 'https://api.github.com/repos/shindowpro' , true);

    // Sending the Request parmaters to the API :   
      myRequest.send();


    // printing a seperator :  
      console.log(` ${"=".repeat(50)} `) ;
    //  -------------------------------------------
  }
  
  // =============================================================
  // =============================================================
  // 2] Creating new object from {XMLHttpRequest} to get the first only API repos from the github account [as a JSON object] {with out using promise() }:
  
  function GetFirstRepoXML() {
    alert(
      "Welcome to Creating new object from {XMLHttpRequest} to get the first only API repos from the github account [as a JSON object] {with out using promise() } "
    );

    // dis.innerHTML = "";

    // A]  Defining/Extracting the main {XMLHttpRequest} new object :
      let myRequest = new XMLHttpRequest(); 
      
    // Creating the Checking Request Function :
      myRequest.onreadystatechange = function () {        

        // Get the only the First index of API JSON data object content according to the assigned request parameters [within the open method ] & [connection state and API status] :
        if (this.readyState === 4 && this.status === 200 ) {
          // Printing the value of the API response text value as [string value] :  
          console.log(this.responseText[0]) ;

          // Printing the value of the API response text value as [object value] :  
          console.log(JSON.parse(this.responseText)[0]) ;
        
        } else {
          // Printing the value of the API response text value as [string value] :  
         console.log('Unable to obtain API data , due to failed connection !') ;

         // // Printing the value of the API response text value as [object value] :  
         // console.log(JSON.parse(this.responseText)) ;

         // Adding the APPI content to new element container in to the the web page :   
         let elem = document.createElement('div') ,
           elemTextNode = document.createTextNode('Unable to obtain API data , due to failed connection !');
           
         // Appending the textNode into the new created element :
         elem.appendChild(elemTextNode);
         
         // Appending the new created element into the document web page :
         document.getElementById('api').appendChild(elem); 

        }
 
      }

    // Open the Request by Giving the reqeust the API paramters with in the open() method =>   [method: get ,  URL:  my github account api , Asynchronous: true ] :         
      myRequest.open('GET' , 'https://api.github.com/users/shandowpro/repos' , true);

    // Sending the API parmaters to the   :   
      myRequest.send();


    // printing a seperator :  
      console.log(` ${"=".repeat(50)} `) ;
    //  -------------------------------------------
  }
  
  // =============================================================
  // =============================================================
  
  // 3] Creating new object from {XMLHttpRequest} to get the first only API repos from the github account [as a JSON object] {with using promise() + then() with simple status action  }:
  
  function GetFirstRepoXMLProm() {
    alert(
      "Welcome to Creating new object from {XMLHttpRequest} to get the first only API repos from the github account [as a JSON object] {with using promise() + then()  } "
    );

    // dis.innerHTML = "";

    const getFirstRepo = (apiUrl) => {
    
      // A]  Defining the main promise object [as return of the main function] :
      return new Promise( (resolve, reject) => {
  
        // A]  Defining/Extracting the main {XMLHttpRequest} new object :
        let myRequest = new XMLHttpRequest(); 
      
        // B] Creating the Checking Request Function :
        myRequest.onload = function () {
          
          if (this.readyState === 4 && this.status === 200 ) {
            // Set the resolve with the value of the API response text value as [string value] :  
              // resolve(this.responseText[0]) ;
              resolve(JSON.parse(this.responseText)[0]) ;

            // Set the reject with the value of the API response text value as [object value] :  
              reject(error(this.responseText)) ;

          } else {
            // Printing the value of the API response text value as [string value] :  
            console.log('Unable to obtain API data , due to failed connection !') ;

            // // Printing the value of the API response text value as [object value] :  
            // console.log(JSON.parse(this.responseText)) ;

            // Adding the APPI content to new element container in to the the web page :   
            let elem = document.createElement('div') ,
              elemTextNode = document.createTextNode('Unable to obtain API data , due to failed connection !');
              
            // Appending the textNode into the new created element :
            elem.appendChild(elemTextNode);
            
            // Appending the new created element into the document web page :
            document.getElementById('api').appendChild(elem); 
          }
           
        }
      
        // C] Open the Request by Giving the reqeust the API paramters with in the open() method =>   [method: get ,  URL:  my github account api , Asynchronous: true ] :         
        myRequest.open('GET' , apiUrl , true);
    
        // D] Sending the API parmaters to the Request   :   
        myRequest.send();
    
      }) ; 
    }
           
    // Executing main container function with assigning the parameter value  + using chained {then() with simple action } :
    getFirstRepo('https://api.github.com/users/shindowpro/repos').then(
      (result) => {
        let elem = document.createElement('div') ,
            elemTextNode = document.createTextNode(result);
            
        // Appending the textNode into the new created element :
        elem.appendChild(elemTextNode);
        
        // Appending the new created element into the document web page :
        document.getElementById('api').appendChild(elem); 
      }, 
      (error) => {
        let elem = document.createElement('div') ,
            elemTextNode = document.createTextNode(error);
        
        // Appending the textNode into the new created element :
        elem.appendChild(elemTextNode);
        
        // Appending the new created element into the document web page :
        document.getElementById('api').appendChild(elem);
      } 
      
    );


  // printing a seperator :  
    console.log(` ${"=".repeat(50)} `) ;
    //  -------------------------------------------
  }
  
  // =============================================================
  // =============================================================
  
  // 4] Creating new object from {XMLHttpRequest} to get the whole only API repos from the github account [as a JSON object] {with using promise() + then() with advanced status action }:
  
  function GetAllRepoXMLProm() {
    alert(
      "Welcome to Creating new object from {XMLHttpRequest} to get the first only API repos from the github account [as a JSON object] {with using promise() + then()  } "
    );

    // dis.innerHTML = "";

    const getAllRepo = (api) => {

      // A]  Defining the main promise object :
        return new Promise( (resolve, reject) => {
  
          // A] Defining/Extracting the main {XMLHttpRequest} new object :
            let myRequest = new XMLHttpRequest(); 
      
          // B] Creating the Checking Request Function :
            myRequest.onload = function () {
          
              if (this.readyState === 4 && this.status === 200 ) {
                // Set the resolve with the value of the API response text value as [string value] :  
                //  resolve(this.responseText) ;
                 resolve(JSON.parse(this.responseText)) ;
  
                // Set the reject with the value of the API response text value as [object value] :  
                 reject(error(this.responseText)) ;
  
              }
      
            }
            
          // C] Open the Request by Giving the reqeust the API paramters with in the open() method =>   [method: get ,  URL:  my github account api , Asynchronous: true ] :         
            myRequest.open('GET' , api , true);
      
          // D] Sending the API parmaters to the Request   :   
            myRequest.send();
  
        }) ; 
        
    }


    // Executing main container function with assigning the parameter value + using chained {then() with advanced action } :
    getAllRepo('https://api.github.com/users/shindowpro/repos').then(
      (result) => {
        let elem = document.createElement('div') ,
            elemTextNode = document.createTextNode(result);
            
        // Appending the textNode into the new created element :
        elem.appendChild(elemTextNode);
        
        // Appending the new created element into the document web page :
        document.getElementById('api').appendChild(elem); 
      }, 
      (error) => {
        let elem = document.createElement('div') ,
            elemTextNode = document.createTextNode(error);
        
        // Appending the textNode into the new created element :
        elem.appendChild(elemTextNode);
        
        // Appending the new created element into the document web page :
        document.getElementById('api').appendChild(elem);
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
