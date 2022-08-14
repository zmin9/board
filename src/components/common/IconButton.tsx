import React, { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import Icons, { IconType } from '../../static/Icons';

type IconButtonProps = {
  icon: IconType,
  text?: {
    content: string,
    position: keyof typeof textPosition,
  },
  size: keyof typeof buttonSize,
  designType: keyof typeof buttonColorType
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'>;

const textPosition = {
  'right': css`
    flex-direction: row;
    gap: 4px;
  `,
  'bottom': css`
    flex-direction: column;
    gap: 8px;
  `,
};

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

    svg {
      width: 20px;
      height: 20px;
    }
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
  display: flex;
  align-items: center;
  line-height: 0;
  border-radius: 9999px;
  font-weight: 600;
  ${({ text }) => text && textPosition[text.position]}
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
      {props.text && props.text.content}
    </BasicIconButton>
  );
};

export default IconButton;
