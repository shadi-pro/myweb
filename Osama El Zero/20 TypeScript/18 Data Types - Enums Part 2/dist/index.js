"use strict";
// [TS] lesson =>  18 Data Types - Enums Part 2 :
/* This lesson including following methods  :
    1- Using {Enum} object variable with [defining a property refering from another enum's property]
    2- Using {Enum} object variable with [defining a property refering from the same enum's property into another property]
    3- Using {Enum} object variable with [defining a property refering from a defeined function  ]
    4- Using {Enum} object variable with [defining the first property in the enum by using default value  ]
*/
function display() {
    let z = prompt(`Choose from the next methods  :
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
        let kids;
        (function (kids) {
            kids[kids["five"] = 20] = "five";
            kids[kids["seven"] = 15] = "seven";
            kids[kids["ten"] = 10] = "ten";
        })(kids || (kids = {}));
        // Second basic enum :
        let guys;
        (function (guys) {
            guys[guys["eleven"] = 9] = "eleven";
            guys[guys["fourteen"] = 8] = "fourteen";
            guys[guys["twinty"] = 7] = "twinty";
        })(guys || (guys = {}));
        // B] Define a Enum object's properties [of numeric values] with using refering from {another Enum(s)} :
        let levels;
        (function (levels) {
            levels[levels["kid"] = 20] = "kid";
            levels[levels["easy"] = 19] = "easy";
            levels[levels["medium"] = 8] = "medium";
            levels[levels["hard"] = 7] = "hard";
        })(levels || (levels = {}));
        // C] Define the main levels titles variables :
        let lvl1 = 'kid';
        let lvl2 = 'easy';
        let lvl3 = 'medium';
        let lvl4 = 'hard';
        // D] Define the choosed variable as Choose your level [using {Enum} refering properties values ] :
        let choose = prompt(`Choose your level :
                1- press (1) for ${lvl1} level for ${levels.kid}
                2- press (2) for ${lvl2} level for ${levels.easy}
                3- press (3) for ${lvl3} level for ${levels.medium}
                4- press (4) for ${lvl4} level for ${levels.hard}
            `);
        // E] Print Information according to the Choosed level : 
        if (choose === '1') {
            console.log(`Your level Title  is : ${lvl1}
                level speed is : ${levels.kid} `);
        }
        else if (choose === '2') {
            console.log(`Your level Title is : ${lvl2}
                level speed is : ${levels.easy} `);
        }
        else if (choose === '3') {
            console.log(`Your level Title is : ${lvl3}
                level speed is : ${levels.medium} `);
        }
        else if (choose === '4') {
            console.log(`Your level Title is : ${lvl4}
                level speed is : ${levels.hard} `);
        }
        else {
            console.log(`You choosed nothing`);
        }
    }
    else if (z == 2) {
        alert(`welcome to Testing Using {Enum} object variable with [defining a property refering from the same enum's property into another property]    `);
        console.log(`welcome to Testing Using {Enum} object variable with [defining a property refering from the same enum's property into another property]   `);
        // A] Define a basic Enums  :
        // First basic enum :
        let kids;
        (function (kids) {
            kids[kids["five"] = 20] = "five";
            kids[kids["seven"] = 15] = "seven";
            kids[kids["ten"] = 10] = "ten";
        })(kids || (kids = {}));
        // Second basic enum :
        let guys;
        (function (guys) {
            guys[guys["eleven"] = 9] = "eleven";
            guys[guys["fourteen"] = 8] = "fourteen";
            guys[guys["twinty"] = 7] = "twinty";
        })(guys || (guys = {}));
        // B] Define a Enum object's properties [of numeric values] with using refering from {another Enum(s)}  & {same Enum properties values and calcutalted}  :
        let levels;
        (function (levels) {
            levels[levels["kid"] = 20] = "kid";
            levels[levels["easy"] = 9] = "easy";
            levels[levels["medium"] = 6] = "medium";
            levels[levels["hard"] = 3] = "hard";
        })(levels || (levels = {}));
        // C] Define the main levels titles variables :
        let lvl1 = 'kid';
        let lvl2 = 'easy';
        let lvl3 = 'medium';
        let lvl4 = 'hard';
        // D] Define the choosed variable as Choose your level [using {Enum} refering properties values ] :
        let choose = prompt(`Choose your level :
                1- press (1) for ${lvl1} level for ${levels.kid}
                2- press (2) for ${lvl2} level for ${levels.easy}
                3- press (3) for ${lvl3} level for ${levels.medium}
                4- press (4) for ${lvl4} level for ${levels.hard}
            `);
        // E] Print Information according to the Choosed level : 
        if (choose === '1') {
            console.log(`Your level Title  is : ${lvl1}
                level speed is : ${levels.kid} `);
        }
        else if (choose === '2') {
            console.log(`Your level Title is : ${lvl2}
                level speed is : ${levels.easy} `);
        }
        else if (choose === '3') {
            console.log(`Your level Title is : ${lvl3}
                level speed is : ${levels.medium} `);
        }
        else if (choose === '4') {
            console.log(`Your level Title is : ${lvl4}
                level speed is : ${levels.hard} `);
        }
        else {
            console.log(`You choosed nothing`);
        }
    }
    else if (z == 3) {
        alert(`welcome to Testing Using {Enum} object variable with [defining a property refering from a defeined function  ] `);
        console.log(`welcome to Testing Using {Enum} object variable with [defining a property refering from a defeined function  ]  `);
        // A] Define a basic Enums  :
        // First basic function :
        function baisc1() {
            return 10;
        }
        // Second basic function :
        function baisc2() {
            return 7;
        }
        // Third basic function :
        function baisc3() {
            return 5;
        }
        // B] Define a Enum object's properties [of numeric values] with using refering from {same calcluated Enum(s)} & {defined function }  :
        let levels;
        (function (levels) {
            levels[levels["kid"] = baisc1()] = "kid";
            levels[levels["easy"] = baisc2() + 100] = "easy";
            levels[levels["medium"] = baisc3()] = "medium";
            levels[levels["hard"] = levels.medium - 3] = "hard";
        })(levels || (levels = {}));
        // C] Define the main levels titles variables :
        let lvl1 = 'kid';
        let lvl2 = 'easy';
        let lvl3 = 'medium';
        let lvl4 = 'hard';
        // D] Define the choosed variable as Choose your level [using {Enum} refering properties values ] :
        let choose = prompt(`Choose your level :
                1- press (1) for ${lvl1} level for ${levels.kid}
                2- press (2) for ${lvl2} level for ${levels.easy}
                3- press (3) for ${lvl3} level for ${levels.medium}
                4- press (4) for ${lvl4} level for ${levels.hard}
            `);
        // E] Print Information according to the Choosed level : 
        if (choose === '1') {
            console.log(`Your level Title  is : ${lvl1}
                level speed is : ${levels.kid} `);
        }
        else if (choose === '2') {
            console.log(`Your level Title is : ${lvl2}
                level speed is : ${levels.easy} `);
        }
        else if (choose === '3') {
            console.log(`Your level Title is : ${lvl3}
                level speed is : ${levels.medium} `);
        }
        else if (choose === '4') {
            console.log(`Your level Title is : ${lvl4}
                level speed is : ${levels.hard} `);
        }
        else {
            console.log(`You choosed nothing`);
        }
    }
    else if (z == 4) {
        alert(`welcome to Testing Using {Enum} object variable with [defining the first property in the enum by using default value  ]  `);
        console.log(`welcome to Testing Using {Enum} object variable with [defining the first property in the enum by using default value  ]  `);
        // A] Define a basic Enums and functions  :
        // Define basic Function :
        let bNum;
        (function (bNum) {
            bNum[bNum["ten"] = 15] = "ten";
            bNum[bNum["fourteen"] = 10] = "fourteen";
            bNum[bNum["twinty"] = 7] = "twinty";
        })(bNum || (bNum = {}));
        // Define a  basic  Enum :
        function baisc1() {
            return 10;
        }
        /* B] Define a Enum object's properties [of numeric values] with using following :
            1- default value of the first property
            2- refering from {another Enum(s)}
            3- refering from {defined function}
            4- refering from {another Enum(s)} & {defined function}
        */
        let levels;
        (function (levels) {
            levels[levels["insane"] = 0] = "insane";
            levels[levels["kid"] = 15] = "kid";
            levels[levels["easy"] = baisc1()] = "easy";
            levels[levels["medium"] = levels.easy - 3] = "medium";
            levels[levels["hard"] = 12] = "hard";
        })(levels || (levels = {}));
        // C] Define main Enum [string basic ] of levels titles  :
        let titles;
        (function (titles) {
            titles["lvl0"] = "insane";
            titles["lvl1"] = "kid";
            titles["lvl2"] = "easy";
            titles["lvl3"] = "medium";
            titles["lvl4"] = "hard";
        })(titles || (titles = {}));
        // D] Define the choosed variable as Choose your level [using {Enum} refering properties values (from another enum , the same enum  , first poroperty default value ) ] :
        let choose = prompt(`Choose your level :
                1- press (1) for ${titles.lvl1} level for ${levels.kid}
                2- press (2) for ${titles.lvl2} level for ${levels.easy}
                3- press (3) for ${titles.lvl3} level for ${levels.medium}
                4- press (4) for ${titles.lvl4} level for ${levels.hard}
                5- press (5) for ${titles.lvl0} level for ${levels.insane}
            `);
        // E] Print Information according to the Choosed level : 
        if (choose === '1') {
            console.log(`Your level Title  is : ${titles.lvl1}
                level speed is : ${levels.kid} `);
        }
        else if (choose === '2') {
            console.log(`Your level Title is : ${titles.lvl2}
                level speed is : ${levels.easy} `);
        }
        else if (choose === '3') {
            console.log(`Your level Title is : ${titles.lvl3}
                level speed is : ${levels.medium} `);
        }
        else if (choose === '4') {
            console.log(`Your level Title is : ${titles.lvl4}
                level speed is : ${levels.hard} `);
        }
        else if (choose === '5') {
            console.log(`Your level Title is : ${titles.lvl0}
                level speed is : ${levels.insane} `);
        }
        else {
            console.log(`You choosed nothing`);
        }
    }
    else {
        alert('no choice has been choosen! ');
    }
}
