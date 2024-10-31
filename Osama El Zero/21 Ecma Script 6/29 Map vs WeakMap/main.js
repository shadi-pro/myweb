// 29 Map vs WeakMap :

/* Main lessons functions :
  1- Comparison Between the {Map() Object} VS {WeakMap() Object} -> [ DataTypes of element accepted to be contained ]
  2- Comparison Between the {Map() Object} VS {WeakMap() Object} -> [ Get Ojbect Count of Elements by using {.size} ]
  3- Comparison Between the {Map() Object} VS {WeakMap() Object} -> [ Geting Object's keys by using {.keys} ]
  4- Comparison Between the {Map() Object} VS {WeakMap() Object} -> [ Avaiable to be iterated by forEach loop statment ]
  5- Comparison Between the {Map() Object} VS {WeakMap() Object} -> [ Deleted from {Garbage colection after being deleted Or Map by Null value} ]

*/
// ---------------------------------------------------------------------

// 29 Map vs WeakMap:

function myTest() {
  "use strict";
  alert("Welcome to 29 Map vs WeakMap");

  var dis = document.getElementById("note");

  var x = prompt(
    ` Please choose one of following functions from below  :
    1- Comparison Between the {Map() Object} VS {WeakMap() Object} -> [ DataTypes of element accepted to be contained ]
    2- Comparison Between the {Map() Object} VS {WeakMap() Object} -> [ Get Object Count of Elements by using {.size} ]
    3- Comparison Between the {Map() Object} VS {WeakMap() Object} -> [ Geting Object's keys by using {.keys} ]
    4- Comparison Between the {Map() Object} VS {WeakMap() Object} -> [ Avaiable to be iterated by {forEach} loop statment ]
    5- Comparison Between the {Map() Object} VS {WeakMap() Object} -> [ Deleted from {Garbage colection after being deleted Or set by Null value} ]
    `
  );

  if (x == 1) {
    MapWeakMapDataTypes();
  } else if (x == 2) {
    MapWeakMapSize();
  } else if (x == 3) {
    MapWeakMapKeys();
  } else if (x == 4) {
    MapWeakMapForEach();
  } else if (x == 5) {
    MapWeakMapDeletNull();

    // } else if (x == 6) {

    // setSpread();
  } else {
    alert("No option has been selected !");
  }
  // =========================================================================

  // 1] Comparison Between the {Map() Object} VS {WeakMap() Object} -> [ DataTypes of element accepted to be contained ] :
  function MapWeakMapDataTypes() {
    alert(
      "Welcome to Comparison Between the {Map() Object} VS {WeakMap() Object} -> [ DataTypes of element accepted to be contained ]  "
    );

    dis.innerHTML = "";

    // Defining several variables of different datatypes  :
    let strVar = "strProp",
      numVar = 12,
      obj = { A: "1", B: "2" },
      arr = ["a", "b", "c"];

    
    var z = prompt(`
    1- Insert [1] to test [Adding several of elements with different  DataTypes ] into {Map()} Object
    2- Insert [2] to test [Adding several of elements with different  DataTypes ] into {WeakMap()} Object
    `);
    
    if (z == 1) {
      // Defining empty {Map} Objects : 
      let myMap = new Map() ;

      // Adding predefined variables into the {Map()} Object :
      myMap.set(strVar , 'string value');
      myMap.set(numVar, 100 );
      myMap.set(obj ,  'Testing obj value');
      myMap.set(arr ,  'array prop value');

      // Printing the {Map()} Object after adding new variables :
      console.log(`Map object after adding new elements with different types of datatypes as following : `);
      console.log(myMap);

      dis.innerHTML += `Map object after adding new elements with different types of datatypes as following : `;
      dis.innerHTML += `${myMap} `;

    } else if (z == 2) {
      // Defining empty {WeakMap()} Objects : 
      let myWeakMap = new WeakMap();

      // Adding predefined variables into the {WeakMap()} Object :
      myWeakMap.set(strVar , 'string value');
      myWeakMap.set(numVar, 100 );
      myWeakMap.set(obj ,  'Testing obj value');
      myWeakMap.set(arr ,  'array prop value');

      // Printing the {WeakMap()} Object after adding new variables :
      console.log(` WeakMap object after adding new elements with differnet types of datatypes as following : `);
      console.log(myWeakMap);

      dis.innerHTML += ` WeakMap object after adding new elements with differnet types of datatypes as following : `;
      dis.innerHTML += myWeakMap;

    } else {
      alert("No chosen has been selected!");
    }

    //  -------------------------------------------
  }
  // =============================================================

  // 2] Comparison Between the {Map() Object} VS {WeakMap() Object} -> [ Get Object Count of Elements by using {.size} ] :
  function MapWeakMapSize() {
    alert(
      "Welcome to Comparison Between the {Map() Object} VS {WeakMap() Object} -> [ Get Object Count of Elements by using {.size} ]  "
    );

    dis.innerHTML = "";

    var z = prompt(
      ` Please choose one of following functions from below  :
      1- Insert [1] to test [ Getting count of elements by using {.size} ] of {Map()} Object
      2- Insert [2] to Test [ Getting count of elements by using {.size} ] of {WeakMap()} Object
    `
    );
    
    if (z == 1) {
      // Defining {Map} Object & Assigning Elements [of various datatypes] :  
      let myMap = new Map([
        ["strPropName" , "strValue" ],
        [12 , 'numericValue'] ,
        [[1, 3, 4, 2] , 'ArrValue' ],  
        [{ a: 1 , b : 2 } , 'Object Value'  ],
      ]) ;
      
      // Printing the {Map()} Object's [count] using {.size} :
      console.log(
        `Map object [Count] by using {.size} of it's elements as following : `
      );

      console.log(`${myMap.size}`);

      dis.innerHTML += `Map object [Count] by using {.size} of it's elements as following : ` ;    
      
      dis.innerHTML += `${myMap.size} `;
    
    } else if (z == 2) {
      // Defining {WeakMap()} Object & ( assign it with only object elements)  :
      let myWeakMap = new WeakMap([ 
        [ { a: 1 } , 'object value 1' ] ,
        [ { b: 2 } , 'object value 2' ] ,
        [ { c: 3 } , 'object value 3' ] , 
        [ { d: 4 } , 'object value 4' ] 
      ]);


      // Printing the {WeakMap()} Object's [count] using {.size} :
      console.log(` WeakMap object [count] using {.size} as following : `);
      console.log(`${myWeakMap.size}`);

      dis.innerHTML += ` WeakMap object [count] using {.size} as following : `;
      dis.innerHTML += `${myWeakMap.size} `;
    } else {
      alert("No chosen has been selected!");
    }

  }
  // =============================================================

  // 3] Comparison Between the {Map() Object} VS {WeakMap() Object} -> [ Geting Object's keys by using {.keys} ]  :
  function MapWeakMapKeys() {
    alert(
      "Welcome to Comparison Between the {Map() Object} VS {WeakMap() Object} -> [ Geting Object's keys by using {.keys} ]  "
    );

    dis.innerHTML = "";

    var z = prompt(
      ` Please choose one of following functions from below  :
      1- Insert [1] to test [ Getting keys of elements by using {.keys()} ] of {Map()} Object
      2- Insert [2] to Test [ Getting keys of elements by using {.keys()} ] of {WeakMap()} Object
    `
    );
    
    if (z == 1) {

      // Defining {Map} Object & Assigning Elements [of various datatypes] :  
      let myMap = new Map([
        ["strPropName" , "strValue" ],
        [12 , 'numericValue'] ,
        [[1, 3, 4, 2] , 'ArrValue' ],  
        [{ a: 1 , b : 2 } , 'Object Value'  ],
      ]) ;
      
      
      // Printing the {Map()} Object's [keys] using {.keys()} :
      console.log(
        `Map object [keys] using {.keys()} as following : `
      );

      console.log(myMap.keys() ) ;

      dis.innerHTML += `Map object [keys] using {.keys()} as following : ` ;    
      
      dis.innerHTML += myMap.keys();
    
    } else if (z == 2) {
      
      // Defining {WeakMap()} Object & ( assign it with only object elements's key's properties )  :
      let myWeakMap = new WeakMap([ 
        [ { a: 1 } , 'object value 1' ] ,
        [ { b: 2 } , 'object value 2' ] ,
        [ { c: 3 } , 'object value 3' ] , 
        [ { d: 4 } , 'object value 4' ] 
      ]);
      
      // Printing the {WeakMap()} Object's [keys] using {.keys()} :
      console.log(` WeakMap object's [keys] using {.keys()} as following : `);
      console.log(myWeakMap.keys());

      dis.innerHTML += ` WeakMap object's [keys] using {.keys()} as following : `;
      dis.innerHTML += `${myWeakMap.keys()} `;
    
    } else {
      alert("No chosen has been selected!");
    }
    
  }
  // =============================================================

  // 4] Comparison Between the {Map() Object} VS {WeakMap() Object} -> [ Avaiable to be iterated by forEach loop statment ]  :
  function MapWeakMapForEach() {
    alert(
      "Welcome to Comparison Between the {Map() Object} VS {WeakMap() Object} -> [ Available to be iterated by forEach loop statment ]   "
    );

    dis.innerHTML = "";

    var z = prompt(
      ` Please choose one of following functions from below  :
      1- Insert [1] to test [ Looping inside the elements by using {.forEach()} ] of {Map()} Object
      2- Insert [2] to test [ Looping inside the  elements by using {.forEach()} ] of {WeakMap()} Object
    `
    );
    
    if (z == 1) {

      // Defining {Map} Object & Assigning Elements [of various datatypes] :  
      let myMap = new Map([
        ["strPropName" , "strValue" ],
        [12 , 'numericValue'] ,
        [[1, 3, 4, 2] , 'ArrValue' ],  
        [{ a: 1 , b : 2 } , 'Object Value'  ],
      ]) ;
      

      // Looping inside the {Map()} Object's using {.forEach()} & printing it's elements  :
      console.log(`Looping inside the {Map()} Object's using {.forEach()} & printing it's elements , as following : `);
      dis.innerHTML += `Looping inside the {Map()} Object's using {.forEach()} & printing it's elements , as following : ` ;    

      myMap.forEach((v , k) => {
        console.log( `${k} - ${v}` ) ;
        dis.innerHTML += `${k} - ${v}` ;
      } ); 

    } else if (z == 2) {
    
      // Defining {WeakMap()} Object & ( assign it with only object elements's key's properties )  :
      let myWeakMap = new WeakMap([ 
        [ { a: 1 } , 'object value 1' ] ,
        [ { b: 2 } , 'object value 2' ] ,
        [ { c: 3 } , 'object value 3' ] , 
        [ { d: 4 } , 'object value 4' ] 
      ]);
      

      // Looping inside the {WeakMap()} Object's using {.forEach()} & printing it's elements  :
      console.log(`Looping inside the {WeakMap()} Object's using {.forEach()} & printing it's elements , as following : `);
      dis.innerHTML += `Looping inside the {WeakMap()} Object's using {.forEach()} & printing it's elements , as following : ` ;    

      myWeakMap.forEach((v , k) => {
        console.log( `${k} - ${v}` ) ;
        dis.innerHTML += `${k} - ${v}` ;
      } ); 
    
    } else {
      alert("No chosen has been selected!");
    }
    
  }
  // =============================================================

  // 5] Comparison Between the {Map() Object} VS {WeakMap() Object} -> [ Deleted OR {set by 'Null' value and being deleted from Map by Garbage colection after a while } ]  :
  function MapWeakMapDeletNull() {
    alert(
      "Welcome to Comparison Between the {Map() Object} VS {WeakMap() Object} -> [ Deleted OR {set by 'Null' value and being deleted from Map by Garbage colection after a while } ] "
    );

    dis.innerHTML = "";
 
    var z = prompt(
      ` Please choose one of following functions from below  :
      1- Insert [1] to test [ Deleting and Set one element by Null Value of elements by using {.delete()} & {elem = null} ] of {Map()} Object
      2- Insert [2] to test [ Deleting and Set one element by Null Value of elements by using {.delete()} & {elem = null} ] of {WeakMap()} Object
    `
    );
    
    if (z == 1) {

      // Defining {Map} Object & Assigning Elements [of various datatypes] :  
      let myMap = new Map([
        ["strPropName" , "strValue" ],
        [12 , 'numericValue'] ,
        [[1, 3, 4, 2] , 'ArrValue' ],  
        [{ a: 1 , b : 2 } , 'Object Value'  ],
      ]),
        varElem = {'objProp' : 500 };

        // Adding a predefined variable into the Map() object :
          myMap.set(varElem , 'objPropValue');
  
        // Getting count of the Map() before deletion OR Setting Null after adding new element :
          console.log( `Getting [count] of the Map() by using{.size} before deletion OR Setting Null ` ) ;
          console.log( `${myMap.size}` ) ;
          
        // Printing the Map() before deletion OR Setting Null :
          console.log(`{Map() object} elements before deletion OR Setting Null , as following : `);
          console.log(myMap);


        // Setting one of the Map() object as [null] value by using {elem = null} : 
          varElem = null ;
        
        // Getting value of the element that has been set [null] value by using {elem = null} of the Map() object  : 
          console.log('Getting value of the element that has been set [null] value by using {elem = null} of the Map() object ') ;
          console.log(myMap.get(varElem));

  
        // Deleting one of object's element by using {.delete()} method  :
          myMap.delete('strPropName'); 

          // Printing {Map()} object's Count & elements after deletion one of it's elements and setting null of other:
          console.log( `Getting [count] of the Map() object elements by using{.size} after deletion ` ) ;
          console.log( myMap.size ) ;

          console.log(` Printing the  {Map() object} elements after deletion one  of it's elements and setting null of other , as following : `);
          console.log(myMap);
          
          dis.innerHTML += `Printing Map() object} elements after deletion one  of it's elements and setting null of other , as following : ` ;    
          dis.innerHTML += myMap;    
          
    } else if (z == 2) {
    
      // Defining {WeakMap()} Object & ( assign it with only object elements's key's properties )  :
      let myWeakMap = new WeakMap([ 
        [ { a: 1 } , 'object value 1' ] ,
        [ { b: 2 } , 'object value 2' ] ,
        [ { c: 3 } , 'object value 3' ] , 
        [ { d: 4 } , 'object value 4' ] 
      ]),      
        varElem = {z:10},
        varElem2 = {x:20};

      // Adding a predefined variable into the WeakMap() object :
        myWeakMap.set(varElem  ,  'Test1');
        myWeakMap.set(varElem2  ,  'Test2');

       // Getting count of the WeakMap() before deletion OR Setting Null :
      //  console.log( `Getting [count] of the Set() by using{.size} before deletion OR Setting Null ` ) ;
      //  console.log( `${myWeakMap.size}` ) ;
      
      // Setting one of the WeakSet() object as [null] value by using {elem = null} : 
        varElem = null ;

      // Getting the value of element after being been set Null of WeakMap() :
        console.log('Getting the value of element after being been set Null of WeakMap()');
        console.log(myWeakMap.get(varElem ));
      

      // Deleting one element of WeakMap object by using {.delete()}  :
       myWeakMap.delete(varElem2); 

      // Printing the WeakMap() After deletion one of it's element :
       console.log(`{WeakMap() object} elements after deleting one of it's elements  , as following : `);
       console.log(myWeakMap);
       
       dis.innerHTML += `{WeakMap() object} elements after deleting one of it's elements  , as following: ` ;    
       dis.innerHTML += myWeakMap;    
      
    } else {
      alert("No chosen has been selected!");
    }
    
  }
  // =============================================================
  // =============================================================
  // ===========================================================
}

function display() {
  document.getElementById("note").innerHTML =
    myTest + "\n\n" + "=".repeat(90) + "\n\n";
}
