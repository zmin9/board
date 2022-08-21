import { Link } from 'react-router-dom';
import { PostTypeWithId } from '../../types/post';
import PostListItem from './PostListItem';

const PostList = ({ posts }: { posts: PostTypeWithId[] }) => {
  return (
    <>
      {posts.length === 0 ?
        // TODO empty 페이지 필요
        <div>
          <p>
            글이 없어요ㅠ
            글을 써 봅시다
          </p>
        </div>
        :
        posts.map(post =>
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
