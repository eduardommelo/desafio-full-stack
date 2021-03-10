import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes'
import { AuthContext } from './context/AuthContext'
import { Router } from 'react-router-dom'

import history from './history'
import './assets/css/fonts.css'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <React.StrictMode>
    <AuthContext>
      <Router history={ history } >
        <Routes />
      </Router>
    </AuthContext>
  </React.StrictMode>,
  document.getElementById('root')
);


