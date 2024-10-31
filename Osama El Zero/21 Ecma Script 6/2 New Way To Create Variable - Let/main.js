

function myTest() {
    'use strict' ;
    // 2 New Way To Create Variable - Let :

    // Following are main comparisonal standards between {var} & {let} attidutes : 

    // A] Type of scoping [function scope vs block scope] : 
    // 1) {var} Method :

    function testVar() {
            
        // [Defining the variable + Assignment ] :
        var x = 1;  
        
        if (true){
            // [Re-Definging the same variable + Re-Assignment ]  :
            var x = 2; 

            // [printing the variable after re-definition and re-assignemnt inside the conitional if block ] : 
            console.log('Variable x value inside the if conditional = ' , x , '<<br>' );  
        }

        // [printing the variable after re-definition and re-assignemnt outside the conitional if block ] : 
        console.log('Variable x value outside the if conditional = ' , x , '<<br>');

        return 'Done';
    }
    testVar();
    // --------------------------------------
    
    // 2) {let} Method :

    // function testLet() {
        
    //     // [Defining the variable + Assignment ] :
    //     let y = 1;  
        
    //     if (true){
    //         // [Re-Definging the same variable + Re-Assignment ]  :
    //         var y = 2; 

    //         // [printing the variable after re-definition and re-assignemnt inside the conitional if block ] : 
    //         console.log('Variable x value inside the if conditional = ' , y , '<<br>');  
    //     }

        
    //     // [printing the variable after re-definition and re-assignemnt outside the conitional if block ] : 
    //     console.log('Variable x value outside the if conditional = ' , y , '<<br>');

    //     return 'Done';

    // }
    // testLet();    
    //=====================================

    // B] Ability to Re-Declaration  : 

    // 1) {var} method  :

        var a = 1;
        var a = 3 ; 

        console.log(a , '<<br>') ;
        // -------------------------------

    // 2) {let} method  :

        // let b = 1;
        // let b = 3 ; 

        // console.log(b, '<br>' );
    //=====================================

    // C] Ability to Re-Asssignment :

        // 1) {var} method  :

        var c = 1;
        c = 3 ; 

        console.log(c , '<<br>') ;
        // -------------------------------

        // 2) {let} method  :

        // let d = 1;
        // d = 3 ; 

        // console.log(d, '<<br>'); 
    // =====================================

    // D] Result of accessing undefined Variables : 
        // {var} method :

            console.log(e, '<br>');
            var e = 1;
        //-----------------------------------------------------
        
        // {let} method :

            console.log(f, '<br>');
            let f = 1; 
    //=====================================

    // E] Global/Block Accessibilty , and relation with global {window} object's properties : 
           // {var} method : 

           var t = 1;
           console.log(window.t , '<br>');
       //-----------------------------------------------------
       
       // {let} method :
            
            let v = 1; 

           console.log(window.v , '<br>');

}
// =========================================================================

function display() {
       document.getElementById("note").innerHTML = myTest + "\n\n" + "=".repeat(90) + "\n\n";
}