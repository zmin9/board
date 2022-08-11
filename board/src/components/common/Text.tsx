import styled from 'styled-components';
import React from 'react';
import { ThemeColorsType } from '../../styles/theme';

type TextStyle = {
  size: string,
  weight: number,
  color?: ThemeColorsType,
};
type Props = {
  style: TextStyle,
  children: string
};

const CustomText = styled.span<TextStyle>`
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight};
  color: ${({ color, theme }) => color ? theme.colors[color] : 'currentColor'};
`;

export default function Text({ style, children }: Props) {
  return (
    <CustomText
      size={style.size}
      weight={style.weight}
      color={style.color}
    >
      {children}
    </CustomText>
  );
}
