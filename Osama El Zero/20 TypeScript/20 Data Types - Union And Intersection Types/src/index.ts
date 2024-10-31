// [TS] lesson =>  20 Data Types - Union And Intersection Types :

/* This lesson including following methods  :  
    1-  Define several variables & function =>  Using the [Union Datatype] method
    2-  Define several Aliase objects => Using multiple Types object by the [Intersection Datatype] method
*/

function display() {
    let z: any = prompt(`Choose from the next methods  :
    1-  Define several variables Using the [Union Datatype] method
    2-  Define several Aliase objects using multiple Types object by the [Intersection Datatype] method
    `);
    

    if (z == 1) {
        alert(`welcome to Test Define several variables Using the [Union Datatype] method   `);
        console.log(`welcome to Test Define several variables Using the [Union Datatype] method    `);
          
        // A] Define  several variables using [Union datatypes] method {|} : 
            let var1 : string | number  =  'Shadi';
            let var2 : number | boolean =   100 ;
            let var3 : string | number | boolean  =  true ;
             
             
        // B] Define several type aliase variable with multiple datatype using [Union datatypes] method {|}  :
            type strNum = string | number ;  
            type numStr = string | number ;  
            type strBol = string | boolean ;  


        // C] Define a several function with parameter with data notation using [union datatypes] method : 
            function funcName1(par: strNum ) {
                console.log (`
                    The first function parameter ${par} 
                `) ;
            }

            function funcName2(par: numStr ) {
                console.log (`
                    The second function parameter ${par} 
                `) ;
            }

            function funcName3(par: strBol ) { 
                console.log (`
                    The third function parameter ${par} 
                `) ;
            }

        // D] Printing the defind variables with data Annotation using [Union datatypes] method {|} :
            console.log(` 
                The first variable is ${var1}
                The second variable is ${var2}
                The third variable is ${var3}
            `);
                    
                
        // D] Printing and calling the defind function with data Annotation using [Union datatypes] method {|} :
            console.log(`  
                ${funcName1('shadi')}
                ${funcName2(100)}
                ${funcName3(true)}
            `);

                
    } else if (z == 2) {
        alert(`welcome to Test Define several Aliase objects => Using multiple Types object by the [Intersection Datatype] method  `);  
        console.log(`welcome to Test Define several Aliase objects => Using multiple Types object by the [Intersection Datatype] method   `);  
  
        // A] Define several multiple types Aliases objects : 
           // Define the first Type Aliase object [simple object]  : 
            type A  = {
                one : string ,   
                two : number ,
                three : boolean 
           }
        
           // Define the Second Aliase object [simple object]  : 
           type B  = {
                four : string ,   
                five : number  
           }

            // Define the Third Aliase object [intersepted object] with another defined object : 
           type C  =  B & { 
               six: boolean 
            }
            
            // Define the Fourth Aliase object [intersepted object] with another defined object :    
             type D = C & A ;   


        // B] Define several functions with defined aliase types objects  :
            // Define a function with parameter of predefined [First Aliase type object ] :
            function funcName1(par : A ) {
                console.log(`
                    Parameter with first datatype of First Type Aliase object is ${par.one}            
                    parameter with second datatype of First Type Aliase object is ${par.two}            
                    parameter with third datatype of First Type Aliase object is ${par.three}                    
                `);
            }


           // Define a function with parameter of predefined [Second Aliase type object]  :
            function funcName2(par : B ) {
                console.log(`
                    Parameter with first datatype of Second Type Aliase object is ${par.four}            
                    parameter with second datatype of Second Type Aliase object is ${par.five}            
                `);
            }

            // Define a function with parameter of predefined [Third Aliase type object ] :
            function funcName3(par : C ) {
                console.log(`
                    Parameter with first datatype of Second Type Aliase object is ${par.four}            
                    parameter with second datatype of Second Type Aliase object is ${par.five}           
                    parameter with first datatype of the third type Aliase object is ${par.six}            
                `);
            }

            // Define a function with parameter of predefined [Fourth Aliase type object]  :
            function funcName4(par : D ) {
                console.log(`
                    Parameter with first datatype of intersepted First Type Aliase object is ${par.one}            
                    parameter with second datatype of intersepted  First Type Aliase object is ${par.two}            
                    parameter with third datatype of intersepted  First Type Aliase object is ${par.three}          
                    Parameter with first datatype of intersepted  Second Type Aliase object is ${par.four}            
                    parameter with second datatype of intersepted  Ssecond Type Aliase object is ${par.five}           
                    parameter with first datatype of the intersepted  third type Aliase object is ${par.six}            
                `);
            }
 
        // C] Printing and calling defined functions :
            funcName1({one : 'shadi' , two : 500  , three :true });
            funcName2({four: 'sayed' , five : 600 });
            funcName3({four: 'ali' , five : 600  , six: false });
            funcName4({one : 'ahmed' , two : 1000  , three : false  , four: 'ahmed' , five : 2000  , six: true });



    } else {
        console.log('No valid choice!') ;
    }
}
 
