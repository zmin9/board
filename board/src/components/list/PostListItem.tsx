import styled from 'styled-components';
import Text from '../common/Text';
import { getLocalDate } from '../../script/utils';

type ListItemProps = {
  title: string,
  time: number
};

const ItemContainer = styled.div`
  padding: ${({ theme }) => theme.defaultPadding};
  display: flex;
  justify-content: space-between;
`;


const PostListItem = ({ title, time }: ListItemProps) => {
  return (
    <ItemContainer>
      <Text size="16px" weight={600} color="textMain">
        {title}
      </Text>
      <Text size="14px" weight={400} color="textSub">
        {getLocalDate(time)}
      </Text>
    </ItemContainer>
  );
};

export default PostListItem;
