import React from 'react';
import styled from 'styled-components';
import { ThemeButtonType } from '../../styles/theme';
import { filterTransition } from '../../styles/transition';
import Text from './Text';

type ButtonProps = {
  text: string,
  designType: ThemeButtonType,
  onClick?: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
  fullWidth?: boolean
};

const BasicButton = styled.button<ButtonProps>`
  padding: 12px 16px;
  border-radius: 8px;
  width: ${({ fullWidth }) => fullWidth ? '100%' : 'auto'};
  ${({ designType, theme }) => theme.button[designType]}
  ${filterTransition}
`;

const Button = ({ text, designType, onClick, fullWidth }: ButtonProps) =>
  <BasicButton
    type="button"
    text={text}
    onClick={onClick}
    designType={designType}
    fullWidth={fullWidth}
  >
    <Text size="15px" weight={500}>
      {text}
    </Text>
  </BasicButton>
;

export default Button;
