import PostListItem from './PostListItem';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { GetAllPosts } from '../../firebase/data';
import { PostTypeWithId } from '../../types/post';

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
