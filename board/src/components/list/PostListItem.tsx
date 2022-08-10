import {Post} from "../../types/post";
import styled from "styled-components";
import Text from "../common/Text";

const ItemContainer = styled.div`
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;

  & + & {
    border-top: solid 1px #dedede;
  }
`;

const Title = styled.div`
    
`;

const WrittenDate = styled.div`
  color: #b9b9b9
`;

const PostListItem = ({ ...post } : Post) => {
    const title = `Q. ${post.title}`;
    const date = new Date(post.time).toISOString().split('T')[0];
    return(
        <ItemContainer>
            <Title>
                <Text style={{size: '16px', weight: 600}}>{title}</Text>
            </Title>
            <WrittenDate>
                <Text style={{size: '14px', weight: 400}}>{date}</Text>
            </WrittenDate>
        </ItemContainer>
    );
};

export default PostListItem;
