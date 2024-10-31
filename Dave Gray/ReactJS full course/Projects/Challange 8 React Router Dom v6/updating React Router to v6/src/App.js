
/*  Main orientation Map  =>    
    a- [with props]:
      {App} <- {Home} <- {Feed} <- {Post}      
      {App} <- {PostPage} 
      {App} <- {Header} 
      {App} <- {Nav} 
      {App} <- {NewPost} 
      
    b- [without props]:
      {App} <- {About}       
      {App} <- {Missing} 
      {App} <- {Footer} 

*/

/*  The main [App] component to represent the main home page of the app :     
  a-  main functions : 
    1 --   display all current array of items [posts]              
    2 --   live Searching       
    3 --   Adding new post => with a sperate inner page route          
    4 --   display specific detailed post  + delete button =>  in a seprated inner route page                

   b-  main imported components   : 
    1 -- main Fixed components : 
        --- {Header} =>  header component   
        --- {Nav}    => nav component  
        --- {Footer} => footer component    
    
    
    2 -- main routers components    
       --- {Home}     -> the main Router page  
       --- {Nav}      -> the nav router page      
       --- {About}    -> the aboput router page 
       --- {NewPost}  -> the new post adding Router page
       --- {PostPage} -> the detailed post Router page
       --- {Missing}  ->   the 404 Error  Router page
*/

// Importing the reqiurd hooks :
import { useState, useEffect } from 'react';

// Importing the required defined custom hooks :
import useWindowSize from './hooks/useWindowSize';

// Importing the required defined custom hooks :
import useAxiosFetch from './hooks/useAxiosFetch';


// Importing the main Fixed components : 
// import Header from './Header';
// import Nav from './Nav';
// import Footer from './Footer';


// Importing the inner Routers pages components : 
import Layout from './Layout';      // the main parent wrapper component over all defined  Routes   
import Home from './Home';          // the main Router page 
import About from './About';        // the About Router page  
import NewPost from './NewPost';    // the new post adding Router page  
import PostPage from './PostPage';  // the detailed post Router page  
import EditPost from './EditPost';  // the Editing post  Router page  
import Missing from './Missing';    // the 404 Error  Router page  

// importing the required classes and hooks for the routering  : 
import { Route, Routes, useNavigate } from 'react-router-dom';


// import the defined api by axios [api: as custom name] from the api difinition file    : 
import api from './api/posts';


// importing the required classes from [date-fns] library  : 
import { format } from 'date-fns';


