import styled from 'styled-components';
import Input from '../components/write/Input';
import TextArea from '../components/write/TextArea';
import Text from '../components/common/Text';
import Button from '../components/common/Button';
import { useRef } from 'react';
import mediaQuery from '../styles/mediaQuery';

type TextInputElementType = HTMLInputElement | HTMLTextAreaElement;


const Container = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const UserInfoHeader = styled.div`
  margin: 0 0 12px;
`;

const WrapButtonRightAlign = styled.div`
  display: flex;
  justify-content: end;

  ${mediaQuery.small} {
    button {
      width: 100%;
    }
  }
`;

const WritePage = () => {
  const refs = useRef<TextInputElementType[]>([]);

  const onclickHandler = () => {
    alert(`${refs.current[0].value} / ${refs.current[1].value} / ${refs.current[2].value} / ${refs.current[3].value}`);
  };

  return (
    <Container>
      <div>
        <Input
          ref={el => refs.current[0] = (el as TextInputElementType)}
          type="text"
          placeholder="제목"
        />
        <TextArea
          ref={el => refs.current[1] = (el as TextInputElementType)}
          placeholder="내용"
          height="250px"
        />
      </div>
      <div>
        <UserInfoHeader>
          <Text style={{ size: '15px', weight: 500, color: 'textMain' }}>
            게시자 정보
          </Text>
        </UserInfoHeader>
        <Input
          ref={el => refs.current[2] = (el as TextInputElementType)}
          type="text"
          placeholder="이메일"
        />
        <Input
          ref={el => refs.current[3] = (el as TextInputElementType)}
          type="text"
          placeholder="비밀번호"
        />
      </div>
      <WrapButtonRightAlign>
        <Button
          onClick={onclickHandler}
          type="submit"
          designType="primary"
        >
          <Text style={{size: '16px', weight: 500}}>등록</Text>
        </Button>
      </WrapButtonRightAlign>
    </Container>
  );
};

export default WritePage;
