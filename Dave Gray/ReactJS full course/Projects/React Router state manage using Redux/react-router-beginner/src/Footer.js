
// [ orientation map ]  :  {App} <- {Footer}     

import React from 'react'
 
import { useStoreState } from 'easy-peasy';

const Footer = () => {

  //  Define a exracted current date usnig object date   :
  const today = new Date();
  
  // Define and call the [postCount]
    const postCount = useStoreState((state)=>  state.postCount  )  ;

  return (
    <footer className='Footer' >
        <p>  {postCount} Blog Posts    </p>
        <p>  Copyright &copy; {today.getFullYear()}   </p>
    </footer>
  )
}

export default Footer;