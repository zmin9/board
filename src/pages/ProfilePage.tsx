import { Navigate, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/common/Button';
import Auth from '../firebase/authuser';
import Text from '../components/common/Text';
import { useCtx } from '../components/UserContext';
import ContentBox from './pageLayout/ContentBox';

const WrappingBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WrappingButton = styled.div`
  margin-top: 24px;
`;

const ProfilePage = () => {
  const nav = useNavigate();
  const userCtx = useCtx();
  if (!userCtx.user) {
    return <Navigate
      replace
      to='/auth/signin'
    />;
  }

  const logoutOnClickHandler = () => {
    Auth.logout()
      .then(() => {
        userCtx.updateUser();
        nav('/');
      });
  };
  return (
    <ContentBox widthFitContent>
      <WrappingBox>
        <Text
          text={`${userCtx.user.displayName}`}
          size="16px"
          weight={700}
          color="medium"
        />
        <Text
          text={`${userCtx.user.email}`}
          size="14px"
          weight={500}
          color="low"
        />
        <WrappingButton>
          <Button
            text="로그아웃"
            size="md"
            designType="outline"
            onClick={logoutOnClickHandler}
          />
        </WrappingButton>
      </WrappingBox>
    </ContentBox>
  );
};

export default ProfilePage;
