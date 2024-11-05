//  [Users] users hanlding component :

//  A]  Importing section  :
import { useState, useEffect } from 'react';
import axios from '../api/axios';

// importing the  {useRefreshToken} : 
import useRefreshToken from '../hooks/useRefreshToken';
// --------------------------------------------

// B] Define the main component  : 
const Users = () => {

  // 1- Define  the users State to store all users obtained  from the defined api  [with assign a stastic array of object - due to there is on server until  now  - ]:  
  const [users, setUsers] = useState([
    {
      username: 'shadi',
      role: 'admin',
    },
    {
      username: 'sayed',
      role: 'editor ',
    },
    {
      username: 'ali',
      role: 'user',
    }
  ]);


  // 2- Define extracted [refresh] functional variable from inside the imported custom hook    :  
  const refresh = useRefreshToken();


  // 3- Define useEffect loadup function of to cancel any pending  api requests   :   
  useEffect(() => {
    // a- Define the  boolean value of checking of extised users      :  
    let isMounted = true;

    // b- Define [abortcontroller] variable  to be used to cancel any pending api request  :
    const controller = new AbortController();

    // c- Define a Async function of checking of any pending requests are pending from the api + conditional assign of obtained users data :    
    const getUser = async () => {

      try {
        // 1- Define a sync api [ get process] with assign a property of [signal] to be able to get the access token    :
        const response = await axios.get('/users', {
          signal: controller.signal
        })


        // 2- Check if the defined {isMoutned} state is true  =>  asssign the  retrieteved data  from  define response  inside Users state :
        isMounted && setUsers(response.data);

      } catch (err) {
        // 3- output the error message  :
        console.log(err.message);
      }
    }

    // d- call the defined above function to be executed inside the useEffect :
    getUser();

    // e- Define a clean up as a reutrn of the useEffect function  :
    return () => {
      // setting back the defined [isMounted]  with false   : 
      isMounted = false

      // activating the aborting method of the defined  [abortcontroller] variable  :
      controller.abort();
    }

  }, [])


  // 4- The main return of the component :  
  return (
    <article>
      {
        users?.length ?
          (
            <ul>
              {users.map((user, i) =>

                <li
                  style={{ 'listStyle': 'none' }}
                  key={i}
                >
                  {user?.username}
                </li>)
              }
            </ul>
          ) : <p> No users found !  </p>
      }

     {/*  [testing button ]  Calling the imported  fuction   {refresh} to be activated by cliking on the  button => this will generate  new  code [accessToken] with each click */}
       <button onClick={() => refresh()} >  Refresh    </button>
      <br />



    </article>
  )
}


// exporting   functional component   :
 export default Users 
