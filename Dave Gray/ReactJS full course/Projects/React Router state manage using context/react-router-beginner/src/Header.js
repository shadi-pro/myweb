
// [main orientation map ] : {App} <- {Header}

/* The [Header] fixed component will include : 

  - [props] => 
      -- {title} the dynamic title value of the header coponent  to be assigned inside the [App] main component         
      -- {width} the value of window width  to be assigned inside the [App] main component by using the imported {useWindowSize} custom hook          

  - [return] => conditional element according the  value of the  width prop dynamic value of  the title        
*/


import React from 'react';
import { FaLaptop, FaTabletAlt, FaMobileAlt } from 'react-icons/fa';

// import the {useContext} hook to allow access to the defined {DataContext.js} file   : 
import { useContext } from 'react';

// import the {DataContext} variable from  it's  file: 
import  DataContext  from './context/DataContext';


const Header = ({ title }) => {
  // Define the prop as extreacted value  of the improted }{useContext} hook :
  const {width} = useContext(DataContext);

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



