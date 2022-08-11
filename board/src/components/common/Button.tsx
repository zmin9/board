import styled from 'styled-components';

type ButtonProps = {
  type: 'submit' | 'button' | 'reset',
  designType: 'primary' | 'secondary',
  onClick: (e?: unknown) => void,
  fullWidth?: boolean,
  children: JSX.Element
};

const BasicButton = styled.button<ButtonProps>`
  padding: 12px 16px;
  border-radius: 8px;
  width: ${({ fullWidth }) => fullWidth ? '100%' : 'auto'};
  ${({ designType, theme }) => theme.button[designType]}
`;

const Button = (props: ButtonProps) =>
  <BasicButton
    type={props.type}
    onClick={props.onClick}
    designType={props.designType}
    fullWidth={props.fullWidth}
  >
    {props.children}
  </BasicButton>
;

export default Button;
