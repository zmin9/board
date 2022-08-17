import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import FirebaseApp from './init';

const auth = getAuth(FirebaseApp);

type AuthInfo = {
  email: string,
  password: string,
};

const login = async ({ email, password }: AuthInfo) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    return res.user;
  } catch (e) {
    console.log('로그인 실패', e);
    return Promise.reject(e);
  }
};

const Auth = {
  login,
};

export default Auth;
