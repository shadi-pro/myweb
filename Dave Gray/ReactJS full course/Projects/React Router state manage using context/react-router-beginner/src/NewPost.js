
// [orientation map ] : {App} <- {NewPost} 


/*  Creating [New Post] component , including  :    
  - [return] :  Form of inserting post data through a controlled inputs , with using sent props + hanldikng submit function + submit button           
  - [props] :   
    -- [setPostTitle] -> setting the state [postTitle] by current  [postTitle input] value witin it's  onChange event function
    -- [postTitle]    -> setting the {postTitle input} 'value' attribute with this value -after being assinged with onChange function            
    -- [setPostBody]  -> setting the state [postBody] by current  [postBody input] value witin it's  onChange event 
    -- [postBody]     -> setting the {postBody input} 'value' attribute with this value -after being assinged with onChange event function            
    -- [handleSubmit] -> used diredctly as reference of the  oniSubmit() of the form , which wil include prevent default + all other defnitions of variables + functions requried to create and add new post      

*/

import React from 'react' ; 

// importing requrired hook to use the DataContext :
  import {useContext} from 'react' ;
  
// importing the DataContext file to be used in this component :
  import  DataContext  from './context/DataContext';
  

const NewPost = () => {

  // Define the main object of using props to be called from imported DataContext  file  :
  const { postTitle, setPostTitle, postBody, setPostBody, handleSubmit} = useContext(DataContext);   
  
  return (
    <main className='NewPost' >
      <h2> New Post </h2>


      <form className='newPostForm' onSubmit={handleSubmit}>
        <label htmlFor='postTitle' >
          Title:
        </label>

        <input
          id='postTitle'
          type='text'
          onChange={(e) => setPostTitle(e.target.value)}
          value={postTitle}
          required
        />

        <label htmlFor='postBody' >
          Body:
        </label>

        <textarea
          id='postBody'
          type='text'
          onChange={(e) => setPostBody(e.target.value)}
          value={postBody}
          required
        />

        <button  type ='submit'    >
            Submit Post
        </button>

      </form>
  
    </main>
  )
}

export default NewPost;