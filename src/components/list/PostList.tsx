import { Link } from 'react-router-dom';
import { useContext } from 'react';
import Loading from '../loading/Loading';
import { Posts } from '../../pages/PostListPage';
import PostListItem from './PostListItem';

const PostList = () => {
  const context = useContext(Posts);
  return (
    <>
      {context.isLoading ?
        <Loading/>
        :
        context.posts.map(post =>
          <Link
            key={post.id}
            to={`/post/${post.id}`}
          >
            <PostListItem
              title={post.title}
              time={post.time}
            />
          </Link>,
        )}
    </>
  );
};

export default PostList;
