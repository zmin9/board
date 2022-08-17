import { forwardRef, HTMLAttributes } from 'react';
import styled from 'styled-components';
import mediaQuery from '../../styles/mediaQuery';

type TextAreaProps = {
  height: string,
} & Partial<HTMLAttributes<HTMLTextAreaElement>>;

const CustomTextArea = styled.textarea<TextAreaProps>`
  resize: none;
  box-sizing: border-box;
  padding: 12px;
  width: 100%;
  height: ${({ height }) => height};
  font-size: 16px;
  vertical-align: top;
  
  ${mediaQuery.mobile} {
    font-size: 14px;
  }
`;

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>((props, ref ) =>
  <CustomTextArea
    ref={ref}
    placeholder={props.placeholder}
    height={props.height || 'auto'}
  />,
);

export default TextArea;
