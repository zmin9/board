import React, { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { ThemeButtonType } from '../../styles/theme';
import { filterTransition } from '../../styles/transition';

type ButtonProps = {
  text: string,
  size: keyof typeof buttonSize,
  designType: ThemeButtonType, //keyof typeof buttonType
  fullWidth?: boolean
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'>;

const buttonSize = {
  'lg': css`
    padding: 16px 48px;
    font-size: 16px;
  `,
  'md': css`
    padding: 12px 24px;
    font-size: 15px;
  `,
  'sm': css`
    padding: 8px 12px;
    font-size: 14px;
  `,
};

// const buttonType = {
//   primary: css``,
//   secondary: css``,
//   outline: css``,
// };

const BasicButton = styled.button<ButtonProps>`
  border-radius: 9999px;
  width: ${({ fullWidth }) => fullWidth ? '100%' : 'auto'};
  ${({ designType, theme }) => theme.button[designType]}
  ${({ size }) => buttonSize[size]}
  ${filterTransition}
`;

const Button = ({ ...props }: ButtonProps) => {
  return (
    <BasicButton
      type="button"
      {...props}
    >
      {props.text}
    </BasicButton>
  );
};

export default Button;
