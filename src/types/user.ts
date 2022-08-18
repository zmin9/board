import firebase from 'firebase/compat';
import UserInfo = firebase.UserInfo;

export type User = Pick<UserInfo, 'email' | 'displayName'>;
