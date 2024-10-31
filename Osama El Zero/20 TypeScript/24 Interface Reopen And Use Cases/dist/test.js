"use strict";
console.log(`welcome to Test Define an Interface , and re-open it [from in different pages (simulation )]  `);
// C Define an Object with using datatype annotation of defined {Interface object}  : 
let obj = {
    id: 100,
    username: 'shadi',
    // Declaring a method of get one of object property of the same datatype of the asssigned method's datatype 
    sayWelcome() {
        return `Hello ${this.username}
            your id is ${this.id}
            your city is ${this.city}
            `;
    }
};
// C]  Call and Print the object's porperties : 
console.log('The defined object overall as following : ');
console.log(obj);
