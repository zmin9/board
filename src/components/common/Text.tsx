import styled from 'styled-components';
import React from 'react';
import { TextColorType } from '../../styles/theme';

type TextStyle = {
  text: string,
  size: string,
  weight: number,
  color: TextColorType,
};

const CustomText = styled.span<Omit<TextStyle, 'text'>>`
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight};
  color: ${({ color, theme }) => theme.text[color]};
`;

export default function Text({ text, size, weight, color }: TextStyle) {
  return (
    <CustomText
      size={size}
      weight={weight}
      color={color}
    >
      {text}
    </CustomText>
  );
}
