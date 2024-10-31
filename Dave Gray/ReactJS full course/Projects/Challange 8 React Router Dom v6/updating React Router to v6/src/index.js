
// The main configuratons file , using {react Router dom} [v:6.0.2] settings  syntax   :   

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// importing the required classes and hooks for the   react routering matched with [v:6.0.2]    :  
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Router>  
  </React.StrictMode> , document.getElementById('root')
);

 


