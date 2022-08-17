import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import DB from '../../firebase/database';
import Text from '../common/Text';
import { getLocalDate, getLocalTime } from '../../script/utils';
import { PostTypeWithId } from '../../types/post';

const PostContainer = styled.div`
  padding: 12px;
`;

const PostHeader = styled.div`
  margin: 0 0 16px;
`;

const Post = () => {
  const { postId } = useParams();
  const [post, setPost] = useState<PostTypeWithId>();

  useEffect(() => {
    DB.getPost(String(postId)).then(res => setPost(res));
  }, []);

  return (
    <PostContainer>
      {post !== undefined &&
        <>
          <PostHeader>
            <h2>
              <Text size="16px" weight={600} color="medium">
                {post.title}
              </Text>
            </h2>
            {post.time !== 0 &&
              <Text size="12px" weight={400} color="low">
                {`${getLocalDate(post.time)} ${getLocalTime(post.time)}`}
              </Text>
            }
          </PostHeader>
          <Text size="15px" weight={400} color="medium">
            {post.content}
          </Text>
        </>
      }
    </PostContainer>
  );
};


export default Post;
