//  4 Arrow Function - Syntax and Examples
/* Main lessons functions :
    1- Regular Function syntax defined by [Default method] & [Assined to variable method]
    2- Main basic syntax of arrow function 
    3- {Arrow function} Shortcut methods with different (3) cases and conditons according to number of  [parameters & statement]  
*/
// ---------------------------------------------------------------------

// 4 Arrow Function - Syntax and Examples :
function myTest() {
    'use strict' ;
    alert('Welcome to 4 Arrow Function - Syntax and Examples ') ;
    
    var dis = document.getElementById('note');
     
    var x = prompt(' Please choose one of functions from below options : \n  1] Test and print Regular Function syntax defined by [Default method] & [Assined to variable method]  \n  2] Tet and print Main basic syntax of arrow function \n  3] Test and print {Arrow function} Shortcut methods with different cases ( Shorten {Arrow function} by [One statement] & [No parameters] methods ) \n   4] Shorten {Arrow function} by [One statement] & [One parameter] methods \n  5] Shorten {Arrow function} by [One statement] & [Multiple parameters] method  ');    

    if (x == 1 ) {
        
        regFunc();

    } else if (x == 2) {
    
        arrowBFunc();
        
    } else if (x == 3) {
    
        arrowShortFunc1();       
    
    } else if (x == 4) {

        arrowShortFunc2();
    
    } else if (x == 5) {

        arrowShortFunc3();

    } else {
        alert('No option has been selected !');
    } 

    // =========================================================================

    // 1] Regular Function syntax defined by [Default method] & [Assined to variable method] : 
    function regFunc() {
        alert('Welcome to Test and print Regular Function syntax defined by [Default method] & [Assined to variable method]  ');

        dis.innerHTML = '';
        
        function regDefFunc() {
            return 'Return of Regular function by defined by the Default method = ' , 1 ;
        }

        regDefFunc();

        console.log('Regular Function Return by using Default method : ' , regDefFunc() ) ;
        console.log('Regular Function Syntax by using Default method : '  , regDefFunc ) ;
        
        dis.innerHTML = 'Regular Function Return by using Default method : ' + regDefFunc() + '<br>' + 
                    'Regular Function Syntax by using Default method : ' + regDefFunc() + '<br>' ;
        
        // ------------------------

        let regAssFunc =  function() {
            return 'Return of Regular function by defined by the assigned method =' , 1 ;
        }  

        regAssFunc();

        console.log('Regular Function Return by using assigned method : ' , regAssFunc() ) ;
        console.log('Regular Function Syntax by using assigned method : '  , regAssFunc ) ;

        dis.innerHTML += 'Regular Function Return by using assigned method : ' + regAssFunc() + '<br>' + 
                    'Regular Function Syntax by using assigned method : ' + regAssFunc + '<br>' ;
        
    }
    // =============================================================

    // 2] Main basic syntax of arrow function :
    function arrowBFunc() {
        alert('Welcome to Test and print Arrow Basic Function syntax [without shortcuts cases] ');

        dis.innerHTML = '';

        let  arrowBFunc = () =>  100 ;

        arrowBFunc();
       
        console.log('Arrow Function Return by Basic Method [without shortcuts cases] : ' , arrowBFunc() ) ;
        console.log('Arrow Function Syntax by using Basic Method [without shortcuts cases] : '  , arrowBFunc ) ;
       
        dis.innerHTML += 'Arrow Function Return by using assigned method : ' + arrowBFunc() + '<br>' + 
                    'Arrow Function Syntax by using assigned method : ' + arrowBFunc + '<br>' ;
        

    }
    // =========================================================

    // 3] {Arrow function} Shortcut methods with different cases and conditons according to number of  [parameters & statement]  : 

    //  a) Shorten {Arrow function} by [One statement] & [No parameters] methods :
    function arrowShortFunc1() {

        alert('Welcome to Test and print Shorten Arrow Function syntax by [One statement] & [No parameters] ' );

        dis.innerHTML = '';

        let  arrowOneSFunc1 = () =>  100 ;

        arrowOneSFunc1();

        console.log('Short Arrow Function Return by [One statement] & [No parameters] : ' , arrowOneSFunc1() ) ;
        console.log('Short Arrow Function Syntax by [One statement] & [No parameters] : '  , arrowOneSFunc1 ) ;
       
        dis.innerHTML += 'Short Arrow Function Return by [One statement] & [No parameters] : ' + arrowOneSFunc1() + '<br>' + 
                    'Short Arrow Function Syntax by [One statement] & [No parameters] : ' + arrowOneSFunc1 + '<br>' ;
    
        // ---------------------------------
        
        let  arrowOneSFunc2  = _ =>  200 ;

        arrowOneSFunc2();

        console.log('Short Arrow Function Return by [One statement] & [No parameters] : ' , arrowOneSFunc2() ) ;
        console.log('Short Arrow Function Syntax by [One statement] & [No parameters] : '  , arrowOneSFunc2 ) ;
       
        dis.innerHTML += 'Short Arrow Function Return by [One statement] & [No parameters] : ' + arrowOneSFunc2() + '<br>' + 
                    'Short Arrow Function Syntax by [One statement] & [No parameters] : ' + arrowOneSFunc2 + '<br>' ;
    
    }
    // --------------------------------------------------------------------------

    //  b) Shorten {Arrow function} by [One statement] & [One parameter] methods :
    function arrowShortFunc2() {

        alert('Welcome to Test and print Shorten Arrow Function syntax by [One statement] & [One parameters] ' );

        dis.innerHTML = '';

        let  arrowOneSOnePFunc1 = (param) => param * 100 ;

        arrowOneSOnePFunc1(100);

        console.log('Short Arrow Function Return by [One statement] & [One parameter] : ' , arrowOneSOnePFunc1() ) ;
        console.log('Short Arrow Function Syntax by [One statement] & [One parameter] : '  , arrowOneSOnePFunc1 ) ;
       
        dis.innerHTML += 'Short Arrow Function Return by [One statement] & [One parameter] : ' + arrowOneSOnePFunc1() + '<br>' + 
                    'Short Arrow Function Syntax by [One statement] & [One parameter] : ' + arrowOneSOnePFunc1 + '<br>' ;
    
        // ---------------------------------
        
        let  arrowOneSOnePFunc2 = param => param * 100 ;

        arrowOneSOnePFunc2(200);

        console.log('Short Arrow Function Return by [One statement] & [One parameter] : ' , arrowOneSOnePFunc2() ) ;
        console.log('Short Arrow Function Syntax by [One statement] & [One parameter] : '  , arrowOneSOnePFunc2 ) ;
       
        dis.innerHTML += 'Short Arrow Function Return by [One statement] & [One parameter] : ' + arrowOneSOnePFunc2() + '<br>' + 
                    'Short Arrow Function Syntax by [One statement] & [One parameter] : ' + arrowOneSOnePFunc2 + '<br>' ;
    
    }
    // ---------------------------------------------------------------------------

    //  c) Shorten {Arrow function} by [One statement] & [Multiple parameters]  methods :
    function arrowShortFunc3() {

        alert('Welcome to Test and print Shorten Arrow Function syntax by [One statement] & [Multiple  parameters] ' );

        dis.innerHTML = '';

        let  arrowOneSMulPFunc = (param1 , param2) => param1 * param2 ;

        arrowOneSMulPFunc(10,20);
        

        console.log('Short Arrow Function Return by [One statement] & [Mul parameter] : ' , arrowOneSMulPFunc() ) ;
        console.log('Short Arrow Function Syntax by [One statement] & [Mul parameter] : '  , arrowOneSMulPFunc ) ;
       
        dis.innerHTML += 'Short Arrow Function Return by [One statement] & [Mul parameters] : ' + arrowOneSMulPFunc() + '<br>' + 
                    'Short Arrow Function Syntax by [One statement] & [Mul parameters] : ' + arrowOneSMulPFunc + '<br>' ;
    }

    //===========================================================
    
    function display() {
        document.getElementById("note").innerHTML = myTest + "\n\n" + "=".repeat(90) + "\n\n";
    }

}