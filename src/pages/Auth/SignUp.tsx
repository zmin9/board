import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../components/write/Input';
import Button from '../../components/common/Button';
import Text from '../../components/common/Text';
import mediaQuery from '../../styles/mediaQuery';
import TextInputElementType from '../../types/input';
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

const SignUp = () => {
  const refs = useRef<TextInputElementType[]>([]);
  const nav = useNavigate();
  const [loading, setLoading] = useState(false);

  const checkPasswordSame = (pw: string, checkingPw: string) => pw === checkingPw;

  // TODO : console.log() 전부 UI로 변경하기
  // TODO 리팩토링
  const signUpOnClickHandler = () => {
    if (!checkPasswordSame(refs.current[1].value, refs.current[2].value)) {
      console.log('입력된 비밀번호가 다름');
      return;
    }

    setLoading(true);
    Auth.createAccount({ email: refs.current[0].value, password: refs.current[1].value })
      .then((res) => {
        console.log('hi', res.email, res);
        nav('/');
      })
      .catch(e => {
        switch (e.code) {
          case 'auth/invalid-email':
            console.log('정확한 정보를 입력해주세요');
            break;
          case 'auth/email-already-in-use':
            console.log('이미 가입되어 있습니다.');
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
        <Input
          ref={el => refs.current[2] = el as TextInputElementType}
          placeholder="비밀번호 확인"
          type="password"
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
          <Text size="15px" weight={500} color="low">
            로그인
          </Text>
        </Link>
      </WrappingToggleAuth>
    </>
  );
};

export default SignUp;
