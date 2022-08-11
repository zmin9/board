import styled from 'styled-components';
import mediaQuery from '../../styles/mediaQuery';
import Text from '../common/Text';
import React from 'react';

const Background = styled.div`
  height: 100vh;
  background: ${({ theme }) => theme.colors.bgMain};
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
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

const PageLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <Background>
      <Header>
        <Text size='40px' weight={600} color='textMain'>Board</Text>
      </Header>
      <ContentBox>
        {children}
      </ContentBox>
    </Background>
  );
};

export default PageLayout;
