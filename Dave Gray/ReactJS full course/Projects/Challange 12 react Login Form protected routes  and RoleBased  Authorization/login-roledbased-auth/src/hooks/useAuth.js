
// This file will providing a custom hook of {useAuth} which will save the steps of importing  the [useContext] & [AuthContext] inside each protected route (and will only use this custom hook )      :   

// A]  Importing section   :   
// 1- importing the main context hook  :
import { useContext } from 'react';

//  2- import  the context file [context variable] {} to be used here ;
import AuthContext from '../context/AuthProvider';


// B]  Define the custom hook {} to be used to return {AuthContext} as defined extracted varialbe insidee hook function main : 
const useAuth = () => {
  return useContext(AuthContext);
}

// C] Exporting the main defined custom hook as the default exporting      :
export default useAuth;














