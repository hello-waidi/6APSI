//Corporal, Marc Lloyd G.
//CS-403

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TimerApp from './Timer';
import Temperature from './Temperature';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TimerApp />
    <Temperature />
  </React.StrictMode>
);

reportWebVitals();
