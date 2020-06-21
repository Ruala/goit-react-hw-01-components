import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App/App';
import './assets/styles.scss';

ReactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
