import React from 'react';
import styles from './chat-page.module.scss';
import { ChatList } from './ChatList';
import { Button } from '../../components/ui-kit/Button';
import { AuthApi } from '../../api/auth';

interface Props {
}

export function ChatPage(props: Props) {
  // eslint-disable-next-line no-empty-pattern
  const {} = props;

  return (
    <div className={styles.page}>
      <ChatList />
      <Button variant="contained" onClick={() => AuthApi.logout()}>TOAST</Button>
    </div>
  );
}
