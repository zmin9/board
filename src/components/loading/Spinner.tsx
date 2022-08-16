import styled from 'styled-components';
import Icons from '../../static/Icons';


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

const Spinner = () => {
  return (
    <RotatingAnimation>
      <Icons type="loader"/>
    </RotatingAnimation>
  );
};

export default Spinner;
