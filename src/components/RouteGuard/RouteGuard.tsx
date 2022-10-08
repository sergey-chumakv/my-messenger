import { Navigate } from 'react-router-dom';
import React from 'react';
import { observer } from 'mobx-react-lite';

interface Props {
  canActivate: boolean;
  children: React.ReactElement;
  redirect: string;
}

export const RouteGuard = observer((props: Props) => {
  const { children, canActivate, redirect } = props;

  return canActivate ? children : <Navigate to={redirect} />;
});
