// [TS] lesson =>  9 Function Optional and Default Parameters :

/* This lesson including following methods  :  
    1- Use the {?} keyword to assign some of the Function's parameters as [Optional Functional] Paramaters with in the function Define    
    2- Use the [Default value] to assign some function's paramaters with + [default keyword]
    3- Use both  of [Default value] & [Optional parameter] in a function + [default keyword]
*/

function display() {
    let z: any = prompt(`Choose from the next methods  :
    1- Use the {?} keyword to assign some of the Function's parameters as [Optional Functional] Paramaters with in the function Define    
    2- Use the [Default value] to assign some function's paramaters with
    3- Use both  of [Default value] & [Optional parameter] in a function  
    `);


    if (z == 1) {
        alert(`welcome to Testing  Use the {?} keyword to assign some of the Function's parameters as Optional Functional Paramaters with in the function Define `);
        console.log(`welcome to Testing  Use the {?} keyword to assign some of the Function's parameters as Optional Functional Paramaters with in the function Define  `);
          
        
        // A] {First case} => Define the main function : only Last(Third) paramerter is [optional] :
        function showInfo1(name: string , age: number , salary?: number) {
            return ` ${name} - ${age}  -  ${salary}   `
        }
        // printing the function syntax of {First case} :
        console.log(` Function definition => [First case] =>  only Last(Third) paramerter is [optional] (function syntax) :
            ${showInfo1}
        `);


        /* 1) Calling the defined function , as following : 
            First => Will be called with calling assigned value
            Second => Will be  called with calling assigned value
            Third[optional parameter] -> Will called with calling assigned value  
        */
        
        console.log( ` [First option] => Calling the defined function with [all parameters with assinged values] (result) as following :  
            ${showInfo1( 'shadi' , 30  , 9000 )} 
        ` );


        /* 2) Calling the defined function , as following : 
            First => Will be called with calling assigned value
            Second => Will be  called with calling assigned value
            Third[optional parameter] -> Will not be called  
        */    
        console.log( ` [Second option] => Calling the defined function [first and seconed paremeters called by assinged values + Third parameter will not being called] (result) as following: 
        ${showInfo1('shadi' , 30 )}
        `
        );
    // --------------------------------------------
    
    // {Second case} => Define the main function : Second & Last(Third) paramerters is [optional] :
        function showInfo2(name: string , age?: number , salary?: number) {
            return ` ${name} - ${age}  -  ${salary}   `
        }
        // printing the function syntax of {Second case} :
        console.log(` Function definition => [Second case] =>  Second & Last(Third) paramerters is [optional] (function syntax) :
            ${showInfo1}
        `);

        /* 1) Calling the defined function , as following : 
            First => Will be called with calling assigned value
            Second => Will NOT be called with calling assigned value
            Third[optional parameter] -> Will NOT be called  
        */
        console.log( ` [First option] => Calling the defined function with [Calling only First parameter  with assinged values  , second and third will not be called] (result) as following :  
            ${showInfo2( 'shadi' )} 
        ` );


        /* 2) Calling the defined function , as following : 
            First => Will be called with calling assigned value
            Second => Will be called with calling assigned value
            Third[optional parameter] -> Will called with calling assigned value  
        */
        console.log( ` [Second option] => Calling the defined function with [Calling All parameters with assinged values ] (result) as following :  
            ${showInfo2( 'shadi' , 30 , 9000)} 
        ` );
    //  ----------------------------------
         

        // Third case => Define the main function : All paramerters are [optional] :
        function showInfo3(name?: string , age?: number , salary?: number) {
            return ` ${name} - ${age}  -  ${salary}   `
        }

        /* 1) Calling the defined function , as following : 
            First => Will be called with calling assigned value
            Second => Will NOT be called with calling assigned value
            Third[optional parameter] -> Will NOT be called  
        */
        console.log(` [First option] => Calling the defined function with [Calling only First parameter with assinged values, second and third will not be called] (result) as following :
            ${showInfo3('shadi' )}
        `  );
 
        /* 2) Calling the defined function , as following : 
            First => Will be called with calling assigned value
            Second => Will be called with calling assigned value
            Third[optional parameter] -> Will called with calling assigned value  
        */
        console.log(` [Second option] => Calling the defined function with [Calling All parameters with assinged values ] (result) as following :
            ${showInfo3('shadi' ,  30 , 9000 )}
        `);
 
    } else if (z == 2) {
        alert(`welcome to Testing Use the [Default value] to assign some function's paramaters with `);                
 
        // A] {First case} => Define the main function : All paramerters are have [Default values] :
        function showInfo (name: string = 'defName' , age: number=30 , salary: number=9000 ) {
            return `${name} - ${age} - ${salary}  ` ;
        }
        
       // printing the function syntax of {First case} :
        console.log(` Function definition => [First case] =>  All paramerters are have [Default values] (function Sntax) :
            ${showInfo}
        `);

         
        // 1) Calling the function [with NO assigned values of the parameters] : 
        console.log(` [First option] => Calling the defined function with [with NO assigned values of the parameters] (result) as following :
            ${showInfo( )}
        ` );
 
  
        // 2) Calling the function [First parameter only with assigned value ] : 
        console.log(` [Second option] => Calling the defined function with [First parameter only with assigned value ] (result) as following :
            ${showInfo( 'shadi')}
        ` );
   
  
        // 3) Calling the function [All parameters with assigned values ] : 
        console.log(` [Third option] => Calling the defined function with [First parameter only with assigned value ] (result) as following :
            ${showInfo( 'shadi' , )}
        ` );
   
        
        // 4) Calling the function [with using mix of parameter's Default Values {First parameter} & parameter's Assinged Values & 'undefined' keyword {Second , Third parameter} ]  :      
        console.log(` [Fourth option] => with using mix of parameter's Default Values {First parameter} & parameter's Assinged Values & 'undefined' keyword {Second , Third parameter} ] (result) as following  :
            ${showInfo( 'shadi', undefined , undefined)}
        ` );

    } else if (z == 3) {
        alert(`welcome to Testing Use both of [Default value] & [Optional parameter] in a function`) ;
        
        // A] {First case} => Define the main function : All paramerters are have [Default values]  & [last pamareter is optinoal ] :
        function showInfo (name: string = 'defName' , age: number=30 , salary?: number ) {
            return `${name} - ${age} - ${salary} ` ;
        }
        
        // Printing the function syntax of {First case} :
        console.log(` Function definition => [First case] =>  All parameters are have [Default values] (function Sntax) :
            ${showInfo}
        `);
 
        // 1) Calling the function [with NO assigned values of the parameters] : 
        console.log(` [First option] => Calling the defined function with [with NO assigned values of the parameters] (result) as following :
            ${showInfo( )}
        ` );
 
  
        // 2) Calling the function [First parameter only with assigned value ] : 
        console.log(` [Second option] => Calling the defined function with [First parameter only with assigned value ] (result) as following :
            ${showInfo( 'shadi')}
        ` );
   

        // 3) Calling the function [All parameters with assigned values ] : 
        console.log(` [Third option] => Calling the defined function with [All parameters with assigned values ] (result) as following :
            ${showInfo( 'shadi' , 30 , 9000 )}
        ` );
   
        
        // 4) Calling the function [with using mix of parameter's [Default Values] {First parameter} & parameter's Assinged Values & 'undefined' keyword {Second parameter} & skip the {Third paramter } ] : 
        console.log(` [Fourth option] => with using mix of parameter's Default Values {First parameter} & parameter's Assinged Values & 'undefined' keyword {Second parameter} , and skip the third parameter] (result) as following  :
            ${showInfo( 'shadi', undefined)}
        ` );
 
 
     } else {
        alert ('no choice has been choosen! ');
    }

}

 
