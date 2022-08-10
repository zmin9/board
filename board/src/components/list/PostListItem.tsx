import styled from 'styled-components';
import Text from '../common/Text';

type TextChildren = { children: string };

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

const PostListItem = ({ children }: { children: JSX.Element | JSX.Element[] | string }) => {
  return <ItemContainer>{children}</ItemContainer>;
};

function Title({ children }: TextChildren) {
  return <ItemTitle><Text style={{ size: '16px', weight: 600 }}>{children}</Text></ItemTitle>;
}

function PostedDate({ children }: TextChildren) {
  return <ItemDate><Text style={{ size: '14px', weight: 400 }}>{children}</Text></ItemDate>;
}

PostListItem.Title = Title;
PostListItem.PostedDate = PostedDate;
export default PostListItem;
