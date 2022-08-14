import React, { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import Icons, { IconType } from '../../static/Icons';

type IconButtonProps = {
  icon: IconType,
  text?: string,
  size: keyof typeof buttonSize,
  designType: keyof typeof buttonColorType
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'>;

const buttonSize = {
  'lg': css`
    padding: 16px 16px;
    font-size: 16px;
  `,
  'md': css`
    padding: 12px 12px;
    font-size: 15px;
  `,
  'sm': css`
    padding: 8px 8px;
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

const BasicIconButton = styled.button<IconButtonProps>`
  line-height: 0;
  border-radius: 9999px;
  ${({ designType }) => buttonColorType[designType]}
  ${({ size }) => buttonSize[size]}
`;

const IconButton = ({ ...props }: IconButtonProps) => {
  return (
    <BasicIconButton
      type="button"
      {...props}
    >
      <Icons type={props.icon}/>
      {props.text}
    </BasicIconButton>
  );
};

export default IconButton;
