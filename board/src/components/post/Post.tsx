import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Text from '../common/Text';

import data from '../../posts.json';
import { getLocalDate, getLocalTime } from '../../script/dateManager';

const PostHeader = styled.div`
  margin-bottom: 24px;
`;

const Title = styled.h2`
  line-height: 1;
  margin: 0;
`;

const Container = styled.div`
  padding: ${({ theme }) => theme.defaultPadding};
`;

const Post = () => {
  const { postId } = useParams();
  const [post] = data.data.filter(data => data.id === Number(postId));
  return (
    <Container>
      <PostHeader>
        <Title>
          <Text style={{ size: '16px', weight: 600, color:'textMain' }}>
            {post.title}
          </Text>
        </Title>
          <Text style={{ size: '12px', weight: 400, color:'textSub' }}>
            {`${getLocalDate(post.time)} ${getLocalTime(post.time)}`}
          </Text>
      </PostHeader>
        <Text style={{ size: '15px', weight: 400, color:'textMain' }}>
          {post.content}
        </Text>
    </Container>
  );
};


export default Post;
