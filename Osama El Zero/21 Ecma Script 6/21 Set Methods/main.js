// 21 Set Methods :
/* Main lessons functions :
  1- Adding new element(s) [single + multiple] to object {set()}
  2- Delete  element(s) [single {.delete() } + multiple {.clear() } ] from the object {set()}
  3- Checking for certain content in Object {set()}
  4- Getting the length/size of elements in the Set object
  */
  
  // ---------------------------------------------------------------------

// 21 Set Methods:

function myTest() {
  "use strict";
  alert("Welcome to 21 Set Methods");

  var dis = document.getElementById("note");

  var x = prompt(
    ` Please choose one of following functions from below  :
    1- Adding new element(s) [single + multiple] to object {set()}
    2- Delete  element(s) [single {.delete() } + multiple {.clear() } ] from the object {set()}
    3- Checking for certain content in Object {set()}
    4- Getting the length/size of elements in the Set object
    `
  );

  if (x == 1) {
  
    setAddElems();
  
  } else if (x == 2) {
  
    setDelElems();

  } else if (x == 3) {

    setCheckElems();

  } else if (x == 4) {

    setGetLen();

  // } else if (x == 5) {

    // setInside();

  // } else if (x == 6) {

    // setSpread();

  } else {
    alert("No option has been selected !");
  }

  // =========================================================================

  // 1] Adding new element(s) [single + multiple] to object {set()} :
  function setAddElems() {
    alert(
      "Welcome to Adding new element(s) [single + multiple] to object {set()} "
    );

    dis.innerHTML = "";

    // Defining Set object  [with adding new multiple elements by using {iteralble string}  ] :
      let mySet  = new Set('Shadi');   
    
    // Adding new single value string to the predfined Set object  by using {.add()} method  :
      mySet.add('shadi')  ;   
    
    // printing the Set Object after adding new multiple Elements [using Iterable string] :
    console.log('1] Final Set Object after adding new multiple Elements [using Iterable string] & adding single value using [ .add() method] as following : ');
    console.log(mySet);
        
    dis.innerHTML += `1] Final Set Object after adding new multiple Elements [using Iterable string] & adding single value using [ .add() method] as following : '`;
    dis.innerHTML +=  mySet ;

  }

  // =============================================================
    // 2] Delete element(s) [single {.delete() } + All {.clear() } ] from the object {set()} :
  function setDelElems() {

      alert(
        "Welcome to Delete element(s) [single {.delete() } + All {.clear() } ] from the object {set()} "
      );

      dis.innerHTML = "";

    // Defining Set object [with adding new multiple elements by using {Iteralble string} + adding single value by using {.add() } using chain method ] :
      let mySet  = new Set('Shadi').add('shadi');   
    
    // Delete single element from the set object using [.delete() ] :
        mySet.delete('s');
  
    // Printing the Set object after deleting the single element  : 
    console.log("2] Set object After Deleting a Single Element ['s'] , as following  : ");
    console.log(mySet);

    dis.innerHTML += `2] Set Object after adding new multiple Elements [using Iterable string] & adding single value using [ .add() method] as following : '`;
    dis.innerHTML +=  mySet ;

    // Delete All elements from the set object using [.clear() ] :
    mySet.clear();
  

    // Printing the Set object after deleting All elements from Set object by using [.clear() ]  : 
    console.log("2] Set object after deleting All elements from Set object by using [.clear() ] , as following  : ");
    console.log(mySet);

    dis.innerHTML += `2] Set object after deleting All elements from Set object by using [.clear() ] as following : '`;
    dis.innerHTML +=  mySet ;

  }
  
  // =============================================================
  // 3] /Checking for certain content in Object {set()} :
  function setCheckElems() {

      alert(
        "Welcome to Checking for certain content in Object {set()}  "
      );

      dis.innerHTML = "";
    
    // Defining Set object [with adding new multiple elements by using {Iteralble string} + adding single value by using {.add() } using chain method ] :
      let mySet  = new Set('Shadi').add('shadi');   

    // Printing the result of Checking for certain single value in the set object [using {.has() } ] : 
        console.log(`3] The result of checking for 's' inside the set object is : ${mySet.has('S')}`);
        console.log(`3] The result of checking for 'shadi' inside the set object is : ${mySet.has('shadi')}`);
        console.log(`3] The result of checking for 'SHADI' inside the set object with using advanced function {.toLowerCase()} is : ${mySet.has('SHADI'.toLowerCase()) } `);
                
        dis.innerHTML += `3] The result of checking for 's' inside the set object is : ${mySet.has('s')}`;
        dis.innerHTML += `3] The result of checking for 'shadi' inside the set object is : ${mySet.has('shadi')}` ;
        dis.innerHTML += `3] The result of checking for 'SHADI' inside the set object with using advanced function {.toLowerCase()} is : ${mySet.has('SHADI'.toLowerCase()) } ` ;        
        
  }  

  // =============================================================

  // 4] Getting the length/size of elements in the Set object :
  function setGetLen() {  
    alert(
        "Welcome to Getting the length/size of elements in the Set object "
      );

    dis.innerHTML = "";
      
    // Defining Set object [with adding new multiple elements by using {Iteralble string} + adding single value by using {.add() } using chain  method ] :
      let mySet  = new Set('Shadi').add('shadi');   


    // Printing the number of elements in the set object [using {.size() } ] : 
        console.log(`4] The result of checking for 's' inside the set object is : ${mySet.size} `);
                
        dis.innerHTML += `4] The result of checking for 's' inside the set object is : ${mySet.size}  `;
    
  }
  // =============================================================

}

function display() {
  document.getElementById("note").innerHTML =
    myTest + "\n\n" + "=".repeat(90) + "\n\n";
}

