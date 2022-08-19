import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Text from '../common/Text';
import { getLocalDate, getLocalTime } from '../../lib/utils';
import { PostType } from '../../types/post';

const PostContainer = styled.div`
  padding: 12px;
`;

const PostHeader = styled.div`
  margin: 0 0 16px;
`;

const MarkDownContainer = styled.div`
  font-size: 15px;
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
      <MarkDownContainer>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
        >
          {content}
        </ReactMarkdown>
      </MarkDownContainer>
    </PostContainer>
  );
};

export default Post;
