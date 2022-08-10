import React from 'react';
import styled, {ThemeProvider} from "styled-components";
import Text from "./components/common/Text";
import PostList from "./components/list/PostList";
import {lightTheme} from "./styles/theme";


const Background = styled.div`
  height: 100vw;
  background: ${({theme})=>theme.colors.bgMain};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
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

function App() {
  return (
      <ThemeProvider theme={lightTheme}>
        <Background>
            <Header>
                <Text style={{size: '40px', weight: 600}}>Board</Text>
            </Header>
            <ContentBox>
                <PostList />
            </ContentBox>
        </Background>
      </ThemeProvider>
  );
}

export default App;
