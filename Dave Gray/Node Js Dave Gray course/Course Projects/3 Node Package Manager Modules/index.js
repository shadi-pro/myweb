
//   lesson 3 : Testing  [NPM ]   node package manager :

console.log('==================== Welcome to Node.js course -> lesson 3  node package manager [NPM]   =============================== ')

// This lesson will include praciical using  of  the   node npm modlues proceudures  and methods   :

// A]  Main  steps of installing and setting node modules  within the project  files              

// B]  Using the added packages in [index.js] file wiht in the node script and operating  wiht  node server     

// C] will use the custom scripts added inside  the [package.json]  file  => [npm run dev] 

// ================================================================================
// A]  Main  steps of installing and setting node modules  within the project  files :
// 1- Iinitializing the node and npm core nodlues witin a new project  :
 


// -------------------------------------------------------------------------------------------
// 2- Iinitializing the node and npm core modules witin a cloned  project [from git repository]  

// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------

// B]  Using the added packages in [index.js] file with in the node script and operating  wiht  node server :


// 1- using the  {format} from the installed [data-fns] library :
  // importing the {format}  from   {date-fns} :
  const  {format } = require('date-fns') ;
  
  // printing the current date the certain fomrating :
  // console.log() ;  
  
  console.log( 'The current full date is : \n' ,  format(new Date() , 'yyyyMMdd\tHH:mm:ss') ) ;  
// --------------------------------------


// 2- using the  {v4} from the installed [uuid] library :
  // importing the {v4}  from   { uuid } :
  const  { v4:uuid }   = require('uuid') ;
  // const  { v4 }   = require('uuid ') ;
  // const  uuid = require('uuid') ;
  
  // printing a random generated  value  [each time the code will run]    :
   
  console.log( 'The random generate number is : ' , uuid() ) ;  















  



