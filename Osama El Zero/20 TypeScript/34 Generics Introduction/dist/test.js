"use strict";
// [TS] lesson =>  34 Generics Introduction :
/* This lesson including following methods  :
   1- Define function of returning value of single Datatype using default method
   2- Define function of returning value of mulitiple Datatype using default method
   3- Define function of returning value of Generic Datatype using [Generic Function] by using [default Generic Name]
   4- Define function of returning value of Generic Datatype using [Generic Function] by using [Aliase Generic Name]
    
*/
console.log(`welcome to Test Define function of returning value of single Datatype using default method `);
// A] Define a main Function of Returning value of certain single datatype [string] :
function funcStr(val) {
    return val;
}
// A] Define a main Function of Returning value of certain single datatype [number] :
function funcNum(val) {
    return val;
}
// B] Define a main Function of Returning value of certain single datatype [boolean] :
function funcBol(val) {
    return val;
}
// C] Define a main Function of Returning value of certain single datatype [string array] :
function funcStrArr(val) {
    return val;
}
// D] Define a main Function of Returning value of certain single datatype [number array] :
function funcNumArr(val) {
    return val;
}
// E] Define a main Function of Returning value of certain single datatype [boolean array] :
function funcBolArr(val) {
    return val;
}
// F] Executing and printing function of getting value of different single datatypes :
console.log((`
        The return of default function of single string datatype :  ${funcStr('shadi')}
        The return of default function  of single number datatype : ${funcNum(100)}
        The return of default function  of single boolean datatype : ${funcBol(true)}         
        `));
// G] Executing and printing function of getting value of different array datatypes :
console.log((`
        The return of default function of array string datatype :  ${funcStrArr(['shadi', 'saeyd', 'mohammed'])}
        The return of default function of array number datatype : ${funcNumArr([100, 200, 300])}
        The return of default function of array boolean datatype : ${funcBolArr([true, false, true])}         
        `));
console.log('#'.repeat(15));
// ----------------------------------------------
// ----------------------------------------------
console.log(`welcome to Test Define function of returning value of multiple Datatypes using default method `);
// A] Define a main Function of Returning value of certain multiple datatypes [string | number |  boolean] :
function funcMult(val) {
    return val;
}
// B] Define a main Function of Returning value of certain multiple datatypes [string | number |  boolean] :
function funcMultArr(val) {
    return val;
}
// D] Executing and printing function of getting value of different multiple single datatypes :
console.log((`
        The return of default same function of multiple Array string datatype :  ${funcMult('shadi')}
        The return of default same function of multiple Array number datatype :  ${funcMult(100)}
        The return of default same function of multiple Array boolean datatype :  ${funcMult(true)}
        `));
// ----------------------------------------------
// D] Executing and printing function of getting value of different multiple array datatypes :
console.log((`
        The return of default same function of multiple Array string datatype :  ${funcMultArr(['shadi', ' Sagdu', 'aliu'])}
        The return of default same function of multiple Array number datatype :  ${funcMultArr([100, 200, 10000])}
        The return of default same function of multiple Array boolean datatype :  ${funcMultArr([true, false, true])}
        `));
console.log('#'.repeat(15));
// ----------------------------------------------
// ----------------------------------------------
console.log(`welcome to Test Define function of returning value of Generic Datatype using [Generic Function] by using [default Generic Name]`);
// A] Define a main Generic Type Function of Returning value of certain flexible datatypes using [default name of the Genenric ] :
function funcGen(val) {
    return val;
}
// B] Executing and printing Generic Type function of getting value with flexible datatypes :
console.log((`
        The return of Generic Type function of single string datatype :  ${funcGen('shadi')}
        The return of Generic Type function of single number datatype :  ${funcGen(1000)}
        The return of Generic Type function of single boolean datatype  :  ${funcGen(true)}
        The return of Generic Type function of array string datatype :  ${funcGen(['Shadi', 'Sayed', 'Ali'])}
        The return of Generic Type function of array number datatype :  ${funcGen([100, 200, 300])}
        The return of Generic Type function of array boolean datatype :  ${funcGen([true, false, true])}
        `));
console.log('#'.repeat(15));
// ----------------------------------------------
// ----------------------------------------------
console.log(`welcome to Test Define function of returning value of Generic Datatype using [Generic Function] by using [Aliase Generic Name] `);
// A] Define a main Generic Type Function of Returning value of certain flexible datatypes using [Aliase name of the Genenric ] :
function funcG(val) {
    return val;
}
// B] Executing and printing Generic Type function of getting value with flexible datatypes :
console.log((`
        The return of Generic Type function of single string datatype :  ${funcG('shadi')}
        The return of Generic Type function of single number datatype :  ${funcG(1000)}
        The return of Generic Type function of single boolean datatype  :  ${funcG(true)}
        The return of Generic Type function of array string datatype :  ${funcG(['Shadi', 'Sayed', 'Ali'])}
        The return of Generic Type function of array number datatype :  ${funcG([100, 200, 300])}
        The return of Generic Type function of array boolean datatype :  ${funcG([true, false, true])}
        `));
console.log('#'.repeat(15));
// ----------------------------------------------
// ----------------------------------------------
