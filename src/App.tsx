import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { observer } from 'mobx-react-lite';
import styles from './app.module.scss';
import { authStore } from './store/auth';
import { RouteGuard } from './components/RouteGuard';

const Login = React.lazy(() => import('./pages/Login'));
const Registration = React.lazy(() => import('./pages/Registration'));
const ChatPage = React.lazy(() => import('./pages/ChatPage'));

const App = observer(() => {
  authStore.authenticate();

  console.log('render');

  return (
    <div className={styles.app}>
      {
        authStore.isLoading ? <div>Loading</div> : (
          <Routes>
            <Route
              path="/login"
              element={(
                <RouteGuard canActivate={!authStore.isAuth} redirect="/chat">
                  <React.Suspense fallback={<div>Loading</div>}>
                    <Login auth={authStore} />
                  </React.Suspense>
                </RouteGuard>
              )}
            />
            <Route
              path="/registration"
              element={(
                <RouteGuard canActivate={!authStore.isAuth} redirect="/chat">
                  <React.Suspense fallback={<div>Loading</div>}>
                    <Registration auth={authStore} />
                  </React.Suspense>
                </RouteGuard>
              )}
            />
            <Route
              path="/chat"
              element={(
                <RouteGuard canActivate={authStore.isAuth} redirect="/login">
                  <React.Suspense fallback={<div>Loading</div>}>
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
