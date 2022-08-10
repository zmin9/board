import {Post} from "../../types/post";



const PostListItem = ({ ...post } : Post) =>
    <div>
        <div>{post.title}</div>
        <div>{post.content}</div>
    </div>
;

export default PostListItem;
