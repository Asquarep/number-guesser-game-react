import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NumberGuesser from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NumberGuesser />
  </React.StrictMode>
);
