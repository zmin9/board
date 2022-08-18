import React, { useCallback, useRef, useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';
import Text from '../../components/common/Text';
import mediaQuery from '../../styles/mediaQuery';
import TextInputElementType from '../../types/textInput';
import Auth from '../../firebase/authuser';
import Toast from '../../components/toast/Toast';
import ToastMessages from '../../script/toastMessages';
import { ToastMessageContents } from '../../types/toastMessage';

const WrappingInputs = styled.div`
  margin-top: 12px;
  width: 270px;

  & > input + input {
    margin-top: 8px;
  }

  ${mediaQuery.mobile} {
    width: 100%;
  }
`;

const WrappingToggleAuth = styled.div`
  margin-top: 8px;
  display: flex;
  justify-content: end;
  cursor: pointer;
`;

const WrappingButton = styled.div`
  margin-top: 16px;
`;

const SignIn = () => {
  const refs = useRef<TextInputElementType[]>([]);
  const nav = useNavigate();
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<ToastMessageContents | null>(null);

  const close = () => {
    setToast(null);
  };

  // TODO : console.log() 전부 UI로 변경하기
  // TODO 리팩토링
  const loginOnClickHandler = useCallback(function ()  {
    setLoading(true);
    Auth.login({ email: refs.current[0].value, password: refs.current[1].value })
      .then((res) => {
        console.log('hi', res.email, res);
        nav('/');
      })
      .catch(e => {
        switch (e.code) {
          case 'auth/invalid-email':
          case 'auth/wrong-password':
          case 'user-not-found':
            setToast(ToastMessages['auth-invalid-input']);
            break;
          default:
            setToast(ToastMessages['server-error']);
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {/* TODO 페이지 타이틀 추가: 회원가입 */}
      <WrappingInputs>
        <input
          ref={el => refs.current[0] = el as TextInputElementType}
          placeholder="이메일"
          type="text"
        />
        <input
          ref={el => refs.current[1] = el as TextInputElementType}
          placeholder="비밀번호"
          type="password"
        />
      </WrappingInputs>
      <WrappingButton>
        <Button
          loading={loading}
          onClick={loginOnClickHandler}
          text="로그인"
          size="md"
          designType="primary"
          fullWidth
        />
      </WrappingButton>
      <WrappingToggleAuth>
        <Link to="/auth/signup">
          <Text size="15px" weight={500} color="low">
            회원가입
          </Text>
        </Link>
      </WrappingToggleAuth>
      {toast && <Toast info={toast} close={close}/>}
    </>
  );
};

export default SignIn;
