import DB from './api';
import { PostType, PostTypeWithId } from '../types/post';

export const GetAllPost = async (): Promise<Array<PostTypeWithId>> => {
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
