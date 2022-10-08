import React from 'react';
import styles from './chat-card.module.scss';

interface Props {
    name: string;
    avatar?: string;
    lastUser?: string;
    lastMessage?: string;
    date?: string;
    unreadMessages?: number;
}

export function ChatCard(props: Props) {
  const {
    date, name, unreadMessages, lastMessage, avatar, lastUser,
  } = props;

  return (
    <div className={styles.card}>
      {avatar ? <div className={styles.avatar} /> : <div className={styles['avatar-plug']} />}

      <div className={styles['info-wrapper']}>
        <div className={styles.info}>
          <div className={styles.name}>{name}</div>
          <div className={styles['last-message']}>
            {lastUser && <span className={styles['last-user']}>{`${lastUser}: `}</span>}
            {lastMessage}
          </div>
        </div>

        <div className={styles['date-wrapper']}>
          <div className={styles.date}>{date}</div>
          <div className={styles['unread-messages']}>{unreadMessages && unreadMessages >= 1000 ? '>1k' : unreadMessages}</div>
        </div>
      </div>
    </div>
  );
}
