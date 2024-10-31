
// [ orientation map ]  :  {App} <- {Footer}     

import React from 'react'

const Footer = () => {

  //  Define a exracted current date usnig object date   :
  const today = new Date();
  
  return (
    <footer className='Footer' >
        <p>  Copyright &copy; {today.getFullYear()}   </p>
    </footer>
  )
}

export default Footer;