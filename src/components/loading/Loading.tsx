import styled from 'styled-components';
import Text from '../common/Text';
import Icons from '../../static/Icons';

const WrappingLoading = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  color: ${({ theme }) => theme.mainColor};
`;

const RotatingAnimation = styled.div`
  & > * {
    animation: spinner 1.5s linear infinite;
  }
  
  @keyframes spinner {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const Loading = () => {
  return (
    <WrappingLoading>
      <RotatingAnimation>
        <Icons type="loader"/>
      </RotatingAnimation>
      <Text size="15px" weight={500}>
        loading...
      </Text>
    </WrappingLoading>
  );
};

export default Loading;
