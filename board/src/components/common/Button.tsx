import React, { HTMLProps } from 'react';
import styled from 'styled-components';
import { ThemeButtonType } from '../../styles/theme';
import { filterTransition } from '../../styles/transition';
import Text from './Text';

type ButtonProps = {
  designType: ThemeButtonType,
  fullWidth?: boolean
};

const BasicButton = styled.button<ButtonProps>`
  padding: 12px 16px;
  border-radius: 8px;
  width: ${({ fullWidth }) => fullWidth ? '100%' : 'auto'};
  ${({ designType, theme }) => theme.button[designType]}
  ${filterTransition}
`;

const Button = ({ designType, onClick, fullWidth, children }: ButtonProps & HTMLProps<HTMLButtonElement>) => {
  if (typeof children !== 'string')
    return null;
  return (
    <BasicButton
      type="button"
      onClick={onClick}
      designType={designType}
      fullWidth={fullWidth}
    >
      <Text size="15px" weight={500}>
        {children}
      </Text>
    </BasicButton>
  );
};

export default Button;
