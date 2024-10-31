
// [orientation map] :   {App} <- {PostPage}   

/* The in-detailed dynamic Single post component , including  :   
  -  [props] :  
    -- {posts} => the single post git from the datasource 
    -- {handleDelete} => the function responsible for deleting the post 

  - [return] : Conditional rendering of the filtered single detailed Item [post -> according to defined id of this inner router page ] into the main script of the functional component + including [deletion button] for this post 
               OR displaying custom Error message with link into the main home page -> using the defined [Link] react hook   

  - [states management method ] : Redux  [easy-peasy]                

*/
   
// A] [Importings] section : 

  // 1] public importings : 
  import React, { Fragment } from 'react';
  import { Link, useParams , useHistory } from 'react-router-dom';


  // 2] import required importitng for [store method] :
  import { useStoreState , useStoreActions }  from 'easy-peasy' ;     

//----------------------------------------------------------------- 


const PostPage = () => {
  // B] [Definiton before the return]  section   : 
  
  // 1] Public Defines :   
    // a- Define the [id] extracted from the [useParams] hook :   
    const { id } = useParams();

    // b- Define the [history] :  
    const history = useHistory() ;


  // 2] Redux Store Defines : 
    // a- Define and pull [deletePost] action method  from the [Store] file    : 
    const deletePost = useStoreActions( (actions) => actions.deletePost) ;       
    
    // b- Define and pull [ getPostById ] state from the [Store] file    :
    const getPostById = useStoreState( (state) => state.getPostById) ;       
    

    // c- Define the [post] varaible  by using [getPostById]  upper defined state , and assigning the upper defined varialbe [id]  as the  pamranter of the  getPostById    :
    const post = getPostById(id) ;    // Assign the element [post] in the main array of the posts  that fulfill the condition of [if this post string id is equall to the defined id of Sub router using the useParams()  ] 
 

    /* d- Bring the [handleDelete] here , and pull it from the [store file] , with some modifications :
      1- we can delete the [async] keyword from {handleDelete} function -> because use it inside the define the [handleDelete] action 
      2- we used call and use the new defined method {deletePost} inside the store file with assin the (id) paramater  
      3- we remove the [try-catch] from the [handleDelete] basic syntax from here ,due we used it when define the [deletePost]       
    */
    const handleDelete = (id) => {
      deletePost(id);
      history.push('/');
    }
 

  // C] [Inside the comopnent's return]  section   : 
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
