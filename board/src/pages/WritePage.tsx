import styled from 'styled-components';
import Input from '../components/write/Input';
import TextArea from '../components/write/TextArea';
import Text from '../components/common/Text';

const Container = styled.div`
  padding: 24px;
`;

const UserInfoHeader = styled.div`
  margin: 24px 0 12px;
`;

const WritePage = () => {
  return (
    <Container>
      <form>
        <Input type="text" placeholder="제목"/>
        <TextArea placeholder="내용" height="250px"/>
        <div className="user-info">
          <UserInfoHeader>
            <Text style={{ size: '15px', weight: 500, color: 'textMain' }}>게시자 정보</Text>
          </UserInfoHeader>
          <Input type="text" placeholder="이메일"/>
          <Input type="text" placeholder="비밀번호"/>
        </div>
      </form>
    </Container>
  );
};

export default WritePage;
