import styled from 'styled-components';
import { createPortal } from 'react-dom';
import mediaQuery from '../../styles/mediaQuery';

type ModalContentsType = {
  text: string,
  onClick: () => void
};

type ModalProps = {
  close: () => void,
  contents: ModalContentsType[]
};

const Background = styled.div`
  z-index: 1;
  position: fixed;
  width: 100vw;
  height: 100vh;

  ${mediaQuery.mobile} {
    background-color: ${({ theme }) => theme.shadow};
  }
`;

const ModalContainer = styled.div`
  z-index: 2;
  position: relative;

  border-radius: 4px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text.medium};
  box-shadow: ${({ theme }) => theme.shadow} 0 0 4px 4px;

  ${mediaQuery.mobile} {
    box-shadow: none;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    text-align: center;
    padding: 16px 0;
    border-radius: 32px 32px 0 0;
  }
`;

const ModalItem = styled.div`
  padding: 8px 36px;

  & + & {
    border-top: solid 0.5px ${({ theme }) => theme.divider};
  }

  ${mediaQuery.mobile} {
    padding: 24px 36px;
  }
`;

const MoreMenu = ({ close, contents }: ModalProps) => {
  const BackgroundPortal = () => {
    const modalBackground = document.getElementById('modal-background');
    if (!modalBackground) throw new Error('error! cannot find modal-background div');

    return createPortal(
      <Background onClick={close}/>
      , modalBackground,
    );
  };

  return (
    <>
      <ModalContainer>
        {
          contents.map((content) =>
            <ModalItem
              onClick={content.onClick}
              key={content.text}
            >
              {content.text}
            </ModalItem>,
          )
        }
      </ModalContainer>
      <BackgroundPortal/>
    </>
  );
};

export default MoreMenu;
