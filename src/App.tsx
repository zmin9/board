import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => setIsDarkTheme(!isDarkTheme);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle/>
      <div className="modal"/>
      <BrowserRouter>
        <PageDefault isDarkTheme={isDarkTheme} themeController={toggleTheme}>
          <Routes>
            <Route path="/" element={<PostListPage/>}/>
            <Route path="/:postId" element={<PostPage/>}/>
            <Route path="/write" element={<WritePage/>}/>
            <Route path="/auth" element={<AuthPage/>}>
              <Route index element={<div>페이지 없음</div>} />
              <Route path="signin" element={<SignIn/>}/>
              <Route path="signup" element={<SignUp/>}/>
            </Route>
            <Route path="*" element={<div>페이지 없음</div>}/>
          </Routes>
        </PageDefault>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
