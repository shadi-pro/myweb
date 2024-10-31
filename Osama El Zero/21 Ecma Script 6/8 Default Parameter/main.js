
// 8 Default Parameter:
/* Main lessons functions :
    Using Default paramters by old Js [Default conditional If method] 
    Using Default paramters by old Js [Shorthand Conditional If  method] 
    Using Default paramters by new ES6 Js 
*/
// ---------------------------------------------------------------------

// 8 Default Parameter :

function myTest() {
    'use strict' ;
    alert('Welcome to 8 Default Parameter ') ;
    
    var dis = document.getElementById('note');
     
      
      var x = prompt(
        ` Please choose one of functions from below options :
        1- Using Default paramters by old Js [Default conditional If method] 
        2- Using Default paramters by old Js [Shorthand Conditional If  method] 
        3- Using Default paramters by new ES6 Js 
        `
        );    

    if (x == 1 ) {
        
        defParsOld();

    } else if (x == 2) {
    
        defParsOldShort();
        
    } else if (x == 3) {
    
        defParsNew();       
    
    // } else if (x == 4) {
    
    //     mathAppArr();       
    
    // } else if (x == 5) {
    
    //     allFuncsObj();       
    
    } else {
        alert('No option has been selected !');
    } 

    // =========================================================================

    // 1] Using Default paramters by old Js [Default conditional If method] 
    function defParsOld() {
        alert('Welcome to Using Default paramters by old Js [Default conditional If method] ');

        dis.innerHTML = '';

        // Defining Function :
        function myInfo(username , role , theme) {
                
            // Assignment of the default values of the parameters [by using default conditional if]: 
            username = username === username ? username  : 'Default Username' ;
            role = role === role ? role : 'Default Role' ;
            theme = theme === theme ? theme : 'Default theme' ;

            return `Hello ${username} , your role is ${role} , your theme is : ${theme} ` ;
        }

        // Printing the function return with several cases of parameters : 
            // 1) Function with all default values of all parameters :
                console.log('Function with all default values of all parameters' + myInfo());
            
                dis.innerHTML += `1] Function with all default values of all parameters as following : 
                    ${myInfo()}  
                    ==================================
                ` ;
        // ------------------------------------------------------------
            
            // 2) Function with one inserted parameter value and default 2 values of parameters :
                console.log('Function with one inserted parameter value and default 2 values of parameters ' + myInfo('Shadi'));
            
                dis.innerHTML += `2] Function with one inserted parameter value and default 2 values of parameters , as following : 
                    ${myInfo('Shadi')}  
                    ==================================
                    ` ;
            // ------------------------------------------------------------
            
            // 3) Function with two inserted parameter value and default 1 values of parameters :
                console.log('Function with two inserted parameter value and default 1 values of parameters ' + myInfo('Shadi', 'Admin'));
            
                dis.innerHTML += `2] Function with two inserted parameter value and default 1 values of parameters , as following : 
                    ${myInfo('Shadi' , 'Admin')}  
                    ==================================
                    ` ;
            // ------------------------------------------------------------
            
            // 4) Function with all inserted parameters values and no values of parameters :
                console.log('Function with all inserted parameters values and no default of parameters ' + myInfo('Shadi', 'Admin', 'red'));
            
                dis.innerHTML += `2] Function with all inserted parameters values and no default of parameters , as following : 
                    ${myInfo('Shadi' , 'Admin' , 'red')}  
                    ==================================
                    ` ;
            // ------------------------------------------------------------
            
    }
    // =============================================================

    // 2]  Using Default paramters by old Js [Shorthand Conditional If  method] :
    function defParsOldShort() {
        alert('Welcome to Test {Merging between two arrays} Syntax in the old default JS + new ES6  ');

        dis.innerHTML = '';

        // Defining Function :
        function myInfo(username , role , theme) {
                
            // Assignment of the default values of the parameters [by using shorthand conditional if] : 
            username = username || 'Default Username' ;
            role = role || 'Default Role' ;
            theme = theme || 'Default theme' ;

            return `Hello ${username} , your role is ${role} , your theme is : ${theme} ` ;
        }

        // Printing the function return with several cases of parameters : 
            // 1) Function with all default values of all parameters :
                console.log('Function with all default values of all parameters' + myInfo());
            
                dis.innerHTML += `1] Function with all default values of all parameters as following : 
                    ${myInfo()}  
                    ==================================
                ` ;
        // ------------------------------------------------------------
            
            // 2) Function with one inserted parameter value and default 2 values of parameters :
                console.log('Function with one inserted parameter value and default 2 values of parameters ' + myInfo('Shadi'));
            
                dis.innerHTML += `2] Function with one inserted parameter value and default 2 values of parameters , as following : 
                    ${myInfo('Shadi')}  
                    ==================================
                    ` ;
            // ------------------------------------------------------------
            
            // 3) Function with two inserted parameter value and default 1 values of parameters :
                console.log('Function with two inserted parameter value and default 1 values of parameters ' + myInfo('Shadi', 'Admin'));
            
                dis.innerHTML += `2] Function with two inserted parameter value and default 1 values of parameters , as following : 
                    ${myInfo('Shadi' , 'Admin')}  
                    ==================================
                    ` ;
            // ------------------------------------------------------------
            
            // 4) Function with all inserted parameters values and no values of parameters :
                console.log('Function with all inserted parameters values and no default of parameters ' + myInfo('Shadi', 'Admin', 'red'));
            
                dis.innerHTML += `2] Function with all inserted parameters values and no default of parameters , as following : 
                    ${myInfo('Shadi' , 'Admin' , 'red')}  
                    ==================================
                    ` ;
            // ------------------------------------------------------------
            
    }
    // =========================================================    

    // 3] Using Default paramters by new ES6 Js :
    function defParsNew() {
        alert(`Welcome to Test Using Default paramters by new ES6 Js `);

        dis.innerHTML = '';
        
        // Defining Function [using the new ES6 (direct assignment of parmeters)] : 
        function myInfo(username = 'Default username' , role="Default role" ,  theme="Default theme" )   {

            return `Hello ${username}, your role is ${role} , your theme is ${theme} ` ;

        }
 
        // Printing the function return with several cases of parameters : 
            // 1) Function with all default values of all parameters :
            console.log('Function with all default values of all parameters' + myInfo());
            
            dis.innerHTML += `1] Function with all default values of all parameters as following : 
                ${myInfo()}  
                ==================================
            ` ;
    // ------------------------------------------------------------
        
        // 2) Function with one inserted parameter value and default 2 values of parameters :
            console.log('Function with one inserted parameter value and default 2 values of parameters ' + myInfo('Shadi'));
        
            dis.innerHTML += `2] Function with one inserted parameter value and default 2 values of parameters , as following : 
                ${myInfo('Shadi')}  
                ==================================
                ` ;
        // ------------------------------------------------------------
        
        // 3) Function with two inserted parameter value and default 1 values of parameters :
            console.log('Function with two inserted parameter value and default 1 values of parameters ' + myInfo('Shadi', 'Admin'));
        
            dis.innerHTML += `2] Function with two inserted parameter value and default 1 values of parameters , as following : 
                ${myInfo('Shadi' , 'Admin')}  
                ==================================
                ` ;
        // ------------------------------------------------------------
        
        // 4) Function with all inserted parameters values and no values of parameters :
            console.log('Function with all inserted parameters values and no default of parameters ' + myInfo('Shadi', 'Admin', 'red'));
        
            dis.innerHTML += `2] Function with all inserted parameters values and no default of parameters , as following : 
                ${myInfo('Shadi' , 'Admin' , 'red')}  
                ==================================
                ` ;
        // ------------------------------------------------------------
    }
    // =========================================================

    
   //===========================================================
    
    function display() {
        document.getElementById("note").innerHTML = myTest + "\n\n" + "=".repeat(90) + "\n\n";
    }

}