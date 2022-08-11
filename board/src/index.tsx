import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './styles/globalStyle';
import { lightTheme } from './styles/theme';
import { ThemeProvider } from 'styled-components';
import './styles/font.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageLayout from './components/layout/PageLayout';
import PostList from './components/list/PostList';
import WritePage from './pages/WritePage';
import Post from './components/post/Post';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle/>
      <PageLayout>
        <BrowserRouter basename="/board">
          <Routes>
            <Route path="/">
              <Route path="/" element={<PostList/>}/>
              <Route path="/:postId" element={<Post/>}/>
            </Route>
            <Route path="/write" element={<WritePage/>}/>
          </Routes>
        </BrowserRouter>
      </PageLayout>
    </ThemeProvider>
  </React.StrictMode>,
);
