import { Link } from 'react-router-dom';
import useAllPosts from '../../script/useAllPosts';
import Loading from '../loading/Loading';
import PostListItem from './PostListItem';

const PostList = () => {
  const [posts, isLoading] = useAllPosts();
  return (
    <>
      {isLoading ?
        <Loading/>
        :
        Array.isArray(posts)
        && posts.map(post =>
          <Link
            key={post.id}
            to={`/${post.id}`}
          >
            <PostListItem title={post.title} time={post.time}/>
          </Link>,
        )}
    </>
  );
};

export default PostList;
