
//  [orientation map]  :  {App} <- {Home} <- {Feed} <- {Post}      

/* The public Single Post display inner router component , including   : 
  - [return] => 
    --  general display of [Each Post] -> to be called inside the {Feed} parent component within mapping  
    --  calling current post in-detailed data properties wihtin [links] routering hook      
    --  conditional rendering of post body propetry with ecylipse  format   -> according to the current number of letters       

*/
 


import React from 'react'
import { Link } from 'react-router-dom';


const Post = ({ post }) => {
  
  return (
    <article>
      
      <Link to={`/post/${post.id}`}>
        <h2>
          {post.title}
        </h2>

        <p className="postDate" >
          {post.dateTime}
        </p>
      </Link>

      {/*  Rendering the post body after slicing it when its length is graeter than 25 letters  [ as ecilipse data in the  main home page ]  */}
      <p className='postBody' >
        {
          (post.body).length <= 20 ?
          post.body : 
          `${(post.body).slice(0,20)}...`
        }   
      </p>
    </article>
  )
}

export default Post; 
