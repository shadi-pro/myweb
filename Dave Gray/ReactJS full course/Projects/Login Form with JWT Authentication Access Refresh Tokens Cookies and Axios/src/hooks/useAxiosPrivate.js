
// a custom hook to catch the axios private interceperters      :  

// A] importing section  :

  import {useEffect}  from  'react';  
  
  // Importing the defined  private axios :    
  import {axiosPrivate}  from  '../api/axios';  
  
  // Importing the custom hook of hanlding the  context :    
  import  useAuth  from   './useAuth';    
   
  // Importing the custom hook of hanlding the  [access tokens] :    
  import useRefreshToken   from   './useRefreshToken';  
  
// --------------------------

//  B]  Define the custom hook of  [useAxiosPrivate()]  :
const useAxiosPrivate = () => {
  // 1] define  extracted  functional variable {refresh} of handling obtained {access token}  [by the public api used]    :
  const refresh  = useRefreshToken() 

  // 2] Define the extracted prop [auth] from the imported custom hook {useAuth()} of handling context  : 
  const { auth } = useAuth();

  // 3]  Define useEffect of [    ]  with using both of [refresh ,  auth ]   as dependencies  :
  useEffect(()=> {

    
  }, [refresh, auth] )
  
  



  // 4] main return of the custom hook :
   return  axiosPrivate ;
  

}
  
 



export default useAxiosPrivate; 



