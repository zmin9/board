import React, { PropsWithChildren } from 'react';
import Button from '../components/common/Button';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const WrapButtonRightAlign = styled.div`
  display: flex;
  justify-content: end;
  margin: 12px 12px;
`;

function MainPage({ children }: PropsWithChildren) {
  return (
    <>
      {children}
      <WrapButtonRightAlign>
        <Link to="/write">
          <Button designType="secondary">글쓰기</Button>
        </Link>
      </WrapButtonRightAlign>
    </>
  );
}

export default MainPage;
