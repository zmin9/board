import { PostType } from '../../types/post';
import styled from 'styled-components';
import Text from '../common/Text';
import { getLocalDate } from '../../script/dateManager';

const ItemContainer = styled.div`
  padding: ${({ theme }) => theme.defaultPadding};
  display: flex;
  justify-content: space-between;
`;

const ItemTitle = styled.div`
  color: ${({ theme }) => theme.colors.textMain};
`;

const ItemDate = styled.div`
  color: ${({ theme }) => theme.colors.textSub};
`;

const PostListItem = ({ ...post }: PostType) => {
  return (
    <ItemContainer>
      <ItemTitle>
        <Text style={{ size: '16px', weight: 600 }}>
          {post.title}
        </Text>
      </ItemTitle>
      <ItemDate>
        <Text style={{ size: '14px', weight: 400 }}>
          {getLocalDate(post.time)}
        </Text>
      </ItemDate>
    </ItemContainer>
  );
};

export default PostListItem;
