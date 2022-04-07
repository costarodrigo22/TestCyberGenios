import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// Onde vai rodar nossa aplicação, dentro da div root que será renderizada pelo ReactDOM
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
