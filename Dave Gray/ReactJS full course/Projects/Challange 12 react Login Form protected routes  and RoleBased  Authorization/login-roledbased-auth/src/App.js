
// This app about login and register Form with controlled [roleBased authorized levels] : 


// A] Importings  section   :
// 1] Importings  labraries :   :
import { Routes, Route } from 'react-router-dom';


// 2] Importings    :   
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


// (2)  [Protected Routes]  pages :
// a- The Home page [protected Route]  :
import Home from './components/Home';

//  b- The Admin Form  to be displayed only for Admin  [protected Route] :
import Admin from './components/Admin';

//  c- The Editor page to be displayed only for Editor  [protected Route] :
import Editor from './components/Editor';

//  d- The Lounge page to be dispalyed for both Admin & Editor [protected Route]  :   
import Lounge from './components/Lounge';


function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout />}  >

        {/* 1-  Public Routes Group   */}
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='linkpage' element={<LinkPage />} />
        <Route path='unauthorized' element={<Unauthorized />} />

        {/* 2-  Proteced  Routes Group   */}
        <Route path='/' element={<Home />} />
        <Route path='admin' element={<Admin />} />
        <Route path='editor' element={<Editor />} />
        <Route path='lounge' element={<Lounge />} />
        
        {/* 3-  Catch All Route  */}
        <Route path='*' element={<Missing />} />

      </Route>
    </Routes>
  );
}

export default App;


 