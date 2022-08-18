import styled from 'styled-components';
import Spinner from './Spinner';

const WrappingLoading = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  color: ${({ theme }) => theme.mainColor};
`;

const Loading = () => {
  return (
    <WrappingLoading>
      <Spinner/>loading...
    </WrappingLoading>
  );
};

export default Loading;
