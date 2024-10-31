
// The main configuratons file , using {react Router dom} [v:5.2.0] settings  syntax   :   

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// importing the required  classes and hooks for the   react routering matched with [v:5.2.0]    :  
import { BrowserRouter as Router, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
      <Router>
        <Route path="/" component={App} />
      </Router>  
  </React.StrictMode> , document.getElementById('root')
);

 


