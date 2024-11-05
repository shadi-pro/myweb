//  This is [custom hook] of handling the [access token] of the authentication  via using the {JWT} method :     

// A] Importing section     :  

 
import axios from '../api/axios';

import useAuth from './useAuth';
// -------------------------------------


// B] Define the main [custom hook] section  :
const useRefreshToken = () => {

  // 1] Define the extracted prop from the imported  custom hook {useAuth()} of context  : 
  const { setAuth } = useAuth();


  // 2]  Define a sync {refresh} inner function of get data through api [reponse] variable + with ability to send cookies with our request [eventhe secured {refresh  token} that will not be seen by js ] :
  const refresh = async () => {
    // a- Define response with get process with using  [withCreditial] props to allow to send  the cookies with our request  :
    const response = await axios.get('/refresh', {
      withCredentials: true
    });

    // b- Set and print the imported {auth} context prop  =>  by the latest data obtained from the api :   
    setAuth(prev => {
      // 1- Printing the previous value of data returned from latest  obtained all data from api of [users] (by using  stringfy):  
      console.log(JSON.stringify(prev));

      // 2-  Printing the value of current latest data returned  of  [access token] value  obtained from the api (by using stringfy form) :  
      console.log(JSON.response.data.accessToken);

      // 3- the  return of the callback function inside the setter function  of the {auth} context prop , with a object  value of seperated previous value of {auth} + modified value of [accessToken] : 
      return {
        ...prev,
        accessToken: response.data.accessToken
      }
    });

    // c- The main Return of the obtained [ refresh inner  function ] :  
    return  response.data.accessToken ; 
  }
     

  // 3] The main Return of the main [Custom hook] => returning the uppper defined  inner function {refresh}   :  
  return refresh ; 
 
}
// ----------------------------------------------


//  C] exporting the defined main [custom hook]     :
export default useRefreshToken ;

