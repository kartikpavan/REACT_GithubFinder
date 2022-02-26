import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AppProvider } from './context/github/githubContext';
import { AlertProvider } from './context/alert/AlertContext';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <AlertProvider>
        <App />
      </AlertProvider>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
