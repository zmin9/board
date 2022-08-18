import React, { createContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import DB from '../firebase/database';
import Button from '../components/common/Button';
import PostList from '../components/list/PostList';
import { PostTypeWithId } from '../types/post';
import Auth from '../firebase/authuser';
import ContentBox from './pageLayout/ContentBox';

const WrapButtonRightAlign = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 8px;
`;

type PostsContextType = {
  posts: PostTypeWithId[],
  isLoading: boolean,
  isEmpty: boolean
};

export const PostsContext = createContext<PostsContextType>({
  posts: [],
  isLoading: true,
  isEmpty: false,
});

function PostListPage() {
  const [posts, setPosts] = useState<PostTypeWithId[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    DB.getAllPosts().then(res => {
      setPosts(res);
      setIsLoading(false);
    });
  }, []);

  return (
    <ContentBox>
      <PostsContext.Provider value={{
        posts: posts,
        isLoading: isLoading,
        isEmpty: posts.length === 0,
      }}>
        <PostList/>
      </PostsContext.Provider>
      {Auth.getCurrentUserInfo() &&
        <WrapButtonRightAlign>
          <Link to="/write">
            <Button
              text="글쓰기"
              size="md"
              designType="outline"
            />
          </Link>
        </WrapButtonRightAlign>
      }
    </ContentBox>
  );
}

export default PostListPage;
