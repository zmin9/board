import React, { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

type ButtonProps = {
  text: string,
  size: keyof typeof buttonSize,
  designType: keyof typeof buttonColorType
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

const buttonColorType = {
  primary: css`
    background-color: ${({ theme }) => theme.btnPrimary};
    color: ${({ theme }) => theme.btnOnPrimary};
  `,
  secondary: css`
    background-color: transparent;
    color: ${({ theme }) => theme.btnPrimary};
  `,
  outline: css`
    background-color: transparent;
    color: ${({ theme }) => theme.btnPrimary};
    border: solid 1px ${({ theme }) => theme.outline};
  `,
};

const BasicButton = styled.button<ButtonProps>`
  border-radius: 9999px;
  width: ${({ fullWidth }) => fullWidth ? '100%' : 'auto'};
  font-weight: 600;
  ${({ designType }) => buttonColorType[designType]}
  ${({ size }) => buttonSize[size]}
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
