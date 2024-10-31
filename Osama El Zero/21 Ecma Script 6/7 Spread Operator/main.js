// 7 Spread Operator:
/* Main lessons functions :
 Basic comparisonal printing and display of the array elements the [old JS & new js ES6] 
 Merging & Copying between two arrays & adding new element by using in the [old JS & new js ES6] 
 Applying the elements of array into the function's Arguments by using old JS & new js ES6 
 Applying Math operations on the array elements by using old JS & new js ES6
 Applying All Spreading mehtnod on the Object by using old JS & new js ES6
*/
// ---------------------------------------------------------------------

// 7 Spread Operator :

function myTest() {
    'use strict' ;
    alert('Welcome to 7 Spread Operator ') ;
    
    var dis = document.getElementById('note');
     
      
      var x = prompt(
        ` Please choose one of functions from below options :
        1- Basic comparisonal printing and display of the array elements the old JS & new js ES6 
        2- Merging & Copying between two arrays & adding new element by using in the [old JS & new js ES6] 
        3- Applying the elements of array into the function's Arguments by using old JS & new js ES6 
        4- Applying Math operations on the array elements by using old JS & new js ES6
        5- Applying All Spreading mehtnod on the Object by using old JS & new js ES6
        `
        );    

    if (x == 1 ) {
        
        printArr();

    } else if (x == 2) {
    
        mergCopyAddArr();
        
    } else if (x == 3) {
    
        applyFuncArr();       
    
    } else if (x == 4) {
    
        mathAppArr();       
    
    } else if (x == 5) {
    
        allFuncsObj();       
    
    } else {
        alert('No option has been selected !');
    } 

    // =========================================================================

    // 1] Basic comparisonal printing and display of the array elements the old JS & new js ES6   :
    function printArr() {
        alert('Welcome to {Basic comparisonal printing and display of the array elements } Syntax in the old default JS + new ES6  ');

        dis.innerHTML = '';
        
        let arrayOne = [1,2,3] ,  
            arrayOneS = [...arrayOne] ;

        // 1] Printing the array as array format : 
        console.log(arrayOne);
        
        dis.innerHTML += `1] Array elements as Values by using direct old JS as following : 
            ${arrayOne}  
            ==================================
            ` ;
        // ------------------------------------------------------------
            
        // 2] Printing the array as Array format using {spread} method : 
        console.log(...arrayOne);
        
        dis.innerHTML += `2] Array Elements after spreading it's values using  [spread method] NEW ES6 JS as following : 
            ${arrayOneS}  
            ==================================
            ` ;      
        //--------------------------------------       
    }
    // =============================================================

    // 2]  Merging & Copy between two arrays & Adding new elements by using in the old JS & new js ES6  :
    function mergCopyAddArr() {
        alert('Welcome to Test {Merging between two arrays} Syntax in the old default JS + new ES6  ');

        dis.innerHTML = '';

        // A] Merging & Copy two arrays by using old Js { concat() }  :
        let arrayOne = [1, 2, 3],
            arrayTwo = [].concat(arrayOne) ;
            
        // Adding new Element to the the merged Array :
        arrayTwo.push(4);


        // Printing the Basic & Merged array by using { concat() } old Js : 
            console.log( `The First Array by old JS as following :
                ${arrayOne}   
                The Second merged Array by old JS as following :
                ${arrayTwo} 
                ` );
            
            dis.innerHTML += `The First Array by old JS as following :
                ${arrayOne}   
                The Second merged Array by old JS as following :
                ${arrayTwo} 
                `;
        // ----------------------------------------------   
            
        // B] Merging & Copy two arrays by using { spread() } new ES6 Js   :
        let arrayOneS = [1, 2, 3],
            arrayTwoS = [...arrayOneS, 4, 5, 6] ;
            
        // Adding new Element to the merged Array :
        arrayTwoS.push(7);
            
        // Printing the Basic & Merged array by using { spread } new ES6 Js : 
            console.log( `The First Array as following :
                ${arrayOneS}   
                The Second merged & Added Array by using { spread } new ES6 as following :
                ${arrayTwoS} 
                ` );
            
            dis.innerHTML += `The First Array as following :
                ${arrayOneS}   
                The Second merged & Added Array by using { spread } new ES6 as following :
                ${arrayTwoS} 
                ` ;
            
    }
    // =========================================================    

    // 3] Applying the elements of array into the function's Arguments by using old JS & new js ES6  :
    function applyFuncArr() {
        alert(`Welcome to Test  Applying the elements of array into the function's Arguments by using old JS & new js ES6  `);

        dis.innerHTML = '';
        
        // Defining Array : 
        let arrayElem = [1, 2, 3] ; 

        // Defining Function of arguments  :
        function sum(x,y,z) {
            return x + y + z; 
        }

        // 1] Applying & Processing function arguments by array elements by using  old JS { function.apply() } : 
        console.log(sum.apply(void 0, arrayElem) + '\n');
        dis.innerHTML += sum.apply(void 0, arrayElem) + '<br>' ;         
        // ----------------------------------------------------------
        
    
        // 2] Applying & Processing function arguments by array elements by using {spread method} new ES6 JS : 
        console.log( sum(...arrayElem) + '\n');
        dis.innerHTML += sum(...arrayElem) + '<br>' ;         

    }
    // =========================================================

    // 4]  Applying Math operations on the array elements by using old JS & new js ES6  :
    function mathAppArr() {
        alert('Welcome to Test Applying Math[min number] operations on the array elements by using old JS & new js ES6  ');

        dis.innerHTML = '';

        // Defining Array :
        let arr = [1 ,2, 3, 10, 100, -10, -20, 500] ;

        // 1] Processing Math function on array by using old Js :
        console.log( Math.min.apply(Math, arr) + '\n');         
        dis.innerHTML += Math.min.apply(Math, arr) + '<br>'  ;         
        
        // 2] Processing Math function on array by using new ES6 {spread} Js :
        console.log( Math.min(...arr) + '\n' );         
        dis.innerHTML += Math.min(...arr) + '<br>' ;         

    }
    // =========================================================

    // 5]  Applying all functions by Spread on Object on by using old JS & new js ES6  :
    function allFuncsObj() {
        alert('Welcome to Test all functions on Object elements by [spread] method using old JS & new js ES6  ');

        dis.innerHTML = '';

        // Defining Objects :
        let obj = {
            "name" : "shadi" , 
            "age" : 36 , 
            "address" : "Cairo" , 
            "Contry" : "Egypt",
            "num1" : -10 ,  
            "num2" : -20   
           },
            // Defining new object by copying of the first object using {spread} method :     
            objS = {...obj};
    // a] Printing Object as values and object formats   
        // 1] Printing the both defined Objects as Object format : 
        console.log(obj);
        console.log(objS);
        
        dis.innerHTML += `1] First Object elements as object format by using direct old JS as following : 
        ${obj}  
        2] Second Object elements as object format by using direct old JS as following : 
        ${objS}  
        ==================================
        ` ;
    
        // 2] Printing the Object as values format using {spread} method : 
        // console.log(...obj);
        // console.log(...objS);
        
        dis.innerHTML += `1] First Object elements as values format by using new ES6 JS as following : 
        
        // 2] Second Object elements as values format by using new ES6  as following : 
        ${{...objS}}    
        ==================================
        ` ;      
    //--------------------------------------              
    // b] Processing math method on object values :
        // 1] Processing {Math} method on object by using {.apply()} [old Js] :
        console.log( Math.min.apply(Math, obj) + '\n');         
        dis.innerHTML += Math.min.apply(Math, obj) + '<br>'  ;         
        
        // 2] Processing {Math} method function on object by using new ES6 {spread} Js :
        console.log( Math.min(...obj) + '\n' );         
        dis.innerHTML += Math.min(...obj) + '<br>' ;         


    // 1] Processing Math function on array by using old Js :
    // console.log( Math.min.apply(math, arr) );         
    // dis.innerHTML += Math.min.apply(math, arr) ;         
    
    // 2] Processing Math function on array by using new ES6 {spread} Js :
    // console.log( Math.min(...arr) );         
    // dis.innerHTML += Math.min(...arr) ;         

    }
    // =========================================================

   //===========================================================
    
    function display() {
        document.getElementById("note").innerHTML = myTest + "\n\n" + "=".repeat(90) + "\n\n";
    }

}