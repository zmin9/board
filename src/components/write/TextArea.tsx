import { forwardRef, HTMLAttributes } from 'react';
import styled from 'styled-components';

type TextAreaProps = {
  height: string,
} & Partial<HTMLAttributes<HTMLTextAreaElement>>;

const CustomTextArea = styled.textarea<TextAreaProps>`
  resize: none;
  height: ${({ height }) => height};
  vertical-align: top;
`;

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>((props, ref ) =>
  <CustomTextArea
    ref={ref}
    placeholder={props.placeholder}
    height={props.height || 'auto'}
  />,
);

export default TextArea;
