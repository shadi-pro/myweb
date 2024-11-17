// this file to testing the  directory commands of the [Node]  : 

// importing the 'fs' from the [node core module]   :
const  fs  = require('fs'); 

 
// [Exp 1] : using the {mkdir} method to create a new directory in the main root of file system -> [inside the checking if  this  directory is not existed already by using  {!fs.existsSync('./Directory Name to be checked') }  ] :  
if (!fs.existsSync('./new')) {

  // Creating the new directory [incase the unexisted directory ] : 
  fs.mkdir('./new' , (err)   => {
    // Throw the error if eixsted :
    if (err) throw  err ;

    // Print a confirmation messsage   :
    console.log('A new directory of  "new"  has been created successfuly ! ') ;    
  } )
  
} else {
  // Print a confirmation messsage [incase the directory is already existed ]   :
  console.log('This directory of "new" is already existed  ! ') ;
}
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

// [Exp 2] : using the {rmdir} method to remove the directory if it already existed  in the main root of file system -> [inside the checking if  this  directory is  existed already by using  {fs.existsSync('./Directory Name to be checked') }  ] :  
if (fs.existsSync('./newDir')) {

  // Remove/Delete the  directory [incase if it exsited]  : 
  fs.rmdir('./newDir' , (err)   => {
    // Throw the error if eixsted :
    if (err) throw  err ;

    // Print a confirmation messsage   :
    console.log('The directory of "newDir"  has been removed successfully ! ') ;    
  } )
  
} else {
  // Print a confirmation messsage [incase the directory is already existed ]   :
  console.log('This directory of "newDir" is Not existed already ! ') ;
}


// Notes :
  // 1- the {existsSync('./directory Path' OR './file Path')} is used for  checking for existed directories  or files    

