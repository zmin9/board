import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Text from '../common/Text';

import data from '../../posts.json';
import { getLocalDate, getLocalTime } from '../../script/dateManager';

const PostHeader = styled.div`
  margin-bottom: 24px;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.textMain};
  margin: 0;
`;

const PostedTime = styled.div`
  color: ${({ theme }) => theme.colors.textSub};
`;

const Content = styled.article`
  color: ${({ theme }) => theme.colors.textMain};
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
          <Text style={{ size: '20px', weight: 700 }}>
            {post.title}
          </Text>
        </Title>
        <PostedTime>
          <Text style={{ size: '14px', weight: 400 }}>
            {`${getLocalDate(post.time)} ${getLocalTime(post.time)}`}
          </Text>
        </PostedTime>
      </PostHeader>
      <Content>
        <Text style={{ size: '15px', weight: 400 }}>
          {post.content}
        </Text>
      </Content>
    </Container>
  );
};


export default Post;
