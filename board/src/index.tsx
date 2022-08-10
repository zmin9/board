import React from 'react';
import ReactDOM from 'react-dom/client';
import MainPage from './pages/MainPage';
import './styles/normalize.css'
import './styles/font.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>
);
