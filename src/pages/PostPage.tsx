import { Link, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';
import Post from '../components/post/Post';
import IconButton from '../components/common/IconButton';
import MoreMenu from '../components/post/MoreMenu';
import { DeletePost } from '../firebase/data';
import mediaQuery from '../styles/mediaQuery';

const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const WrappingMenuModal = styled.div`
  position: absolute;
  transform: translate(0, 16px);
  right: calc((100vw - 600px) / 2 + 40px);
  
  ${mediaQuery.tablet} {
    right: calc(15vw + 40px);
  }
  
  ${mediaQuery.mobile}{
    position: static;
    transform: none;
  }
`;

const PostPage = () => {
  const [more, setMore] = useState(false);
  const { postId } = useParams();
  const nav = useNavigate();

  const close = () => {
    setMore(false);
  };
  const open = () => {
    setMore(true);
  };

  const deletePost = () => {
    close();
    DeletePost(String(postId))
      .then(() => {
        nav('/');
      });
  };

  const modifyPost = () => {
    close();
    nav(`/${postId}`);
  };

  const modalMenuList = [
    {
      text: '삭제',
      onClick: deletePost,
    },
    {
      text: '수정',
      onClick: modifyPost,
    },
  ];

  return (
    <>
      <PageHeader>
        <Link to="/">
          <IconButton
            icon="back"
            text={{ content: '뒤로가기', position: 'right' }}
            size="sm"
            designType="secondary"
          />
        </Link>
        <IconButton icon="more" size="sm" designType="secondary" onClick={open}/>
        {more &&
          <WrappingMenuModal>
            <MoreMenu
              close={close}
              contents={modalMenuList}
            />
          </WrappingMenuModal>
        }
      </PageHeader>
      <hr/>
      <Post/>
    </>
  );
};

export default PostPage;
