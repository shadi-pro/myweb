
// [orientation map] :   {App} <- {Home}  <- {Feed} <- {Post}        

/* This is the main home page component , including   :  
  - [props] => 
    -- {posts} : the defined datasource variable in the {App} element  
    -- {fetchError} : the state of the fectcihing errror incase of cahtching 
    -- {isLoading} : the state of loading data form the api while fetching   

  - [returns] => return conditional rendering according to the existed elements in the assinged {posts} prop , to display the imported {Feed} component or error text 
 
  - [ States mangament method]  =>  [Redux Easy-peasy]  
  
*/

// A] [Importings] section   :
// 1] Public importings : 
import React from 'react'
import Feed from './Feed'
// import { useLayoutEffect } from 'react'

// 2] import the required importings for using [Store] method : 
import {useStoreState } from 'easy-peasy' ;   

 
// Define the   main functioonal componnt , with  Add [fetchError] & [isLoading] props to be used according to the default props method  :      
const Home = ({ isLoading ,  fetchError }) => {
  
  // Define and pull [searchResults] from the [store] file :  
  const  searchResults   = useStoreState( (state) => state.searchResults ); 
 

  return (
    <main className='Home' >
       {/* displying  the [isLoading]  state by conditional rendering */} 
       {isLoading && 
        <p className='stateMsg'> Data is Loading .... </p>
      }
      
      {/* displying  the [fetchError]  state by conditional rendering */} 
      { !isLoading && fetchError && 
        <p className='stateMsg' style ={{color: 'red' }}  >  {fetchError} </p>
      }
      
      {/*  displying the fetched data [posts]  returned from the api  by conditional rendering    */} 
      {!isLoading && !fetchError && ( 
          searchResults.length ? <Feed posts={searchResults} /> :
            <p style={{ color: 'red', marginTop: '2rem' }} > No Posts  avaialable  </p>
        )
      }
    </main>
  )
}

export default Home;




