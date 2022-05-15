import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import Favicon from 'react-favicon'
ReactDOM.render(
  <React.StrictMode>
        <Favicon url='https://i.imgur.com/7pq6Jgm.png' />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

