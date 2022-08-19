import { useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';
import Auth from '../firebase/authuser';
import Text from '../components/common/Text';
import { useCtx } from '../components/UserContext';
import ContentBox from './pageLayout/ContentBox';

const ProfilePage = () => {
  const nav = useNavigate();
  const userCtx = useCtx();
  if (!userCtx.user) {
    nav('/auth/signin');
    return <></>;
  }

  const logoutOnClickHandler = () => {
    Auth.logout()
      .then(()=>{
        userCtx.updateUser();
        nav('/');
      });
  };

  return (
    <ContentBox widthFitContent>
      <Text
        text={`email: ${userCtx.user.email}, name: ${userCtx.user.displayName}`}
        size="14px"
        weight={500}
        color="medium"
      />
      <Button
        text="로그아웃"
        size="md"
        designType="outline"
        onClick={logoutOnClickHandler}
      />
    </ContentBox>
  );
};

export default ProfilePage;
