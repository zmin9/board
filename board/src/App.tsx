import React from 'react';
import styled from "styled-components";
import Text from "./components/common/Text";
import PostList from "./components/list/PostList";


const Background = styled.div`
  height: 100vw;
  background: #f9fbfc;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
    margin: 50px 0;
`;

const ContentBox = styled.section`
  background: #ffffff;
  border-radius: 8px;
  padding: 4px 4px;
  width: 70vw;
  max-width: 600px;
  height: fit-content;
`;

function App() {
  return (
    <Background>
        <Header>
            <Text style={{size: '40px', weight: 600}}>Board</Text>
        </Header>
        <ContentBox>
            <PostList />
        </ContentBox>
    </Background>
  );
}

export default App;
