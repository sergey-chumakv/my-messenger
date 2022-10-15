import React from 'react';
import { Avatar } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import classNames from 'classnames';
import styles from './profile.module.scss';
import { Button } from '../../components/ui-kit/Button';

export const Profile = () => (
  <div className={styles.page}>
    <div className={styles.info}>
      <div className={styles['avatar-wrapper']}>
        <Avatar className={styles.avatar} sx={{ background: deepPurple[500], fontSize: '48px' }} alt="Remy" src="">DB</Avatar>
        <div className={styles['avatar-edit']}>
          <PhotoCameraIcon className={styles['camera-icon']} />
        </div>
      </div>

      <div className={styles.name}>Sergey Chumak</div>

      <Button className={styles.action} variant="text">
        <span className={styles['action-wrapper']}>
          <PersonIcon className={classNames(styles['action-icon'], styles['action-icon-person'])} />
          <span className={styles.label}>Name</span>
        </span>
        <span className={styles['user-info']}>Sergey Chumak</span>
      </Button>

      <Button className={styles.action} variant="text">
        <span className={styles['action-wrapper']}>
          <PhoneIcon className={classNames(styles['action-icon'], styles['action-icon-phone'])} />
          <span className={styles.label}>Phone</span>
        </span>
        <span className={styles['user-info']}>+79306719600</span>
      </Button>

      <Button className={styles.action} variant="text">
        <span className={styles['action-wrapper']}>
          <AlternateEmailIcon className={classNames(styles['action-icon'], styles['action-icon-contact'])} />
          <span className={styles.label}>Display name</span>
        </span>
        <span className={styles['user-info']}>Sergey</span>
      </Button>
    </div>
  </div>
);
