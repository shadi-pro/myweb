//   lesson 2 : Testing  [File and Directory]  Controling methods  of node.js server 

console.log('==================== Welcome to Node.js course -> lesson 2 File and Directory controling system methods  =============================== ')


// Thie file  include will  Files  and  Directory  Controling methods the other in the project  =>  using the imported default [fs] OR  the it's extracted [.promsises]  form [node core module] , with following map  :  
   // [First] : File Node controling methods :
      // I] Using the default [fs] {node core Module} :
        // 1- { fs.readFile() } => Default reading file's contents  
        // 2- { fs.writeFile() } => Default writing a new  contents insdie a file's  
        // 3- { fs.appendFile() } => Add new   contents onto the current  file's contents   
        // 4- { fs.rename() } =>  rename a  file
        // 5- { fs.unlink() } =>  Deleting/removing an existed  file   
      //--------------------------------------------------------  

      // II] Using the  Extracted  promises  [ (fs).promises ] {node core Module}  within [async-await]  :
        // 1- { fsPromises.readFile() } => promising  reading file's contents  
        // 2- { fsPromises.writeFile() } => promising writing a new  contents insdie a file's  
        // 3- { fsPromises.appendFile() } => Promising Add new contents onto the current  file's contents   
        // 4- { fsPromises.rename() } =>  promising rename a  file
        // 5- { fsPromises.unlink() } => promising  Deleting/removing an existed  file   
      //--------------------------------------------------------
    
      // III] Using the Extracted  [ (fs) ] Stream methods  of  {node core Module}  => within [stream.js] :
        // 1- fs.createReadStream('inner path' ,  {encoding:'utf8'})  =>   [file read stream] variable definition  
        // 2- fs.createWriteStream('inner path')    => [file write  stream] variable definition     
        // 3- streamReadVar.on('data' , (ChunkPar) => { } )  => [reading method from the defined stream file variable]  method   
        // 4- streamWriteVar.write(data to be added )   =>  [Writing  inside the defined stream write file ]  method  definition    
        // 5- streamReadVar.on('data' , (ChunkPar) => { streamWriteVar.write(data to be added ) }  )    => [ reading method from the defined stream file variable ]  + [Writing method ]  method  definition    
        // 6- streamReadVar.pipe( streamWriteVar) => shortcut method of writing the data obtained from the stream read into  the write stream file           


    // [Second] : Node Directory controling methods  :     
      // 1- {mkdir()} => Create a new Directory  
      // 2- {rmdir()} => Remove an existed  Directory 
      // 3- {fs.existsSync(directory || file root path) } =>   Checking if the file or directory is existed or not         
  // ================================================================================================================ 
  // ================================================================================================================ 

// --------------------------------------------------
// [First] : Node File controling methods :  
// --------------------------------------------------

// I] Using the default [fs] {node core Module}  :
// A] Creating the essential importings :
  
  //  Define an imported variable of the 'fs' [node core module] :
    // const fs =  require ('fs')  ;

  //  Define an imported variable of the 'path' [of this file ] {this is a better method instead of using the  manual path -> due to different systm path syntax } :
    const  path  =  require ('path')  ;

// B] { fs.readFile() } :   [file read]  method of Node  :

// [Exp] :  Get access to the file content  and  printing , with caught the error  + and unCaughted error : 
// 1- Call the {readFile()} method [callback function] from  [fs] variable ,  with next properties : 
   // a-  using  the defined variabe of the [path with join() method  to manual assign the  file  path ] to avoid the different system syntax of path      
   // b-  using "utf8" encoding [to auto convert the data returned into a string value , without need to use extra {toString} method ] 
   // c-  using  [err] parameter  to through the default err content  
 
// fs.readFile( path.join(__dirname , 'files' , 'text.txt' ) , 'utf8', (err , data)  => {
//   // If the {readFile} method  return an error -> throw the error     :  
//   if (err)  throw err;        
  
//   // Print the file data after converting to string - if there are  not an error : 
//   // console.log(data.toString()); 
   
//   // Directly print the file data after without using {toString}    -  due we assign the endcoding of 'utf8' : 
//   console.log(data); 
// })

// // Printing a text after using a log method to test the priority of exection :
// console.log(' This after string after using readfile method ...  ') 


// // 2- Printing the uncaughted exception error using the [process.on()] built-in method [that not need to be imported]  :
//   process.on( 'uncaughtException' , err =>   {
//       // Printing the [UncaughtException] using  the {err} parameter :
//       console.error( `The UncaughtException is : ${err} ` )
      
//       // Exit the {process} method :   
//       process.exit(1)
//   })
 
// // -----------------------------------------------------------
// // -----------------------------------------------------------

// // C] { fs.writeFile() }  :  [write inside file] method of Node    :   

// // 1- using the [fileWrite] method to write the assign text + with  using the  {path}  :   
// fs.writeFile( path.join( __dirname ,  'files' , 'text1.txt') , 'this text wil be  written by [filewrite()] method: Nice to meet you \n '  ,  (err) => {
//   if (err) throw err ; 
//   console.log('Writting new content  by using (writeFile) method completed  successfuly     ' ) ; 
// })   


// // 2- Handling Uncaughting the unexpected error by using process.on()  :
// process.on('uncaughtException' , err => {
//   // printign the uncaughted error if it existed :
//   console.error(`The unCaught Exception  Error  is :    ${err}`);
 
//   // stop working of process method :
//   process.exit(1)
//  })
// // --------------------------------------------------------------------
// // --------------------------------------------------------------------
 
