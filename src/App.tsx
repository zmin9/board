import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './styles/theme';
import GlobalStyle from './styles/globalStyle';
import PageLayout from './components/layout/PageLayout';
import PostListPage from './pages/PostListPage';
import PostPage from './pages/PostPage';
import WritePage from './pages/WritePage';
import './styles/font.css';

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => setIsDarkTheme(!isDarkTheme);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle/>
      <PageLayout isDarkTheme={isDarkTheme} themeController={toggleTheme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PostListPage/>}/>
            <Route path="/:postId" element={<PostPage/>}/>
            <Route path="/write" element={<WritePage/>}/>
          </Routes>
        </BrowserRouter>
      </PageLayout>
    </ThemeProvider>
  );
};

export default App;
