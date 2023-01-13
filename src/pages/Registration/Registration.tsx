import React from 'react';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';

import styles from './registration.module.scss';
import { Input } from '../../components/ui-kit/Input';
import { Button } from '../../components/ui-kit/Button';
import { TAuthStore } from '../../store/auth';
import { INITIAL_VALUES, VALIDATION_SCHEMA } from './registration.constants';
import '../../utils/i18n';

interface Props {
  auth: TAuthStore;
}

export const Registration = observer(({ auth }: Props) => {
  const navigate = useNavigate();
  const [t] = useTranslation();
  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema: VALIDATION_SCHEMA,
    onSubmit: auth.submitRegistration,
  });

  return (
    <div className={styles.page}>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <div className={styles.title}>{t('registration.title')}</div>
        <div className={styles.subtitle}>{t('registration.subtitle')}</div>

        <Input
          className={styles.input}
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && !!formik.errors.email}
          errorMessage={t(formik.errors.email || '')}
          autoComplete="off"
          name="email"
          label={t('registration.email')}
        />

        <Input
          className={styles.input}
          value={formik.values.login}
          onChange={formik.handleChange}
          error={formik.touched.login && !!formik.errors.login}
          errorMessage={t(formik.errors.login || '')}
          autoComplete="off"
          name="login"
          label={t('registration.login')}
        />

        <Input
          className={styles.input}
          value={formik.values.first_name}
          onChange={formik.handleChange}
          error={formik.touched.first_name && !!formik.errors.first_name}
          errorMessage={t(formik.errors.first_name || '')}
          autoComplete="off"
          name="first_name"
          label={t('registration.name')}
        />

        <Input
          className={styles.input}
          value={formik.values.second_name}
          onChange={formik.handleChange}
          error={formik.touched.second_name && !!formik.errors.second_name}
          errorMessage={t(formik.errors.second_name || '')}
          autoComplete="off"
          name="second_name"
          label={t('registration.lastName')}
        />

        {/* Todo: add mask for phone */}
        <Input
          className={styles.input}
          value={formik.values.phone}
          onChange={formik.handleChange}
          error={formik.touched.phone && !!formik.errors.phone}
          errorMessage={t(formik.errors.phone || '')}
          autoComplete="off"
          name="phone"
          label={t('registration.phone')}
        />

        <Input
          className={styles.input}
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && !!formik.errors.password}
          errorMessage={t(formik.errors.password || '')}
          autoComplete="off"
          type="password"
          name="password"
          label={t('registration.password')}
        />

        <Input
          className={styles.input}
          value={formik.values.repeatPassword}
          onChange={formik.handleChange}
          error={formik.touched.repeatPassword && !!formik.errors.repeatPassword}
          errorMessage={t(formik.errors.repeatPassword || '')}
          autoComplete="off"
          type="password"
          name="repeatPassword"
          label={t('registration.passwordRepeat')}
        />

        <Button className={styles.button} variant="contained" type="submit">{t('registration.signup')}</Button>
        <Button className={styles.button} onClick={() => navigate('/login')} variant="text">
          {t('registration.profile')}
        </Button>
      </form>
    </div>
  );
});
