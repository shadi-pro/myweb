// [TS] lesson =>  28 Class Access Modifiers And Parameters Properties :

    /* This lesson including following methods  :  
       1- Define a class including properties with using [ Class modifiers {public , private , protected} ] in the in [TS]
       2- Define a class including properties with using [ Class modifiers {public , private , protected} ] with using [special properties {readonly | optional} ] in [TS]
       3- Define a class including properties with using [ Class modifiers {public , private , protected} ] with using [special properties {readonly | optional} [within constructor paramters function]  one inline code [TS]
    */
   
   function display() {
       let z: any = prompt(`Choose from the next methods  :
       1- Define a class including properties with using [ Class modifiers {public , private , protected} ] in the in [TS]
       2- Define a class including properties with using [ Class modifiers {public , private , protected} ] with using [special properties {readonly | optional } ] in [TS]
       3- Define a class including properties with using [ Class modifiers {public , private , protected} ] with using [special properties {readonly | optional } in one inline code [TS]
     `);
    

    if (z == 1) {
        alert(`welcome to Test Define a class including properties with using [ Class modifiers {public , private , protected} ] in the in [TS] `);
        console.log(`welcome to Test Define a class including properties with using [ Class modifiers {public , private , protected} ] in the in [TS]  `);
          
        // A] Define the main Class with using [ Class modifiers {public , private , protected} & Type Annotation  ] : 
            class  User {
                // Assinging [class modifiers] & [datatype annotation] of the class defined properties and methods :
                    public u: string ; 
                    private s: number;
                    protected c : string ;
                    msg: () => string;
 
                 // Define the class constructor function , with [allocating the defined properties by contructor parmeters   ]   :  
                 constructor(username: string , salary: number , city: string) {
                    this.u = username;
                    this.s = salary;
                    this.c = city ;

                    // Define a functional property : 
                    this.msg = function()  {  
                     return `From the class constructor => functional property  
                        Hello ${this.u} [username : pulbic]  
                        your salary is : ${this.s} [salary: private]
                        your city is : ${this.c} [city : protected]
                    `; 
                    }
                }

                 // Define a general method of class  : 
                sayHello () {
                    return `
                        [From the class general method] :
                        Hello ${this.u} [username : pulbic]  
                        your salary is : ${this.s} [salary: private]
                        your city is : ${this.c} [city : protected] 
                    ` ; 
                }
            } 
  
        
          // B] Extracting a new object from the defined class [access class's properties from the outside the class]  : 
             let userOne =  new User('shadi' , 6000 , 'cairo');
            
          // C  prinnting the extracted object's properties and methods from class : 
            console.log(`
             The extracted object's first propeprty is  :
                 ${userOne.u}
                The extracted  object's second propeprty [salary] is [private] and can not accessed outside the class
                The extracted  object's third propeprty [city] is [protected] and can not accessed outside the class
                The extracted object's functional property is :  
                ${userOne.msg()}
            `);
             
            // D ] Printing the extracted object's general class method :
                console.log(` Extracted object's general class method ${userOne.sayHello()}  `);

                // ----------------------------------------------
 
    } else if (z == 2) {
        alert(`welcome to Test Define a class including properties with using [ Class modifiers {public , private , protected} ] with using [special properties {readonly | optional } ] in [TS] `);  
        console.log(`welcome to Test Define a class including properties with using [ Class modifiers {public , private , protected} ] with using [special properties {readonly | optional } ] in [TS] `);  
        
        // A] Define the main Class with using [Class Modifires & Special properties {readonly | optional ?} & Type Annotation  ] : 
            class  User {
                // Assinging [class modifiers] & [datatype annotation] of the class defined properties and methods :
                    public readonly u: string ; 
                    private s: number;
                    protected c? : string ;
                    msg: () => string;

                // Define the class constructor function , with [allocating the defined properties by contructor parmeters ] :  
                constructor(username: string , salary: number , city: string) {
                    this.u = username;
                    this.s = salary;
                    this.c = city ;

                    // Define a functional property : 
                    this.msg = function()  {  
                    return `From the class constructor => functional property  
                        Hello ${this.u} [username : pulbic]  
                        your salary is : ${this.s} [salary: private]
                        your city is : ${this.c} [city : protected]
                    `; 
                    }
                }

                // Define a general method of class  : 
                sayHello () {
                    return `
                        [From the class general method] :
                        Hello ${this.u} [username : pulbic]  
                        your salary is : ${this.s} [salary: private]
                        your city is : ${this.c} [city : protected] 
                    ` ; 
                }
            } 

        
        // B] Extracting a new object from the defined class [access class's properties from the outside the class]  : 
            let userOne =  new User('shadi' , 6000 , 'cairo');
            
        // C  prinnting the extracted object's properties and methods from class : 
            console.log(`
            The extracted object's first propeprty is  :
                ${userOne.u}
                The extracted  object's second propeprty [salary] is [private] and can not accessed outside the class
                The extracted  object's third propeprty [city] is [protected] and can not accessed outside the class
                The extracted object's functional property is :  
                ${userOne.msg()}
            `);
            
            // D ] Printing the extracted object's general class method :
                console.log(` Extracted object's general class method ${userOne.sayHello()}  `);

            // ----------------------------------------------

    } else if (z == 3) {
        alert(`welcome to Test Define a class including properties with using [ Class modifiers {public , private , protected} ] with using [special properties {readonly | optional } in one inline code [TS] `);  
        console.log(`welcome to Test Define a class including properties with using [ Class modifiers {public , private , protected} ] with using [special properties {readonly | optional } in one inline code [TS]  `);  
 
          // A] Define the main Class with using [Class Modifires & Special properties {readonly | optional ?} & Type Annotation  ] : 
          class  User {
            // Assinging [class modifiers] & [datatype annotation] of the class defined properties and methods :
                // public readonly u: string ; 
                // private s: number;
                // protected c? : string ;
                msg: () => string;

            // Define the class constructor function , with [allocating the defined properties by contructor parmeters ] :  
            constructor(public readonly username: string , private salary: number , protected city?: string) {
                // this.u = username;
                // this.s = salary;
                // this.c = city ;

                // Define a functional property : 
                this.msg = function()  {  
                return `From the class constructor => functional property  
                    Hello ${this.username} [username : pulbic]  
                    your salary is : ${this.salary} [salary: private]
                    your city is : ${this.city} [city : protected]
                `; 
                }
            }

            // Define a general method of class  : 
            sayHello () {
                return `
                    [From the class general method] :
                    Hello ${this.username} [username : pulbic]  
                    your salary is : ${this.salary} [salary: private]
                    your city is : ${this.city} [city : protected] 
                ` ; 
            }
        } 

    
        // B] Extracting a new object from the defined class [access class's properties from the outside the class]  : 
            let userOne =  new User('shadi' , 6000 , 'cairo');
            
        // C  prinnting the extracted object's properties and methods from class : 
            console.log(`
            The extracted object's first propeprty is  :
                ${userOne.username}
                The extracted  object's second propeprty [salary] is [private] and can not accessed outside the class
                The extracted  object's third propeprty [city] is [protected] and can not accessed outside the class
                The extracted object's functional property is :  
                ${userOne.msg()}
            `);
            
            // D ] Printing the extracted object's general class method :
                console.log(` Extracted object's general class method ${userOne.sayHello()}  `);


    } else {
        console.log('No valid choice!') ;
    }
}
 