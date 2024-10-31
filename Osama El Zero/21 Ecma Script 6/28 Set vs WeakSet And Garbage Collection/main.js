// 28 Set vs WeakSet And Garbage Collection :
/* Main lessons functions :
  1- Comparison Between the {Set() Object} VS {WeakSet() Object} -> [ DataTypes of element accepted to be contained ]
  2- Comparison Between the {Set() Object} VS {WeakSet() Object} -> [ Get Ojbect Count of Elements by using {.size} ]
  3- Comparison Between the {Set() Object} VS {WeakSet() Object} -> [ Geting Object's keys by using {.keys} ]
  4- Comparison Between the {Set() Object} VS {WeakSet() Object} -> [ Avaiable to be iterated by forEach loop statment ]
  5- Comparison Between the {Set() Object} VS {WeakSet() Object} -> [ Deleted from {Garbage colection after being deleted Or set by Null value} ]

*/
// ---------------------------------------------------------------------

// 28 Set vs WeakSet And Garbage Collection:

function myTest() {
  "use strict";
  alert("Welcome to 28 Set vs WeakSet And Garbage Collection");

  var dis = document.getElementById("note");

  var x = prompt(
    ` Please choose one of following functions from below  :
    1- Comparison Between the {Set() Object} VS {WeakSet() Object} -> [ DataTypes of element accepted to be contained ]
    2- Comparison Between the {Set() Object} VS {WeakSet() Object} -> [ Get Object Count of Elements by using {.size} ]
    3- Comparison Between the {Set() Object} VS {WeakSet() Object} -> [ Geting Object's keys by using {.keys} ]
    4- Comparison Between the {Set() Object} VS {WeakSet() Object} -> [ Avaiable to be iterated by {forEach} loop statment ]
    5- Comparison Between the {Set() Object} VS {WeakSet() Object} -> [ Deleted from {Garbage colection after being deleted Or set by Null value} ]
    `
  );

  if (x == 1) {
    SetWeakSetDataTypes();
  } else if (x == 2) {
    SetWeakSetSize();
  } else if (x == 3) {
    SetWeakSetKeys();
  } else if (x == 4) {
    SetWeakSetForEach();
  } else if (x == 5) {
    SetWeakSetDeletNull();

    // } else if (x == 6) {

    // setSpread();
  } else {
    alert("No option has been selected !");
  }
  // =========================================================================

  // 1] Comparison Between the {Set() Object} VS {WeakSet() Object} -> [ DataTypes of element accepted to be contained ] :
  function SetWeakSetDataTypes() {
    alert(
      "Welcome to Comparison Between the {Set() Object} VS {WeakSet() Object} -> [ DataTypes of element accepted to be contained ] "
    );

    dis.innerHTML = "";

    // Defining several variables of different datatypes  :
    let strVar = "strValue",
      numVar = 12,
      obj = { A: "1", B: "2" },
      arr = ["a", "b", "c"];

    
    
    
    var z = prompt(`
    1- Insert [1] to test [Adding several of elements with different  DataTypes ] into {Set()} Object
    2- Insert [2] to test [Adding several of elements with different  DataTypes ] into {WeakSet()} Object
    `);
    
    if (z == 1) {
      // Defining empty {Set} Objects : 
      let mySet = new Set() ;

      // Adding predefined variables into the {Set()} Object :
      mySet.add(strVar);
      mySet.add(numVar);
      mySet.add(obj);
      mySet.add(arr);

      // Printing the {Set()} Object after adding new variables :
      console.log(`Set object after adding new element as following : `);
      console.log(mySet);

      dis.innerHTML += `Set object after adding new element as following : `;
      dis.innerHTML += `${mySet} `;
    } else if (z == 2) {
      // Defining empty {Set} Objects : 
      let myWeakSet = new WeakSet();

      // Adding predefined variables into the {WeakSet()} Object :
      myWeakSet.add(strVar);
      myWeakSet.add(numVar);
      myWeakSet.add(obj);
      myWeakSet.add(arr);

      // Printing the {WeakSet()} Object after adding new variables :
      console.log(` WeakSet object after adding new element as following : `);
      console.log(myWeakSet);

      dis.innerHTML += ` WeakSet object after adding new element as following : `;
      dis.innerHTML += myWeakSet;
    } else {
      alert("No chosen has been selected!");
    }

    // Looping inside the {Set Object} using forEach() loop   => [printing only the value of the set element ]:
    // mySet.forEach(ElemValue => {
    //   console.log( ` ${ElemValue}  ` ) ;
    //   dis.innerHTML += ` ${ElemValue} ` ;
    // }) ;

    // console.log( ` ${'#'.repeat(20)} ` ) ;
    // dis.innerHTML += ` ${'#'.repeat(20)} `  ;

    // Looping inside the {Set Object} using forEach() loop   => [printing both the value and key of the set element (with the same value due to the set object has no key) ]:
    // mySet.forEach((ElemValue , ElemKey) => {
    //   console.log( ` ${ElemValue} - ${ElemKey}  ` ) ;
    //   dis.innerHTML += ` ${ElemValue} - ${ElemKey} ` ;
    // }) ;

    //  -------------------------------------------
  }
  // =============================================================

  // 2] Comparison Between the {Set() Object} VS {WeakSet() Object} -> [ Get Ojbect Count of Elements by using {.size} ] :
  function SetWeakSetSize() {
    alert(
      "Welcome to Comparison Between the {Set() Object} VS {WeakSet() Object} -> [ Get Ojbect Count of Elements by using {.size} ]   "
    );

    dis.innerHTML = "";

    var z = prompt(
      ` Please choose one of following functions from below  :
      1- Insert [1] to test [ Getting count of elements by using {.size} ] of {Set()} Object
      2- Insert [2] to Test [ Getting count of elements by using {.size} ] of {WeakSet()} Object
    `
    );
    
    if (z == 1) {
      // Defining {Set} Object & Assigning Elements :  
      let mySet = new Set(["strValue", 12, { a: 1 }, [1, 3, 4, 2]]) ;
      
      // Printing the {Set()} Object's [count] using {.size} :
      console.log(
        `Set object [Count] by using {.size} of it's elements as following : `
      );

      console.log(`${mySet.size}`);

      dis.innerHTML += `Set object [Count] by using {.size} of it's elementsas following : ` ;    
      
      dis.innerHTML += `${mySet.size} `;
    
    } else if (z == 2) {
      // Defining {WeakSet()} Object & ( assign it with only object elements)  :
      let myWeakSet = new WeakSet([ { a: 1 } , { b: 2 } , { c: 3 },  { d: 4 } ]);


      // Printing the {WeakSet()} Object's [count] using {.size} :
      console.log(` WeakSet object [count] using {.size} as following : `);
      console.log(`${myWeakSet.size}`);

      dis.innerHTML += ` WeakSet object [count] using {.size} as following : `;
      dis.innerHTML += `${myWeakSet.size} `;
    } else {
      alert("No chosen has been selected!");
    }

  }
  // =============================================================

  // 3] Comparison Between the {Set() Object} VS {WeakSet() Object} -> [ Geting Object's keys by using {.keys} ]  :
  function SetWeakSetKeys() {
    alert(
      "Welcome to Comparison Between the {Set() Object} VS {WeakSet() Object} -> [ Geting Object's keys by using {.keys} ] "
    );

    dis.innerHTML = "";

    var z = prompt(
      ` Please choose one of following functions from below  :
      1- Insert [1] to test [ Getting keys of elements by using {.keys()} ] of {Set()} Object
      2- Insert [2] to Test [ Getting keys of elements by using {.keys()} ] of {WeakSet()} Object
    `
    );
    
    if (z == 1) {

      // Defining {Set} Object & Assigning Elements :  
      let mySet = new Set(["strValue", 12, { a: 1 }, [1, 3, 4, 2]]) ;
      
      // Printing the {Set()} Object's [keys] using {.keys()} :
      console.log(
        `Set object [keys] using {.keys()} as following : `
      );

      console.log(mySet.keys() ) ;

      dis.innerHTML += `Set object [keys] using {.keys()} as following : ` ;    
      
      dis.innerHTML += mySet.keys();
    
    } else if (z == 2) {
    
      // Defining {WeakSet()} Object & ( assign it with only object elements)  :
      let myWeakSet = new WeakSet([ { a: 1 } , { b: 2 } , { c: 3 },  { d: 4 } ]);

      // Printing the {WeakSet()} Object's [keys] using {.keys()} :
      console.log(` WeakSet object's [keys] using {.keys()} as following : `);
      console.log(myWeakSet.keys());

      dis.innerHTML += ` WeakSet object's [keys] using {.keys()} as following : `;
      dis.innerHTML += `${myWeakSet.keys()} `;
    
    } else {
      alert("No chosen has been selected!");
    }
    
  }
  // =============================================================

  // 4] Comparison Between the {Set() Object} VS {WeakSet() Object} -> [ Avaiable to be iterated by forEach loop statment ] :
  function SetWeakSetForEach() {
    alert(
      "Welcome to Comparison Between the {Set() Object} VS {WeakSet() Object} -> [ Avaiable to be iterated by forEach loop statment ] "
    );

    dis.innerHTML = "";

    var z = prompt(
      ` Please choose one of following functions from below  :
      1- Insert [1] to test [ Looping inside the elements by using {.forEach()} ] of {Set()} Object
      2- Insert [2] to test [ Looping inside the  elements by using {.forEach()} ] of {WeakSet()} Object
    `
    );
    
    if (z == 1) {

      // Defining {Set} Object & Assigning Elements :  
      let mySet = new Set(["strValue", 12, { a: 1 }, [1, 3, 4, 2]]) ;
      
      // Looping inside the {Set()} Object's using {.forEach()} & printing it's elements  :
      console.log(`Looping inside the {Set()} Object's using {.forEach()} & printing it's elements , as following : `);
      dis.innerHTML += `Looping inside the {Set()} Object's using {.forEach()} & printing it's elements , as following : ` ;    

      mySet.forEach((v , k) => {
        console.log( `${k} - ${v}` ) ;
        dis.innerHTML += `${k} - ${v}` ;
      } ); 

    } else if (z == 2) {
    
      // Defining {WeakSet()} Object & ( Assign it with only object elements)  :
      let myWeakSet = new WeakSet([ { a: 1 } , { b: 2 } , { c: 3 },  { d: 4 } ]);

      // Looping inside the {WeakSet()} Object's using {.forEach()} & printing it's elements  :
      console.log(`Looping inside the {WeakSet()} Object's using {.forEach()} & printing it's elements , as following : `);
      dis.innerHTML += `Looping inside the {WeakSet()} Object's using {.forEach()} & printing it's elements , as following : ` ;    

      myWeakSet.forEach((v , k) => {
        console.log( `${k} - ${v}` ) ;
        dis.innerHTML += `${k} - ${v}` ;
      } ); 
    
    } else {
      alert("No chosen has been selected!");
    }
    
  }
  // =============================================================

  // 5] Comparison Between the {Set() Object} VS {WeakSet() Object} -> [ Deleted from {Garbage colection after being deleted Or set by Null value} ]  :
  function SetWeakSetDeletNull() {
    alert(
      "Welcome to Comparison Between the {Set() Object} VS {WeakSet() Object} -> [ Deleted from {Garbage colection after being deleted Or set by Null value} ] "
    );

    dis.innerHTML = "";
 
    var z = prompt(
      ` Please choose one of following functions from below  :
      1- Insert [1] to test [ Deleting and Setting Null Value of elements by using {.delete()} & {elem = null} ] of {Set()} Object
      2- Insert [2] to test [ Deleting and Setting Null Value of elements by using {.delete()} & {elem = null} ] of {WeakSet()} Object
    `
    );
    
    if (z == 1) {

      // Defining {Set} Object & Assigning Elements :  
        let mySet = new Set(["strValue", 12, { a: 1 }, [1, 3, 4, 2]]) , 
        varElem = 'strValue2';

        // Adding a predefined variable into the Set() object :
          mySet.add(varElem);
  
        // Getting count of the Set() before deletion OR Setting Null :
          console.log( `Getting [count] of the Set() by using{.size} before deletion OR Setting Null ` ) ;
          console.log( `${mySet.size}` ) ;
          
          // Printing the Set() before deletion OR Setting Null :
          console.log(`{Set() object} elements after deletion one  of it's elements and setting null of other , as following : `);
          console.log(mySet);


        // Setting one of the Set() object as [null] value by using {elem = null} : 
          varElem = null ;
  
        // Deleting and Setting Null Value of an element by using {.delete()}   :
          mySet.delete('strValue'); 

          // Printing {Set()} object's Count & elements after deletion one of it's elements and setting null of other:
          console.log( `Getting [count] of the Set() by using{.size} after deletion OR Setting Null ` ) ;
          console.log( mySet.size ) ;

          console.log(`{Set() object} elements after deletion one  of it's elements and setting null of other , as following : `);
          console.log(mySet);
          
          dis.innerHTML += `{Set() object} elements after deletion one  of it's elements and setting null of other , as following : ` ;    
          dis.innerHTML += mySet;    
          
    } else if (z == 2) {
    
      // Defining {WeakSet()} Object & ( Assign it with only object elements)  :
        let myWeakSet = new WeakSet([ { a: 1 } , { b: 2 } , { c: 3 },  { d: 4 } ]) ,
            varElem = {z:10};

      // Adding a predefined variable into the WeakSet() object :
        myWeakSet.add(varElem);

       // Getting count of the WeakSet() before deletion OR Setting Null :
      //  console.log( `Getting [count] of the Set() by using{.size} before deletion OR Setting Null ` ) ;
      //  console.log( `${myWeakSet.size}` ) ;
       
       // Printing the WeakSet() before deletion OR Setting Null :
       console.log(`{WeakSet() object} elements before deletion one  of it's elements and setting null of other , as following : `);
       console.log(myWeakSet);


     // Setting one of the WeakSet() object as [null] value by using {elem = null} : 
       varElem = null ;

     // Deleting and Setting Null Value of an element by using {.delete()}   :
      myWeakSet.delete({ a: 1 }); 

      // Printing {WeakSet()} object's Count & elements after deletion one of it's elements and setting null of other:
      //  console.log( `Getting [count] of the Set() by using{.size} after deletion OR Setting Null ` ) ;
      //  console.log( myWeakSet.size ) ;

       console.log(`{WeakSet() object} elements after deletion one  of it's elements and setting null of other , as following : `);
       console.log(myWeakSet);
       
       dis.innerHTML += `{WeakSet() object} elements after deletion one  of it's elements and setting null of other , as following : ` ;    
       dis.innerHTML += myWeakSet;    
      
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
