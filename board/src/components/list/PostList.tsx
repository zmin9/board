import posts from '../../posts.json';
import PostListItem from './PostListItem';
import { Link } from 'react-router-dom';

const PostList = () => {
  return (
    <>
      {posts.data.map(post =>
        <Link to={`/${post.id}`} key={post.id}>
          <PostListItem>
            <PostListItem.Title>
              {post.title}
            </PostListItem.Title>
            <PostListItem.PostedDate>
              {new Date(post.time).toISOString().split('T')[0]}
            </PostListItem.PostedDate>
          </PostListItem>
        </Link>,
      )}
    </>
  );
};

export default PostList;
