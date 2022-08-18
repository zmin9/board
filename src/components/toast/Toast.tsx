import styled from 'styled-components';
import { useEffect } from 'react';
import mediaQuery from '../../styles/mediaQuery';
import { ToastMessageContents } from '../../lib/toastMessages';
import Text from '../common/Text';

type ToastProps = {
  info: ToastMessageContents
  close: () => void;
};

const ToastContainer = styled.div<Omit<ToastMessageContents, 'text'>>`
  z-index: 8;
  position: fixed;
  bottom: 50px;
  right: 24px;
  border-radius: 8px;
  padding: 20px 24px;
  width: 300px;
  background-color: ${({ theme, type }) => theme.toast[type].bgColor};
  color: ${({ theme, type }) => theme.toast[type].color};

  ${mediaQuery.mobile} {
    width: auto;
    bottom: 16px;
    left: 24px;
    right: 24px;
  }
`;

const Toast = ({ info, close }: ToastProps) => {
  // TODO 똑같은 메세지 처리 추가
  useEffect(() => {
    const unmountTime = setTimeout(() => {
      close();
    }, 3000);

    return () => {
      clearTimeout(unmountTime);
    };
  }, [info]);

  return (
    <ToastContainer type={info.type}>
      <Text size="15px" weight={500}>
        {info.text}
      </Text>
    </ToastContainer>
  );
};

export default Toast;
