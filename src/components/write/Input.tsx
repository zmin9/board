import { forwardRef } from 'react';
import styled from 'styled-components';
import mediaQuery from '../../styles/mediaQuery';

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

const Input = forwardRef<HTMLInputElement, Partial<HTMLInputElement>>(({ type, ...props }, ref) =>
  <CustomInput
    ref={ref}
    type={type || 'text'}
    placeholder={props.placeholder}
  />,
);

export default Input;
