
//  This file will responsible for protecting component  the routes and assinging the avialable roles types    : 

// A] Importing section   :

// import  several classes from the [react-router-dom]    :
import { useLocation, Navigate, Outlet } from 'react-router-dom';

// import the defind [custom hook] function  :
import useAuth from '../hooks/useAuth';


// B] Define the main function for fetching the authorization level + protecting the Routes  :
const RequireAuth = ({ allowedRoles }) => {

  // Extracting the [auth] prop that defined inside the main context provider function , [by  using the imported custom hook]      : 
  const { auth } = useAuth();

  //  Define a extracted location variable [ the current location ] :
  const location = useLocation();

  return (
    /* [ checking for roles] according to  the next nested  conditons :
     1-   if  the [ passed parameter {allowedRoles}  include a defined  Role  =>  then navigate to the protected children wraped routes inside the protector  {RequireAuth} route  ]  by return the {Outlet}
     2-   if  the [ passed parameter {allowedRoles}  NOT include a defined  Role   => Check for there is a user =>
      a-  if there is a user =>  navigate to the {UnAuthorized} page 
      b-  if there is NOT a user =>   navigate to the {Login} page      
    */

    auth?.roles?.find(role => allowedRoles?.include(role)) ?
      <Outlet />
      : auth?.user
        // [No Role + No user ] :
        ? <Navigate to='/unauthorized' state={{ from: location }} replace />
        //  [No Role + but there is a user ] => adding the {state} attribute with locaton will allow the browser to remember where the user were 
        : <Navigate to='/Login' state={{ from: location }} replace />
  )
}


export default RequireAuth;


