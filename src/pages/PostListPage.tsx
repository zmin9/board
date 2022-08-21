import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import DB from '../firebase/database';
import PostList from '../components/list/PostList';
import { PostTypeWithId } from '../types/post';
import { useCtx } from '../components/UserContext';
import Loading from '../components/loading/Loading';
import Button from '../components/common/Button';
import ContentBox from './pageLayout/ContentBox';

const WrapButtonRightAlign = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 8px;
`;

function PostListPage() {
  const [posts, setPosts] = useState<PostTypeWithId[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const userCtx = useCtx();

  useEffect(() => {
    DB.getAllPosts().then(res => {
      setPosts(res);
      setIsLoading(false);
    });
  }, []);

  return (
    <ContentBox>
      {isLoading ?
        <Loading/>
        :
        <PostList posts={posts}/>
      }
      {!!userCtx.user &&
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
