// 50 Promise - Fetch And Training : 

 /* Lessons including , following functions/Methods :
    1- Using Fetch() method to get API data from real github server with using multtiple {then()} to solve the callback hell     
 */

 // ---------------------------------------------------------------------


function myTest() {
  "use strict";
  alert("Welcome to 50 Promise - Fetch And Training");

  var dis = document.getElementById("note");

  var x = prompt(
    ` Please choose one of following functions from below  :
    1- Using Fetch() method to get API data from real github server with using multtiple {then()} to solve the callback hell    
    `
  );

  if (x == 1) {
    fetchThen();
  
  // } else if (x == 2) {
  
    // GetFirstRepoXML();
  
  // } else if (x == 3) {
 
    // GetFirstRepoXMLProm();

  // } else if (x == 4) {
    
    // GetAllRepoXMLProm();
  
  // } else if (x == 5) {
     
    // callBackHell();

    // } else if (x == 6) {

    // setSpread();
  
  } else {
    alert("No option has been selected !");
  }
  
  // =========================================================================

  // 1] Using Fetch() method to get API data from real github server with using multtiple {then()} to solve the callback hell:    
 
  function fetchThen() {
    alert(
      "Welcome to Using Fetch() method to get API data from real github server with using multtiple {then()} to solve the callback hell: "
    );

      // A] Using Fetch() to get the JSON object from the real github account  :
      fetch('https://api.github.com/users/shandowpro/repos').then( 
        (result) => {
          let repos = result.json();
          
          // Printing the all JSON Object returned from the API server:
          console.log('all JSON Object returned from the API server :');
          console.log(repos);

          // Returning the data to the next then() method :  
          return repos;
        }
      ).then(
        (repos) => {
          
          // printing count of all repos of the given API :
          console.log(`The counter of all repos is ${repos.length} `);
          
          // Returning the data to the next then() method :  
          return repos;

        }).then( 

          (repos) => {
            // printing the only first repos's names of the given API :
            console.log(`The first repos's names is ${repos[0].name} `);
            
            return repos;
          }).then(

            (repos)=> {
              // printing the only last repos's names of the given API :
              console.log(`The last repos's names is ${repos[repos.length - 1].name} `);
              
              // Returning the data to the next then() method :  
              return repos;
            }).then(
            
              (repos) => {
                // printing all repos names by using for loop => [within new element for each repo name ] :
                console.log(`The Reops names will be get within webpage element container `);

                for (let i = 0 ; i < repos.length ; i++) {
    
                  let elem = document.createElement('div'),
                    elemTextNode = document.createTextNode(repos[i].name);

                  // Appending the textnode of the repo name in to the new created element :
                    elem.appendChild(elemTextNode);

                  // Appending the container element in to the webpage  :
                    document.getElementById('api').appendChild(elem);
                
                    // printing the repo name into the console:
                    console.log(repos[i].name);
                }
              }); 

      // myPromise.then((result) => {
      //     console.log(`Total count of the Posts is ${result.length} `);
      //     return result;
      //   }).then( (result) => {
      //     console.log("#".repeat(15));
      //     console.log( `The first post is : ${result[0]}`);
      //     return result;
      //   }).then(
      //     (result) => {
      //       console.log("#".repeat(15));
      //       console.log( `The last post is : ${result[result.length - 1]}`);
      //       return result;
      //     }).then(
      //     (result) => {
      //       console.log("#".repeat(15));
      //       console.log( `The total number of pages is : ${result.length / 2}`);
      //       return result;
      //     })
      //   ;
     

    // printing a seperator :  
      console.log(` ${"=".repeat(50)} `) ;
    //  -------------------------------------------
  }
  
  // =============================================================
  // =============================================================


  // =============================================================
  // =============================================================
  

}

function display() {
  document.getElementById("note").innerHTML =
    myTest + "\n\n" + "=".repeat(90) + "\n\n";
}
