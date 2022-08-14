import { darkTheme, lightTheme } from './styles/theme';
import GlobalStyle from './styles/globalStyle';
import './styles/font.css';
import PageLayout from './components/layout/PageLayout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import PostPage from './pages/PostPage';
import WritePage from './pages/WritePage';
import { ThemeProvider } from 'styled-components';
import React, { useState } from 'react';

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => setIsDarkTheme(!isDarkTheme);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle/>
      <PageLayout isDarkTheme={isDarkTheme} themeController={toggleTheme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/:postId" element={<PostPage/>}/>
            <Route path="/write" element={<WritePage/>}/>
          </Routes>
        </BrowserRouter>
      </PageLayout>
    </ThemeProvider>
  );
};

export default App;
