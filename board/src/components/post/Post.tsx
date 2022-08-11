import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Text from '../common/Text';

import data from '../../posts.json';
import { getLocalDate, getLocalTime } from '../../script/utils';

const PostHeader = styled.div`
  margin-bottom: 24px;
`;

const Container = styled.div`
  padding: ${({ theme }) => theme.defaultPadding};
`;

const Post = () => {
  const { postId } = useParams();
  const [post] = data.data.filter(p => p.id === Number(postId));
  return (
    <Container>
      <PostHeader>
        <h2>
          <Text size='16px' weight={600} color='textMain'>
            {post.title}
          </Text>
        </h2>
        <Text size='12px' weight={400} color='textSub' >
          {`${getLocalDate(post.time)} ${getLocalTime(post.time)}`}
        </Text>
      </PostHeader>
      <Text size='15px' weight={400} color='textMain' >
        {post.content}
      </Text>
    </Container>
  );
};


export default Post;
