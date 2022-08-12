import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Text from '../common/Text';
import { getLocalDate, getLocalTime } from '../../script/utils';
import { useEffect, useState } from 'react';
import { GetPost } from '../../firebase/data';
import { PostTypeWithId } from '../../types/post';

const PostHeader = styled.div`
  margin-bottom: 24px;
`;

const Container = styled.div`
  padding: ${({ theme }) => theme.defaultPadding};
`;

const Post = () => {
  const { postId } = useParams();
  const [post, setPost] = useState<PostTypeWithId>({
    content: '',
    email: '',
    id: '',
    name: '',
    time: 0,
    title: '',
  });

  useEffect(() => {
    GetPost(String(postId)).then(res => setPost(res));
  }, []);

  return (
    <Container>
      <PostHeader>
        <h2>
          <Text size="16px" weight={600} color="textMain">
            {post.title}
          </Text>
        </h2>
        <Text size="12px" weight={400} color="textSub">
          {`${getLocalDate(post.time)} ${getLocalTime(post.time)}`}
        </Text>
      </PostHeader>
      <Text size="15px" weight={400} color="textMain">
        {post.content}
      </Text>
    </Container>
  );
};


export default Post;
