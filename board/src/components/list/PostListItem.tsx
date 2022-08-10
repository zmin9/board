import { Post } from '../../types/post';
import styled from 'styled-components';
import Text from '../common/Text';

const ItemContainer = styled.div`
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
`;

const ItemTitle = styled.div`
  color: ${({ theme }) => theme.colors.textMain};
`;

const ItemDate = styled.div`
  color: ${({ theme }) => theme.colors.textSub};
`;

const PostListItem = ({ ...post }: Post) => {
  return (
    <ItemContainer>
      <ItemTitle>
        <Text style={{ size: '16px', weight: 600 }}>
          {post.title}
        </Text>
      </ItemTitle>
      <ItemDate>
        <Text style={{ size: '14px', weight: 400 }}>
          {new Date(post.time).toISOString().split('T')[0]}
        </Text>
      </ItemDate>
    </ItemContainer>
  );
};

export default PostListItem;
