// [TS] lesson =>  18 Data Types - Enums Part 2 :

/* This lesson including following methods  :  
    1- Using {Enum} object variable with [defining a property refering from another enum's property]   
    2- Using {Enum} object variable with [defining a property refering from the same enum's property into another property]   
    3- Using {Enum} object variable with [defining a property refering from a defeined function  ]   
    4- Using {Enum} object variable with [defining the first property in the enum by using default value  ]   
*/

function display() {
    let z: any = prompt(`Choose from the next methods  :
    1- Using {Enum} object variable with [defining a property refering from another enum's property]   
    2- Using {Enum} object variable with [defining a property refering from the same enum's property into another property]   
    3- Using {Enum} object variable with [defining a property refering from a defeined function  ]   
    4- Using {Enum} object variable with [defining the first property in the enum by using default value  ]   
    `);
    

    if (z == 1) {
        alert(`welcome to Testing Using {Enum} object variable with [defining a property refering from another enum's property]   `);
        console.log(`welcome to Testing Using {Enum} object variable with [defining a property refering from another enum's property] `);
          
        // A] Define a basic Enums  :
            // First basic enum :
            enum kids {
                five = 20 , 
                seven = 15 ,
                ten = 10 
            } 
            
            // Second basic enum :
            enum guys {
                eleven = 9 , 
                fourteen = 8 ,
                twinty = 7 
            } 
            
        // B] Define a Enum object's properties [of numeric values] with using refering from {another Enum(s)} :
            enum levels {
                kid =  kids.five, 
                easy = guys.eleven + 10,
                medium = guys.fourteen,
                hard = guys.twinty 
            } 
         
         
        // C] Define the main levels titles variables :
            let lvl1 : string = 'kid';
            let lvl2 : string = 'easy';
            let lvl3 : string = 'medium';
            let lvl4 : string = 'hard';

        // D] Define the choosed variable as Choose your level [using {Enum} refering properties values ] :
            let choose = prompt(`Choose your level :
                1- press (1) for ${lvl1} level for ${levels.kid}
                2- press (2) for ${lvl2} level for ${levels.easy}
                3- press (3) for ${lvl3} level for ${levels.medium}
                4- press (4) for ${lvl4} level for ${levels.hard}
            `);

        // E] Print Information according to the Choosed level : 
            if (choose === '1' )  {
 
                console.log(`Your level Title  is : ${lvl1}
                level speed is : ${levels.kid} `);
                
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
       
    } else if (z == 2) {
        alert(`welcome to Testing Using {Enum} object variable with [defining a property refering from the same enum's property into another property]    `);  
        console.log(`welcome to Testing Using {Enum} object variable with [defining a property refering from the same enum's property into another property]   `);  
  
        // A] Define a basic Enums  :
            // First basic enum :
            enum kids {
                five = 20 , 
                seven = 15 ,
                ten = 10 
            } 
            
        // Second basic enum :
            enum guys {
                eleven = 9 , 
                fourteen = 8 ,
                twinty = 7 
            } 
            
        // B] Define a Enum object's properties [of numeric values] with using refering from {another Enum(s)}  & {same Enum properties values and calcutalted}  :
            enum levels {
                kid =  kids.five, 
                easy = guys.eleven ,
                medium = easy - 3  ,
                hard = medium - 3 
            } 
         
         
        // C] Define the main levels titles variables :
            let lvl1 : string = 'kid';
            let lvl2 : string = 'easy';
            let lvl3 : string = 'medium';
            let lvl4 : string = 'hard';

        // D] Define the choosed variable as Choose your level [using {Enum} refering properties values ] :
            let choose = prompt(`Choose your level :
                1- press (1) for ${lvl1} level for ${levels.kid}
                2- press (2) for ${lvl2} level for ${levels.easy}
                3- press (3) for ${lvl3} level for ${levels.medium}
                4- press (4) for ${lvl4} level for ${levels.hard}
            `);

        // E] Print Information according to the Choosed level : 
            if (choose === '1' )  {
 
                console.log(`Your level Title  is : ${lvl1}
                level speed is : ${levels.kid} `);
                
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
   
    } else if (z == 3) {
        alert(`welcome to Testing Using {Enum} object variable with [defining a property refering from a defeined function  ] `);  
        console.log(`welcome to Testing Using {Enum} object variable with [defining a property refering from a defeined function  ]  `);  
  
        // A] Define a basic Enums  :
            // First basic function :
                function baisc1() : number {
                    return 10 ;
                } 
            
            // Second basic function :
                function baisc2() : number {
                    return 7 ;
                } 
         
            // Third basic function :
                function baisc3() : number {
                    return 5 ;
                } 
            
             
        // B] Define a Enum object's properties [of numeric values] with using refering from {same calcluated Enum(s)} & {defined function }  :
            enum levels {
                kid =   baisc1() , 
                easy = baisc2() + 100 ,
                medium = baisc3()  ,
                hard = medium - 3 
            } 
         
         
        // C] Define the main levels titles variables :
            let lvl1 : string = 'kid';
            let lvl2 : string = 'easy';
            let lvl3 : string = 'medium';
            let lvl4 : string = 'hard';

        // D] Define the choosed variable as Choose your level [using {Enum} refering properties values ] :
            let choose = prompt(`Choose your level :
                1- press (1) for ${lvl1} level for ${levels.kid}
                2- press (2) for ${lvl2} level for ${levels.easy}
                3- press (3) for ${lvl3} level for ${levels.medium}
                4- press (4) for ${lvl4} level for ${levels.hard}
            `);

        // E] Print Information according to the Choosed level : 
            if (choose === '1' )  {
 
                console.log(`Your level Title  is : ${lvl1}
                level speed is : ${levels.kid} `);
                
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
   
    } else if (z == 4) {
        alert(`welcome to Testing Using {Enum} object variable with [defining the first property in the enum by using default value  ]  `);  
        console.log(`welcome to Testing Using {Enum} object variable with [defining the first property in the enum by using default value  ]  `);  
  
        // A] Define a basic Enums and functions  :
            // Define basic Function :
                enum bNum {
                    ten = 15,
                    fourteen = 10,
                    twinty = 7 
                }
         
            // Define a  basic  Enum :
                function baisc1() : number {
                    return 10 ;
                } 
        
              
        /* B] Define a Enum object's properties [of numeric values] with using following :
            1- default value of the first property  
            2- refering from {another Enum(s)}  
            3- refering from {defined function}  
            4- refering from {another Enum(s)} & {defined function}  
        */   
            enum levels {
                insane,
                kid =   bNum.ten , 
                easy = baisc1() ,
                medium = easy - 3 ,
                hard = bNum.ten - 3 
            } 
         
         
        // C] Define main Enum [string basic ] of levels titles  :
            enum titles {
                 lvl0  = 'insane' ,
                 lvl1  = 'kid' ,
                 lvl2 = 'easy' ,
                 lvl3 = 'medium' ,
                 lvl4   = 'hard' 
            }

        // D] Define the choosed variable as Choose your level [using {Enum} refering properties values (from another enum , the same enum  , first poroperty default value ) ] :
            let choose = prompt(`Choose your level :
                1- press (1) for ${titles.lvl1} level for ${levels.kid}
                2- press (2) for ${titles.lvl2} level for ${levels.easy}
                3- press (3) for ${titles.lvl3} level for ${levels.medium}
                4- press (4) for ${titles.lvl4} level for ${levels.hard}
                5- press (5) for ${titles.lvl0} level for ${levels.insane}
            `);

        // E] Print Information according to the Choosed level : 
            if (choose === '1' )  {
 
                console.log(`Your level Title  is : ${titles.lvl1}
                level speed is : ${levels.kid} `);
                
            } else if (choose === '2' )  { 
                 
                console.log(`Your level Title is : ${titles.lvl2}
                level speed is : ${levels.easy} `);

            } else if (choose === '3' )  { 
                 
                console.log(`Your level Title is : ${titles.lvl3}
                level speed is : ${levels.medium} `);

            } else if (choose === '4' )  { 
                 
                console.log(`Your level Title is : ${titles.lvl4}
                level speed is : ${levels.hard} `);

            } else if (choose === '5' )  { 
                 
                console.log(`Your level Title is : ${titles.lvl0}
                level speed is : ${levels.insane} `);

            } else {
                console.log(`You choosed nothing`) ;
            }
   
        } else {
        alert ('no choice has been choosen! ');
    }
}
 