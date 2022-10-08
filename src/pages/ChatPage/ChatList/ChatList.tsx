import React from 'react';
import styles from './chat-list.module.scss';
import { ChatCard } from './ChatCard';

interface Props {
}

export function ChatList(props: Props) {
  // eslint-disable-next-line no-empty-pattern
  const {} = props;
  return (
    <div className={styles.container}>
      <ChatCard
        name="Vasya Pupkin"
        lastUser="Vasya"
        date="13:27"
        unreadMessages={358484}
        lastMessage="Bla bla! Bla bla bla. Bla bla, bla bla"
      />
    </div>
  );
}
