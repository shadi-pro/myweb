// [TS] lesson =>   5 Type Annotations And Any Data Type :

// 5 Type Annotations And Any Data Type 

/* this including following methods  :
    1- using type annotation within variables definition [all Type Annotations Types  + any  ]
    2- using type annotation within functions's parameters definition [all Type Annotations Types   + any ]
*/


function display() {
    let z: any = prompt(`Choose from the next methods  :
        1- Press 1 for [testing type annotation with defining single variables ]
        2- Press 2 for [testing type annotation with defining functional paramaters variables ]    
    `);


    if (z == 1) {
        // Defining different variables of differnt datatypes [using {Type Annotation} ]:  
            let strVar: string = 'shadi' ;  
            let numVar: number = 10 ;  
            let bolVar: boolean = true ;  
            let objVar: object = {a:1 , b:2} ;  
            let anyVar: any = [1, 2 , 3] ;  
            let anyVar1 ;  

    
        // printing the defined varaibles's values & it's datatypes :
            console.log(`Defined variables by {Type Annotation } as following  : 
            the [string] variable value is :  ${strVar} , and it's datatype is : ${typeof strVar}
            the [number] variable value is :  ${numVar} , and it's datatype is : ${typeof numVar}
            the [boolean] variable value is :  ${bolVar} , and it's datatype is : ${typeof bolVar}
            the [object] variable value is :  ${objVar} , and it's datatype is : ${typeof objVar}
            the [any] variable(assigned with array) value is :  ${anyVar} , and it's datatype is : ${typeof anyVar}
            the datatype of [any] variable(with out using any Type Annotation or assinged values) is : ${typeof anyVar1}
        `) ;   

    } else if (z == 2) {
        // Defining Function with mixed paramaters datatypes + [using Type Annotation ]  :
            function add(n1: number , n2: number) {
                return n1 + n2;
            }

        // Executing the defined function [with the assigned Type Annotation] :  
            console.log( add(10 , 20) ); 
        
            // Defining Function with mixed paramaters datatypes + [using Type Annotation ]  :
            function info(n1: any , n2: any, n3: any, n4: any, n5: any) {
                return `Your information are  :
                   the first variable :  ${n1}
                   the second variable:  ${n2}
                   the third variable: ${n3}
                   the fourth variable: ${n4}
                   the fifth variable: ${n5}
                `;
            }

        // Executing the defined function [with the assigned Type Annotation] :  
            console.log( info(10 , 'shadi' , true , [1 , 2 , 3], {a:1, b:2} ) ); 

    } else {
        alert ('no choice has been choosen! ');
    }

}

 
