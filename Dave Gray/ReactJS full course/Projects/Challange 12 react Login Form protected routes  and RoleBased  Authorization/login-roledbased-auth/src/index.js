

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Import  the context provider fto overwrap the whole app  - to provide  the global access  -  :  
import { AuthProvider } from './context/AuthProvider';

// Import the react router dom  requirments  :  
import { BrowserRouter, Routes, Route } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    
    <BrowserRouter>
      
      <AuthProvider>
       <Routes> 
          <Route path ="/*"     element={<App />} />
       </Routes> 
      </AuthProvider>

    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);