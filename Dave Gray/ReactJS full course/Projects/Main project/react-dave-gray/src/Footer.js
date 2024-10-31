// Footer component :

import React from 'react'
 
const Footer = () => {
  // Define a function of logic  :
  const myDate =  new Date() ;  
  
  // Define a variable of css object   :
  const myStyle =  {
    backgroundColor: 'black' , 
    color: 'white' , 
    width: '100%'  
  };   

  return (
    <footer className="App-header">
    
        Footer component 
      
        <p style={ myStyle } > 
            Copyright by  &copy; {myDate.getFullYear()}         
        </p>

    </footer>
  )
}

export default Footer ;