// // D] { fs.appendFile() }  :  [ udpate file content ] method of Node    :   

// // 1- using the [appendfile] method to write the assign text + with  using the  {path}  :   
// fs.appendFile( path.join( __dirname ,  'files' , 'text2.txt') , 'this text will be  update  the last previous content by [ appendFile()] method :  new content  by using  method  {appendFile } \n '  ,  (err) => {
//   //  Throwing the error if existed   :
//   if (err) throw err ; 

//   // printing a confirmation  message :
//   console.log(' udpate file content process completed  successflly  ' ) ; 
// })   


// // 2- Handling Uncaughting the unexpected error by using process.on()  :
// process.on('uncaughtException' , err => {
//   // printign the uncaughted error if it existed :
//   console.error(`The unCaught Exception  Error  is :  ${err}`);
 
//   // Stop working of process method :
//   process.exit(1)
//  })

// //  -----------------------------------------------
// //  -----------------------------------------------


// // E] Nested methods of {writeFile()} and {appendFile()} to create + write + then append content + rename file by using  {rename() method } :      

// // 1- using the [writeFile] method to create a new file and  write :   
// fs.writeFile( path.join(__dirname , 'files' , 'text0.txt') ,  'This the new contents to of this file created by using (writeFile) ' , (err) => { 
//   // a- Throw the caughted error if existed :
//   if (err) throw err ;

//   // b- printing a confirmation  message of [create and write processes]  :
//   console.log(' create and write file content process completed  successfully  ' ) ; 

//   // 2- Updating the created file  by appending a new contents using the {appendFile()}  :  
//   fs.appendFile( path.join(__dirname , 'files' , 'text0.txt') ,  '\n\n new contents added by using append method ' , (err) => {

//     // a- Throw the caughted error if existed :
//     if (err) throw err ;

//     // b- printing a confirmation message of [Appending updating ] process :
//       console.log(' Appending Update file content process completed  successfully  ' ) ; 
    
//     // 3- Rename the created and appended file [using the  {rename()} method ]  :
//     fs.rename( path.join(__dirname , 'files' , 'text0.txt')  , path.join(__dirname , 'files' , 'newText.txt')  , (err) =>{
//       // a- Throw the caughted error if existed :
//       if (err) throw err ;

//       // b- printing a confirmation message of [rename] process :
//       console.log(' Appending Update file content process completed  successfully  ' ) ; 
 
//     })

//   })

// })
//  -----------------------------------------------
//  -----------------------------------------------
//  -----------------------------------------------

// II] Using the  Extracted  promises  [ (fs).promises ] {node core Module}  :

// A] Using the [async-await] method to  have a  promises  controled flow output (without hell drilling)  ->  by importing a extracted promises from the [ ('fs').promises ] : 

// 1- Define an imported variable of extraced promises from  the 'fs'   [node core module] :
const fsPromises =  require('fs').promises;  

// 2- Define an imported variable of the 'path' [of this file ] {this is a better method instead of using the  manual path -> due to different systm path syntax } :
// const  path  =  require ('path')  ;
 

// 3- Define an async function with [async-await] that including all file's operations inside the  [try-catch] + nested  method   :
const fileOps = async () => {
  try {
    // a- Define a [data] variable as  a await value of [read file] method from the defined and imported [promise fs]   :      
    const data = await fsPromises.readFile(  path.join(__dirname , 'files' ,  'text.txt' ) , 'utf8' ) ;  

    // Printing the read data from the main file [text.txt] :
    console.log('The original data contents from the first file is\n' , data , '\n=========================\n\n' );  

    // b- Define another file process of await [write process] to write the read data from the previous process of read file into a new create file  :   
     await fsPromises.writeFile(  path.join(__dirname , 'files' ,  'textPromise.txt' )  ,  data) ; 
     
      
    // c- Define  a new file process of  appending contents on the previous file :   
      await fsPromises.appendFile(  path.join(__dirname , 'files' ,  'textPromise.txt' )  ,  '\n\nNew content by using  {appendFile} promise method    '  ) ;

    // d- Define  a new file of  [rename ] process  of the previous file :   
      await fsPromises.rename(  path.join(__dirname , 'files' ,  'textPromise.txt' )  ,  path.join(__dirname , 'files' ,  'PromiseComplete.txt' ) ) ;

    // e- Define a new varaible  of read data from  the new created file's contents  using await of {readFile(}) method :     
      const newData  = await fsPromises.readFile( path.join( __dirname , 'files' , 'PromiseComplete.txt' ) ,   'utf8' ) ;
      
    // f- Printing the read data from the new  created  file [PromiseComplete.txt] :
      console.log('The new data contents from the new created file is\n'  ,    newData  , '\n=========================\n\n'  );   
      
      
      // g- Deleting an existed file using {unlink()}  method    
      await fsPromises.unlink(path.join(__dirname, 'files' ,  'text2.txt' )  )  
 
      // Print a confirm message of the process  :
      console.log('The file "text2.txt"  has deleted successfully ! \n'    , '\n=========================\n\n'  );   
 

  } catch (err) {
    console.error(err);  
  }     
}    


// execute the defined promises function :  
fileOps() ;   
// ----------------------------------------------------------
// III] Using the Extracted  [ (fs) ] Stream methods  of  {node core Module}  => within [stream.js]  


// ----------------------------------------------------------
// ----------------------------------------------------------


// [Second]   : Node Directory controling methods  => within the {dir.js} file  



