import { createContext, useContext } from 'react';

export default function createCtx<T>() {
  const ctx = createContext<T | undefined>(undefined);

  const useCtx = () => {
    const c = useContext(ctx);
    if (c === undefined)
      throw new Error('can\'t find UserCtx');

    return c;
  };

  return [useCtx, ctx.Provider] as const;
}
