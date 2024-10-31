// [TS] lesson =>  35 Generics Multiple Types :

/* This lesson including following methods  :  
    1- Define a Generic Datatype Function with using {Arrow function Syntax}  
    2- Define a Generic Multiple Datatypes Function   
*/

console.log(`welcome to Test Define a Generic Datatype Function with using {Arrow function Syntax}   `);

// A] Define a main Generic Function with uainf {Arrow function syntax} of Returning value of certain felxible assigned datatype [with funcrion output : string] :
const funcGenArrow = <g>(val: g): g => val;

// B] Executing and printing the Arrow Type function of getting value of generic datatypes :
console.log(` The value of the generic Arrow Type Function with assigned datatype [string] is :
  ${funcGenArrow<string>('shadi')}`);
console.log(` The value of the generic Arrow Type Function with assigned datatype [number] is :
 ${funcGenArrow<number>(100)} `);
console.log(` The value of the generic Arrow Type Function with assigned datatype [boolean] is :
 ${funcGenArrow<boolean>(true)}`);
console.log(` The value of the generic Arrow Type Function with assigned datatype [string Array] is : 
${funcGenArrow<string[]>(['shadi', 'sayed', 'ali'])}`);
console.log(` The value of the generic Arrow Type Function with assigned datatype [number Array] is :
 ${funcGenArrow<number[]>([1, 2, 3])}`);
console.log(` The value of the generic Arrow Type Function with assigned datatype [boolean Array] is :
 ${funcGenArrow<boolean[]>([true, true, false])}`);


console.log('#'.repeat(15));
// ----------------------------------------------
// ----------------------------------------------

console.log(`welcome to Test Define a Generic Multiple Datatypes Function  `);


// A] Define a main Generic Function with using {Multiple function (2) syntax} of Returning value of certain flexible assigned datatype [with function output : string] :
function funcMultGen<g, t>(val1: g, val2: t): string {
    return `The first value is  ${val1} , and with assinged generic datatype is ${typeof (val1)} 
        The second value is ${val2} , and with assinged generic datatype is ${typeof (val2)}`;
}

// B] Executing and printing the Multiple Type (2) function of getting value of Multiple generic datatypes :
console.log(` The value of the Generic Multiple Types (2) Function with assigned datatype [string & number] is :
      ${funcMultGen<string, number>('shadi', 100)}`);

console.log(` The value of the Generic Multiple Types (2) Function with assigned datatype [number &  boolean] is :
     ${funcMultGen<number, boolean>(100, true)} `);

console.log(` The value of the Generic Multiple Types (2) Function with assigned datatype [boolean & string] is :
     ${funcMultGen<boolean, string>(true, 'shadi')}`);

console.log(` The value of the Generic Multiple Types (2) Function with assigned datatype [string Array & number Array] is : 
    ${funcMultGen<string[], number[]>(['shadi', 'sayed', 'ali'], [100, 200, 300])}`);

console.log(` The value of the Generic Multiple Types (2) Function with assigned datatype [number Array & string Array] is :
     ${funcMultGen<number[], string[]>([1, 2, 3], ['a', 'b', 'c'])}`);

console.log(` The value of the Generic Multiple Types (2) Function with assigned datatype [boolean Array & number Array ] is :
     ${funcMultGen<boolean[], number[]>([true, true, false], [100, 200, 300])}`);


console.log('#'.repeat(15));
// ----------------------------------------------
