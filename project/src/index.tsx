import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/app/app';
import {appStore} from './const';


ReactDOM.render(
  <React.StrictMode>
    <App {...appStore}/>
  </React.StrictMode>,
  document.getElementById('root'));
