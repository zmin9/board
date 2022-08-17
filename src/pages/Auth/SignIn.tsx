import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../components/write/Input';
import Button from '../../components/common/Button';
import Text from '../../components/common/Text';
import mediaQuery from '../../styles/mediaQuery';
import TextInputElementType from '../../types/textInput';
import Auth from '../../firebase/authuser';

const WrappingInputs = styled.div`
  width: 250px;

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

  // TODO : console.log() 전부 UI로 변경하기
  // TODO 리팩토링
  const loginOnClickHandler = () => {
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
            console.log('정확한 정보를 입력해주세요');
            break;
          default:
            console.log('다시 시도해주세요');
        }
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <WrappingInputs>
        <Input
          ref={el => refs.current[0] = el as TextInputElementType}
          placeholder="이메일"
        />
        <Input
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
    </>
  );
};

export default SignIn;
