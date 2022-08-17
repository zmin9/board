import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Input from '../../components/write/Input';
import Button from '../../components/common/Button';
import Text from '../../components/common/Text';
import mediaQuery from '../../styles/mediaQuery';

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
  return (
    <>
      <WrappingInputs>
        <Input placeholder="이메일"/>
        <Input placeholder="비밀번호" type="password"/>
      </WrappingInputs>
      <WrappingButton>
        <Button
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
