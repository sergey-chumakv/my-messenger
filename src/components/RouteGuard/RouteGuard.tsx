import { Navigate } from 'react-router-dom';
import React from 'react';

interface Props {
  canActivate: boolean;
  children: React.ReactElement;
  redirect: string;
}

export const RouteGuard = (props: Props) => {
  const { children, canActivate, redirect } = props;

  return canActivate ? children : <Navigate to={redirect} />;
};
