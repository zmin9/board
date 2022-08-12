import styled from 'styled-components';
import Input from '../components/write/Input';
import TextArea from '../components/write/TextArea';
import Text from '../components/common/Text';
import Button from '../components/common/Button';
import { useRef } from 'react';
import mediaQuery from '../styles/mediaQuery';
import { useNavigate } from 'react-router-dom';
import { PostType } from '../types/post';
import { AddPost } from '../firebase/data';

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

  ${mediaQuery.mobile} {
    button {
      width: 100%;
    }
  }
`;

const WritePage = () => {
  const nav = useNavigate();
  const refs = useRef<TextInputElementType[]>([]);

  const onClickPostHandler = async () => {
    const data: PostType = {
      time: Date.now(),
      title: refs.current[0].value,
      content: refs.current[1].value,
      name: refs.current[2].value,
      email: refs.current[3].value,
    };
    const id = await AddPost(data);
    nav(`/${id}`);
  };

  const onClickBackHandler = () => {
    nav('/');
  };

  return (
    <Container>
      <Button designType="secondary" onClick={onClickBackHandler}>
        뒤로가기
      </Button>
      <WrappingSection>
        <Header>
          <Text size="18px" weight={600} color="textMain">
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
          <Text size="18px" weight={600} color="textMain">
            게시자 정보
          </Text>
        </Header>
        <Input
          ref={el => refs.current[2] = (el as TextInputElementType)}
          type="text"
          placeholder="이름"
        />
        <Input
          ref={el => refs.current[3] = (el as TextInputElementType)}
          type="text"
          placeholder="이메일"
        />
      </WrappingSection>
      <WrapButtonRightAlign>
        <Button
          onClick={onClickPostHandler}
          designType="primary"
        >
          등록
        </Button>
      </WrapButtonRightAlign>
    </Container>
  );
};

export default WritePage;
