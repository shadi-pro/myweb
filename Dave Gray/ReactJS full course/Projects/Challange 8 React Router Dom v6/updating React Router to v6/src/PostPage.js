
// [orientation map] :   {App} <- {PostPage}   

/* The in-detailed dynamic Single post component , including  :   
  -  [props] :  
    -- {posts} => the single post git from the datasource 
    -- {handleDelete} => the function responsible for deleting the post 

  - [return] : Conditional rendering of the filtered single detailed Item [post -> according to defined id of this inner router page ] into the main script of the functional component + including [deletion button] for this post 
               OR displaying custom Error message with link into the main home page -> using the defined [Link] react hook   

*/


import React, { Fragment } from 'react';
import { Link, useParams } from 'react-router-dom';
// import  EditPost from './EditPost';

const PostPage = ({ posts, handleDelete }) => {

  // Define dynamic parameter for [id] as sub router for this inner page Router  :
  const { id } = useParams();

  // Define the [Single Post object  value] item from [posts] array datasource -> according to defined [{id} sub router]  + and filtering [Posts] array datasource :
  const post = posts.find(post => (post.id).toString() === id);    // Assign the element [post] in the main array of the posts  that fulfill the condition of [if this post string id is equall to the defined id of Sub router using the useParams()  ] 


  return (
    <main className='postPage'>

      <article className='post'>

        {/*  plugging in  the defined variable of the find {post} element   => incase of obtained data from datasource {posts} prop [post is existed and obaitned]     */}
        {
          post &&
          <Fragment>
            <h1> {post.title}  </h1>
            <p className="postDate" > {post.dateTime}  </p>
            <p className="postBody" >  {post.body}  </p>

            {/*  Adding button to routing to [EditPost] route page  */}
            <Link  to = {`/edit/${post.id}`} >
              <button className='editButton'>
                Edit post
              </button>
            </Link>


            {/*  Adding button to executing the delete function   */}
            <button
              className="deleteButton"
              // using the  imported fuction of the {handleDelete} of the this post {post.id}  :
              onClick={() => handleDelete(post.id)}
            >
              Delete Post
            </button>

          </Fragment>
        }

        {/*  plugging in the  custom error message and link to the home page => incase of NON obtained data from datasource {posts} prop [post is NOT existed or NOT  obaitned]    */}
        {
          !post &&
          <Fragment>

            <p > No Post found!   </p>
            <p >
              <Link to='/' >
                Return to Home Page
              </Link>
            </p>

          </Fragment>
        }
      </article>
    </main>
  )
}

export default PostPage;
