import React from 'react';
import Button from '../components/common/Button';

type ChildrenProps = React.ReactNode;

export default function MainPage({ children }: { children?: ChildrenProps }) {
  return (
    <>
      {children}
      <Button text="글쓰기" designType="secondary"/>
    </>
  );
}
