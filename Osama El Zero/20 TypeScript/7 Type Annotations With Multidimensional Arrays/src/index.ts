// [TS] lesson =>   7 Type Annotations With Multidimensional Arrays :

// 7 Type Annotations With Multidimensional Arrays 

/* this including following methods  :  
    1- using array type annotation within array definition by using [ Multiple array type annotation ]
*/


function display() {
    let z: any = prompt(`Choose from the next methods  :
    1- using array type annotation within Multidimensional Arrays efinition by using [ Multiple array type annotation ]
    `);


    if (z == 1) {
        alert('welcome to [ using array type annotation within Multidimensional Arrays definition by using [ Multiple array type annotation] ')
                
        // 1] Defining Multidimensional Arrays with [(1) Inner child arrays inside the main array  ]  :  
            let mulDimArr1: (string | number | boolean | string[])[] = [ 'shadi' , 12 , true , false , 'sayed' , ['A' , 'B' , 'C'] ] ;  


        // Looping inside the defined Multidimensional Arrays , and print it's elements :

        for(let i =0 ; i< mulDimArr1.length ; i++ ) {
            console.log(mulDimArr1[i]);
        }
        // ------------------------------------
        
        
        // 2] Defining Multidimensional Arrays with [(2) Inner children arrays inside the main array  ]  :  
            let mulDimArr2: (string | number | boolean | string[] | number[])[] = [ 'shadi' , 12 , true , false , 'sayed' , ['A' , 'B' , 'C'] , [2 , 34 ,54] ] ;  

        for(let i =0 ; i< mulDimArr2.length ; i++ ) {
            console.log(mulDimArr2[i]);
        }
       // ------------------------------------- 
             
        // 3] Defining Multidimensional Arrays with [(3) Inner children arrays inside the main array  ]  :  
            let mulDimArr3: (string | number | boolean | string[] | number[] | boolean[] )[] = [ 'shadi' , 12 , true , false , 'sayed' , ['A' , 'B' , 'C'] , [2 , 34 ,54] , [false , true] ] ;  

        for(let i =0 ; i< mulDimArr3.length ; i++ ) {
            console.log(mulDimArr3[i]);
        }
             

    } else {
        alert ('no choice has been choosen! ');
    }

}

 
