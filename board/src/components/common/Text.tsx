import styled from 'styled-components';
import React from 'react';

type TextStyle = {
  size: string,
  weight: number,
  color?: string,
};
type Props = {
  style: TextStyle,
  children: string
};

const CustomText = styled.span<TextStyle>`
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight};
  color: ${({ color, theme }) => color && (theme.colors[color] || theme.colors.textMain)};
`;

export default function Text({ style, children }: Props) {
  return <CustomText {...style}>{children}</CustomText>;
}
