import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import DB from '../firebase/database';
import Post from '../components/post/Post';
import IconButton from '../components/common/IconButton';
import MoreMenu from '../components/post/MoreMenu';
import mediaQuery from '../styles/mediaQuery';
import { PostTypeWithId } from '../types/post';
import Loading from '../components/loading/Loading';
import Auth from '../firebase/authuser';
import ContentBox from './pageLayout/ContentBox';

const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const WrappingMenuModal = styled.div`
  z-index: 2;
  position: absolute;
  transform: translate(0, -18px);
  right: calc((100vw - 600px) / 2 + 40px);

  ${mediaQuery.tablet} {
    right: calc(15vw + 40px);
  }

  ${mediaQuery.mobile} {
    position: static;
    transform: none;
  }
`;

const PostPage = () => {
  const [more, setMore] = useState(false);
  const [post, setPost] = useState<PostTypeWithId>();
  const { postId } = useParams();
  const nav = useNavigate();

  const isMyPost = () => {
    const info = Auth.getCurrentUserInfo();
    if (info && post) return info.email === post.email;
    return false;
  };

  useEffect(() => {
    DB.getPost(String(postId)).then(res => setPost(res));
  }, []);

  const close = () => {
    setMore(false);
  };
  const open = () => {
    setMore(true);
  };

  const deletePost = () => {
    DB.deletePost(String(postId))
      .then(() => {
        nav('/');
      });
    close();
  };

  const modalMenuList = [
    {
      text: '삭제',
      onClick: deletePost,
    },
  ];

  return (
    <ContentBox>
      {post ?
        <>
          <PageHeader>
            <Link to="/">
              <IconButton
                icon="back"
                text="뒤로가기"
                layout="horizontal"
                size="sm"
                designType="secondary"
              />
            </Link>
            {isMyPost() &&
              <IconButton
                icon="more"
                size="sm"
                designType="secondary"
                onClick={open}
              />
            }
          </PageHeader>
          {more &&
            <WrappingMenuModal>
              <MoreMenu
                close={close}
                contents={modalMenuList}
              />
            </WrappingMenuModal>
          }
          <hr/>
          <Post {...post}/>
        </>
        :
        <Loading/>
      }
    </ContentBox>
  );
};

export default PostPage;
