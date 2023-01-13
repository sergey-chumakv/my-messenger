import React from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import { ReactComponent as Russia } from '../../../../assets/icons/russia.svg';
import { ReactComponent as England } from '../../../../assets/icons/england.svg';
import styles from './language.module.scss';
import '../../../../utils/i18n';

export const Language = () => {
  const [t, i18n] = useTranslation();

  return (
    <React.Fragment>
      <div className={styles.title}>{t('language.title')}</div>

      <div className={styles['language-wrapper']}>
        <div className={styles.language}>
          <Russia
            className={classNames(styles.flag, { [styles.active]: i18n.language === 'ru' })}
            onClick={() => i18n.changeLanguage('ru')}
          />
          <div className={styles.backdrop} />
          Русский
        </div>

        <div className={styles.language}>
          <England
            className={classNames(styles.flag, { [styles.active]: i18n.language === 'en' })}
            onClick={() => i18n.changeLanguage('en')}
          />
          <div className={styles.backdrop} />
          English
        </div>
      </div>

    </React.Fragment>
  );
};
