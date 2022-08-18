import styled from 'styled-components';
import Text from '../common/Text';
import { getLocalDate, getLocalTime } from '../../lib/utils';
import { PostType } from '../../types/post';

const PostContainer = styled.div`
  padding: 12px;
`;

const PostHeader = styled.div`
  margin: 0 0 16px;
`;

const Post = ({ title, time, content }: PostType) => {
  return (
    <PostContainer>
      <PostHeader>
        <h2>
          <Text
            text={title}
            size="16px"
            weight={600}
            color="medium"
          />
        </h2>
        {time !== 0 &&
          <Text
            text={`${getLocalDate(time)} ${getLocalTime(time)}`}
            size="12px"
            weight={400}
            color="low"
          />
        }
      </PostHeader>
      <Text
        text={content}
        size="15px"
        weight={400}
        color="medium"
      />
    </PostContainer>
  );
};

export default Post;
