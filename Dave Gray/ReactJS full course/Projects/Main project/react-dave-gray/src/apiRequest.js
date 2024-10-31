
//  This functional component will include paramater  to be used when calling for the differnet crud operations :


import React from 'react'

const apiRequest = async(url='', optionsObj = null , errMsg = null ) => {
  
  try{
    const response  = await fetch(url ,  optionsObj) ;
    
    if (!response.ok)  throw Error ('Please Reload the app ') ;   

  } catch(err) { 
    
    errMsg = err.messsage ; 
  
  } finally  { 
  
    return errMsg ;  

  }
   
  
}

export default apiRequest ;