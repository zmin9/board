import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';
import Text from '../../components/common/Text';
import mediaQuery from '../../styles/mediaQuery';
import TextInputElementType from '../../types/textInput';
import Auth from '../../firebase/authuser';
import Toast from '../../components/toast/Toast';
import { authErrorToastMsg, ToastMessageContents } from '../../lib/toastMessages';
import { useCtx } from '../../components/UserContext';

const SectionTitle = styled.div`
  margin: 12px 0;
`;

const WrappingInputs = styled.div`
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

const SignUp = () => {
  const refs = useRef<TextInputElementType[]>([]);
  const nav = useNavigate();
  const userCtx = useCtx();
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<ToastMessageContents | null>(null);

  const close = () => {
    setToast(null);
  };

  const signUpOnClickHandler = () => {
    if (refs.current[1].value !== refs.current[2].value) {
      setToast(authErrorToastMsg('signup-fail-check-password'));
      return;
    }

    setLoading(true);
    Auth.createAccount({
      email: refs.current[0].value,
      password: refs.current[1].value,
      name: refs.current[3].value,
    }).then(() => {
      userCtx.updateUser();
      nav('/');
    })
      .catch(e => {
        setToast(authErrorToastMsg(e.code));
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      {/* TODO 페이지 타이틀 추가: 회원가입 */}
      <SectionTitle>
        <Text
          text="계정 정보"
          size="16px"
          weight={600}
          color="high"
        />
      </SectionTitle>
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
        <input
          ref={el => refs.current[2] = el as TextInputElementType}
          placeholder="비밀번호 확인"
          type="password"
        />
      </WrappingInputs>
      <SectionTitle>
        <Text
          text="사용자 정보"
          size="16px"
          weight={600}
          color="high"
        />
      </SectionTitle>
      <WrappingInputs>
        <input
          ref={el => refs.current[3] = el as TextInputElementType}
          placeholder="닉네임"
          type="text"
        />
      </WrappingInputs>
      <WrappingButton>
        <Button
          text="회원가입"
          size="md"
          designType="primary"
          fullWidth
          onClick={signUpOnClickHandler}
          loading={loading}
        />
      </WrappingButton>
      <WrappingToggleAuth>
        <Link to="/auth/signin">
          <Text
            text="로그인"
            size="15px"
            weight={500}
            color="low"
          />
        </Link>
      </WrappingToggleAuth>
      {toast &&
        <Toast
          info={toast}
          close={close}
        />
      }
    </>
  );
};

export default SignUp;
