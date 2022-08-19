import { useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';
import Auth from '../firebase/authuser';
import Text from '../components/common/Text';
import ContentBox from './pageLayout/ContentBox';

const ProfilePage = () => {
  const nav = useNavigate();
  const logoutOnClickHandler = () => {
    Auth.logout();
    nav('/');
  };

  return (
    <ContentBox widthFitContent>
      <Text
        text={JSON.stringify(Auth.getCurrentUserInfo())}
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
