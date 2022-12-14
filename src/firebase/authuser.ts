import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { User } from '../types/user';
import { Clear, Store } from '../lib/session';
import FirebaseApp from './init';

const auth = getAuth(FirebaseApp);

interface LoginProps {
  email: string,
  password: string,
}

interface SignUpProps extends LoginProps {
  name: string;
}

const login = async ({ email, password }: LoginProps) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    Store('user', {
      displayName: res.user.displayName,
      email: res.user.email,
      uid: res.user.uid,
    });
    return res.user;
  } catch (e) {
    console.log('로그인 실패', e);
    return Promise.reject(e);
  }
};

const logout = async () => {
  Clear();
  return auth.signOut();
};

const updateNickName = async (name: string) => {
  try {
    if (!auth.currentUser) return await Promise.reject();
    return await updateProfile(auth.currentUser, { displayName: name });
  } catch (e) {
    console.log('이름 변경 실패', e);
    return Promise.reject(e);
  }
};

const createAccount = async ({ email, password, name }: SignUpProps) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    await updateNickName(name);
    Store('user', {
      displayName: name,
      email: res.user.email,
      uid: res.user.uid,
    });
    return res.user;
  } catch (e) {
    console.log('로그인 실패', e);
    return Promise.reject(e);
  }
};

const getCurrentUserInfo = (): User | null => {
  if (!auth.currentUser) return null;
  return {
    displayName: auth.currentUser.displayName,
    email: auth.currentUser.email,
    uid: auth.currentUser.uid,
  };
};

const Auth = {
  login,
  logout,
  createAccount,
  getCurrentUserInfo,
  updateNickName,
};

export default Auth;
