
// [EditPost] component to handle the edit post  of edit/modify crud operation + using the  [redux easy-peasy]  method    :

 
// A] [Importings] section    :
  // 1] Public importing :

  import React, { Fragment, useEffect } from 'react';
  import {  format } from 'date-fns' ; 
  import { useParams, Link , useHistory } from 'react-router-dom' ; 


  // 2] Importing for using the [redux store method]  :
  import {  useStoreState , useStoreActions } from 'easy-peasy' ; 


// Define the main component function    : 
const EditPost = () => {

  // B] [Defintions before return] section :  
  
  // 1] Public Defines  :
  // 1- define a history for redirect :
  const history =  useHistory() ;

  // 2- Define object  the dynmaic [Router id] of this item , using the  imported  useParams() hook :
  const {id} =  useParams() ;


  // 2] [Redux Store method]  Defines  :

  // 3- Define the [postTitle] varialbe state as extracted from the {useStoreState} :  
  const editTitle  = useStoreState( (state) => state.editTitle) ;
  
  // 4- Define the [postBody] varialbe state s as extracted from the {useStoreState} :  
  const editBody  = useStoreState( (state) => state.editBody) ;
  
  // 5- Define the [editPost] variable thunk method as extracted from the {useStoreActions } :  
  const editPost  = useStoreActions( (actions) => actions.editPost) ;
  
  
  // 6- Define the [setPostTitle] variable method as extracted from the {useStoreActions } :  
  const setEditTitle  = useStoreActions( (actions) => actions.setEditTitle) ;


  // 7- Define the [setPostBody] variable method as extracted from the {useStoreActions } :  
  const setEditBody  = useStoreActions( (actions) => actions.setEditBody ) ;
  
  
  // 1- Define and pull [ getPostById ] state from the [Store] file    :
  const getPostById = useStoreState( (state) => state.getPostById) ;       

  // 2- Define the [post] varaible  by using [getPostById]  upper defined state , and assigning the upper defined varialbe [id]  as the  pamranter of the  getPostById    :
  const post = getPostById(id) ;    // Assign the element [post] in the main array of the posts  that fulfill the condition of [if this post string id is equall to the defined id of Sub router using the useParams()  ] 

 
 
  /* 8- Define the  useEffect of handling the modification operation with assign [dependencies] of each : 
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


  // 9- creating the [Editing crud operation] according to [axios] => this function will be used wihtin the [editPost] component (we can remove the 'async' keyword from here , because we used it in the easy-peasy thunk action store )  :
  const handleEdit = (id) => {

    // 1- {[dateTime] property} Define  a variable of date => [as a one of the modified item object's property]  with custom format pattern : 
    const dateTime = format(new Date(), 'MMMM dd , yyyy pp');

    // 2- Define a variable of full updated item post object after being updated/editing [with assigning  both of  [title] & [body] with defined status ]  : 
    const updatedPost = { id, title: editTitle, dateTime, body: editBody };
    
    // call the defined thunk method  with assign the upper defined of  [updatedPost] as it's parameter       :
    editPost(updatedPost) ;
    
    history.push(`/post/${id}`);
  }


  //  return the main form of modifying/edit the current post item  : 
  return (
    <main className='NewPost' >
       {/* using the {editTitle} prop  because it is an essential for any modificartion [no modification wihtout  post title  */}
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

            <button type='button'
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


