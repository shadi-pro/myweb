
/* [Square] First element of  the Color Changer app  , including  : 
   -- assigning the value of both [colorValue] prop  , [hexValue] prop inside the backgroundColor style value of section  displayer  
   -- assigning the value of both [colorValue] prop , [hexValue] prop as text inside the  inner both paragraph values inside  section  displayer  
   -- assigning the value of  defined [ isDarkText] state prop boolean value  inside the color property    
*/


import React from 'react'

const Square = ({ colorValue , hexValue , isDarkText  }) => {
  return (
    <section 
      className= 'square' 
      style={{ 
        backgroundColor: colorValue || hexValue  ,
        color:  isDarkText ? "#000" :  "#fff"  
      }} 
    >
       <p>  {colorValue ?  colorValue : 'empty value'}   </p>
       <p>  {hexValue ?  hexValue : null }   </p>
    </section>
  )
}

Square.defaultProps = {
  colorValue : 'empty color value'
}


export default Square ;