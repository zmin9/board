import { PostType } from '../types/post';
import db, { addDoc, collection, doc, getDoc, getDocs } from './init';

const addPost = async (post: PostType) => {
  try {
    // console.log('addDoc success');
    return await addDoc(collection(db, 'posts'), post);
  } catch (e) {
    console.error(e);
  }
};

const getPosts = async () => {
  try {
    // console.log('getDocs success');
    return await getDocs(collection(db, 'posts'));
  } catch (e) {
    console.error(e);
  }
};

const getPost = async (id: string) => {
  try {
    // console.log('getDoc success');
    return await getDoc(doc(db, 'posts', id));
  } catch (e) {
    console.error(e);
  }
};

const DB = { addPost, getPosts, getPost };
export default DB;
