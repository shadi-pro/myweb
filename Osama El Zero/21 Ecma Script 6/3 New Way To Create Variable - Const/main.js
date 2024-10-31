//  3 New Way To Create Variable - Const
/* Main lessons functions :
    1- Const Type of scoping [block scope] 
    2- Non Ability to const Re-Declaration
    3- Non Ability to const Re-Asssignment 
    4- Modifying const variables  value [single || array || object ]  
*/
// ---------------------------------------------------------------------

// 3 New Way To Create Variable - {Const} :
function myTest() {
    'use strict' ;
    alert('Welcome to 3 New Way To Create Variable - {Const} ') ;
    
    var x = prompt( ' Please choose one of functions from below options : \n   1] Const Type of scoping [block scope] \n    2] Ability to Re-Declaration of Const variable \n    3] Ability to Re-Asssignment of Const variable \n  4]  Modifying const variables values of Const   [ array ]  \n   5]  Modifying const variables values of Const  [ object ]   ');    

    if (x == 1 ) {
        
        testConst();

    } else if (x == 2) {
    
        testConstReDec();
        
    } else if (x == 3) {
    
        testConstReAss()       
    
    } else if (x == 4) {

        modConstArr();
    
    } else if (x == 5) {

        modConstObj();

    } else {
        alert('No option has been selected !');
    } 

    // =========================================================================

    // 1] Const Type of scoping [block scope] : 
    function testConst() {
        // [Defining the const variable + Assignment ] :
        const SETTINGS = 1;  
        
        if (true){
            // [Re-Definging the const variable with the same name  + Re-Assignment ] {to considered as a new const } :
            const SETTINGS = 3;   

            // [printing the const variable after re-definition and re-assignemnt inside the conitional if block ] : 
            console.log('Const Variable SETTINGS value inside the if conditional = ' , SETTINGS );  
        }

        // [printing the variable after Re-definition and re-assignemnt outside the conitional if block ] : 
        console.log('Const Variable SETTINGS value outside the if conditional = ' , SETTINGS );

        return 'Done';
    }
    // -------------------------------


    // 2] Ability to Re-Declaration of Const variable : 
    function testConstReDec() {
        alert('Not able to re declare the same const variable!');

        const A = 1;
        // const A = 3;

        console.log(A) ;
    }
    // -------------------------------

    // 3] Ability to Re-Asssignment of Const variable:
    function testConstReAss() {
        alert('Not able to re assign the same const variable!');

        const B = 3;
        // const B = '';

        console.log(B) ;
    }
    // -------------------------------

    // 4] Modifying const variables values with Const cases types of  [ array || object ]  : 

    //  a) Modifying {array const} method :
    function modConstArr() {

        // Modifying the [const array] elements values :

        alert('Welcome to the Modifying the array elements values by using [default method || push method ] ');
        
        var z = prompt("please insert [1] to apply modifications on array elements values by using default method \n please insert [2] to apply modifications on array elements values by using push method  ");
        
        if (z == 1) {

            alert('Defining the const array , and modifying[adding new elements] to it\'s values -> {using default method} ') ;
            // Defining the [const array]  : 
            const arrConst1 = [] ;
            
            // Modifying the const array values [by using default mehtod]  : 
            arrConst1 = ['elem1' , 'elem2' , 'elem3'] ;
            
            // printing the const array after Modifying values [by using default mehtod]  : 
            console.log(arrConst1);

        } else if (z == 2) {
            alert('Defining the const array , and modifying[adding new elements] to it\'s values -> {using push method} ') ;
            
            // Defining the const array  : 
            const arrConst1 = ['elem1' , 'elem2' , 'elem3'] ;
            
            // Modifying the const array values [by using default mehtod]  : 
            arrConst1.push('elem4' , 'elem5' , 'elem6');
            
            // printing the const array after Modifying values [by using push mehtod]  : 
            console.log(arrConst1 );
        }
    }
    // --------------------------------------------------------------------------

    //   b) Modifying {object const} method :
    function modConstObj() {

        // Modifying the Object elements values :

        alert('Welcome to the Modifying the Object elements values by using [default method || single property method ] ');
        
        var z = prompt("please insert [1] to apply modifications on Object elements values by using [default method] \n please insert [2] to apply modifications on Object elements values by using [single property method] \n 3] modiifying single eleemnt using {freeze} method " );
        
        if (z == 1) {

            alert('Defining the const Object , and modifying[adding new elements(Keynames + values) ] to it\'s values -> {using default method} ') ;
            // Defining the const Object : 
            const objConst1 = {} ;
            
            // Modifying the const Object values [by using default mehtod]  : 
            objConst1 = {  
                'elem1' : 'value1'  ,
                'elem2' : 'value2'  ,
                'elem3' : 'value3'  ,
            
            } ;
            
            // printing the const Object after Modifying values [by using default mehtod]  : 
            console.log(objConst1);

        } else if (z == 2) {
            alert('Defining the const Object , and modifying[adding new elements(Keynames + values) ] to it\'s values -> {using single method} ') ;
            
            // Defining the const object : 
            const objConst1 = {  
                'name' : 'shadi'  ,
                'age' : '36'  ,
                'address' : 'cairo'  ,   
            } ;

            // Modifying the const object values [by using single mehtod]  : 
            objConst1.name = 'Ali';

            // printing the const object after Modifying values [by using single mehtod]  : 
            console.log(objConst1);
            
        } else if (z == 3)  {
            
            alert('Defining the const Object , and modifying[adding new elements(Keynames + values) ] to it\'s values -> {using single method + freeze method} ') ;
            
            // Defining the const object : 
            const objConst1 = {  
                'name' : 'shadi'  ,
                'age' : '36'  ,
                'address' : 'cairo'  ,   
            } ;

            // Using the Freeze method on the object :
            Object.freeze(objConst1) ;  

            // Modifying the const object values [by using single mehtod] -> [This new element will not be Resopnding ] : 
            objConst1.name = 'Ali';

            // printing the const object after Modifying values [by using single mehtod]  : 
            console.log(objConst1 );
 
        } else  {
            alert('Error Entry! ');
        }
    }
    //===========================================================

    function display() {
        document.getElementById("note").innerHTML = myTest + "\n\n" + "=".repeat(90) + "\n\n";
    }

}