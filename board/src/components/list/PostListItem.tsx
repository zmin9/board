import { PostType } from '../../types/post';
import styled from 'styled-components';
import Text from '../common/Text';
import { getLocalDate } from '../../script/utils';

const ItemContainer = styled.div`
  padding: ${({ theme }) => theme.defaultPadding};
  display: flex;
  justify-content: space-between;
`;


const PostListItem = ({ ...post }: PostType) => {
  return (
    <ItemContainer>
        <Text style={{ size: '16px', weight: 600, color:'textMain' }}>
          {post.title}
        </Text>
        <Text style={{ size: '14px', weight: 400, color:'textSub' }}>
          {getLocalDate(post.time)}
        </Text>
    </ItemContainer>
  );
};

export default PostListItem;
