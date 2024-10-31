console.log(`welcome to Test Define an Interface with extending another single interface `);
          
// A] Define the main Class : 
    class  User {
        // Assinging datastype annotation of the class properties and methods :
        u: string ; 
         s: number;
         msg: () => string;

         // Define the class constructor function :  
         constructor(username: string , salary:number) {
            this.u = username;
            this.s = salary;
            // Define a function propeorty : 
            this.msg = () => {
                return `[From the class constructor => functional property ] Hello ${this.u} , your salary is : ${this.s} ` ; 
            } 
        }

         // Define a general method of class  : 
        sayHello () {
            return `[From the class general method ] Hello ${this.u} , your salary is :  ${this.s} ` ; 
        }

    } 


  // B] Extracting a new object from the defined class  : 
     let userOne =  new User('shadi' , 6000);
    
  // C  prinnting the extracted object's properties aned methods  from calss 
    console.log(`
     The extracted object's first propeprty is 
         ${userOne.u}
    The extracted  object's first propeprty is
        ${userOne.s}
    The extracted  object's function property  is  
        ${userOne.msg()}
    `);
     
    // D ] Printing the extracted object's general class method :
        console.log(` Extracted object's general class method ${userOne.sayHello()}  `);

        // ----------------------------------------------
