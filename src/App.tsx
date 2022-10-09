import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { observer } from 'mobx-react-lite';

import styles from './app.module.scss';
import { authStore } from './store/auth';
import { RouteGuard } from './components/RouteGuard';
import { FullScreenSpinner } from './components/FullScreenSpinner';

const Login = React.lazy(() => import('./pages/Login'));
const Registration = React.lazy(() => import('./pages/Registration'));
const ChatPage = React.lazy(() => import('./pages/ChatPage'));

const App = observer(() => {
  authStore.authenticate();

  return (
    <div className={styles.app}>
      {
        authStore.isLoading
          ? <FullScreenSpinner />
          : (
            <Routes>
              <Route path="/" element={<Navigate to="/chat" />} />
              <Route
                path="/login"
                element={(
                  <RouteGuard canActivate={!authStore.isAuth} redirect="/chat">
                    <React.Suspense fallback={<FullScreenSpinner />}>
                      <Login auth={authStore} />
                    </React.Suspense>
                  </RouteGuard>
              )}
              />
              <Route
                path="/registration"
                element={(
                  <RouteGuard canActivate={!authStore.isAuth} redirect="/chat">
                    <React.Suspense fallback={<FullScreenSpinner />}>
                      <Registration auth={authStore} />
                    </React.Suspense>
                  </RouteGuard>
              )}
              />
              <Route
                path="/chat"
                element={(
                  <RouteGuard canActivate={authStore.isAuth} redirect="/login">
                    <React.Suspense fallback={<FullScreenSpinner />}>
                      <ChatPage />
                    </React.Suspense>
                  </RouteGuard>
              )}
              />
            </Routes>
          )
      }

      <ToastContainer theme="colored" />
    </div>
  );
});

export default App;
