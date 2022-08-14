import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GetAllPosts } from '../../firebase/data';
import { PostTypeWithId } from '../../types/post';
import PostListItem from './PostListItem';

const PostList = () => {
  const [posts, setPosts] = useState<PostTypeWithId[]>([]);
  useEffect(() => {
    GetAllPosts().then(res => setPosts(res));
  }, []);

  return (
    <>
      {posts.map(post =>
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
