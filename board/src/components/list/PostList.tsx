import posts from '../../posts.json';
import PostListItem from "./PostListItem";

const PostList = () => {
    return (
        <>
            {posts.data.map(post =>
                <PostListItem key={post.id} {...post} />
            )}
        </>
    );
};

export default PostList;
