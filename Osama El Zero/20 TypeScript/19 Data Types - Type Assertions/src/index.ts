// [TS] lesson =>  19 Data Types - Type Assertions :

/* This lesson including following methods  :  
    1-  Using the type assertion with Interface [HtmlImageElement] ->  {by using first method}   
    2-  Using the type assertion with predfiend variables & and use one of it's method   -> {by using first method }  
    3-  Using the type assertion with Interface [HtmlInputElement] ->  {by using second method}   
    4-  Using the type assertion with predfiend variables & and use one of it's method  -> {by using second method}   
*/

function display() {
    let z: any = prompt(`Choose from the next methods  :
    1-  Using the type assertion with Interface [HtmlImageElement] ->  by using first method   
    2-  Using the type assertion with predfiend variables & and use one of it's method   -> by using first method   
    3-  Using the type assertion with Interface [HtmlInputElement] ->  by using second method   
    4-  Using the type assertion with predfiend variables & and use one of it's method  -> by using second method   
    `);
    

    if (z == 1) {
        alert(`welcome to Testing Using the type assertion with Interface [HtmlImageElement] ->  by using first method   `);
        console.log(`welcome to Testing Using the type assertion with Interface [HtmlImageElement] ->  by using first method    `);
          
        // A] Define a HTML Element , with using type assertion of [First method] : 
            let elemImg  = document.getElementById('img') as HTMLImageElement ;
            let elemInput  = document.getElementById('inpt') as HTMLInputElement ;
                 
        // B] Get some artributes of the element [image] :     
            console.log(`
                The image source is :  
                ${elemImg.src}
                The image alt is :  
                ${elemImg.alt}
                The image title is :  
                ${elemImg.title}
            `) ;

        // C] Get some artributes of the element [input] :     
            console.log(`
                The input value is :  
                ${elemInput.value}
                The input type is :  
                ${elemInput.type}
                The input placeholder is :  
                ${elemInput.placeholder}
            `) ;
              
    } else if (z == 2) {
        alert(`welcome to Testing Using the type assertion with predfiend variables & and use one of it's method   -> by using first method  `);  
        console.log(`welcome to Testing Using the type assertion with predfiend variables & and use one of it's method   -> by using first method   `);  
  
        // A] Define a normal variable with type annotation [any]  :
            let varName : any = '1000' ;
 
        // Bs] Using [Type Assertion] to change datatype of the defined variable to [string] & get one of it's new datatype method [repeat]  :
             console.log( (varName as string).repeat(3) )  ;
   
    } else if (z == 3) {
        alert(`welcome to Testing Using the type assertion with Interface [HtmlInputElement] ->  by using second method     `);  
        console.log(`welcome to Testing Using the type assertion with Interface [HtmlInputElement] ->  by using second method    `);  
  
         
        // A] Define a HTML Element , with using type assertion of Second method : 
            let elemImg  = < HTMLImageElement > document.getElementById('img') ;
            let elemInput  = <  HTMLInputElement > document.getElementById('inpt') ;
         
        // B] Get some artributes of the element [image] :     
            console.log(`
                The image source is :  
                ${elemImg.src}
                The image alt is :  
                ${elemImg.alt}
                The image title is :  
                ${elemImg.title}
            `) ;
 

        // C] Get some artributes of the element [input] :      
            console.log(`
                The input value is :  
                ${elemInput.value}
                The input type is :  
                ${elemInput.type}
                The input placeholder is :  
                ${elemInput.placeholder}
            `) ;
            
    } else if (z == 4) {
        alert(`welcome to Testing Using the type assertion with predfiend variables & and use one of it's method  -> by using second method   `);  
        console.log(`welcome to Testing Using the type assertion with predfiend variables & and use one of it's method  -> by using second method    `);  
  
        // A] Define a normal variable with type annotation [any]  :
            let varName : any = '1000' ;
 
        // B] Using [Type Assertion] to change datatype of the defined variable to [string] datatype & get one of it's new datatype method [repeat]  :
             console.log( (<string> varName).repeat(3) )  ;
    
        } else {
        alert ('no choice has been choosen! ');
    }
}
 