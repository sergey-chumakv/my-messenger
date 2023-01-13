import React from 'react';
import { Tab } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LogoutIcon from '@mui/icons-material/Logout';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LanguageIcon from '@mui/icons-material/Language';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import SecurityIcon from '@mui/icons-material/Security';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';

import styles from './setting.module.scss';
import { Profile } from './components/Profile';
import { Language } from './components/Language';
import '../../utils/i18n';
import Toggle from './components/Apperance/Apperance';
import { TabPanel, VerticalTabs } from '../../components/ui-kit/Tabs';

export const Setting = observer(() => {
  const [value, setValue] = React.useState(0);
  const [t] = useTranslation();

  return (
    <div className={styles.page}>
      <div className={styles['header-action']}>
        <ArrowBackIcon className={styles.back} />
        <LogoutIcon className={styles.back} />
      </div>

      <div className={styles.content}>
        <div className={styles.navigation}>
          <VerticalTabs
            value={value}
            onChange={setValue}
          >
            <Tab icon={<ManageAccountsIcon />} label={t('setting.profile')} />
            <Tab icon={<LanguageIcon />} label={t('setting.language')} />
            <Tab icon={<ColorLensIcon />} label={t('setting.appearance')} />
            <Tab icon={<SecurityIcon />} label={t('setting.security')} />
          </VerticalTabs>
        </div>

        <TabPanel index={0} value={value}>
          <Profile />
        </TabPanel>
        <TabPanel index={1} value={value}>
          <Language />
        </TabPanel>
        <TabPanel index={2} value={value}>
          <Toggle />
        </TabPanel>
        <TabPanel index={3} value={value}>
          Security
        </TabPanel>

        <div className={styles.right} />
      </div>

      <div className={styles.autograph}>
        {t('setting.autograph')}
      </div>
    </div>
  );
});
