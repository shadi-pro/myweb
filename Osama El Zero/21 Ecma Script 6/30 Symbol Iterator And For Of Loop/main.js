// 30 Symbol Iterator And For Of Loop :

/* Main lessons functions :
  1- Check for severals varialbes if it has [symbol itearable] or not  
  2- Printing/Displaying {Symbol Iterator} & {next()} method of each type Iterable Element variable (of severals varaibles of different datatypes )          
  3- using {for( varName of iterable variable) } to Looping inside each different type of Iterable variable 
*/
// ---------------------------------------------------------------------

// 30 Symbol Iterator And For Of Loop:

function myTest() {
  "use strict";
  alert("Welcome to 30 Symbol Iterator And For Of Loop");

  var dis = document.getElementById("note");

  var x = prompt(
    ` Please choose one of following functions from below  :
    1- Check for severals variables if it has [symbol itearable] or not  
    2- Printing/Displaying {Symbol Iterator} & {next()} method of each type Iterable Element variable (of severals varaibles of different datatypes )          
    3- using {for( varName of iterable variable) } to Looping inside each different type of Iterable variable 
    `
  );

  if (x == 1) {
    chkOfSymIters();
  
  } else if (x == 2) {
  
    disSymNext();
  
  } else if (x == 3) {
  
    forOfLoop();

  // } else if (x == 4) {
    // MapWeakMapForEach();
  // } else if (x == 5) {
    // MapWeakMapDeletNull();

    // } else if (x == 6) {

    // setSpread();
  } else {
    alert("No option has been selected !");
  }
  // =========================================================================

  // 1] Check for severals varialbes if it has [symbol itearable] or not :
  function chkOfSymIters() {
    alert(
      "Welcome to Check for severals varialbes if it has [symbol itearable] or not   "
    );

    dis.innerHTML = "";

    // Defining several variables of different datatypes  :
      let strVar = "strProp",
        numVar = 12,
        objVar = { A: "1", B: "2" },
        arrVar = ["a", "b", "c"],
        setVar =  new Set() ,
        mapVar = new Map() ;

    
      // Printing the Datatype of the {Symbol Iterator} value of each variable  :
        // 1- Printing datatype of the [String Iterator] of the {Symbol Iterator} value :
        console.log( `The {Symbol iterator} of the [String Iterable] as following : `);
        console.log( typeof strVar[Symbol.iterator]);
        
        dis.innerHTML += `The {Symbol iterator} of the [String Iterable] as following : ` ;
        dis.innerHTML += typeof strVar[Symbol.iterator] ;
        
        
        // 2- Printing datatype of the [Number Iterator] of the {Symbol Iterator} value :
        console.log( `The {Symbol iterator} of the [Number Iterable] as following : `);
        console.log( typeof numVar[Symbol.iterator]);
        
        dis.innerHTML += `The {Symbol iterator} of the [Number Iterable] as following : ` ;
        dis.innerHTML += typeof numVar[Symbol.iterator] ;


        // 3- Printing datatype of the [Object Iterator] of the {Symbol Iterator} value :
        console.log( `The {Symbol iterator} of the [Object Iterable] as following : `);
        console.log( typeof objVar[Symbol.iterator]);
        
        dis.innerHTML += `The {Symbol iterator} of the [Object Iterable] as following : ` ;
        dis.innerHTML += typeof objVar[Symbol.iterator] ;
        
        
        // 4- Printing datatype of the [Array Iterator] of the {Symbol Iterator} value :
        console.log( `The {Symbol iterator} of the [Array Iterable] as following : `);
        console.log( typeof arrVar[Symbol.iterator]);
        
        dis.innerHTML += `The {Symbol iterator} of the [Array Iterable] as following : ` ;
        dis.innerHTML += typeof arrVar[Symbol.iterator] ;


        // 5- Printing datatype of the [Set Iterator] of the {Symbol Iterator} value :
        console.log( `The {Symbol iterator} of the [Set Iterable] as following : `);
        console.log( typeof setVar[Symbol.iterator]);
        
        dis.innerHTML += `The {Symbol iterator} of the [Array Iterable] as following : ` ;
        dis.innerHTML += typeof setVar[Symbol.iterator] ;


        // 6- Printing datatype of the [Map Iterator] of the {Symbol Iterator} value :
        console.log( `The {Symbol iterator} of the [Map Iterable] as following : `);
        console.log( typeof mapVar[Symbol.iterator]);
        
        dis.innerHTML += `The {Symbol iterator} of the [Map Iterable] as following : ` ;
        dis.innerHTML += typeof mapVar[Symbol.iterator] ;

        
    //  -------------------------------------------
  }
  // =============================================================

  // 2] Printing/Displaying {Symbol Iterator} & {next()} method of each type Iterable Element variable (of severals varaibles of different datatypes )  :
  function disSymNext() {
    alert(
      "Welcome to Printing/Displaying {Symbol Iterator} & {next()} method of each type Iterable Element variable (of severals varaibles of different datatypes)  "
    );

    dis.innerHTML = "";
 
    // Defining several variables of different datatypes  :
        let strVar = "shadi",
          numVar = 12,
          objVar = { A: "1", B: "2" },
          arrVar = ["a", "b", "c"],
          setVar =  new Set() ,
          mapVar = new Map() ;
        
    // Allocation the previous several variables of different datatypes into specialized varaibles of datatype Symbol iterators objects :
        let strItr = strVar[Symbol.iterator]() ,
            // numItr = numVar[Symbol.iterator]() ,
            // objItr = objVar[Symbol.iterator]() ,
            arrItr = arrVar[Symbol.iterator]() ,
            setItr = setVar[Symbol.iterator]() ,
            mapItr = mapVar[Symbol.iterator]() ;
          
    // Printing the value of the next method of each type of Iterators of each variable :          
      // 1- Print the next mehtod of the string iterator [existed] (5 values of string values is available and sixth is not  ) : 
        console.log(strItr.next());
        console.log(strItr.next());
        console.log(strItr.next());
        console.log(strItr.next());
        console.log(strItr.next());
        console.log(strItr.next());
        dis.innerHTML +=  strItr.next() ;
        dis.innerHTML +=  strItr.next() ;
        dis.innerHTML +=  strItr.next() ;
        dis.innerHTML +=  strItr.next() ;
        dis.innerHTML +=  strItr.next() ;
        dis.innerHTML +=  strItr.next() ;
        
    // 2- Print the next mehtod of the {number} iterator [Not existed] => will display and Error : 
        // console.log(numItr.next);
        // dis.innerHTML +=  numItr.next ;
        
    // 3- Print the next mehtod of the {object} iterator [Not existed] => will display and Error : 
        // console.log(objItr.next);
        // dis.innerHTML +=  objItr.next ;
        
    // 4- Print the next mehtod of the {array} iterator [existed]  (3 values  of the array is available and the fourth is not ) : 
        console.log(arrItr.next());
        console.log(arrItr.next());
        console.log(arrItr.next());
        console.log(arrItr.next());
        
        dis.innerHTML +=  arrItr.next() ;
        dis.innerHTML +=  arrItr.next() ;
        dis.innerHTML +=  arrItr.next() ;
        dis.innerHTML +=  arrItr.next() ;
        
    // 5- Print the next mehtod of the {Set()} iterator [existed] : 
        console.log(setItr.next());
        dis.innerHTML +=  setItr.next() ;
        
    // 6- Print the next mehtod of the {Map()} iterator [existed]: 
      console.log(mapItr.next());
      dis.innerHTML +=  mapItr.next() ;

 
  }
  // =============================================================

  // 3] using {for( varName of iterable variable) } to Looping inside each different type of Iterable variables  :
  
  function forOfLoop() {
    alert(
      "Welcome to using {for( varName of iterable variable) } to Looping inside each different type of Iterable variables   "
    );

    dis.innerHTML = "";
 
      
    // Defining several variables of different datatypes  :
      let strVar = "shadi",
        numVar = 12,
        objVar = { A: "1", B: "2" },
        arrVar = ["a", "b", "c"],
        setVar =  new Set(['stringValue' , 124 , false ]) ,
        mapVar = new Map([ ['numPropValue' , 2] , ['objPropValue' , {A:1 , B:3}] , ['strPropValue', 'stingValue'] , [ 'arrPropValue' , [ 1 , 2 , 3] ] ]) ;

    // Iteration inside the string Iterable variable : 
    console.log(` Iteration/Looping inside the string iterable variable `);
    for (let char of strVar) {
      console.log(char) ;
    }
    
    // Iteration inside the array Iterable variable : 
    console.log(` Iteration/Looping inside the array iterable variable `);
    for (let elem of arrVar) {
      console.log(elem) ;
    }
    
    
    // Iteration inside the Set() Iterable variable : 
    console.log(` Iteration/Looping inside the Set() iterable variable `);
    for (let setElem of setVar) {
      console.log(setElem) ;
    }
    
    
    // Iteration inside the Map() Iterable variable : 
    console.log(` Iteration/Looping inside the Map() iterable variable `);
    for (let mapElem of mapVar) {
      console.log(mapElem) ;
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
