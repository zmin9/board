import { PostType, PostTypeWithId } from '../types/post';
import DB from './api';

export const GetAllPosts = async (): Promise<Array<PostTypeWithId>> => {
  const res = await DB.getPosts();
  const data: PostTypeWithId[] = [];
  if (res) {
    res.forEach(doc => {
      const temp = {
        id: doc.id,
        ...doc.data() as PostType,
      };
      data.push(temp);
    });
  }
  data.sort((p1, p2) => p2.time - p1.time);
  return data;
};

export const GetPost = async (id: string): Promise<PostTypeWithId> => {
  const res = await DB.getPost(id);
  if (res) return res.data() as PostTypeWithId;
  throw new Error('잘못된 post id');
};

export const AddPost = async (post: PostType) => {
  const res = await DB.addPost(post);
  if (res) return res.id;
  throw new Error('포스팅 실패');
};

export const DeletePost = async (id: string) => {
  return DB.deletePost(id);
};
