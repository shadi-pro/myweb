// testing defining a single and nested Object  with using Type annotation   :


// A] Define a single object with using datatype annotation  : 
let myObj: {
    username: string,
    id: number,
    hire: boolean
} = {
    username: 'shadi',
    id: 100,
    hire: true
};


// B] Re-assining / Modifying the object's properties  : 
myObj.username = 'ali';
myObj.id = 1000;
myObj.hire = false;

// C] Access and printing the object's porperties  : 
console.log(`
            First object's property modfied value  ${myObj.username}
            Second object's property modfied value  ${myObj.id}
            Thrid object's property modfied value  ${myObj.hire}
        `);

// --------------------------------------.


// A] Define a nested object with using datatype annotation with using [readonly] property : 
let nObj: {
    readonly username: string,
    id: number,
    hire: boolean,
    skills: { one: string, two: string, three: string }
} = {
    username: 'shadi',
    id: 100,
    hire: true,
    skills: { one: 'html', two: 'css ', three: 'js' }
};


// B] Re-assigning / Modifying the object's properties  : 

// nObj.username = 'ali'; => [can not be modfied , due it is a {readonly}  property ]
nObj.id = 1000;
nObj.hire = false;
nObj.skills.one = 'HTML';
nObj.skills.two = 'CSS';
nObj.skills.three = 'JS';

// C] Access and printing the object's porperties  : 
console.log(`
First object's property basic value : ${nObj.username}
Second object's property modfied value :  ${nObj.id}
Thrid object's property modfied value : ${nObj.hire}
Fourth object's property nested property modfied value 1  : ${nObj.skills.one}
Fourth object's property nested property modfied value 2 : ${nObj.skills.two}
Fourth object's property nested property modfied value 3 : ${nObj.skills.three}
`);

// ---------------------------------------------


// A] Define a nested object with using datatype annotation with using [optional variable ] property : 
let nObj1: {
    username: string,
    id: number,
    // This property is optional to has a value : 
    hire?: boolean,
    skills: { one: string, two: string, three: string }
} = {
    username: 'shadi',
    id: 100,
    // This property is optional to has a value : 
    // hire : true ,
    skills: { one: 'html', two: 'css ', three: 'js' }
};


// B] Re-assigning / Modifying the object's properties  : 
nObj1.username = 'ali';
nObj1.id = 1000;
// nObj.hire =  false ;
nObj1.skills.one = 'HTML';
nObj1.skills.two = 'CSS';
nObj1.skills.three = 'JS';

// C] Access and printing the object's porperties  : 
console.log(`
First object's property basic value : ${nObj1.username}
Second object's property modfied value :  ${nObj1.id}
Third  object's property is an optional to has a vlaue ...
Fourth object's property nested property modfied value 1  : ${nObj1.skills.one}
Fourth object's property nested property modfied value 2 : ${nObj1.skills.two}
Fourth object's property nested property modfied value 3 : ${nObj1.skills.three}
`);


