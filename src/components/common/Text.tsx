import styled from 'styled-components';
import React from 'react';
import { TextColorType } from '../../styles/theme';

type TextStyle = {
  size: string,
  weight: number,
  color?: TextColorType,
};

const CustomText = styled.span<TextStyle>`
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight};
  color: ${({ color, theme }) => color ? theme.text[color] : 'currentColor'};
`;

export default function Text({ children, ...style }: React.PropsWithChildren<TextStyle>) {
  if (typeof children !== 'string') {
    console.error('wrong type of child, Text');
    return null;
  }
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
