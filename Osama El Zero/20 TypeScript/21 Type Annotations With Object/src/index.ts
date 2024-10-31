// [TS] lesson =>  21 Type Annotations With Object :

/* This lesson including following methods  :  
    1-  Define a single object with data annotation and access to all it's properties    
    2-  Define a nested object with data annotation and access to all it's properties [using readonly ]         
    3-  Define a nested object with data annotation and access to all it's properties  [optional variable]        
    */
   
   function display() {
       let z: any = prompt(`Choose from the next methods  :
       1-  Define a single object with data annotation and access to all it's properties    
       2-  Define a nested object with data annotation and access to all it's properties [using readonly ]         
       3-  Define a nested object with data annotation and access to all it's properties  [optional variable ]     
     `);
    

    if (z == 1) {
        alert(`welcome to Test Define a single object with data annotation and access to all it's properties  `);
        console.log(`welcome to Test Define a single object with data annotation and access to all it's properties    `);
          
        // A] Define a single object with using datatype annotation  : 
            let myObj : { 
                username : string ,
                id : number ,
                hire : boolean
            } = {
                username : 'shadi', 
                id : 100 ,
                hire : true
            }  ;
             
             
        // B] Re-assining / Modifying the object's properties  : 
            myObj.username = 'ali';
            myObj.id =  1000 ;
            myObj.hire =  false ;
 
        // C] Access and printing the object's porperties  : 
            console.log(`
                First object's property modfied value  ${myObj.username}
                Second object's property modfied value  ${myObj.id}
                Thrid object's property modfied value  ${myObj.hire}
            `) ;
 
                
    } else if (z == 2) {
        alert(`welcome to Test  Define a nested object with data annotation and access to all it's properties [using readonly ]  `);  
        console.log(`welcome to Test  Define a nested object with data annotation and access to all it's properties [using readonly ]  `);  
        
        // A] Define a nested object with using datatype annotation with using [readonly] property : 
            let nObj : { 
                readonly username : string ,
                id : number ,
                hire : boolean , 
                skills : {one : string  , two: string , three: string  }
            } = {
                username : 'shadi', 
                id : 100 ,
                hire : true ,
                skills : {one : 'html'  ,  two: 'css ' ,  three: 'js'}
            }  ;
             
             
        // B] Re-assigning / Modifying the object's properties  : 
            
          // nObj.username = 'ali'; => [can not be modfied , due it is a {readonly}  property ]
            nObj.id =  1000 ;
            nObj.hire =  false ;
            nObj.skills.one =  'HTML' ;
            nObj.skills.two = 'CSS' ;
            nObj.skills.three = 'JS' ;
 
        // C] Access and printing the object's porperties  : 
            console.log(`
            First object's property basic value : ${nObj.username}
            Second object's property modfied value :  ${nObj.id}
            Thrid object's property modfied value : ${nObj.hire}
            Fourth object's property nested property modfied value 1  : ${nObj.skills.one}
            Fourth object's property nested property modfied value 2 : ${nObj.skills.two}
            Fourth object's property nested property modfied value 3 : ${nObj.skills.three}
            `) ;
            
            
            
    } else if (z == 3) {
        alert(`welcome to Test  Define a nested object with data annotation and access to all it's properties using  [optional variable]  `);  
        console.log(`welcome to Test  Define a nested object with data annotation and access to all it's properties using [optional variable]  `);  

         // A] Define a nested object with using datatype annotation with using [optional variable ] property : 
            let nObj : { 
                username : string ,
                id : number ,
                // This property is optional to has a value : 
                hire? : boolean , 
                skills : {one : string  , two: string , three: string  }
            } = {
                username : 'shadi', 
                id : 100 ,
                // This property is optional to has a value : 
                // hire : true ,
                skills : {one : 'html'  ,  two: 'css ' ,  three: 'js'}
            }  ;
             
             
        // B] Re-assigning / Modifying the object's properties  : 
            nObj.username = 'ali'; 
            nObj.id =  1000 ;
            // nObj.hire =  false ;
            nObj.skills.one =  'HTML' ;
            nObj.skills.two = 'CSS' ;
            nObj.skills.three = 'JS' ;
 
        // C] Access and printing the object's porperties  : 
            console.log(`
            First object's property basic value : ${nObj.username}
            Second object's property modfied value :  ${nObj.id}
            Third  object's property is an optional to has a vlaue ...
            Fourth object's property nested property modfied value 1  : ${nObj.skills.one}
            Fourth object's property nested property modfied value 2 : ${nObj.skills.two}
            Fourth object's property nested property modfied value 3 : ${nObj.skills.three}
            `) ;

    } else {
        console.log('No valid choice!') ;
    }
}
 