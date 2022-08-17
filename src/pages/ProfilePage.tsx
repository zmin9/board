import { useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';
import Auth from '../firebase/authuser';
import ContentBox from './pageLayout/ContentBox';

const ProfilePage = () => {
  const nav = useNavigate();
  const logoutOnClickHandler = () => {
    Auth.logout();
    nav('/');
  };

  return (
    <ContentBox widthFitContent>
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
