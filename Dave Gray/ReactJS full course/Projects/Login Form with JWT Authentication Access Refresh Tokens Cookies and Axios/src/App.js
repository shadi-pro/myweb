
// This app about login and register Form with controlled [roleBased authorized levels] : 


// A] Importings  section   :
// 1] Importings  labraries :   :
import { Routes, Route } from 'react-router-dom';


// 2] Importings section :   
//  (a) The main wrapper component of all other components :      
import Layout from './components/Layout';
//  ---------------------------

// (b) Importings all pages   :   
// (1)  [Public Routes]  pages :
// a-  The Register Form page [Public route] :
import Register from './components/Register';

// b- The Login Form [Public route] :
import Login from './components/Login';

// c- The LinkPage Form  page  [Public route] :
import LinkPage from './components/LinkPage';

// d- The [Unauthorized] page  to be displayed for the unauthorized users [public  route ] :  
import Unauthorized from './components/Unauthorized';

// e-  The Missing page to be dispalyed for all  users [public route]  : 
import Missing from './components/Missing';

// ------------------------------------


// (2) [Protected Routes]  pages :
// a- The Home page [protected Route]  :
import Home from './components/Home';

//  b- The Admin Form  to be displayed only for Admin  [protected Route] :
import Admin from './components/Admin';

//  c- The Editor page to be displayed only for Editor  [protected Route] :
import Editor from './components/Editor';

//  d- The Lounge page to be dispalyed for both Admin & Editor [protected Route]  :   
import Lounge from './components/Lounge';
// -----------------------

// (3) Protector file  {RequireAuth} => [ to be as protector wrapping  route ]    : 
import RequireAuth from './components/RequireAuth';


function App() {

  // Define server alternative simulated object including the each type of user authorization  code   : 
  const ROLES = {
    'User': 2001,
    'Admin': 5150,
    'Editor': 1985
  }


  return (
    <Routes>
      <Route path='/' element={<Layout />}  >

        {/* a-  Public Routes Group   */}
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='linkpage' element={<LinkPage />} />
        <Route path='unauthorized' element={<Unauthorized />} />


        {/* b-  Protected  Routes Group [ by using  the imoprted protector file {RequireAuth} wit using  different roles as the added paramter {allowedRoles} as attriubte of each protected route wit array value       ]   */}

        {/* 1-  Protected  Routes Gsroup [ Authorized for public {User} ]   */}
        <Route element={<RequireAuth allowedRoles={[ROLES.User]} />} >
          <Route path='/' element={<Home />} />
        </Route>

        {/* 2-  Protected  Routes Group [ Authorized for {Editor}   ]   */}
        <Route element={<RequireAuth allowedRoles={[ROLES.Editor]} />} >
          <Route path='editor' element={<Editor />} />
        </Route>
        
        <Route path='admin' element={<Admin />} />
        {/* 3-  Protected  Routes Group [  Authorized for {Admin} ]   */}
      
  
        {/* 4-  Protected  Routes Group [ Authorized for {Admin} & {Editor} ]   */}
        <Route element={<RequireAuth allowedRoles={[ROLES.Admin, ROLES.Editor]} />} >
          <Route path='lounge' element={<Lounge />} />
        </Route>

        {/* c-  Catch All Public  Route   */}
        <Route path='*' element={<Missing />} />

      </Route>
    </Routes>
  );
}

export default App;



  // {/*   
  //         <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />} >
  //         </Route>          
  //       */}