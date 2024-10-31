

//  the context file  for Authentciation provider   : 
import { createContext, useState } from 'react';

// Define the main [context variable] extracted from  the  imported class {createContext}   : 
const AuthContext = createContext({});

// Define and export the [context provider function] of the upper defined context :
export const AuthProvider = ({ children }) => {
  // Define the {setAuth} state to be used as the values of [value] attriubte of [AuthContext.Provider]   :
  const [auth, setAuth] = useState({});

  // return of the context provider function : 
  return (
    <AuthContext.Provider value={{ auth, setAuth }} >
      {children}
    </AuthContext.Provider>
  )
}



//  Exporting the main context  variable  [AuthContext]     :
export default AuthContext;









