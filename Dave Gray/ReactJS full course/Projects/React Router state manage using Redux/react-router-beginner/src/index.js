
// The main configuratons file , using {react Router dom} [v:5.2.0] settings syntax + using the redux [easy-peasy] statements method    :   

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// Importing the requred files and class to set the store of redux   : 
import store from './store';   // the store file 
import { StoreProvider }  from 'easy-peasy';    // the store provider function 

// Importing the required  classes and hooks for the react routering matched with [v:5.2.0]  :  
import { BrowserRouter as Router, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store} > 
      <Router>
        <Route path="/" component={App} />
      </Router>  
    </StoreProvider>
  </React.StrictMode> , document.getElementById('root')
);

 


