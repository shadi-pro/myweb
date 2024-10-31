
// [TS] lesson =>  31 Class Implements Interface :

console.log(`welcome to Test Define a Class with using {single interface}   within [TS]   `);

// A] Define a several interfaces :

// First interface :
interface setting1 {
    theme: boolean;
    font: string;
    save(): void;
}


// B] Define the main Class with using [ single interface ] : 
class User implements setting1 {

    // using the defined method within the interface1 [setting1] :
    save(): void {
        console.log(`Your data has been saved by Class1  `);
    }

    // Define the class constructor function , with [using defined properties within implemented Interface] & [new defining inner properties ] :  
    constructor(public username: string, public theme: boolean, public font: string) { }

}

// B] Extracting new object from the defined class  : 
let userOne = new User('shadi', true, 'Roman');

// Printing each properties of extracted object from the class :
console.log(`The extracted objects from the class1 of implements single nterface as following :
     ${userOne.username} => [Defined inline in the constructor function ]
     ${userOne.theme} => [Defined in single Interface used in Class defintion ]
     ${userOne.font}  => [Defined in single Interface used in Class defintion ]     
 `);

console.log('Execute the defined method within the defined interface and used by the class1 of extracted objects  is :');
userOne.save();


console.log('#'.repeat(15));
// ----------------------------------------------


console.log(`welcome to Test Define a Class with using {multiple interfaces}   within [TS]    `);

// First interface :
interface setting1 {
    theme: boolean;
    font: string;
    save(): void;
}


// Seoond interface :
interface setting2 {
    ip: number;
    id: number;
    update(): void;
}

// B] Define the main Class with using [ single interface ] : 
class User2 implements setting1, setting2 {

    // using the defined method within the interface1 [setting1] :
    save() {
        console.log(`Your data has been saved by Class1  `);
    }

    // using the defined method within the interface1 [setting1] :
    update() {
        console.log(`Your data has been updated by Class2  `);
    }

    // Define the class constructor function , with [using defined properties within implemented Interface] & [new defining inner properties ] :  
    constructor(public username: string, public theme: boolean, public font: string, public id: number, public ip: number) { }

}

// B] Extracting new object from the defined class  : 
let userTwo = new User2('shadi', true, 'Roman', 100, 100);

// Printing each properties of extracted object from the class :
console.log(`The extracted objects from the class2 of implements several (2) interfaces as following :
    ${userTwo.username} => [Defined inline in the constructor function ]
    ${userTwo.theme} => [Defined in single first Interface used in Class defintion ]
    ${userTwo.font}  => [Defined in single first Interface used in Class defintion ]
    ${userTwo.id} => [Defined in single second Interface used in Class defintion ]
    ${userTwo.ip} => [Defined in single second Interface used in Class defintion ]        
`);


console.log('Execute defined Method the within the defined interface and used by the class2 of extracted objects   is :');
userTwo.save();

console.log('Execute the defined method within the defined interface and used by the class2 of extracted objects  is  :');
userTwo.update();


console.log('#'.repeat(15));
// ----------------------------------------------


console.log(`welcome to Test  Define a Class with using Extended {single interfaces}  within [TS]   `);

// First interface :
interface setting1 {
    theme: boolean;
    font: string;
    save(): void;
}

// Seoond interface :
interface setting2 {
    ip: number;
    id: number;
    update(): void;
}

// Third interface [extended] :
interface setting3 extends setting1, setting2 {
    server: number;
    domain: string;
    add(): void;
}

// B] Define the main Class with using [ single extended interface ] : 
class User3 implements setting3 {

    // using the defined method within the interface3 [setting3] :
    save() {
        console.log(`Your data has been saved by Class3  `);
    }
    // using the defined method within the interface3 [setting3] :
    update() {
        console.log(`Your data has been updated by Class3  `);
    }
    // using the defined method within the interface3 [setting3] :
    add() {
        console.log(`Your data has been added by Class3  `);
    }

    // Define the class constructor function , with [using defined properties within implemented Interface] & [new defining inner properties ] :  
    constructor(public username: string, public theme: boolean, public font: string, public id: number, public ip: number, public server: number, public domain: string) { }

}

// B] Extracting new object from the defined class  : 
let userThree = new User3('shadi', true, 'Roman', 100, 100, 10.10 , 'shindowpro.com');

// Printing each properties of extracted object from the class :
console.log(`The extracted objects from the class3 of implements (1) Extended interfaces as following :
    ${userThree.username} => [Defined inline in the constructor function ]
    ${userThree.theme} => [Defined in Extneded Interface used in Class defintion ]
    ${userThree.font}  => [Defined in Extneded Interface used in Class defintion ]
    ${userThree.id} => [Defined in Extneded Interface used in Class defintion ]
    ${userThree.ip} => [Defined in Extneded Interface used in Class defintion ]  
    ${userThree.server} => [Defined in Extneded Interface used in Class defintion ]          
    ${userThree.domain} => [Defined in Extneded Interface used in Class defintion ]                  
`);


console.log('Execute the defined method within the defined interface and used by the class3 of extracted objects  is  :');
userThree.save();

console.log('Execute the defined method within the defined interface and used by the class3 of extracted objects  is  :');
userThree.update();

console.log('Execute the defined method within the defined interface and used by the class3 of extracted objects  is  :');
userThree.add();

console.log('#'.repeat(15));
// ----------------------------------------------
// ----------------------------------------------


