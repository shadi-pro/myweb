//   lesson 1 :   (intro)  Testing node.js server 

console.log('==================== Welcome to Node.js course -> lesson 1 intro =============================== ')

// A] Applying Some built-in [Method]  & [Constants]  in [Node.js] :

// [Exp 1] : Applying Some built-in general consants :
console.log(' Exp1 : Applying Some built-in general consants' + '\n-------------------\n')

// a-  Get and print the [current full directory]    :  
console.log('The current full directory [using the constant {__dirname}]  is : \n ' + __dirname + '\n-------------------\n')

// b-  Get and print the [current file  name ]    :  
console.log('The current  file name [using the constant {__filename}]  is : \n' + __filename + '\n-------------------\n')
// ---------------------------------------------------
// ---------------------------------------------------


// [Exp 2] : Applying Some built-in  methods related to the  ['os'] file  [from Node core module]  :
console.log(' Exp2 :  Applying Some built-in  methods related to the  ["os"] file [from Node core module]  ' + '\n-------------------\n')

// a- Importing the ['os']  file of the operator system using the  [requrire('os')]  method   :  
const os = require('os')
// -----------------------------------------------

// b- Get and print some information of the ['os'] file  :

// 1- Get and print the [type] of [os] file using the  {.type() }    :
console.log("Get and print the [type] of [os] file using the  {.type() } : \n " + os.type() + '\n-------------------\n')

// 2- Get and print the [version] of [os] file using the  {.version() }    :
console.log("Get and print the [version] of [os] file using the  {.version() } \n " + os.version() + '\n-------------------\n')

// 3- Get and print the [home directory ] of [os] file using the  {.homedir() }    :
console.log("Get and print the [home directory ] of [os] file using the  {.homedir() } \n " + os.homedir() + '\n-------------------\n')
// ---------------------------------------------------
// ---------------------------------------------------

// [Exp 3] : Applying Some built-in  [Methods] & [Constants]  related to the  ['path'] file  [from Node core module]  :

// a- Importing the ['path']   the value of the current path ->   using the  [requrire('path')] method   :  
const path = require('path')
// -----------------------------------------------

// b- Get and print some information of the ['path'] file  , using  bult-in methods + bult-in constants       :

// 1- Get and print the [current file name]  using the  {.dirname()} method  + constant of the {__filename } parameter   :
console.log('Get and print the [current file name]  using the  {.dirname()} method  + constant of the {__filename } parameter \n ' + path.dirname(__filename) + '\n-------------------\n')

// 2- Get and print the [current file base name]  using the  {.basename()} method  + constant of the {__filename } parameter   :
console.log("Get and print the [current file name - base name   - ]  using the  {.basename()} method  + constant of the {__filename } parameter \n " + path.basename(__filename) + '\n-------------------\n')

// 3- Get and print the [extension file  name]  using the  {.extname()} method  + constant of the {__filename } parameter   :
console.log("Get and print the [current file extension ]  using the  {.basename()} method  + constant of the {__filename } parameter \n " + path.extname(__filename) + '\n-------------------\n')

// 4- Get and print the [object information about the file name]  using the  {.parse()} method  + constant of the {__filename } parameter   :
console.log("Get and print the [current file name]  using the  {.parse()} method  + constant of the {__filename } parameter \n ")

console.log(path.parse(__filename))

// ---------------------------------------------------
// ---------------------------------------------------

// [Exp4] : Importing the full new custom file + inner child  defined  functions -> from [node core module] :    
//  General importing of the full file   : 
// const math =  require('./math') 

// Specific importing a child defined function {destructured importing}  :
const { add , sub , mult, divid} =  require('./math') 


// Calling and using the {add()} function [ directly from imported destructured file ] :
console.log(add(1 , 2 ))

// Calling and using the {sub()} function [ directly from imported destructured file ] :
console.log(sub(1 , 2 ))

// Calling and using the {mult()} function [ directly from imported destructured file ] :
console.log(mult(1 , 2 ))

// Calling and using the {divid()} function [ directly from imported destructured file ] :
console.log(divid(1 , 2 ))



   










