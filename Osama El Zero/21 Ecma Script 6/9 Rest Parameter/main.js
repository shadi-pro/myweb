
// 8 Default Parameter:
/* Main lessons functions :
   1- Using Rest paramters in function [with usage of only rest paramter operator] 
   2- Using Rest paramters in fucnition [with usage of both Basic parmetners + Rest paramter operator] 
   3- Using Rest parameters in simple calculation function of [summition]    
   4- Using Rest parameters in  advanced calculation function of [Accumulative summition] with usage of [rest paremters + for looping on rest params array ]    
 */
// ---------------------------------------------------------------------

// 8 Default Parameter :

function myTest() {
    'use strict' ;
    alert('Welcome to 9 Rest parameter ') ;
    
    var dis = document.getElementById('note');
     
      
      var x = prompt(
        ` Please choose one of functions from below options :
        1- Using Rest paramters in function [with usage of only rest paramter operator] 
        2- Using Rest paramters in fucnition [with usage of both Basic parmetners + Rest paramter operator] 
        3- Using Rest parameters in simple calculation function of [summition]    
        4- Using Rest parameters in  advanced calculation function of [Accumulative summition] with usage of [rest paremters + for looping on rest params array ]    
        `);    

    if (x == 1 ) {
        
        restFunc();

    } else if (x == 2) {
    
        basRestFunc();
        
    } else if (x == 3) {
    
        simCalc();       
    
    } else if (x == 4) {
    
        advCalc();       
    
    // } else if (x == 5) {
    
    //     allFuncsObj();       
    
    } else {
        alert('No option has been selected !');
    } 

    // =========================================================================

    // 1] Using Rest paramters in function [with usage of only rest paramter operator]
    function restFunc() {
        alert('Welcome to Using Rest paramters in function [with usage of only rest paramter operator] ');

        dis.innerHTML = '';

        // Defining Function :
        function myInfo(...myParams) {
                
            // Printing the array of inserted params :  
            
            return `Your inserted params are :  ${myParams} ` ;
        }

        // Executing the function return with several cases of parameters count : 
            // 1) Function with all values of Rest parameters array [one parameter value only ] :
                console.log('Function with all values of all Rest parameters array [one parameter value only ] ' + myInfo(1));
            
                dis.innerHTML += `1] Function with all values of all Rest parameters array [one parameter value only ] as following : 
                    ${myInfo(1)}  
                    ==================================
                ` ;
        // ------------------------------------------------------------
            
            // 2) Function with all values of Rest parameters array [two  parameters values ] :
                console.log(' Function with all values of all Rest parameters array [two parameters values] as following ' + myInfo(1 , 2));
            
                dis.innerHTML += `2]  Function with all values of all Rest parameters array [two parameters values ] as following : 
                    ${myInfo(1 , 2)}  
                    ==================================
                ` ;
        // ------------------------------------------------------------
            
            // 3) Function with all values of Rest parameters array [Three parameters values ] :
                console.log('Function with all values of Rest parameters array [Three parameters values ] : ' + '<br>' + myInfo(1 , 2  , 'shadi'));
            
                dis.innerHTML += `3] Function with all inserted values of Rest parameters array [three parameters values] as following : 
                    ${myInfo(1 , 2 , 'shadi')}  
                    ==================================
                ` ;
        // ------------------------------------------------------------
            
            
    }
    // =============================================================

    // 2]  Using Using Rest paramters in fucnition [with usage of both Basic parametners + Rest paramter operator]  :
    function basRestFunc() {
        alert('Welcome to Using Rest paramters in fucnition [with usage of both Basic parametners + Rest paramter operator]   ');

        dis.innerHTML = '';
   
        // Defining Function :
        function myInfo(a = 'First Def Param', b = 'Second Def Param' , c ="Third Def Param", ...myParams) {
                
            // Printing the array of inserted params :  
            console.log('First Inserted paramter value is ' , a);
            console.log('Second Inserted paramter value is ' , b);
            console.log('Third Inserted paramter value is ' , c);
            console.log('Fourth Inserted Rest paramters values are ' , myParams);
            
            return ` Displaying Params done` ;
        }

        // Executing the function return with several cases of basic parameters and Rest Paramters count : 
            // 1) Function with all values of Rest parameters array [one First basic parameter value only ] :
                console.log('Function with all values of Basic parameters [one First basic parameter value only ]  ' + myInfo(1));
            
                dis.innerHTML += `1]  Function with all values of Basic parameters [one First basic parameter value only ] as following : 
                    ${myInfo(1)}  
                    ==================================
                ` ;
        // ------------------------------------------------------------
            
            // 2) Function with all values of Rest parameters array [two First + Second parameters values ] :
                console.log(' Function with all values of all Basic parameters  [two First + Second parameters values] as following ' + myInfo(1 , 2));
            
                dis.innerHTML += `2]  Function with all values of all Rest parameters array [two First + Second parameters values ] as following : 
                    ${myInfo(1 , 2)}  
                    ==================================
                ` ;
        // ------------------------------------------------------------
            
            // 3) Function with all values of Rest parameters array [Three parameters values ] :
                console.log('Function with all values of Basic parameters array [Three First + Second + Third parameters values ] : ' + '<br>' + myInfo(1 , 2  , 'shadi'));
            
                dis.innerHTML += `3] Function with all values of Basic parameters array [Three First + Second + Third parameters values ] , as following : 
                    ${myInfo(1 , 2 , 'shadi')}  
                    ==================================
                ` ;
        // ------------------------------------------------------------
      
            // 4) Function with all values of Basic + Rest parameters array [Seven parameters values (3 + 4) ] :
                console.log('Function with all values of Basic + Rest  parameters array [Seven parameters values (3 + 4) ]  : ' + '<br>' + myInfo(1 , 2  , 'shadi'));
            
                dis.innerHTML += `3] Function with all values of Basic + Rest  parameters array [Seven parameters values (3 + 4) ] , as following : 
                    ${myInfo(1 , 2 , 'shadi' , 4 , 5 , 100 , 500)}  =
                    ==================================
                ` ;
        // ------------------------------------------------------------
      
            
    }
    // =========================================================    

    // 3] Using Rest parameters in simple calculation function of [summition] :
    function simCalc() {
        alert(`Welcome to Using Basic parameters + Rest parameters in simple calculation function of [summition]    `);

        dis.innerHTML = '';  
        
        // Defining Function :
        function myInfo(a = "First Def Value" , b = "Second Def Value" , c = "Third Def Value" , ...myParams) {
                
            // Adding calculation equation of the Basic parameters + Rest parameters array of inserted function :  
            return a + b + c + myParams  ;
        }

        // Executing the function return with several cases of basic parameters and Rest Paramters count : 
            // 1) Function with all values of Basic parameters  [one First basic parameter value only ] :
                console.log('Summition Result of Function with  Basic parameters only = ' + myInfo(1 , 2 , 3));
            
                dis.innerHTML += `1]  Summition Result of Function with  Basic parameters only =  : 
                    ${myInfo(1 , 2 , 3 )}  
                    ==================================
                ` ;
        // ------------------------------------------------------------
            
            // 2) Function with all values of Basic parameters + Rest parameters array  :
                console.log('Summition Result of Function with  Basic parameters + Rest parameters array = ' + myInfo(1 , 2 , 3, 100 , 500 , 7));
            
                dis.innerHTML += `1]  Summition Result of Function with Basic parameters + Rest parameters array =  : 
                    ${myInfo(1 , 2 , 3 , 100 , 500 , 7)}  
                    ==================================
                ` ;
        // ------------------------------------------------------------
            
    }
    // =========================================================

    
    // 4] Using Rest parameters in  advanced calculation function of [Accumulative summition] with usage of [rest paremters + for looping on rest params array ]  : 
    function advCalc() {
        alert(`Welcome to Using Rest parameters in advanced calculation function of [Accumulative summition] with usage of [Rest paremters + for looping on rest params array ]   `);

        dis.innerHTML = '';
        
        // Defining Function with Rest Parameters array:
        function myInfo( ...myParams ) {
                

            // Defining varaible of starting value of accumulative summition , and to hold the final result of accumulative summition value :   
            let i = 0 ; 


            // Looping inside the array of rest paramters array (by defining another varialbe) & add each inserted parameter value into it's previous parameter value : 
            for (let param of myParams) {
                i += param ;
            }
            
            // => Shorthand of the upper looping statement :
            // for (let param of myParams) i += param ;
            
            // Displaying the final result of accumulative summition function  :  
            return  ` Your final result =  ${i} `  ;
        }

        // Executing the function return with several cases of Rest parameters of random count : 
            // 1) Accumulative Summition Result of Function with Rest parameters of 3 numbers(1, 2 , 3)  :
                console.log('Accumulative Summition Result of Function with Rest parameters of 3 numbers(1, 2 , 3)  = ' 
                + myInfo(1 , 2 , 3));
            
                dis.innerHTML += `1] Accumulative Summition Result of Function with Rest parameters of 3 numbers(1, 2 , 3)  = 
                    ${myInfo(1 , 2 , 3 )}  
                    ==================================
                ` ;
         // ------------------------------------------------------------
            // 2) Accumulative Summition Result of Function with Rest parameters of 5 numbers(100, 200 , 300 , 500 , 1000)  :
                console.log('Accumulative Summition Result of Function with Rest parameters of 5 numbers(100, 200 , 300 , 500 , 1000) = ' 
                + myInfo(100 , 200 , 300 , 500 , 1000));
            
                dis.innerHTML += `2] Accumulative Summition Result of Function with Rest parameters of 5 numbers(100, 200 , 300 , 500 , 1000) = 
                    ${myInfo(100 , 200 , 300 , 500 , 1000)}  
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