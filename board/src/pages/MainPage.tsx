import React from 'react';
import styled from 'styled-components';
import Text from '../components/common/Text';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Post from '../components/post/Post';
import PostList from '../components/list/PostList';
import WritePage from './WritePage';
import mediaQuery from '../styles/mediaQuery';


const Background = styled.div`
  height: 100vh;
  background: ${({ theme }) => theme.colors.bgMain};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  margin: 50px 0;

  ${mediaQuery.small} {
    span {
      font-size: 30px;
    }
  }
`;

const ContentBox = styled.section`
  background: ${({ theme }) => theme.colors.bgSub};
  border-radius: 16px;
  width: 70vw;
  max-width: 600px;
  height: fit-content;

  ${mediaQuery.small} {
    width: 100vw;
    border-radius: 32px 32px 0 0;
    padding-top: 16px;
    height: 100%;
  }
`;

function MainPage() {
  return (
    <Background>
      <Header>
        <Text style={{ size: '40px', weight: 600, color: 'textMain' }}>Board</Text>
      </Header>
      <ContentBox>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PostList/>}/>
            <Route path="/write" element={<WritePage/>}/>
            <Route path="/:postId" element={<Post/>}/>
          </Routes>
        </BrowserRouter>
      </ContentBox>
    </Background>
  );
}

export default MainPage;
