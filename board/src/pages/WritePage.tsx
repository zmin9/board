import styled from 'styled-components';
import Input from '../components/write/Input';
import TextArea from '../components/write/TextArea';
import Text from '../components/common/Text';
import Button from '../components/common/Button';
import { useRef } from 'react';
import mediaQuery from '../styles/mediaQuery';
import { useNavigate } from 'react-router-dom';

type TextInputElementType = HTMLInputElement | HTMLTextAreaElement;

const Container = styled.div`
  padding: ${({ theme }) => theme.defaultPadding};
`;

const Header = styled.div`
  margin: 0 0 12px;
`;

const WrappingSection = styled.div`
  margin: 24px 0;
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
  const nav = useNavigate();
  const refs = useRef<TextInputElementType[]>([]);

  const onclickHandler = () => {
    // 데이터베이스에 저장
    alert(`${refs.current[0].value} / ${refs.current[1].value} / ${refs.current[2].value} / ${refs.current[3].value}`);
  };

  const backOnClickHandler = () => {
    nav(-1);
  };

  return (
    <Container>
      <Button designType="secondary" onClick={backOnClickHandler}>
        <Text size='15px' weight={500}>뒤로가기</Text>
      </Button>
      <WrappingSection>
        <Header>
          <Text size='18px' weight={600} color='textMain'>
            게시글 내용
          </Text>
        </Header>
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
      </WrappingSection>
      <WrappingSection>
        <Header>
          <Text size='18px' weight={600} color='textMain'>
            게시자 정보
          </Text>
        </Header>
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
      </WrappingSection>
      <WrapButtonRightAlign>
        <Button
          onClick={onclickHandler}
          designType="primary"
        >
          <Text size="16px" weight={500}>등록</Text>
        </Button>
      </WrapButtonRightAlign>
    </Container>
  );
};

export default WritePage;
