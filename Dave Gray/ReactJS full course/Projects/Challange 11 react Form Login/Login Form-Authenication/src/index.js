

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Import  the context provider fto overwrap the whole app   - to provide  the global access  -  :  
import { AuthProvider } from './context/AuthProvider' ;
 
 
ReactDOM.render(
  <React.StrictMode>
    
    <AuthProvider>
      <App />
    </AuthProvider>

  </React.StrictMode>,
  document.getElementById('root')
);