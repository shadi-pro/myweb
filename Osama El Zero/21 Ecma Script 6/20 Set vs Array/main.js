// 20 Set vs Array :
/* Main lessons functions :
  1- Defining Set() and get datatype of {set()}
  2- Testing the Iterable types to be used with the set
  3- Comparison between array and set [Unique values]
  4- Comparison between array and set [Using Index]
  5- Comparison between array and set [Ability to be assigned each other - Set object can be assigned by array ]
  6- Set ability of using [Spread operator - just like the Array [...set]
  */
// ---------------------------------------------------------------------

// 20 Set vs Array:

function myTest() {
  "use strict";
  alert("Welcome to 20 Set vs Array");

  var dis = document.getElementById("note");

  var x = prompt(
    ` Please choose one of following functions from below  :
    1- Defining Set() and get datatype of {set()}
    2- Testing the Iterable types to be used with the set
    3- Comparison between array and set [Unique values]
    4- Comparison between array and set [Using Index]
    5- Comparison between array and set [Ability to be assigned each other]
    6- Set ability of using [Spread operator]
    `
  );

  if (x == 1) {
  
    defSetDataType();
  
  } else if (x == 2) {
  
    testIterTypesSet();

  } else if (x == 3) {

    compUinque();

  } else if (x == 4) {

    compIndx();

  } else if (x == 5) {

    setInside();

  } else if (x == 6) {

    setSpread();

  } else {
    alert("No option has been selected !");
  }

  // =========================================================================

  // 1] Defining Set() and get datatype of {set()} :
  function defSetDataType() {
    alert(
      "Welcome to Using Defining Set() and get datatype of {set()}  "
    );

    dis.innerHTML = "";

    // Defining Set object  :
      let mySet  = new Set();   
    
      
    // printing the Set Object Datatype :
    
    console.log('1] Set Object [datatype] as following : ');
    console.log(typeof mySet);
    
    console.log('2] Set Object [content] as following : ');
    console.log(mySet);

    
    dis.innerHTML += `'1] Set Object [datatype] as following : '`;
    dis.innerHTML +=  typeof mySet ;
    dis.innerHTML += `2] Set Object [content] as following : `;
    dis.innerHTML +=   mySet ;
  }

  // =============================================================
    // 2] Testing the Iterable types to be used with the set :
  function testIterTypesSet() {

      alert(
        "Welcome to Using Shorthand in Object method syntax by using [old JS] & [new ES6] "
      );

      dis.innerHTML = "";

     // Defining differnent  data type variables :
        let str = "Shadi",
            num = 55,
            strNum = '236';

    // Looping inside each type of defiend variables [string] :
    dis.innerHTML += `1] Looping inside [string variable] as following : ` ;  
    console.log('1] Looping inside [string variable] as following : ');

    for (let i = 0;  i < str.length ; i++) {
        console.log(str[i]);
        dis.innerHTML += str[i];
     }
    
    
     // Looping inside each type of defiend variables [numeric] :
     dis.innerHTML += `2] Looping inside [Number variable] as following : ` ;  
     console.log('2] Looping inside [Number variable] as following : ');
 
     for (let i = 0;  i < num.length ; i++) {
        console.log(num[i]);
     }
    
     // Looping inside each type of defiend variables [texual numeric] :
     dis.innerHTML += `3] Looping inside [Texual Number variable] as following : ` ;  
     console.log('3] Looping inside [Texual Number variable] as following : ');
 
     for (let i = 0;  i <  strNum.length ; i++) {
        console.log(strNum[i]);
     }
  
  
  }
  
  // =============================================================
    // 3] Comparison between array and set [Unique values] :
    function compUinque() {

      alert(
        "Welcome to Using Comparison between array and set [Unique values]  "
      );

      dis.innerHTML = "";

  // Define the array and Set object variables to test accepting Unique variables :   
    let myArr =  [1,2,3,4,4]  , 
        mySet = new Set([1,2,3,4,4]);

  // Printing the {Set object} & [Array] with repeated values :
 
    console.log(`1] Set Object with repeated contents as following : `) ;  
    console.log(mySet);
 
    console.log(`2] Array with repeated contents as following : `) ;  
    console.log(myArr);
 
    dis.innerHTML += `1] Set Object with repeated contents as following : ` ;  
    dis.innerHTML += mySet;
 
    dis.innerHTML +=`2] Array with repeated contents as following : ` ;  
    dis.innerHTML += myArr ;
 
  }  

  // =============================================================

  // 4] Comparison between array and set [Using Index] :
  function compIndx() {  
    alert(
        "Welcome to Using Comparison between array and set [Using Index]  "
      );

      dis.innerHTML = "";

      // Define the array and Set object variables to test accepting Unique variables :   
      let myArr =  [1,2,3,4,4]  , 
          mySet = new Set([1,2,3,4,4]);

      // Printing the {Set object} & [Array] with repeated values :
      console.log(`1] Printing one of element inside {Set Object} by using index[undefined] as following : `) ;  
      console.log(mySet[1]);

      console.log(`2] Printing one of element inside [Array] by using index[value] as following : `) ;  
      console.log(myArr[1]);

      dis.innerHTML += `1] Printing one of element inside {Set Object} by using index[undefined] as following : ` ;  
      dis.innerHTML += mySet[1] ;

      dis.innerHTML +=`2] Printing one of element inside [Array] by using index[value] as following : ` ;  
      dis.innerHTML += myArr[1] ;


  }
  // =============================================================

  // 5] Comparison between array and set [Ability to be assigned each by other]:
  function setInside() {
    alert(
        "Welcome to Using Comparison between array and set [Ability to be assigned each other] "
      );

    dis.innerHTML = "";

    // Defining the Set object and Array : 
      let myArr = [1 , 2 , 3];
      let mySet = new Set(myArr);

    // Printing the {Set object} after assigning the array inside the set object :
    console.log(`1] Printing the {Set Object} after assigning the Array inside the set object as following : `) ;  
    console.log(mySet);
    
    dis.innerHTML += `1]  Printing the {Set Object} after assigning the Array inside the set object as following : ` ;  
    dis.innerHTML += mySet;

  }
  // =============================================================

  // 6] Set ability of using [Spread operator] :
  function setSpread() {
    alert(
      "Welcome to Using Set ability of using [Spread operator] "
    );

    dis.innerHTML = "";

    // Defining the Set object and Array : 
      let myArr = [1 , 2 , 3] ,
          myObj = {'name' :'shadi' , 'age':36 , 'city' :'cairo'}, 
          myObj1 = {...myObj}, 
          mySet = new Set(myArr), 
          mySet1 = new Set([1 , 2 , 3]);

    console.log( myObj1);
    
    // Printing the Set object with using spread operator : 
      console.log('Set Object contents with using spread operator , as following :');
      console.log([...mySet]);
      console.log([...mySet1]);
      
      dis.innerHTML += 'Set Object contents[assinged Array] with using spread operator , as following :';
      dis.innerHTML += [...mySet] ;
      dis.innerHTML += mySet ;

      dis.innerHTML += 'Set Object contents[simple elements] with using spread operator , as following :';
      dis.innerHTML += [...mySet1] ;
      dis.innerHTML += mySet1 ;
      
      dis.innerHTML += myObj ;
      dis.innerHTML += myObj1 ;
      
      // console.log( {...myObj} ); => {this is wrong }
      // dis.innerHTML += { ...myObj } => {this is wrong} ;
  }

  // =============================================================

}

function display() {
  document.getElementById("note").innerHTML =
    myTest + "\n\n" + "=".repeat(90) + "\n\n";
}

