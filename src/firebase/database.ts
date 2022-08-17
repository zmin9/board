import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, getFirestore } from 'firebase/firestore';
import { PostType, PostTypeWithId } from '../types/post';
import FirebaseApp from './init';

const db = getFirestore(FirebaseApp);

const addPost = async (post: PostType) => {
  try {
    const res = await addDoc(collection(db, 'posts'), post);
    return res.id;
  } catch (e) {
    console.log('포스팅 실패', e);
    return Promise.reject(e);
  }
};

const deletePost = async (postId: string) => {
  try {
    return await deleteDoc(doc(db, 'posts', postId));
  } catch (e) {
    console.log('포스트 삭제 실패', e);
    return Promise.reject(e);
  }
};

const getPost = async (postId: string) => {
  try {
    const res = await getDoc(doc(db, 'posts', postId));
    return res.data() as PostTypeWithId;
  } catch (e) {
    console.log('데이터 가져오기 실패', e);
    return Promise.reject(e);
  }
};

const getAllPosts = async () => {
  try {
    const res = await getDocs(collection(db, 'posts'));
    const data: PostTypeWithId[] = [];
    res.forEach(document => {
      data.push(
        {
          id: document.id,
          ...document.data() as PostType,
        },
      );
    });
    data.sort((p1, p2) => p2.time - p1.time);
    return data;
  } catch (e) {
    console.log('전체 데이터 가져오기 실패', e);
    return Promise.reject(e);
  }
};

const DB = {
  addPost,
  deletePost,
  getPost,
  getAllPosts,
};

export default DB;
