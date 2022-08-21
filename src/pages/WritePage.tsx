import React, { useRef, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import DB from '../firebase/database';
import { PostType } from '../types/post';
import TextInputElementType from '../types/textInput';
import TextArea from '../components/write/TextArea';
import Text from '../components/common/Text';
import Button from '../components/common/Button';
import mediaQuery from '../styles/mediaQuery';
import IconButton from '../components/common/IconButton';
import { useCtx } from '../components/UserContext';
import ContentBox from './pageLayout/ContentBox';


const WrappingSection = styled.div`
  margin: 24px 0;
  display: grid;
  gap: 12px;
`;

const WrappingFooter = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 12px;

  ${mediaQuery.mobile} {
    flex-direction: column;

    button {
      width: 100%;
    }
  }
`;

const WritePage = () => {
  const nav = useNavigate();
  const refs = useRef<TextInputElementType[]>([]);
  const userCtx = useCtx();
  const [postLoading, setPostLoading] = useState(false);

  if (!userCtx.user) {
    return <Navigate
      replace
      to='/auth/signin'
    />;
  }

  const postOnClickHandler = async () => {
    for (let i = 0; i < 2; i++) {
      if (refs.current[i].value.trim() === '') {
        console.log('다 안 채워짐');
        return;
      }
    }

    if (!userCtx.user) {
      return <Navigate
        replace
        to='/auth/signin'
      />;
    }

    const data: PostType = {
      time: Date.now(),
      title: refs.current[0].value,
      content: refs.current[1].value,
      email: String(userCtx.user.email),
    };
    setPostLoading(true);
    const id = await DB.addPost(data);
    nav(`/post/${id}`);
  };

  const onClickBackHandler = () => {
    nav('/');
  };

  return (
    <ContentBox>
      <IconButton
        icon="back"
        text="뒤로가기"
        layout="horizontal"
        size="sm"
        designType="secondary"
        onClick={onClickBackHandler}
      />
      <hr/>
      <WrappingSection>
        <Text
          text="게시글 내용"
          size="18px"
          weight={600}
          color="high"
        />
        <input
          ref={el => refs.current[0] = el as TextInputElementType}
          placeholder="제목"
          type="text"
        />
        <TextArea
          ref={el => refs.current[1] = el as TextInputElementType}
          placeholder="내용"
          height="300px"
        />
      </WrappingSection>
      <WrappingFooter>
        <Button
          text="등록"
          size="lg"
          designType="primary"
          loading={postLoading}
          onClick={postOnClickHandler}
        />
      </WrappingFooter>
    </ContentBox>
  );
};

export default WritePage;
