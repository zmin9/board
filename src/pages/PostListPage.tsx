import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/common/Button';
import PostList from '../components/list/PostList';

const WrapButtonRightAlign = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 8px;
`;

function PostListPage() {
  return (
    <>
      <PostList />
      <WrapButtonRightAlign>
        <Link to="/write">
          <Button
            text="글쓰기"
            size="md"
            designType="outline"
          />
        </Link>
      </WrapButtonRightAlign>
    </>
  );
}

export default PostListPage;
