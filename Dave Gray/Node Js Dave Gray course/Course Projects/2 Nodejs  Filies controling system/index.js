// Here the file where will control the other files in the project  =>  using the imported default [fs] node core module :  

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

// II] Using the  Extracted   [ (fs).promises ] {node core Module}  :

// A] Using the [async-await] method to  have a  promises  controled flow ouput (without hell drilling)  ->  by importing a extracted promises  from the  [ ('fs').promises ]    : 

// 1- Define an imported variable of extraced promises from  the 'fs'   [node core module] :
const fsPromises =  require('fs').promises;  

// 2- Define an imported variable of the 'path' [of this file ] {this is a better method instead of using the  manual path -> due to different systm path syntax } :
// const  path  =  require ('path')  ;
 

// 3- Define an async function with [async-await] that including all file's operations insie the  [try-catch]  :
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


 
