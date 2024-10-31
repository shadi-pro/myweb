// [TS] lesson =>  30 Class Static Members :


console.log(`welcome to Test Define a Class with using {static class member} & access the class static member [count static property] using general method in the in [TS] `);

// A] Define the main Class with using [Class static members & Type Annotation & Getters and Setters ] : 
class User {
    // Define [static property] with [Datatype Annotation : number ] [without using class Modifiers]:
    static count: number = 0;

    // Define [static functional property] with [Datatype Annotation : void (without return value)]  :
    static getCount(): void {
        console.log(`${User.count} objects extracted `);
    }

    // Define the class constructor function , with [allocating the defined properties by contructor parmeters ] :  
    constructor(public username: string) {
        // Adding increament to the class static defined property to be applied each time of extracted new object :
        User.count++;
    }
}

// B] Extracting several objects from the defined class   : 
let userOne = new User('shadi');
let userTwo = new User('sayed');
let userThree = new User('mohamed');

// Printing each object extracted from the class :
console.log('The extracted objects from the class as following :');
console.log(userOne);
console.log(userTwo);
console.log(userThree);

console.log('Execute the general method of class of get` count of extracted objects [by using general void function] is :');
console.log(User.getCount );

console.log('#'.repeat(15)) ;
// ------------------------------------------


console.log(`welcome to Test Define a Class with using {static class member} with {class modifires} & [get() and set()] methods & access the class static member member [count static property] using general method && [get() and set()] methods  `);

// A] Define the main Class with using [Class static members & Type Annotation & Getters and Setters ] : 
class User1 {
    // Define [static property] with [Datatype Annotation : number ] [with using class Modifiers {private} :
    private static _created: number = 0;

    // Define [static functional property] with [Datatype Annotation : void] [without using class Modifiers]:
    public static getCount(): void {
        console.log(`${User1._created} objects extracted `);
    }

    //  Define a {get()} method [to get the private static {count} ] :
    public static get created(): number {
        return User1._created;
    }

    //  Define a {set()} method [to get the private static {count} ] :           
    public static set created(value: number) {
        User1._created = value;
    }

    // Define the class constructor function , with [ increasing the counter property bty each time of extracitng new object from the Class ] :  
    constructor(public username: string) {
        // Adding increament to the class static defined property to be applied each time of extracted new object :
        User1._created++;
    }
}

// B] Extracting several objects from the defined class   : 
let userOne1 = new User1('shadi');
let userTwo1 = new User1('sayed');
let userThree1 = new User1('mohamed');

// Printing each object extracted from the class :
console.log('The extracted objects from the class as following :');
console.log(userOne1);
console.log(userTwo1);
console.log(userThree1);

console.log('Execute the general method of class of get` count of extracted objects [by using general void function] is :');
console.log(User1.getCount);


// Execute the [get()] static class method [to get private static defind property value ] : 
console.log(User1.created);

// Execute the [set()] static class method [to re-set private static defind property value ] : 
User1.created = 10;

// Execute the [get()] static class method [to get private static defind property value after being updated  ] : 
console.log(User1.created);


console.log('#'.repeat(15)) ;