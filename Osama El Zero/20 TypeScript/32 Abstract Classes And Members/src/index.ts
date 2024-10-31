// [TS] lesson =>  32 Abstract Classes And Members :

/* This lesson including following methods  :  
    1- Define an Abstract class with abstract method & and another (2) classes extending it
*/

function display() {
    let z: any = prompt(`Choose from the next methods  :
       1- Define an Abstract class with abstract method  & and another (2) classes extending it
     `);


    if (z == 1) {
        alert(`welcome to Test Define an Abstract class with abstract method  & and another (2) classes extending it `);
        console.log(`welcome to Test Define an Abstract class with abstract method  & and another (2) classes extending it  `);

        // A] Define a main Abstract Class :
        abstract class Food {
            constructor (public title:string ) {}
            abstract cooking(): void;
        }


        // B] Define NON-abstract Class1 with using [ defined abstract method + inherited constructor property ] : 
        class Burger extends Food {
            constructor ( title:string , public price : number ) {
                super(title);
            }

            cooking() :void {
                 console.log('your cooking is Burger') ;
            }
        }

        //  C] Define NON-abstract Class2 with using [ defined abstract method + inherited constructor property  ] : 
        class Pizza extends Food {
            constructor ( title:string , public price :number ) {
                super(title);
            }

            cooking() :void {
                 console.log('your cooking is Pizza ') ;
            }
        }

             
        // D] Extracting new object from the defined NON Abstract class1  : 
        let meal1 = new Burger('Tasty burger', 100 );
        
        // E] Extracting new object from the defined NON Abstract class2  : 
        let meal2 = new Pizza('Tasty pizza', 200 );

        // Printing each properties of extracted object from first class the NON abstract  :         
        console.log(`The extracted object from the class1 properties as following :
            ${meal1.title} => [Defined propoety of the constructor function of main abtract class and inherited by the non abstract class]
            ${meal1.price} => [Defined propoety of the constructor function by the non abstract class]
        `);
          
        // Printing each properties of extracted object from second class the NON abstract  :         
        console.log(`The extracted object from the class2 properties as following :
            ${meal2.title} => [Defined propoety of the constructor function of main abtract class and inherited by the non abstract class]
            ${meal2.price} => [Defined propoety of the constructor function by the non abstract class]
        `);
          
        console.log('Execute the defined method inherited from first NON abstract class1 by extracted objects  is :');
        meal1.cooking();

        console.log('Execute the defined method inherited from second NON abstract class2 by extracted objects  is :');
        meal2.cooking();

        // ----------------------------------------------
        console.log('#'.repeat(15));


    } else {
        console.log('No valid choice!');
    }
}
