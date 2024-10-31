// 22 Map vs Object :
/* Main lessons functions :
  1- Main method Syntax of Define & Assign new properties into Map() Object & quick comparisoin between default object and map object 
  2- Main method Syntax & Dealing with repeated values of the properties keynames [Repeatness in each value, datatype ] 
*/

  // ---------------------------------------------------------------------

// 22 Map vs Object:

function myTest() {
  "use strict";
  alert("Welcome to 22 Map vs Object");

  var dis = document.getElementById("note");

  var x = prompt(
    ` Please choose one of following functions from below  :
    1- Main method Syntax of Define & Assign new properties into Map() Object & quick comparisoin between default object and map object 
    2- Main method Syntax & Dealing with repeated values of the properties keynames [Repeatness in each value, datatype ] 
    `
    );

  if (x == 1) {
  
    defAssignElemMap();
  
  } else if (x == 2) {
  
    assRepElemMap();

  // } else if (x == 3) {

    // assRepElemMap();

  // } else if (x == 4) {

    // assRepElemMap();

  // } else if (x == 5) {

    // setInside();

  // } else if (x == 6) {

    // setSpread();

  } else {
    alert("No option has been selected !");
  }

  // =========================================================================

  // 1] Main method Syntax of Define [Map() Object] & quick comparison with [default object]  : 
  function defAssignElemMap() {
    alert(
      "Welcome to Main method Syntax of Define [Map() Object] & quick comparison with [default object] "
    );

    dis.innerHTML = "";

    // Defining Empty [Map object] :
      let myMap  = new Map();   
    
    // Defining Empty [Default object] :
      let myObj  = {} ;   
    
    // Adding new Single value to the [Default object]  :
      // 1) By using {Direct Method} :
        myObj['name'] = 'shadi' ; 
      
      // 2) By using {Notation Method} :
        myObj.age = '36' ;   
        // -------------------------------------------

    // A] Assigning new [[Single value]] to the [Map object]  :
     
      // 1) By using Set() [Assign element to the Defined Map object] :
        myMap.set('Name' , 'shadi') ;   
      
      // 2) By using Direct Assign with definition [Assign single element while definiton map object ] :
      let myMap1 = new Map([['username' , 'Shadi']]) ; 
      
      // 3) By using Set()  [Assign single element while definiton map object ] :
        myMap1.set('Nusername', 'Sayed');  
      // ===============================================

    // B] Assigning new [[Group of elements]] to the [Map Object] :
      
      // 1) By using the Chain of {Set()} [to Pre-defined Map Object] :
        myMap1.set('name' , 'Shadi' ).set('age' , '36').set('City' , 'cairo') ;
      // ----------------------------------------------------

      // 2) By using the set [While Decleration of the Map Object ] :
        let myMap2 = new Map([
          ['Shadi' , 'String keyname Property'] ,
          [20 , 'number keyname Property'] ,
          [false , 'boolean keyname Property'] ,
          [{a:1, b:2} , 'Object keyname Property'] ,
          [function myFunc() {} , 'function keyname Property'] ,
        ]);
    // =================================================

    // Printing the [Default Object] after assingning new [[Single Elements]] using [Direct Assign method] & [Notation Method]  :
    console.log('1] [Default Object] after assingning new [[Single Element]] using [Direct Assign method] & [Notation Method] as following : ');
    console.log(myObj);
    
    dis.innerHTML += '1] [Default Object] after assingning new [[Single Element]] using [Direct Assign method] & [Notation Method] as following : ' ;
    dis.innerHTML += myObj ;

        
    // Printing the [Default Object] after assingning new [[Group Elements]] [using Set() method and [to Predefined map object ]  ]  :
    console.log('1] using [Direct Assign method] & [Notation Method] as following : ');
    console.log(myObj);
    
    dis.innerHTML += '1] using [Direct Assign method] & [Notation Method] as following : ' ;
    dis.innerHTML += myObj ;

    // --------------------------------------------------
    
    // Printing the [Map Object] after assigning new [[Single Elements]] By [ Using Set() [Assign element to the Defined Map object] ]  :
    console.log('2] [Map Object] after assigning new [[Single Elements]] By [ Using Set() [Assign element to the Defined Map object] ]  as following : ');
    console.log(myMap);
    
    dis.innerHTML += '02] [Map Object] after assigning new [[Single Elements]] By [ Using Set() [Assign element to the Defined Map object] ]  as following : ' ;    console.log(myMap);
    dis.innerHTML += myMap ;

    
    console.log('2] the [Map Object] after assigning new [[Single Elements]] By using Set() with definition [Assign element while definiton map object ]   as following : ');
    console.log(myMap1);
    
    dis.innerHTML += '2] the [Map Object] after assigning new [[Single Elements]] By using Set() with definition [Assign element while definiton map object ]  as following : ' ;
    dis.innerHTML += myMap1 ;
    
    
    
    // Printing the [Map Object] after assigning new [[Group Elements]] By [ Using using the Chain of {Set()} [to Pre-defined Map Object] ] :
    console.log('2] [Map Object] after assigning new [[Group Elements]] By [ Using using the Chain of {Set()} [to Pre-defined Map Object] ]  as following : ');
    console.log(myMap1);
    
    dis.innerHTML += '2] [Map Object] after assigning new [[Group Elements]] By [ Using using the Chain of {Set()} [to Pre-defined Map Object] ]  as following : ' ;
    dis.innerHTML += myMap1 ;
    

    // Printing the [Map Object] after assigning new [[Group Elements]] By [ using the set [While Decleration of the Map Object ]  :
    console.log('2] the [Map Object] after assigning new [[Group Elements]] By [ using the set [While Decleration of the Map Object ]   as following : ');
    console.log(myMap2);
 
    dis.innerHTML += '2] the [Map Object] after assigning new [[Group Elements]] By [ using the set [While Decleration of the Map Object ]    as following : ' ;
    dis.innerHTML += myMap2;
    
    //  -------------------------------------------
  }

  // =============================================================
    // 2] Main method Syntax & Dealing with repeated values of the properties keynames [Repeatness in each value, datatype ]  :
  function assRepElemMap() {

      alert(
        "Welcome to Main method Syntax of Assign new properties into Map() Object & quick comparisoin between default object and map object  "
      );

      dis.innerHTML = "";

    // Defining {Map object} [with repeated values with different datatypes ] Method :
      let myMap  = new Map([
        ['name' , 'Shadi'] ,
        ['30' , 'StrNumeric'] ,
        [30 , 'Number'] ,
        ['30' , 'Last Value Number'] ,
        [function funName() {} , 'Function value'] ,
        [false , 'boolean value'] ,
      ]), 
    
    // Defining {Default object} [with repeated values with different datatypes ] Method :
        myObj  = {
          'name' : 'Shadi' ,
          '30' : 'StrNumeric',
            30 : 'Number' ,
          '30' : 'Last Value Number' , 
          false : 'boolean value',
        }; 
          
    // Printing the Map Object :
        console.log(myMap);
        dis.innerHTML += myMap ;
  
    // Printing the Default Object :
        console.log(myObj);
        dis.innerHTML += myObj ;

  }
  
  // =============================================================

}

function display() {
  document.getElementById("note").innerHTML =
    myTest + "\n\n" + "=".repeat(90) + "\n\n";
}

