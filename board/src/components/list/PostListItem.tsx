import { PostType } from '../../types/post';
import styled from 'styled-components';
import Text from '../common/Text';
import { getLocalDate } from '../../script/utils'; // 절대 경로로 바꿔주기

type Props = {
  post: PostType
};

const ItemContainer = styled.div`
  padding: ${({ theme }) => theme.defaultPadding};
  display: flex;
  justify-content: space-between;
`;


const PostListItem = ({ post }: Props) => {
  return (
    <ItemContainer>
      <Text size='16px' weight={600} color='textMain'>
        {post.title}
      </Text>
      <Text size='14px' weight={400} color='textSub'>
        {getLocalDate(post.time)}
      </Text>
    </ItemContainer>
  );
};

export default PostListItem;
