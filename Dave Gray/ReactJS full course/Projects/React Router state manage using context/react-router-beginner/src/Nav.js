
//  [ orientation map ]  :   {App} <- {Nav}

/*  This component of form of ad new post  , and  will include :
  - [props] => 
    -- {setSearch} :  will be used inside the onChange event function of the  [saerch input] to set the [search] state by the current value of this input  
   -- {search} : the  [saerch input]  'value'  attribute  will be set by  it's value after being have been set by it's setter function     
 
  - [return] => including the next (2) points : 
    --  Searching Form for current Posts in the project                   
    --  Main list of links for the inner routes pages of the project => using [Link] react router hook , as following  :    
      --- [Home] =>  to navigate  into the home page 
      --- [New Post] => to navigate  into the creating new post page 
      --- [About] => to navigate  into the about page 

 */


import React from 'react';


// Importing the link class from the  react router  library :   
import { Link } from 'react-router-dom';

// importing requrired hook to use the DataContext :
  import {useContext} from 'react' ;
  
// importing the DataContext file to be used in this component :
  import  DataContext  from './context/DataContext';

 
const Nav = () => {
  const {search, setSearch} = useContext(DataContext); 


  return (
    <nav className='Nav' >

      <form calssName="searchForm" onSubmit={(e) => e.preventDefault()}    >
        <label htmlFor="search" >
          Search Post :
        </label>

        <input
          id="search"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </form>

      <ul>
        <li>  <Link to='/'>  Home   </Link>    </li>
        <li>  <Link to='/post'>  New Post  </Link>    </li>
        <li>  <Link to='/about'>  About   </Link>    </li>
      </ul>

    </nav>
  )
}

export default Nav;