import styled from 'styled-components';
import mediaQuery from '../../styles/mediaQuery';
import { forwardRef } from 'react';

type InputProps = {
  type: string,
  placeholder: string,
};

const CustomInput = styled.input`
  box-sizing: border-box;
  border: 0;
  padding: 12px;
  width: 100%;
  background-color: ${({ theme }) => theme.surface};
  color: ${({ theme }) => theme.text.medium};
  font-size: 16px;
  
  ${mediaQuery.mobile} {
    font-size: 14px;
  }
`;


const Input = forwardRef((props: InputProps, ref) =>
  <CustomInput
    ref={ref as never}
    type={props.type}
    placeholder={props.placeholder}
  />,
);

export default Input;
