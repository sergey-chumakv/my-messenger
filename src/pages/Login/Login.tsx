import React from 'react';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';

import styles from './login.module.scss';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import { Input } from '../../components/ui-kit/Input';
import { Button } from '../../components/ui-kit/Button';
import { INITIAL_VALUES, VALIDATION_SCHEMA } from './login.constants';
import '../../utils/i18n';
import { authStore } from '../../store/auth';

export const Login = observer(() => {
  const navigate = useNavigate();
  const [t] = useTranslation();
  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema: VALIDATION_SCHEMA,
    onSubmit: authStore.submitLogin,
  });

  return (
    <div className={styles.page}>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <Logo className={styles.logo} />

        <div className={styles.title}>{t('login.title')}</div>
        <div className={styles.subtitle}>{t('login.subtitle')}</div>

        <Input
          className={styles.input}
          value={formik.values.login}
          onChange={formik.handleChange}
          error={formik.touched.login && !!formik.errors.login}
          errorMessage={t(formik.errors.login || '')}
          name="login"
          label={t('login.login')}
        />

        <Input
          className={styles.input}
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && !!formik.errors.password}
          errorMessage={t(formik.errors.password || '')}
          name="password"
          type="password"
          label={t('login.password')}
        />

        <Button className={styles.button} type="submit" variant="contained">{t('login.signin')}</Button>
        <Button className={styles.button} onClick={() => navigate('/registration')} variant="text">
          {t('login.createAccount')}
        </Button>
      </form>
    </div>
  );
});
