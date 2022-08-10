import React from 'react';
import styled, {ThemeProvider} from "styled-components";
import Text from "../components/common/Text";
import {lightTheme} from "../styles/theme";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Post from "../components/post/Post";
import PostList from "../components/list/PostList";


const Background = styled.div`
  height: 100vw;
  background: ${({theme})=>theme.colors.bgMain};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  color: ${({theme})=>theme.colors.textMain};
    margin: 50px 0;
`;

const ContentBox = styled.section`
  background: ${({theme})=>theme.colors.bgSub};
  border-radius: 8px;
  padding: 4px 4px;
  width: 70vw;
  max-width: 600px;
  height: fit-content;
`;

function MainPage() {
  return (
      <ThemeProvider theme={lightTheme}>
        <Background>
            <Header>
                <Text style={{size: '40px', weight: 600}}>Board</Text>
            </Header>
            <ContentBox>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<PostList />} />
                        <Route path='/:postId' element={<Post />} />
                    </Routes>
                </BrowserRouter>
            </ContentBox>
        </Background>
      </ThemeProvider>
  );
}

export default MainPage;
