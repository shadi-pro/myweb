// This file will include the connection method wiht defined   [mongodb ] : 
  //   the defined method {connectDB} inside  will bve called inside the server  file      
// --------------------------------------------


// Define and import the [mongoose] library to use it in setting  the  connection method     :
   const mongoose = require('mongoose');  
    

//  define the main connection method   :  
const connectDB  = async () => {
  try { 
    await mongoose.connect(process.env.DATABASE_URI , {
      useUnifiedTopology : true , 
      useNewUrlParser  : true  
    }) ;

  } catch(err)  {
    console.error(err);  
  }
  
} 

// --------------
 module.exports = connectDB ;