function App() {

  // Define a variable of detructured object of {width} to be used and called  passed prop to the {width} :
  const { width } = useWindowSize();

  // Define a variable of destructured object of all exported states props  { data,fetchError,isLoading} coming from  the {useAxiosFetch} custom hook ,with assging the baseURl instead of the using the one deinfeid inside  the  [posts.js ]  :
  const { data, fetchError, isLoading } = useAxiosFetch('http://localhost:3500/posts');


  // 1- Define a variable of empty array of objects -> to be obtianed from the assigned  [api] and [db.json] datasource   :
  const [posts, setPosts] = useState([
    // {
    //   id: 1,
    //   title:
    //    'First Post',
    //   dateTime: '2/1/2020',
    //   body: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
    // },
    // {
    //   id: 2,
    //   title: 'Second Post',
    //   dateTime: '20/10/2021',
    //   body: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb'
    // },
    // {
    //   id: 3,
    //   title: 'Third Post',
    //   dateTime: '2/12/2022',
    //   body: 'ccccccccccccccccccccccc'
    // }
  ]);


  // 2- Defining required states for [add/creating a new post] [title] and [body]   :
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');


  // 3- Defining required states for [ modify/edit an existed post] [title] and [body]   :
  const [editTitle, setEditTitle] = useState('');
  const [editBody, setEditBody] = useState('');



  // 4- Define a  state  of the [search] => to be use as the [search input] inside the  [Nav]   :
  const [search, setSearch] = useState('');


  // 5-  Define a  state  of [Search result] as an empty array  => to  bve used inside the useEffect of hanlding the searching   :
  const [searchResults, setSearchResults] = useState([]);


  // 6- Define a state of useNavigate   :
  const navigate = useNavigate();


  // [First crud operation] : {Fetching data} using direct fetching method (not used )  =>
  // 7-  Define a useEffect to implement the crud operations of responding and reading from api  according to the [axios] :     
  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     try {
  //       // 1- Define the variable of the response to the imported [api] from path [posts] as sub api path  after the baseURL of the defind  [api]  :
  //       const response = await api.get('/posts');

  //       // 2- Assigned the response variable value inside the [posts] status , by using direclty  the defined respnose's extracted [data] :
  //       setPosts(response.data);

  //     } catch (err) {
  //       // print  the builtin error  output that handled by axios  [with using axios handling options ] -after checking of its  existanace   :
  //       if (err.response) {
  //         console.log(err.response.data)
  //         console.log(err.response.status)
  //         console.log(err.response.header)
  //       } else {
  //         // print a custom error message incase there is no handled output displayed :  
  //         console.log(err.message)
  //       }
  //     }
  //   }
  //   // execuiting the  defined  {fetchPosts} fuction inside the useEffect    :
  //   fetchPosts();

  // }, [])
  // -----------------------------------------------




  // [First crud operation] : {Fetching data} using custom hook {useAxiosFetch} fetching method (will be used )  =>
  useEffect(() => {
    setPosts(data)
  }, [data])
  // -----------------------------------------------

  // [not a crud operation - not using api  , just an ordinary function ] =>
  // 9- {searching operation} : Define the [useEffect()] requried for seraching operation =>  Rerendering the page by changing of [posts state]  OR  [search state]    :
  useEffect(() => {

    // a- Define a variable of filtered posts according to the inserted value in the search box with including both of lowercase and uppercase text : 
    const filteredResults = posts.filter(post =>
      ((post.title).toLowerCase()).includes(search.toLowerCase())
      || ((post.body).toUpperCase()).includes(search.toUpperCase())
      || ((post.dateTime)).includes(search)
    );

    // b- setting the [searchResults] state by the value of the of the filtered resultes [reversed for descending  display  ]  => to be set inside the [Home] as a value  of the [posts] prop       :  
    setSearchResults(filteredResults.reverse());

  }, [posts, search])
  // ---------------------------------------------------------


  //  [Second crud operation] : {posting new data item into the assigned database throug the  assigned api}  =>
  // 7- Define a function to handle submit of [NewPost] component  -> of creating and adding new post - with  parameter to be used inside the form of [NewPost]  : 
  const handleSubmit = async (e) => {
    e.preventDefault();

    // a- {[id] property} :    Get and Define the last [id] value of the current post [if there is a posts array is defined (has length) ] => to be used to get the current post : 
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;    // => getting the id value of the last item in the {posts} array & add 1 to use it for adding a new item 

    // b- {[dateTime] property} Define  a variable of date : 
    const dateTime = format(new Date(), 'MMMM dd , yyyy pp');

    // c] Define a variable of full new post object [with assigning  both of  [title] & [body] with defined status ]  : 
    const newPost = { id, title: postTitle, dateTime, body: postBody };

    //  d] wrapping the adding new post inside the [try/catch] to  output any detect error before submiting teh new post  : 
    try {
      // 1- Define the response varialbe to conect and add the new item [post] into defiend [api] and jspn server :
      const response = await api.post('/posts', newPost);

      // 2- Define a variable of All post array after adding the new post[came from the api by using the defined variable of {response.data} after has got the posted value from the api ]    : 
      const allPosts = [...posts, response.data];

      // 3- Adding the new variable of all posts into the [posts] state using its setter fucntion  : 
      setPosts(allPosts);

      // 4- Setting the [postTitle]  & [postBody] states into an empty values after adding the new post : 
      setPostTitle('');
      setPostBody('');

      // 5- use the defined usenavigate hook variable to route into a certain route  [home page]  :
      navigate('/');


      // 6- Catching the returned and printing it using the default method using custom message  :
    } catch (err) {
      console.log(`Error : ${err.message} `);
    }

  };
  // -----------------------------------------------------

  //  [Third crud operation] : {Deleting a certain post [id] from the api datasoure assigned by api }  =>
  // 8- Define a function  of the handling post [deletion operation]  - with id parameter to be  gotten from inside the user component   :
  const handleDelete = async (id) => {

    try {
      // a- Awaiting the delete crud operation directly from [api] - from the full path of baseURL + id of the current element post - [no need ot define  a varialbe ]   : 
      await api.delete(`/posts/${id}`);

      // b- Define a new list of posts (after excepting the deleted item ) that including  all items except the current filtered deleted  post - according to the current item by id  :  
      const postList = posts.filter(post => post.id !== id);

      // c- Setting the new post filtered list inside the post state [which will be displayed in the main home page]  :
      setPosts(postList);

      // d- use the defined useHistory hook variable to route into a certain route  [home page]  :
      navigate('/');

      // e- catching the returned errror  by using  the custom erorr message :
    } catch (err) {
      console.log(err.message);
    }
  }
  // --------------------------------------

  // Fourth CRUD operation  : {Modify/Edit full data item object } [not need to be inside a useEffect - because it will be executed only  when inside the [editPost] component by form submiting     ]  =>
  // 9- creating the [Editing crud operation] according to [axios] => this function will be used wihtin the [editPost] component  :
  const handleEdit = async (id) => {

    // 1- {[dateTime] property} Define  a variable of date => [as a one of the modified item object's property]  with custom format pattern : 
    const dateTime = format(new Date(), 'MMMM dd , yyyy pp');

    // 2- Define a variable of full updated item post object after being updated/editing [with assigning  both of  [title] & [body] with defined status ]  : 
    const updatedPost = { id, title: editTitle, dateTime, body: editBody };

    try {
      // 3- Define a response variable of getting the updated full object curd operartion , to send the edited values into the assiogned paratmers of the {put} method :
      const response = await api.put(`/posts/${id}`, updatedPost);  // => we here used the {put} method due to we will send a full edited object into the api , but  incase of editing single property of the item -> we must use the {patch}     

      // 4- Assign/replace the updated item object value into api datasource [posts] , by using mapping - because we will not add the old data of the posts - : 
      setPosts(posts.map(post =>
        post.id === id ? { ...response.data } : post
      ));

      // 5- Setting empty values of both [post body] & [post title] after  :
      setEditBody('');
      setEditTitle('');

      // 6- directing to the home page after implementing the modifying/editing crud orepration :
      navigate('/');

      // 7-  custom catching  of the returend error      :
    } catch (err) {
      console.log(`Error : ${err.message}`);
    }
  }
  // ---------------------------------------

  return (
    <Routes>

      <Route path="/" element={<Layout search={search} setSearch={setSearch} />}   >

        <Route index
          element={<Home posts={searchResults} fetchError={fetchError} isLoading={isLoading} />}
        />

        <Route path="post" >
          <Route   index
              element={<NewPost
              handleSubmit={handleSubmit}
              postTitle={postTitle}
              setPostTitle={setPostTitle}
              postBody={postBody}
              setPostBody={setPostBody}
            />}
          />

          <Route path=':id'
            element={<PostPage posts={posts} handleDelete={handleDelete} />}          
          /> 
        </Route>
          
          
        <Route path="edit/:id"
          element={<EditPost posts={posts} handleEdit={handleEdit} editTitle={editTitle} setEditTitle={setEditTitle} editBody={editBody} setEditBody={setEditBody} />}
        />
         

        <Route path="about" element={<About />} />

        <Route path="*" element={<Missing />} />

      </Route>

    </Routes>

  )
}

export default App;
