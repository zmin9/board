/* eslint-disable react/jsx-max-props-per-line */
import React, { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './styles/theme';
import GlobalStyle from './styles/globalStyle';
import PageDefault from './pages/pageLayout/PageDefault';
import PostListPage from './pages/PostListPage';
import PostPage from './pages/PostPage';
import WritePage from './pages/WritePage';
import './styles/font.css';
import AuthPage from './pages/Auth/AuthPage';
import SignIn from './pages/Auth/SignIn';
import SignUp from './pages/Auth/SignUp';
import ProfilePage from './pages/ProfilePage';

const isDarkThemeFromLocalStorage = Boolean(localStorage.getItem('isDark'));

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(isDarkThemeFromLocalStorage);

  const toggleTheme = () => {
    localStorage.setItem('isDark', String(!isDarkTheme));
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle/>
      <div id="modal-background"/>
      <BrowserRouter>
        <PageDefault isDarkTheme={isDarkTheme} themeController={toggleTheme}>
          <Routes>
            <Route path="/" element={<PostListPage/>}/>
            <Route path="/post/:postId" element={<PostPage/>}/>
            <Route path="/write" element={<WritePage/>}/>
            <Route path="/auth" element={<AuthPage/>}>
              <Route index element={<Navigate replace to="/no-content"/>}/>
              <Route path="signin" element={<SignIn/>}/>
              <Route path="signup" element={<SignUp/>}/>
            </Route>
            <Route path="/profile" element={<ProfilePage/>}/>
            <Route path="*" element={<Navigate replace to="/no-content"/>}/>
            <Route path="/no-content" element={<div>페이지 없음</div>}/>
          </Routes>
        </PageDefault>
      </BrowserRouter>
      <div id="toast"/>
    </ThemeProvider>
  );
};

export default App;
