import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import Post from '../components/post/Post';

const PostPage = () => {
  return (
    <>
      <Link to="/">
        <Button
          text="뒤로가기"
          size="md"
          designType="secondary"
        />
      </Link>
      <hr/>
      <Post/>
    </>
  );
};

export default PostPage;
