import React from 'react';
import { Avatar } from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';

import styles from './profile.module.scss';
import { Button } from '../../../../components/ui-kit/Button';
import { authStore } from '../../../../store/auth';
import { BASE_URL } from '../../../../services/constants';
import { getInitials } from '../../../../utils/getInitials';
import { Dialog } from '../../../../components/ui-kit/Dialog';
import { Input } from '../../../../components/ui-kit/Input';

export const Profile = observer(() => {
  const [t] = useTranslation();
  const [open, setOpen] = React.useState(false);

  const user = authStore.userData;
  const fullName = `${user?.first_name} ${user?.second_name}`;
  const avatarPath = `${BASE_URL}/resources${user?.avatar}`;

  return (
    <div className={styles.profile}>
      <div className={styles.name}>{fullName}</div>

      <div className={styles['avatar-wrapper']}>
        <Avatar className={styles.avatar} alt={user?.first_name} src={avatarPath}>
          {getInitials(fullName)}
        </Avatar>

        <button className={styles.camera} type="button">
          <PhotoCameraIcon />
        </button>
      </div>

      <Button className={styles.action} onClick={() => setOpen(true)} variant="text">
        <span className={styles.label}>
          <PersonIcon className={styles.icon} />
          {t('profile.name')}
        </span>
        <span className={styles.info}>{fullName}</span>
      </Button>

      <Button className={styles.action} variant="text">
        <span className={styles.label}>
          <PhoneIcon className={styles.icon} />
          {t('profile.phone')}
        </span>
        <span className={styles.info}>{user?.phone}</span>
      </Button>

      <Button className={styles.action} variant="text">
        <span className={styles.label}>
          <AlternateEmailIcon className={styles.icon} />
          {t('profile.login')}
        </span>
        <span className={styles.info}>{user?.login}</span>
      </Button>

      <Button className={styles.action} variant="text">
        <span className={styles.label}>
          <BadgeOutlinedIcon className={styles.icon} />
          {t('profile.displayName')}
        </span>
        <span className={styles.info}>{user?.display_name || '-'}</span>
      </Button>

      <Button className={styles.logout} variant="text">{t('profile.logout')}</Button>

      {/* todo: Добавить оверфлоу dialog */}

      <Dialog isOpen={open} onClose={setOpen} cancel="Отмена" confirm="Подтвердить" onSubmit={() => {}} title="Редактирование имени">
        <Input style={{ marginBottom: '16px' }} size="m" value="Sergey" label="Name" />
        <Input size="m" value="Chumak" label="Last name" />
      </Dialog>
    </div>
  );
});
