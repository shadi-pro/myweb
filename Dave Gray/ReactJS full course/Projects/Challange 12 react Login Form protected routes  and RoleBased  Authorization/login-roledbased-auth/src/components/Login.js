
// The Login Form [Public route] +  adding the  history location  : 

// A]  Importing section :  
// import { useRef, useState, useEffect, Fragment, useContext } from 'react'
import { useRef, useState, useEffect } from 'react'

//  Import the defined context variable from {AuthProvider} file , as  a global variable => [this step has been cancled due to  using cutom hook instead ] : 
// import AuthContext from '../context/AuthProvider';

//  Import  Custom hook function   to be used as short method of  context varailbe and   {useContext} hook : 
import useAuth from '../hooks/useAuth';


// Import the {axios} to be  used  ot access the defined api :
import axios from '../api/axios';

// Imporging the  required  clases  to allow the histroy location navagation :  
import { useLocation, useNavigate, Link } from 'react-router-dom';
// -------------------------------------------------------------------------------------- 


// B]  Variables and states defined before the [functional Component] :  
//  Define the backend endpoint of the node server [will be provided by the instructor ]   : 
const LOGIN_URL = '/auth';


// C] The functional Component :
const Login = () => {

  //  Extracting the {setAuth} child prop from the imported [custom hook] (  that  return  defined useContext hook + context variable )  [to be used  within the authentication data ]  :
  const { setAuth } = useAuth();

  // Define a current location variable  :
  const location = useLocation();

  // Define a navigator variable   :
  const navigate = useNavigate();

  // [detect where the user come from  to navigate him to this path ] :  Define a boolean variable of value location path :
  const from = location.state?.from?.pathname || "/";



  // Define a ref variable  to set focus on the  username input field : 
  const userRef = useRef();

  // Define a ref variable  to set focus on the error message paragraph of responded : 
  const errRef = useRef();

  // Define state of useername input for storing the it's value :
  const [user, setUser] = useState('');

  // Define state of useername input for storing the it's value :
  const [pwd, setPwd] = useState('');

  // Define state of Error incase of getting Authentication Error    :
  const [errMsg, setErrMsg] = useState('');

  // Define state of Success incase of getting Authentication  successful [but in future we will rpelace it by a real routering to a page after logging  ]    :
  const [success, setSuccess] = useState(false);

  // Define useEffect method to set the focus oni the username input field by the page is being loaded :       
  useEffect(() => {
    userRef.current.focus();
  }, [])

  // Define useEffect method to set empty values errro message  if there are value  inside uesername input field or password :       
  useEffect(() => {
    setErrMsg('');
  }, [user, pwd])

  //  Define [handleSubmit] Async method  for the Form :
  const handleSubmit = async (e) => {
    // using the event paramter to prevent the form default sumtiting behavior of reloading page :
    e.preventDefault();

    // [try-catch] block of the [Async] Responding  of Athentication process  :
    try {
      const response = await axios.post(LOGIN_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
      );

      // printing the whole responded from  the  backend :
      console.log(JSON.stringify(response));

      // printing the responded data property only  :
      console.log(JSON.stringify(response?.data));

      // /Define  the responded [accessToken property] from [data property]  will  be added to the {Auth} by using {useAuth()} :
      const accessToken = response?.data?.accessToken;

      // Define  the responded [ roles property] from [data property] will be added to the {Auth} by using {useAuth()}  :
      const roles = response?.data?.roles;

      // Set  the  {useAuth} context variable by the login information :  
      setAuth({ user, pwd, roles, accessToken })


      // set the success state by a true [incase of not having a real backend point]  :
      // setSuccess(true)

      //  using navigate[ to set the history of location as it saved in the {from} defined variable ]  instead of using the {setSuccess} state  as in the offline line mode  :
      navigate(from, { replace: true });


      // setting both of input state value by empty values after successful submiting :
      setUser('');
      setPwd('');

    } catch (err) {

      // Assign a custom error messsge  for each case of errors responding  :     
      if (!err?.response) {
        setErrMsg('No Server Response ')    // Assign a custom error messsge incase there is no reponse from server at all

      } else if (err.reponse?.status === 400) {
        setErrMsg('Missign username or password  ')    // Assign a custom error messsge incase there is one of the input  is not correct  

      } else if (err.response?.status === 401) {
        setErrMsg(' UnAuthorized login! ')    // Assign a custom error messsge incase there is one of the input is not correct  

      } else {
        setErrMsg(' Failed Login!')    // Assign a custom error messsge incase of general error  [ and not one of the upper errors  ]  

      }

      // Focusing the error element by focus :  
      errRef.current.focus();
    }
  }

  return (
    // using navigate[ to set the history of location as it saved in the {from} defined variable ]   instead of  using the {success}  and  will display  directrly the login Form    :
    // <Fragment>
    // {
    //   success ? (
    //     // First rendered section about - incase the successful login -    :  
    //     <section>
    //       <h1>   You are logged in  successfully!  </h1>
    //       <br />
    //       <p>
    //         <a href="#"> Go to Home page  </a>
    //       </p>
    //     </section>
    //   ) : (
    <section>

      {/*  The Error message to be displayed before the [Login Form] - if it is existed -  */}
      <p
        ref={errRef}
        className={errMsg ? "errmsg" : "offscreen"}
        aria-live="assertive"  // to make the browser screen able to read the text when get focus     
      > {errMsg}   </p>


      <form onSubmit={handleSubmit}   >
        <label
          htmlFor="username"
        > Username :
        </label>

        <input
          type='text'
          id='username'
          ref={userRef}
          autoComplete="off"
          onChange={(e) => setUser(e.target.value)}
          value={user}
          required
        />


        <label
          htmlFor="password"
        > Password  :
        </label>

        <input
          type='password'
          id='password'
          onChange={(e) => setPwd(e.target.value)}
          value={pwd}
          required
        />
        <button>  Sign In   </button>
      </form>


      {/*   Sign up section  */}
      <p>
        Need an Account ? <br />
        <span className='line'>

          <Link to="/register">Sign Up</Link>

        </span>
      </p>

    </section>
    //   )
    // }
    // </Fragment>

  )
}

export default Login;