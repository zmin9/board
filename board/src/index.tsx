import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './styles/globalStyle';
import { lightTheme } from './styles/theme';
import { ThemeProvider } from 'styled-components';
import './styles/font.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageLayout from './components/layout/PageLayout';
import WritePage from './pages/WritePage';
import MainPage from './pages/MainPage';
import PostPage from './pages/PostPage';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle/>
      <PageLayout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/:postId" element={<PostPage/>}/>
            <Route path="/write" element={<WritePage/>}/>
          </Routes>
        </BrowserRouter>
      </PageLayout>
    </ThemeProvider>
  </React.StrictMode>,
);
