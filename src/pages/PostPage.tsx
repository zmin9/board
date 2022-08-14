import { Link } from 'react-router-dom';
import Post from '../components/post/Post';
import IconButton from '../components/common/IconButton';

const PostPage = () => {
  return (
    <>
      <Link to="/">
        <IconButton
          icon="back"
          text={{ content: '뒤로가기', position: 'right' }}
          size="sm"
          designType="secondary"
        />
      </Link>
      <hr/>
      <Post/>
    </>
  );
};

export default PostPage;
