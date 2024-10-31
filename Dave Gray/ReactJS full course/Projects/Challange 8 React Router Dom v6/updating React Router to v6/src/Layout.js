// Define a wrapper compononent of all other componenets according to the [react-router-dom v6] :

// A]  importing section   :
import React from 'react'

// Importing the main Fixed components : 
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';

// Importing the required public components :    
import { Outlet } from 'react-router-dom';

//  Define the functional component with passign through all it's props :
const Layout = ({ width, search, setSearch }) => {

  return (
    <div className="App">

      <Header
        title={'React js blog app '}
        width={width}
      />

      <Nav search={search} setSearch={setSearch} />

      <Outlet />

      <Footer />

    </div>

  )
}

export default Layout;





