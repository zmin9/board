import { Link } from 'react-router-dom';
import { useContext } from 'react';
import Loading from '../loading/Loading';
import { PostsContext } from '../../pages/PostListPage';
import PostListItem from './PostListItem';

const PostList = () => {
  const context = useContext(PostsContext);
  return (
    <>
      {context.isLoading ?
        <Loading/>
        :
        context.isEmpty ?
          // TODO empty 페이지 필요
          <div>
            <p>
              글이 없어요ㅠ
              글을 써 봅시다
            </p>
          </div>
          :
          context.posts.map(post =>
            <Link
              key={post.id}
              to={`/post/${post.id}`}
            >
              <PostListItem
                title={post.title}
                time={post.time}
              />
            </Link>,
          )
      }
    </>
  );
};

export default PostList;
