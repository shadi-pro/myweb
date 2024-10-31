
// [orientation map ] : {App} <- {NewPost} 


/*  Creating [New Post] component , including  :    
  - [return] :  Form of inserting post data through a controlled inputs , with using sent props + hanldikng submit function + submit button           
  - [props] :   
    -- [setPostTitle] -> setting the state [postTitle] by current  [postTitle input] value witin it's  onChange event function
    -- [postTitle]    -> setting the {postTitle input} 'value' attribute with this value -after being assinged with onChange function            
    -- [setPostBody]  -> setting the state [postBody] by current  [postBody input] value witin it's  onChange event 
    -- [postBody]     -> setting the {postBody input} 'value' attribute with this value -after being assinged with onChange event function            
    -- [handleSubmit] -> used diredctly as reference of the  oniSubmit() of the form , which wil include prevent default + all other defnitions of variables + functions requried to create and add new post      

    - [ States mangament method]  =>  [Redux Easy-peasy]   
*/

// A]  importings section   : 

  // 1]  Public importings  : 
  import { React} from 'react' ; 
  import { useHistory } from 'react-router-dom' ; 
  import { format } from 'date-fns' ; 


  // 2]  Import the required for redux store method  : 
  import { useStoreState , useStoreActions } from 'easy-peasy' ; 

 
const NewPost = () => {

  // B] [Definiton before the return]  section   : 
  
  // 1] Define and pull the [states and actions] from  [Redux Store method]  :

    // 1-  Define the [posts] varialbe as extracted from the {useStoreState} :  
    const posts  = useStoreState( (state) => state.posts) ;

    // 2- Define the [postTitle] varialbe state as extracted from the {useStoreState} :  
    const postTitle  = useStoreState( (state) => state.postTitle) ;

    // 3- Define the [postBody] varialbe state s as extracted from the {useStoreState} :  
    const postBody  = useStoreState( (state) => state.postBody) ;

    // 4- Define the [savePost] variable thunk method as extracted from the {useStoreActions } :  
    const savePost  = useStoreActions( (actions) => actions.savePost) ;

    // 5- Define the [setPostTitle] variable thunk method as extracted from the {useStoreActions } :  
    const setPostTitle  = useStoreActions( (actions) => actions.setPostTitle) ;

    // 6- Define the [setPostBody] variable thunk method as extracted from the {useStoreActions } :  
    const setPostBody  = useStoreActions( (actions) => actions.setPostBody) ;

  // b] public definition  :
    // 1- Define the history : 
    const history = useHistory() ;    

 
    // 2- moving the {handleSubmit} method here  from the context file [we can remove the [async] keyword , du we used it wihtin store file by define the [savePost] method action ]   :   
    const handleSubmit =  (e) => {
      e.preventDefault();

      // a- {[id] property} :    Get and Define the last [id] value of the current post [if there is a posts array is defined (has length) ] => to be used to get the current post : 
      const id = posts.length ? posts[posts.length - 1].id + 1 : 1;    // => getting the id value of the last item in the {posts} array & add 1 to use it for adding a new item 

      // b- {[dateTime] property} Define  a variable of date : 
      const dateTime = format(new Date(), 'MMMM dd , yyyy pp');

      // c] Define a variable of full new post object [with assigning  both of  [title] & [body] with defined status ]  : 
      const newPost = { id, title: postTitle, dateTime, body: postBody };

      //  d] [will remove (try-catch)  due used it inside the {savePost} thunk method] and use  [savePost] method instead  : 
      savePost(newPost) ;
      
      history.push('/') ; 

    }

    
  // C] [Inside the comopnent's return]  section   : 
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