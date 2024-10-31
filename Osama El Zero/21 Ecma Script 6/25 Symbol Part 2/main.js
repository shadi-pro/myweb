// 25 Symbol Part 2 :
/* Main lessons functions :
   1- { Symbol.for()  } => To create / access for certain symbol globally  
   2- { Symbol.keyFor()  } => To  access for certain symbol globally with cetain key/description   
   3- { Symbol.toString()  } => To symbol to unusaual string form   
   4- { Symbol.description  } => To get symbol key or description   
   5- { Symbol.iterator  } => Built-in symbol function to be used iteration of the symbol variable    
*/
  // ---------------------------------------------------------------------

// 25 Symbol Part 2:

function myTest() {
  "use strict";
  alert("Welcome to 25 Symbol Part 2");

  var dis = document.getElementById("note");

  var x = prompt(
    ` Please choose one of following functions from below  :
   1- { Symbol.for()  } => To create/access for certain symbol globally  
   2- { Symbol.keyFor()  } => To access for certain symbol globally with cetain key/description   
   3- { Symbol.toString()  } => To symbol to unusaual string form   
   4- { Symbol.description  } => To get symbol key or description   
   5- { Symbol.iterator  } => Built-in symbol function to be used iteration of the symbol variable    
   ` );

  if (x == 1) {
  
   forSymb();
  
  } else if (x == 2) {
  
    keyForSymb();

  } else if (x == 3) {
    
    strSymb();
    
  } else if (x == 4) {

    descSymb();

  } else if (x == 5) {

    iteratorSymb();

  // } else if (x == 6) {

    // setSpread();

  } else {
    alert("No option has been selected !");
  }
  // =========================================================================

  // 1] { Symbol.for()  } => To create/access for certain symbol globally   :
  function forSymb() {
    alert(
      "Welcome to  { Symbol.for()  } => To create/access for certain symbol globally    "
    );

    dis.innerHTML = "";

    // Defining different Symbol variable [some with the same key and other not]  :
      const mySmb1  = Symbol.for('one') ; // -> [Creating new symbol variable ]
      
      const mySmb2  = Symbol.for('one') ;  // -> [Selecting/aceesssing to existed symbol variable ]
      
      const mySmb3  = Symbol.for('three') ;  // -> [Creating new symbol variable ]
      
    // Printing result of Identicaly Equality between the symbol variables [declared by using {.for} method] : 
        console.log(`The result of Identicaly Equality between the same key/description symbols variables :`) ;   
        console.log( mySmb1 === mySmb2 ) ;   
        dis.innerHTML += `The result of Identicaly Equality between the same key/description symbols variables :` ;   
        dis.innerHTML += mySmb1 === mySmb2  ;   

    // Printing result of Identicaly Equality between (2) different key/description symbol variables [declared by using {.for} method] : 
        console.log(`The result of Identicaly Equality between (2) different key/description symbols variables :`) ;   
        console.log( mySmb1 === mySmb3 ) ;   
        dis.innerHTML += `The result of Identicaly Equality between (2) different key/description symbols variables :` ;   
        dis.innerHTML += mySmb1 === mySmb3  ;   

    //  -------------------------------------------
  }

  // =============================================================
  // 2] { Symbol.keyFor()  } => To access for certain symbol globally with cetain key/description    :
  function keyForSymb() {

      alert(
        "Welcome to { Symbol.keyFor()  } => To access for certain symbol globally with cetain key/description    "
      );

      dis.innerHTML = "";

      // Defining different Symbol variable [some with the same key and other not]  :
        const mySmb1  = Symbol.for('one') ; // -> [Creating new symbol variable ]
          
        const mySmb2  = Symbol.for('one') ;  // -> [Selecting/Aceesssing to existed symbol variable ]

        const mySmb3  = Symbol.for('three') ;  // -> [Creating new symbol variable ]

      // Printing certain Symbol's key/description by using { .keyFor() } method] : 
        console.log(`The key/description of symbol1 variable is :`) ;   
        console.log( Symbol.keyFor(mySmb1)) ;   

        console.log(`The key/description of symbol2 variable is :`) ;   
        console.log( Symbol.keyFor(mySmb2)) ;   
        
        console.log(`The key/description of symbol1 variable is :`) ;   
        console.log( Symbol.keyFor(mySmb3)) ;   

        dis.innerHTML +=  `The key/description of symbol1 variable is :` ;   
        dis.innerHTML += Symbol.keyFor(mySmb1) ;   
        
        dis.innerHTML +=  `The key/description of symbol2 variable is :` ;   
        dis.innerHTML += Symbol.keyFor(mySmb2) ;   

        dis.innerHTML +=  `The key/description of symbol3 variable is :` ;   
        dis.innerHTML += Symbol.keyFor(mySmb3) ;   

      }
  // =============================================================
  
  // 3] { Symbol.toString() } => To symbol to unusaual string Form :
  function strSymb() {

      alert(
        "Welcome to { Symbol.toString()  } => To symbol to unusaual string Form   "
      );

      dis.innerHTML = "";

      // Defining different Symbol variable [some with the same key and other not]  :
      const mySmb1  = Symbol.for('one') ; // -> [Creating new symbol variable ]
          
      const mySmb2  = Symbol.for('one') ;  // -> [Selecting/Aceesssing to existed symbol variable ]

      const mySmb3  = Symbol.for('three') ;  // -> [Creating new symbol variable ]

    // Displaying the default form of Symbol variable through the built-in method [alert() , console.log()] :
      // alert(mySmb1);
      // alert(mySmb2);
      // alert(mySmb3);
      
      // console.log(mySmb1);
      // console.log(mySmb2);
      // console.log(mySmb3);
      
      // dis.innerHTML += mySmb1 ;
      // dis.innerHTML += mySmb2 ;
      // dis.innerHTML += mySmb3 ;
      
    // Converting Symbol vsariable into the string Form :
      alert(mySmb1.toString());
      alert(mySmb2.toString());
      alert(mySmb3.toString());
      
      console.log(mySmb1.toString());
      console.log(mySmb2.toString());
      console.log(mySmb3.toString());
        
      dis.innerHTML += mySmb1.toString() ;
      dis.innerHTML += mySmb2.toString() ;
      dis.innerHTML += mySmb3.toString() ;
      

  }
  // =============================================================

  // 4] { Symbol.description  } => To get symbol key or description   :
  function descSymb() {

      alert(
        "Welcome to { Symbol.description  } => To get symbol key or description   "
      );

      dis.innerHTML = "";

      // Defining different Symbol variable [some with the same key and other not]  :
      const mySmb1  = Symbol.for('one') ; // -> [Creating new symbol variable ]
          
      const mySmb2  = Symbol.for('one') ;  // -> [Selecting/Aceesssing to existed symbol variable ]

      const mySmb3  = Symbol.for('three') ;  // -> [Creating new symbol variable ]

    // Displaying the Symbol key/description variable  :
      
      console.log(mySmb1.description);
      console.log(mySmb2.description);
      console.log(mySmb3.description);
      
      dis.innerHTML += mySmb1.description ;
      dis.innerHTML += mySmb2.description ;
      dis.innerHTML += mySmb3.description ;

  }
  
  // =============================================================
  // 5]  { Symbol.iterator  } => Built-in symbol function to be used iteration of the symbol variable   :
  function iteratorSymb() {

      alert(
        "Welcome to { Symbol.iterator  } => Built-in symbol function to be used iteration of the symbol variable     "
      );

      dis.innerHTML = "";

    // Defining different Symbol variable [some with the same key and other not]  :
      const mySmb1  = Symbol.for('one') ; // -> [Creating new symbol variable ]
          
      const mySmb2  = Symbol.for('one') ;  // -> [Selecting/Aceesssing to existed symbol variable ]

      const mySmb3  = Symbol.for('three') ;  // -> [Creating new symbol variable ]

    // Displaying the Symbol iterator variable  :
      
      console.log(Symbol.iterator );
      // console.log(mySmb1.iterator );
      // console.log(Symbol.iterator(mySmb2) );
      // console.log(Symbol.iterator(mySmb3) );
      
      // dis.innerHTML += Symbol.iterator(mySmb1) ;
      // dis.innerHTML += Symbol.iterator(mySmb2) ;
      // dis.innerHTML += Symbol.iterator(mySmb3) ;

  }
  
  // =============================================================

  // =============================================================

}

function display() {
  document.getElementById("note").innerHTML =
    myTest + "\n\n" + "=".repeat(90) + "\n\n";
}
