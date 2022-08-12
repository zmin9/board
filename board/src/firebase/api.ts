import db, { addDoc, collection, doc, getDoc, getDocs } from './init';
import { PostType } from '../types/post';

const addPost = async (post: PostType) => {
  try {
    const res = await addDoc(collection(db, 'posts'), post);
    console.log('addDoc success');
    return res;
  } catch (e) {
    console.error(e);
  }
};

const getPosts = async () => {
  try {
    const res = await getDocs(collection(db, 'posts'));
    console.log('getDocs success');
    return res;
  } catch (e) {
    console.error(e);
  }
};

const getPost = async (id: string) => {
  try {
    const res = await getDoc(doc(db, 'posts', id));
    console.log('getDoc success');
    return res;
  } catch (e) {
    console.error(e);
  }
};

const DB = { addPost, getPosts, getPost };
export default DB;
