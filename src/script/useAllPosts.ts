import { useEffect, useState } from 'react';
import { PostTypeWithId } from '../types/post';
import { GetAllPosts } from '../firebase/data';

const useAllPosts = () => {
  const [posts, setPosts] = useState<PostTypeWithId[]>();
  useEffect(() => {
    GetAllPosts().then(res => setPosts(res));
  }, []);
  return [posts, !posts];
};

export default useAllPosts;
