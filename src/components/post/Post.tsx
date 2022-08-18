import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import DB from '../../firebase/database';
import Text from '../common/Text';
import { getLocalDate, getLocalTime } from '../../lib/utils';
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
              <Text
                text={post.title}
                size="16px"
                weight={600}
                color="medium"
              />
            </h2>
            {post.time !== 0 &&
              <Text
                text={`${getLocalDate(post.time)} ${getLocalTime(post.time)}`}
                size="12px"
                weight={400}
                color="low"
              />
            }
          </PostHeader>
          <Text
            text={post.content}
            size="15px"
            weight={400}
            color="medium"
          />
        </>
      }
    </PostContainer>
  );
};


export default Post;
