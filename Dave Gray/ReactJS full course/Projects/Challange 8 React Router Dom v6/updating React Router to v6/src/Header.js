
// [main orientation map ] : {App} <- {Header}

/* The [Header] fixed component will include : 

  - [props] => 
      -- {title} the dynamic title value of the header coponent  to be assigned inside the [App] main component         
      -- {width} the value of window width  to be assigned inside the [App] main component by using the imported {useWindowSize} custom hook          

  - [return] => conditional element according the  value of the  width prop dynamic value of  the title        
*/
 

import React from 'react';
import { FaLaptop, FaTabletAlt, FaMobileAlt } from 'react-icons/fa';
 

const Header = ({ title, width }) => {
  return (
    <header className="Header"   >
      <h1> {title}   </h1>
      {width < 768 ?
        <FaMobileAlt /> :
        width < 992 ?
          <FaTabletAlt /> :
          <FaLaptop />
      }

    </header>
  )
}

export default Header;



