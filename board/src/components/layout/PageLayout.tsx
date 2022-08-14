import styled from 'styled-components';
import mediaQuery from '../../styles/mediaQuery';
import Text from '../common/Text';
import React from 'react';

const Background = styled.div`
  height: 100vh;
  background: ${({ theme }) => theme.backgroundSub};
  overflow: scroll;
`;

const WrappingPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  ${mediaQuery.desktop} {
    margin-bottom: 36px;
  }
  
  ${mediaQuery.mobile} {
    height: 100vh;
  }
`;

const Header = styled.div`
  margin: 50px 0;

  ${mediaQuery.mobile} {
    span {
      font-size: 30px;
    }
  }
`;

const ContentBox = styled.section`
  background: ${({ theme }) => theme.background};
  padding: ${({ theme }) => theme.defaultPadding};
  border-radius: 16px;
  width: 70vw;
  max-width: 600px;
  height: fit-content;

  ${mediaQuery.mobile} {
    width: 100vw;
    border-radius: 32px 32px 0 0;
    padding-top: 16px;
    height: 100%;
  }
`;

const PageLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <Background>
      <WrappingPage>
        <Header>
          <Text size="40px" weight={600} color="high">Board</Text>
        </Header>
        <ContentBox>
          {children}
        </ContentBox>
      </WrappingPage>
    </Background>
  );
};

export default PageLayout;
