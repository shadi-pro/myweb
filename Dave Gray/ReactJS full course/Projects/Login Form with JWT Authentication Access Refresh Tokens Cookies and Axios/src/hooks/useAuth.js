
// This file is a custom hook function of {useAuth}  to  provide  reduction of in steps of importing  the [useContext] & [AuthContext] inside each protected route (and will only use this custom hook ) :   
  // - this file  will include using of the {useDebugValue} hook within this  custom hook    :



// A]  Importing section   :   
// 1- importing the main [useContext] hook + [useDebugValue] hook :
import { useContext , useDebugValue } from 'react';
  
//  2- import  the context file [context variable] {} to be used here ;
import AuthContext from '../context/AuthProvider';


// B]  Define the custom hook {} to be used to return {AuthContext} as defined extracted varialbe insidee hook function main : 
const useAuth = () => {
  // 1- define extracted prop from the imported context - to be used in testing useDebugValue :    
  const {auth} =  useContext(AuthContext)  ;
  
  // 2- using the imported {useDebugValue} hook to display  single  a[ certain text message] in the [react-devtool/ components]  :
   useDebugValue('Hello from a useDebugValue hook ') ;    
  
  // 3-  using imported {useDebusgValue } hook to display  a single  [certain variable meeesage]  in the   { react-devtool/components }   :     
   useDebugValue(auth) ;    
  
  // 4- assign a chained conditional value of the defined variable context  {auth }  with {user} extension  :
  useDebugValue(auth?.user  ? 'Login' : 'Logout' ) ;    

  // 5- assign a chained conditional value of the defined variable context  {auth }  +  using the a formting callback function parmeter  :
  useDebugValue(auth , auth  => auth?.user ? 'Login' : 'Logout'  ) ;    

  // 6- The main return of the custom hook :
  return useContext(AuthContext);
}

// C] Exporting the main defined custom hook as the default exporting      :
export default useAuth;














