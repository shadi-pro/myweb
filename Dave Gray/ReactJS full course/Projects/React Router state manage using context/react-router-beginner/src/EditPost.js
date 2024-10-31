
// [EditPost] component to handle the edit post  of edit/modify crud  operation :

import React, { Fragment, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

// importing requrired hook to use the DataContext :
import {useContext} from 'react' ;
  
// importing the DataContext file to be used in this component :
  import  DataContext  from './context/DataContext';
  

// Define the main component  functions wth sending the porps to be recived in [App.js]  : 
const EditPost = () => {

  //  Define the main object of props to be imported from the context :  
  const {posts, handleEdit, editTitle, setEditTitle, editBody, setEditBody} = useContext(DataContext) ;

  //  Define object  the dynmaic [Router id] of this item , using the  imported  useParams() hook :
  const { id } = useParams();

  // Define the dynamic item post [according to of this id value ]   :
  const post = posts.find(post => (post.id).toString() === id) ;

  /* Define the  useEffect of handling the modification operation with assign [dependencies] of each : 
    post : to allow modification incase  of  [full object]  
    setEditTitle   : to allow  modification incase  of  [title  of object ]  
    setBodyTitle   : to allow  modification incase  of  [body   of object ]      
  */

  useEffect(() => {
    // conditional  setting the both of prop  [EditTitle]  &  [EditBody ]  incase of returned [post]  :
    if (post) {
      setEditTitle(post.title)
      setEditBody(post.body)
    }
  }, [post, setEditTitle, setEditBody])


  //  return the main form of modifying/edit the current post item  : 
  return (
    <main className='NewPost' >
       {/* using the {editTitle} prop  because it is an essential for any modificartion [no modification wihtout  post title   ]   */}
      {editTitle &&
        <Fragment>
          <h2> Edit Post </h2>

          {/*  creating for with stopped default but with passgin through the [post.id]  inside the submit button  */}
          <form className='newPostForm' onSubmit={(e) => e.preventDefault()}>
            <label htmlFor='postTitle' >
              Title:
            </label>

            <input
              id='postTitle'
              type='text'
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              required
            />

            <label htmlFor='postBody' >
              Body:
            </label>

            <textarea
              id='postBody'
              type='text'
              value={editBody}
              onChange={(e) => setEditBody(e.target.value)}
              required
            />

            <button type='submit'
              onClick={() => handleEdit(post.id)}
            >
              Edit Post
            </button>
          </form>
        </Fragment>
      }

      {!editTitle &&
        <Fragment>
          <p> No page found!    </p>
          <p>
            <Link to='/' >
              Return to Home page
            </Link>
          </p>
        </Fragment>
      }
    </main>
  )
}

export default EditPost;


