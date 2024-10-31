
// [orientation map] :   {App} <- {Home}  <- {Feed} <- {Post}        

/* This is the main home page component , including   :  
  - [props] => 
    -- {posts} : the defined datasource variable in the {App} element  
    -- {fetchError} : the state of the fectcihing errror incase of cahtching 
    -- {isLoading} : the state of loading data form the api while fetching   

  - [returns] => return conditional rendering according to the existed elements in the assinged {posts} prop , to display the imported {Feed} component or error text 
*/

import React from 'react'

import Feed from './Feed'

const Home = ({ posts , fetchError , isLoading }) => {
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
           posts.length ? <Feed posts={posts} /> :
            <p style={{ color: 'red', marginTop: '2rem' }} > No Posts  avaialable  </p>
        )
      }
    </main>
  )
}

export default Home;




