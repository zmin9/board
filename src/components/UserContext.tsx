import { PropsWithChildren, useState } from 'react';
import { User } from '../types/user';
import Auth from '../firebase/authuser';
import createCtx from '../lib/createCtx';
import { Load } from '../lib/session';

type UserContextType = { user: User | null, updateUser: () => void };
const initialUser = Load('user');

export const [useCtx, UserContext] = createCtx<UserContextType>();

const UserContextHOC = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(initialUser);
  const update = () => setUser(Auth.getCurrentUserInfo());

  return (
    <UserContext value={{
      user: user,
      updateUser: update,
    }}>
      {children}
    </UserContext>
  );
};

export default UserContextHOC;
