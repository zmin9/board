import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

export const Posts = createContext<PostsContextType>({
  posts: [],
  isLoading: true,
  isEmpty: false,
});

function PostListPage() {
  const nav = useNavigate();
  const [posts, setPosts] = useState<PostTypeWithId[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    DB.getAllPosts().then(res => {
      setPosts(res);
      setIsLoading(false);
    });
  }, []);

  const writeOnClickHandler = () => {
    if (Auth.getCurrentUserInfo())
      nav('/write');
    else
      nav('/auth/signin');
  };

  return (
    <ContentBox>
      <Posts.Provider value={{
        posts: posts,
        isLoading: isLoading,
        isEmpty: posts.length === 0,
      }}>
        <PostList/>
      </Posts.Provider>
      <WrapButtonRightAlign>
        <Button
          text="글쓰기"
          size="md"
          designType="outline"
          onClick={writeOnClickHandler}
        />
      </WrapButtonRightAlign>
    </ContentBox>
  );
}

export default PostListPage;
