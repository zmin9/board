import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import mediaQuery from '../../styles/mediaQuery';
import Text from '../../components/common/Text';
import IconButton from '../../components/common/IconButton';
import Auth from '../../firebase/authuser';

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

const WrappingIconButtons = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;

  display: flex;
  gap: 8px;

  ${mediaQuery.mobile} {
    left: 12px;
    justify-content: space-between;
  }
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
  const nav = useNavigate();
  const icon = props.isDarkTheme ? 'moon' : 'sun';

  const userIconOnClickHandler = () => {
    if (Auth.getCurrentUserInfo()) nav('/profile');
    else nav('/auth/signin');
  };

  return (
    <Background>
      <WrappingIconButtons>
        <IconButton icon="user" size="md" designType="secondary" onClick={userIconOnClickHandler}/>
        <IconButton icon={icon} size="md" designType="secondary" onClick={props.themeController}/>
      </WrappingIconButtons>
      <WrappingPage>
        <Header>
          <Link to="/">
            <Text size="40px" weight={600} color="high">Board</Text>
          </Link>
        </Header>
        {props.children}
      </WrappingPage>
    </Background>
  );
};

export default PageDefault;
