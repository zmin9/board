import styled from 'styled-components';
import Text from '../common/Text';
import { getLocalDate } from '../../lib/utils';

type ListItemProps = {
  title: string,
  time: number
};

const ItemContainer = styled.div`
  padding: 16px 8px;
  display: flex;
  justify-content: space-between;
`;


const PostListItem = ({ title, time }: ListItemProps) => {
  return (
    <ItemContainer>
      <Text size="16px" weight={600} color="medium">
        {title}
      </Text>
      <Text size="14px" weight={400} color="low">
        {getLocalDate(time)}
      </Text>
    </ItemContainer>
  );
};

export default PostListItem;
