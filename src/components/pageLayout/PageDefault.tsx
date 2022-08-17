import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import mediaQuery from '../../styles/mediaQuery';
import Text from '../common/Text';
import IconButton from '../common/IconButton';

type LayoutProps = {
  isDarkTheme: boolean,
  themeController: () => void
} & PropsWithChildren;

const Background = styled.div`
  position: relative;
  height: fit-content;
  min-height: 100vh;
  padding-bottom: 36px;
  background: ${({ theme }) => theme.backgroundSub};

  ${mediaQuery.mobile} {
    padding-bottom: 0;
  }
`;

const WrappingThemeButton = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
`;

const WrappingPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

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


const PageDefault = ({ ...props }: LayoutProps) => {
  const icon = props.isDarkTheme ? 'moon' : 'sun';
  return (
    <Background>
      <WrappingThemeButton>
        <IconButton icon={icon} size="md" designType="secondary" onClick={props.themeController}/>
      </WrappingThemeButton>
      <WrappingPage>
        <Header>
          <Text size="40px" weight={600} color="high">Board</Text>
        </Header>
          {props.children}
      </WrappingPage>
    </Background>
  );
};

export default PageDefault;
