// This  is  the  main [store] file of the main configuration setting of the Redux & easy peasy package     : 

/* A] Importings required for using  [easy-peasy] for [redux] configurations handling , as following  : 
  1-  {createStore} :  for define the main function that will  include all  defined store states and methods     
  2-  {action} :  for define methods  of states  [state setter functions] & [ custom functions ]      
  3-  {thunk} :   supporting the [async-await]  type of functions      
  4-  {computed} : for define custom methods   including function with return of calculated values  
 /
*/
import { createStore, action, thunk, computed } from 'easy-peasy';

// importing the [api] from defined api file :    :
import api from './api/posts';

// B] Define the main function of [createStore] + using parameters object of main props and actions of all project : 
export default createStore({
  // 1] Define the main store state and state actions of main state and it's setter functions  :

  // a) [posts] & [setPosts] :
  posts: [],                                   //  Store state , with initial value of empty array
  setPosts: action((state, payload) => {       //  Store action method  -> represent Setter function of [posts] state    
    state.posts = payload;
  }),

  // b]  [postTitle]  & [setPostTitle] : 
  postTitle: '',                               //  Store state , with initial value of empty string  
  setPostTitle: action((state, payload) => {   //  Store action method  -> represent Setter function of [postTitle] state    
    state.postTitle = payload;
  }),

  // c] [postBody] & [setPostBody]    :
  postBody: '',                                //  Store state , with initial value of empty string  
  setPostBody: action((state, payload) => {    //  Store action method  -> represent Setter function of [postBody] state       
    state.postBody = payload;
  }),

  // d]  [editTitle] & [setEditTitle]   :
  editTitle: '',                               //  Store state , with initial value of empty string  
  setEditTitle: action((state, payload) => {   //  Store action method  -> represent Setter function of [editTitle] state       
    state.editTitle = payload;
  }),

  // e] [editBody] & [setEditBody]   :
  editBody: '',                                //   Store state , with initial value of empty string  
  setEditBody: action((state, payload) => {    //   Store action method  -> represent Setter function of [editBody] state       
    state.editBody = payload;
  }),

  // f]  [search] & [setSearch]  :
  search: '',                                  //  Store state , with initial value of empty string  
  setSearch: action((state, payload) => {      //  Store action method  -> represent Setter function of [search] state 
    state.search = payload;
  }),

  // g] [searchResults]  & [setSearchResults]  :
  searchResults: [],                               //  Store state , with initial value of empty array  
  setSearchResults: action((state, payload) => {   //  Store action method  -> represent Setter function of [searchResults ] state
    state.searchResults = payload;
  }),


  // 2] Define the custom [Store Actions] methods :
  /* a] Define a Store action property [computed method] of: 
    Counting posts number -> using the imported [computed] class from [easy-peasy] by passing through the {state} parameter of [easy-peasy]  : 
  */
  postCount: computed((state) => state.posts.length),


  /* b] Define a Store state [computed method] of :
    state of getting [post] by using the obtained {id} as main function paramter with find looping statement 
    + using the (state) built-in parameter of (createStore) 
  */
  getPostById: computed((state) => {
    return (id) => state.posts.find(post => (post.id).toString() === id)
  }),


  /* c] Define a Store action method [thunk action] of :
    using {thunk} imported class from {easy-peasy} to define function of (handling the Async actions) to handle the second crud operation  [Adding new post ] :
  */
  savePost: thunk(async (actions, newPost, helpers) => {

    /* Destructuring the [posts] state - the defined upper object property state from the state parameter -> 
      by the value of return of [getState() built-in method of {helpers}] :  
    */
    const { posts } = helpers.getState();

    try {
      // 1- Define the response varialbe to connect and add the new item [post] into defiend [api] and json server :
      const response = await api.post('/posts', newPost);

      // 2- Define a variable of All post array after adding the new post[came from the api by using the defined variable of {response.data} after has got the posted value from the api ]    : 
      // const allPosts = [...posts, response.data];

      // 2- Using the {actions} paramter to  Add directly the array  value  of [destructed posts + data of response variable] instead of using hte defined variable  into the [posts] state using its setter fucntion  : 
      actions.setPosts([...posts, response.data]);

      // 3- Using the {actions} paramter of the  [savePost thunk function] to Set empty value of the [postTitle] & [postBody] states , after adding the new post : 
      actions.setPostTitle('');
      actions.setPostBody('');

      //  we will not use histroy hook inside the store - because it is react router hook - and can not use inside the store:
      // history.push('/');


      // 5- Catching the returned and printing it using the default method using custom message  :
    } catch (err) {
      console.log(`Error : ${err.message} `);
    }
  }),



  /* d] Define a Store action method [thunk action] of : 
     using {thunk} imported class from {easy-peasy} to define function of (handling the Async actions) to handle the third  crud operation  [Edit a post ] :
   */
  editPost: thunk(async (actions, updatedPost, helpers) => {
    const { posts } = helpers.getState();

    //  Destructuring the [id] from incomming parameter {updatedPost}  :   
    const { id } = updatedPost;

    try {
      // 3- Define a response variable of getting the updated full object curd operartion , to send the edited values into the assigned parameters of the {put} method :
      const response = await api.put(`/posts/${id}`, updatedPost);  // => we here used the {put} method due to we will send a full edited object into the api , but  incase of editing single property of the item -> we must use the {patch}     

      // 4- Assign/replace the updated item object value into api datasource [posts] , by using mapping - because we will not add the old data of the posts - : 
      actions.setPosts(posts.map(post =>
        post.id === id ? { ...response.data } : post
      ));

      // 5- Setting empty values of both [post body] & [post title] after  :
      actions.setEditBody('');
      actions.setEditTitle('');

      // 6- directing to the home page after implementing the modifying/editing crud orepration :
      // history.push('/');

      // 7-  custom catching  of the returend error      :
    } catch (err) {
      console.log(`Error : ${err.message}`);
    }

  }),


  /* e] Define a Store action method [thunk action] of : 
    using {thunk} imported class from {easy-peasy} to define function of (handling the Async actions) to handle the fourth crud operation  [Delete a post ] :
  */
  deletePost: thunk(async (actions, id, helpers) => {
    const { posts } = helpers.getState();

    try {
      // a- Awaiting the delete crud operation directly from [api] - from the full path of baseURL + id of the current element post - [no need ot define  a varialbe ]   : 
      await api.delete(`/posts/${id}`);

      // b- Define a new list of posts (after excepting the deleted item ) that including  all items except the current filtered deleted  post - according to the current item by id  :  
      // const postList = posts.filter(post => post.id !== id);

      // c- Setting the new post filtered list inside the post state [which will be displayed in the main home page]  :
      actions.setPosts(posts.filter(post => post.id !== id));

      // d- We can  NOT use the history [the react router hook] inside the store file :
      // history.push('/');

      // e- catching the returned error  by using  the custom error message :
    } catch (err) {
      console.log(err.message);
    }
  }) 

})


