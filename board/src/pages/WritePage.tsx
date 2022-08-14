import styled from 'styled-components';
import Input from '../components/write/Input';
import TextArea from '../components/write/TextArea';
import Text from '../components/common/Text';
import Button from '../components/common/Button';
import { useRef, useState } from 'react';
import mediaQuery from '../styles/mediaQuery';
import { useNavigate } from 'react-router-dom';
import { PostType } from '../types/post';
import { AddPost } from '../firebase/data';

type TextInputElementType = HTMLInputElement | HTMLTextAreaElement;

const WrappingSection = styled.div`
  margin: 24px 0;
  display: grid;
  gap: 12px;
`;

const InvalidMsg = styled.div`
  color: ${({ theme }) => theme.error}
`;

const WrappingFooter = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 12px;

  ${mediaQuery.mobile} {
    flex-direction: column;
    button {
      width: 100%;
    }
  }
`;

const WritePage = () => {
  const nav = useNavigate();
  const refs = useRef<TextInputElementType[]>([]);
  const [invalidMsg, setInvalidMsg] = useState(false);

  const onClickPostHandler = async () => {
    for (let i = 0; i < 4; i++) {
      if (refs.current[i].value.trim() === '') {
        setInvalidMsg(true);
        return;
      }
    }

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
    <>
      <Button
        text="뒤로가기"
        size="md"
        designType="secondary"
        onClick={onClickBackHandler}
      />
      <hr/>
      <WrappingSection>
        <Text size="18px" weight={600} color="high">
          게시글 내용
        </Text>
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
        <Text size="18px" weight={600} color="high">
          게시자 정보
        </Text>
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
      <WrappingFooter>
        {
          invalidMsg &&
          <InvalidMsg>
            <Text size="15px" weight={500}>
              모든 칸을 채워주세요
            </Text>
          </InvalidMsg>
        }
        <Button
          text="등록"
          size="lg"
          designType="primary"
          onClick={onClickPostHandler}
        />
      </WrappingFooter>
    </>
  );
};

export default WritePage;
