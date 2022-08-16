import styled, { keyframes } from 'styled-components';
import Icons from '../../static/Icons';

const spinner = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const RotatingAnimation = styled.div`
  & > * {
    animation: ${spinner} 1.5s linear infinite;
  }
`;

const Spinner = () => {
  return (
    <RotatingAnimation>
      <Icons type="loader"/>
    </RotatingAnimation>
  );
};

export default Spinner;
