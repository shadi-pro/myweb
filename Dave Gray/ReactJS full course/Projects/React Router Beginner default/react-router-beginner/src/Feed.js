  
// [orientantion map] : {App} <- {Home} <- {Feed}

/*  The [Feed] component to be called inside the [Home] component : 
    - [props] :  {posts} =>   using the defined array of the datasorurce [posts] for mapping through and get each item of [post] with all it's details 
    - [parent Components]  to use this component -> {Home}         
    - [Child Components] imported and called : {Post}    
  
    - [return] :     
      mapping throgh the imported array  of  data source  {posts} -> to send the both of the [post id + post object] into the  next call;ed imported component [post] to be used its detailed data inside    



*/

import React from 'react';

import Post from './Post';


const Feed = ({ posts }) => {
  return (
    <main style={{ color: 'green', fontSize: '20px' }} >
      {
        posts.length !== 0 ? (
          posts.map((post) => (
            <Post key={post.id} post={post} />
          ))
        ) : (
          <p style={{ color: 'red', fontSize: '20px' , textDecoration: 'underline'}}> No Data available ! </p>
        )
      }
    </main>
  )
}

export default Feed;


// {
//  Object.entries(posts)
// }