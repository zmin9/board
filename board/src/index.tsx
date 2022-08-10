import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './styles/globalStyle';
import { lightTheme } from './styles/theme';
import { ThemeProvider } from 'styled-components';
import './styles/font.css';
import MainPage from './pages/MainPage';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle/>
      <MainPage/>
    </ThemeProvider>
  </React.StrictMode>,
);
