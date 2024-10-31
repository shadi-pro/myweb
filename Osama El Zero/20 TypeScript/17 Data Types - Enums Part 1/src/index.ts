// [TS] lesson =>  17 Data Types - Enums Part 1 :

/* This lesson including following methods  :  
    1- Using {Enum} object variable in defining set of variables within a type speed testing simple application 
*/

function display() {
    let z: any = prompt(`Choose from the next methods  :
    1- Using {Enum} object variable in defining set of variables within a type speed testing simple application 
    `);
    

    if (z == 1) {
        alert(`welcome to TestingUsing {Enum} object variable in defining set of variables within a type speed testing simple application  `);
        console.log(`welcome to Testing Using {Enum} object variable in defining set of variables within a type speed testing simple application  `);
          
        // // A] Define a several [Normal variables] of seconds :
        //      const KIDS = 15;
        //      const EASY = 10;
        //      const MEDIUM = 5;
        //      const HARD = 3;
        
        // B] Define a Enum object [of numeric values] of group of Levels time values :
            enum levels {
                kids = 15, 
                easy = 10,
                medium = 5,
                hard = 3 
            } 
         
        // C] Define a variable of level title :
        
        // Define the choosed variable :    
        let choose ;
        
        // Define the main levels titles variables :
        let lvl1 : string = 'kid';
        let lvl2 : string = 'easy';
        let lvl3 : string = 'medium';
        let lvl4 : string = 'hard';

        // Choose your level [using {Enum} properties values ] :
            choose = prompt(`Choose your level :
                1- press (1) for ${lvl1} level for ${levels.kids}
                2- press (2) for ${lvl2} level for ${levels.easy}
                3- press (3) for ${lvl3} level for ${levels.medium}
                4- press (4) for ${lvl4} level for ${levels.hard}
            `);

        // Print Information according to the Choosed level : 
            if (choose === '1' )  {
 
                console.log(`Your level Title  is : ${lvl1}
                level speed is : ${levels.kids} `);
                
            } else if (choose === '2' )  { 
                 
                console.log(`Your level Title is : ${lvl2}
                level speed is : ${levels.easy} `);

            } else if (choose === '3' )  { 
                 
                console.log(`Your level Title is : ${lvl3}
                level speed is : ${levels.medium} `);

            } else if (choose === '4' )  { 
                 
                console.log(`Your level Title is : ${lvl4}
                level speed is : ${levels.hard} `);

            } else {
                console.log(`You choosed nothing`) ;
            }
  
             
    // } else if (z == 2) {
    //     alert(`welcome to Testing Define a {never function}  with (2) methods [ by default function  |  using never keyword ] `);  
    //     console.log(`welcome to Testing Define a {never function}  with (2) methods [ by default function  |  using never keyword ]  `);  
  
          
    //     // A] Define a [Never function 1] using [Default Never function type] :
    //         // let funcNeverDef = (par:string) => {
    //         //      throw new Error(par) ;
    //         // };             
    //         // *] Calling and Printing => [Never function 1] using [Default Never function type]'s Return value : 
    //             // console.log(` The Defined [Never function 1]'s Return's value -> using [Default Never function type] : 
    //             // ${funcNeverDef('shadi') }
    //             // [Never function 1]'s Structure -> using [Default Never function type] :
    //             // ${funcNeverDef}
    //             // `) ;
                
                
    //     // B] Define a [Never function 2] using [Never Keyword function] -> {with using (allowUnreachableCode:true) } :
    //         let funcNeverKeyword = (par:string) : never => {
    //             // Use an Infinitive Code [to have non end point] which is applicable with Never Function : 
    //             while (true) {
    //                 console.log(`${par}`);
    //             }
    //             console.log('test');
    //         };             
    //         // *] Calling and Printing => [Never function 2] using [Never Keyword function]'s Return value : 
    //         console.log(funcNeverKeyword('shadi'));
    //         console.log('test');
                
    //         console.log(` The Defined [Never function 2]'s Return's value -> using [Never Keyword function] : 
    //             ${funcNeverKeyword('shadi') }
    //             [Never function 2]'s Structure -> using [Never Keyword function] :
    //             ${funcNeverKeyword}
    //             `) ;
    
        } else {
        alert ('no choice has been choosen! ');
    }
}
 