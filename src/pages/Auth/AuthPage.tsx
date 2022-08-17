import React from 'react';
import { Outlet } from 'react-router-dom';
import ContentBox from '../pageLayout/ContentBox';


const AuthPage = () => {
  return (
    <ContentBox widthFitContent>
      <Outlet />
    </ContentBox>
  );
};

export default AuthPage;
