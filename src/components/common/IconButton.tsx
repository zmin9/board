import React, { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import Icons, { IconType } from '../../static/Icons';
import { ButtonColorType } from '../../styles/theme';
import { colorTransition } from '../../styles/transition';

type IconButtonProps = {
  icon: IconType,
  text?: string,
  layout?: keyof typeof iconButtonLayout,
  size: keyof typeof iconButtonSize,
  designType: ButtonColorType
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'>;

const iconButtonLayout = {
  'horizontal': css`
    flex-direction: row;
    gap: 4px;
  `,
  'vertical': css`
    flex-direction: column;
    gap: 8px;
  `,
};

const iconButtonSize = {
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

const iconButtonColor = (type: ButtonColorType) => css`
  background-color: ${({ theme }) => theme.button[type].bgColor};
  color: ${({ theme }) => theme.button[type].color};

  ${({ theme }) => type === 'outline' && `border: solid 1px ${theme.outline};`}
  :hover {
    background-color: ${({ theme }) => theme.button[type].hoverBgColor};
  }
`;

const BasicIconButton = styled.button<Omit<IconButtonProps, 'text'>>`
  display: flex;
  align-items: center;
  line-height: 0;
  border-radius: 9999px;
  font-weight: 600;
  ${colorTransition}
  ${({ layout }) => layout && iconButtonLayout[layout]}
  ${({ designType }) => iconButtonColor(designType)}
  ${({ size }) => iconButtonSize[size]}
`;

const IconButton = ({ text, layout = 'horizontal', ...props }: IconButtonProps) => {
  return (
    <BasicIconButton
      type="button"
      layout={layout}
      {...props}
    >
      <Icons type={props.icon}/>
      {text}
    </BasicIconButton>
  );
};

export default IconButton;
