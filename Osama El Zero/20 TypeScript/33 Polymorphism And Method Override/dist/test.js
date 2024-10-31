"use strict";
// [TS] lesson =>  32 Abstract Classes And Members :
console.log(`welcome to Test Define an class with method to be polymorphismed [with using : noImplicitOverride :true] {without using override keyword }  `);
// A] Define a main Class :
class Player {
    constructor(name) {
        this.name = name;
    }
    attack() {
        console.log(`Attacking method`);
    }
}
// B] Define child Class1 with using [Polymorphism]  : 
class Amazon extends Player {
    constructor(name, spear) {
        super(name);
        this.spear = spear;
        this.spear -= 1;
    }
    // Overriding the defined method  : 
    attack() {
        super.attack();
        console.log(' Attacking by Amazon ');
    }
}
// C] Define child Class2 with using [Polymorphism]  : 
class Barbarian extends Player {
    constructor(name, axeDur) {
        super(name);
        this.axeDur = axeDur;
        this.axeDur -= 1;
    }
    // Overriding the defined method  : 
    attack() {
        super.attack();
        console.log(' Attacking by Barbarian');
    }
}
// D] Extracting new object from the defined child 'Amazon' class1  : 
let amazonOne = new Amazon('shadiAmazon', 100);
console.log(' Spear property before executing method  attack()  is :');
console.log(amazonOne.spear);
console.log('Execute the defined method inherited from first child class1 by extracted objects  is :');
amazonOne.attack();
console.log(' Spear property after executing method  attack()  is :');
console.log(amazonOne.spear);
// D] Extracting new object from the defined child 'Barbarian' class1  : 
let barOne = new Barbarian('shadiBarbarian', 100);
console.log(' AxeDurabliity property before executing method  attack()  is :');
console.log(barOne.axeDur);
console.log('Execute the defined method inherited from first child class1 by extracted objects  is :');
amazonOne.attack();
console.log(' AxeDurabliity property after executing method  attack()  is :');
console.log(barOne.axeDur);
// ----------------------------------------------
// ----------------------------------------------
console.log('#'.repeat(15));
console.log(`welcome to Test Define an class with method to be polymorphismed [with using : noImplicitOverride :true] {with using override keyword }  `);
// A] Define a main Class :
class Player1 {
    constructor(name) {
        this.name = name;
    }
    attack() {
        console.log(`Attacking method`);
    }
}
// B] Define child Class1 with using [Polymorphism]  : 
class Amazon1 extends Player1 {
    constructor(name, spear) {
        super(name);
        this.spear = spear;
        this.spear -= 1;
    }
    // Overriding the defined method  : 
    attack() {
        super.attack();
        console.log(' Attacking by Amazon ');
    }
}
// C] Define child Class2 with using [Polymorphism]  : 
class Barbarian1 extends Player {
    constructor(name, axeDur) {
        super(name);
        this.axeDur = axeDur;
        this.axeDur -= 1;
    }
    // Overriding the defined method  : 
    attack() {
        super.attack();
        console.log(' Attacking by Barbarian');
    }
}
// D] Extracting new object from the defined child 'Amazon' class1  : 
let amazonOne1 = new Amazon1('shadiAmazon', 100);
console.log(' Spear property before executing method  attack()  is :');
console.log(amazonOne1.spear);
console.log('Execute the defined method inherited from first child class1 by extracted objects  is :');
amazonOne.attack();
console.log(' Spear property after executing method  attack()  is :');
console.log(amazonOne1.spear);
// D] Extracting new object from the defined child 'Barbarian' class1  : 
let barOne1 = new Barbarian1('shadiBarbarian', 100);
console.log(' AxeDurabliity property before executing method  attack()  is :');
console.log(barOne1.axeDur);
console.log('Execute the defined method inherited from first child class1 by extracted objects  is :');
amazonOne.attack();
console.log(' AxeDurabliity property after executing method  attack()  is :');
console.log(barOne1.axeDur);
// ----------------------------------------------
console.log('#'.repeat(15));
