console.log(`welcome to Test Define an Interface , and re-open it [from in different pages (simulation )]  `);
          
// A] Define the main {Interaface object} [with in the main page ] : 
    interface Inter {
        id : number ,   
        username: string ,   
        // s// sayWelcome: () => string // => [assigning a datatype of the method with arrow function way {without parameters} ]
    } 


// B] Re-open the main {Interaface object} [with in another page ] and adding new properties/options & methods : 
    interface Inter {   
        city ?: string ,   
        sayWelcome: () => string // => [Adding assigning a datatype of the method with arrow function way {without parameters} ]
    } 

    
  // C Define an Object with using datatype annotation of defined {Interface object}  : 
    let obj : Inter  = {
        id : 100 ,
        username : 'shadi' , 
        
        // Declaring a method of get one of object property of the same datatype of the asssigned method's datatype 
         
        sayWelcome () {  // => [We not used the arrow function, due problem of using {this} operator  ]
            return `Hello ${this.username}
            your id is ${this.id}
            your city is ${this.city}
            ` ;
        }
    } ;
      

// C]  Call and Print the object's porperties : 
    console.log('The defined object overall as following : ' );
    console.log(obj );
