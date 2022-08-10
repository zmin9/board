import styled from 'styled-components';
import React from 'react';

type TextStyle = {
  size: string,
  weight: number,
};
type Props = {
  style: TextStyle,
  children: string
};

const CustomText = styled.span<TextStyle>`
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight};
`;

export default function Text({ style, children }: Props) {
  return <CustomText {...style}>{children}</CustomText>;
}
