import React, { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { ButtonColorType } from '../../styles/theme';
import { colorTransition } from '../../styles/transition';
import Spinner from '../loading/Spinner';

type ButtonProps = {
  text: string,
  size: keyof typeof buttonSize,
  designType: ButtonColorType,
  fullWidth?: boolean,
  loading?: boolean
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'>;

const buttonSize = {
  'lg': css`
    padding: 16px 28px;
    font-size: 16px;
    svg {
      height: 16px;
    }
  `,
  'md': css`
    padding: 12px 24px;
    font-size: 15px;
    svg {
      height: 15px;
    }
  `,
  'sm': css`
    padding: 8px 12px;
    font-size: 14px;
    svg {
      height: 14px;
    }
  `,
};

const buttonColor = (type: ButtonColorType) => css`
  background-color: ${({ theme }) => theme.button[type].bgColor};
  color: ${({ theme }) => theme.button[type].color};

  ${({ theme }) => type === 'outline' && `border: solid 1px ${theme.outline};`}
  :hover {
    background-color: ${({ theme }) => theme.button[type].hoverBgColor};
  }
`;

const BasicButton = styled.button<ButtonProps>`
  border-radius: 9999px;
  width: ${({ fullWidth }) => fullWidth ? '100%' : 'auto'};
  font-weight: 600;
  ${colorTransition}
  ${({ designType }) => buttonColor(designType)}
  ${({ size }) => buttonSize[size]}
`;

const Button = ({ loading = false, ...props }: ButtonProps) => {
  return (
    <BasicButton
      type="button"
      disabled={loading}
      {...props}
    >
      {loading ? <Spinner /> : props.text}
    </BasicButton>
  );
};

export default Button;
