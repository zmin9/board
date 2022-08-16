import styled from 'styled-components';
import Text from '../common/Text';
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
      <Spinner/>
      <Text size="15px" weight={500}>
        loading...
      </Text>
    </WrappingLoading>
  );
};

export default Loading;
