// [TS] lesson =>  15 Data Types - Tuple :

/* This lesson including following methods  :  
    1-  Define a {void function}  with (3) methods [empty return | without return | void keyword ]
    2-  Define a {never function}  with (2) methods [ by default function  |  using never keyword ]
*/

function display() {
    let z: any = prompt(`Choose from the next methods  :
    1-  Define a {void function}  with (3) methods [empty return | without return | void keyword ]
    2-  Define a {never function}  with (2) methods [ by default function  |  using never keyword ]
    `);
    

    if (z == 1) {
        alert(`welcome to Testing Define a {void function}  with (3) methods [empty return | without return | void keyword ]  `);
        console.log(`welcome to Testing Define a {void function}  with (3) methods [empty return | without return | void keyword ] `);
          
        // A] Define a [Normal function] :
            let func = (par:string) => {
                console.log(par);
                return par ;
            };             
            // *] Calling and Printing [Normal function]'s Return's value : 
            console.log(` the Defined [Normal function]'s Ruturn's value : 
            ${func('shadi') }
            ${func}
            `) ;

 
        // B] Define a [Void function 1] using [Empty return] :
            let funcVoidEmptReturn = (par:string) => {
                console.log(` The [Void function] using [Empty Return] return value is : ${par} `);
                return;
            };             
            // *] Calling and Printing => [Void function 1] using [Empty return]'s Return value : 
                console.log(` The Defined [Void function 1]'s Return's value -> using [Empty return] : 
                 ${funcVoidEmptReturn('shadi') }
                 [Void function 1]'s Structure -> using [Empty return] :
                 ${funcVoidEmptReturn}
                 `) ;
                 
                 
        // C] Define a [Void function 2] using [without return] :
            let funcVoidWithoutReturn = (par:string) => {
                console.log(`The [Void function] using [without return] value is : ${par}`);
            };             
            // *] Calling and Printing => [Void function 2] using [without return]'s Return value : 
                console.log(` The Defined [Void function 2]'s Return's value -> using [without return] : 
                 ${funcVoidWithoutReturn('shadi') }
                 [Void function 2]'s Structure -> using [without return] :
                 ${funcVoidWithoutReturn}
                `) ;
            

        // D] Define a [Void function 3] using [Void keyword] :
            let funcVoidKeyword = (par:string) :void => {
                console.log(`The [Void function] using [Void keyword] value is : ${par}`); 
            }             
            // *] Calling and Printing => [Void function 3] using [Void keyword]'s Return value : 
                console.log(` The Defined [Void function 3]'s Return's value -> using [Void keyword]: 
                ${funcVoidKeyword('shadi') }
                [Void function 3]'s Structure -> using [Void keyword] :
                ${funcVoidKeyword}
                `) ;
             
            
    } else if (z == 2) {
        alert(`welcome to Testing Define a {never function}  with (2) methods [ by default function  |  using never keyword ] `);  
        console.log(`welcome to Testing Define a {never function}  with (2) methods [ by default function  |  using never keyword ]  `);  
  
          
        // A] Define a [Never function 1] using [Default Never function type] :
            // let funcNeverDef = (par:string) => {
            //      throw new Error(par) ;
            // };             
            // *] Calling and Printing => [Never function 1] using [Default Never function type]'s Return value : 
                // console.log(` The Defined [Never function 1]'s Return's value -> using [Default Never function type] : 
                // ${funcNeverDef('shadi') }
                // [Never function 1]'s Structure -> using [Default Never function type] :
                // ${funcNeverDef}
                // `) ;
                
                
        // B] Define a [Never function 2] using [Never Keyword function] -> {with using (allowUnreachableCode:true) } :
            let funcNeverKeyword = (par:string) : never => {
                // Use an Infinitive Code [to have non end point] which is applicable with Never Function : 
                while (true) {
                    console.log(`${par}`);
                }
                console.log('test');
            };             
            // *] Calling and Printing => [Never function 2] using [Never Keyword function]'s Return value : 
            console.log(funcNeverKeyword('shadi'));
            console.log('test');
                
            console.log(` The Defined [Never function 2]'s Return's value -> using [Never Keyword function] : 
                ${funcNeverKeyword('shadi') }
                [Never function 2]'s Structure -> using [Never Keyword function] :
                ${funcNeverKeyword}
                `) ;
    
        } else {
        alert ('no choice has been choosen! ');
    }
}
 