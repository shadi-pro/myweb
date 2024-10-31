// [TS] lesson =>  36 Generics Classes :

/* This lesson including following methods  :  
    1- Define a class with using {Generic Types} & by using {Generic Aliase Name}       
    2- Define a class with using {Generic Types} & assinging {Union type} & by using {Generic Aliase Name}
*/

function display() {
    let z: any = prompt(`Choose from the next methods  :
    1- Define a class with using {Generic Types} & by using {Generic Aliase Name}       
    2- Define a class with using {Generic Types} & assinging {Union type} & by using {Generic Aliase Name} 
    `);


    if (z == 1) {
        alert(`welcome to Test Define a class with using {Generic Types} & by using {Generic Aliase Name}  `);
        console.log(`welcome to Test Define a class with using {Generic Types} & by using {Generic Aliase Name}  `);

        // A] Define a main Class with {Generic Type} with using {Aliase Name}  :
        class User<T> {
            // Define a contructor function with paramter using [defiend generic type] : 
            constructor(public value: T) { }

            // Define a method with {void} datatype :
            show(msg: T): void {
                console.log(`
                    Welcome ${this.value} 
                    yourt message is ${msg} 
                `);
            }
        }

        // B] Extracting object from defined class with using [defined Generic Type] of {string} datatype :
        let newUser = new User<string>('shadi');


        // C] Executing and printing the extracted object's properties and method  :
        
        console.log(newUser.show('This is the meessage'))
        
        console.log(`The value of the defined object's property using generic Type , with assigned datatype [string] is :
            ${newUser.value}
        `);


        console.log('#'.repeat(15));
        // ----------------------------------------------


    } else if (z == 2) {
        alert(`welcome to Test Define a class with using {Generic Types} & assinging {Union type} & by using {Generic Aliase Name}  `);
        console.log(`welcome to Test Define a class with using {Generic Types} & assinging {Union type} & by using {Generic Aliase Name} `);


        // A1] Define a main Class with {Generic Type} with using {Aliase Name} & asssinging datatype [Single]  :
        class User1<T = string > {
            // Define a contructor function with paramter using [defiend generic type] AND Assigning single datatype    : 
            constructor(public value: T) { }

            // Define a method with {void} datatype :
            show(msg: T): void {
                console.log(`Welcome ${this.value}   , 
                your message is ${msg} 
            `);
            }
        }

        // A2] Define a main Class with {Generic Type} with using {Aliase Name} & asssinging (2) datatype [Union Types]  :
        class User2<T = string | number > {
            // Define a contructor function with paramter using [defiend generic type] AND Assigning single datatype    : 
            constructor(public value: T) { }

            // Define a method with {void} datatype :
            show(msg: T): void {
                console.log(`Welcome ${this.value}   , 
                your message is ${msg} 
            `);
            }
        }
 
        // B1] Extracting object from defined class with using [defined Generic Type] of {string} datatype :
            let newUser1 = new User1<string>('shadi');

        // B2] Extracting object from defined class with using [defined Generic Type] of {union Types} datatypes :
            let newUser2 = new User2<number|string>(100);


        // C] Executing and printing the object's properties and method  :
            // First object :
            console.log(newUser1.show('This is the meessage from the first object extracted from the first class  ')) ;  

            console.log(` The value of the defined object's property using generic Type , with assigned datatype [string] is :
                ${newUser1.value}
            `);
  
            // Second object :
            console.log(newUser2.show('This is the meessage from the first object extracted from the second class  ')) ;  

            console.log(` The value of the defined object's property using generic Type , with assigned datatype [string] is :
                ${newUser1.value}
            `);
  

        console.log('#'.repeat(15));
        // ----------------------------------------------

    } else {
        console.log('No valid choice!');
    }
}
