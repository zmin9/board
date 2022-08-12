import DB from './api';
import { PostType, PostTypeWithId } from '../types/post';

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
  return data;
};

export const GetPost = async (id: string): Promise<PostTypeWithId> => {
  const res = await DB.getPost(id);
  if (res) {
    return res.data() as PostTypeWithId;
  }
  throw reportError('wrong post id');
};
