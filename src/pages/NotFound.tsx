import { Link } from 'react-router-dom';
import Button from '../components/common/Button';

const NotFound = () => (
  <>
    <div>페이지 없음</div>
    <Link to='/'>
    <Button
      text="메인으로"
      size="md"
      designType="primary"/>
    </Link>
  </>
);

export default NotFound;
