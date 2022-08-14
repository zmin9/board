import { forwardRef } from 'react';
import styled from 'styled-components';
import mediaQuery from '../../styles/mediaQuery';

type TextAreaProps = {
  placeholder: string,
  height: string,
};

const CustomTextArea = styled.textarea<TextAreaProps>`
  resize: none;
  box-sizing: border-box;
  border: 0;
  padding: 12px;
  width: 100%;
  height: ${({ height }) => height};
  background-color: ${({ theme }) => theme.surface};
  color: ${({ theme }) => theme.text.medium};
  font-size: 16px;
  vertical-align: top;
  
  ${mediaQuery.mobile} {
    font-size: 14px;
  }
`;

const TextArea = forwardRef((props: TextAreaProps, ref ) =>
  <CustomTextArea
    ref={ref as never}
    placeholder={props.placeholder}
    height={props.height || 'auto'}
  />,
);

export default TextArea;
