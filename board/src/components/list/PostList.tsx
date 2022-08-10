import posts from '../../posts.json';
import PostListItem from './PostListItem';
import { Link } from 'react-router-dom';

const PostList = () => {
  return (
    <>
      {posts.data.map(post =>
        <Link
          key={post.id}
          to={`/${post.id}`}
        >
          <PostListItem {...post} />
        </Link>,
      )}
    </>
  );
};

export default PostList;
