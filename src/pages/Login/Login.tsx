import React from 'react';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

import styles from './login.module.scss';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import { Input } from '../../components/ui-kit/Input';
import { Button } from '../../components/ui-kit/Button';
import { TAuthStore } from '../../store/auth';
import { INITIAL_VALUES, VALIDATION_SCHEMA } from './login.constants';

interface Props {
  auth: TAuthStore;
}

export const Login = observer(({ auth }: Props) => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema: VALIDATION_SCHEMA,
    onSubmit: auth.submitLogin,
  });

  return (
    <div className={styles.page}>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <Logo className={styles.logo} />

        <div className={styles.title}> Sign in to messenger</div>
        <div className={styles.subtitle}>Please enter your login and password.</div>

        <Input
          className={styles.input}
          value={formik.values.login}
          onChange={formik.handleChange}
          error={formik.touched.login && !!formik.errors.login}
          errorMessage={formik.errors.login}
          name="login"
          label="Login"
        />

        <Input
          className={styles.input}
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && !!formik.errors.password}
          errorMessage={formik.errors.password}
          name="password"
          type="password"
          label="Password"
        />

        <Button className={styles.button} type="submit" variant="contained">SIGN IN</Button>
        <Button className={styles.button} onClick={() => navigate('/registration')} color="info" variant="text">
          CREATE ACCOUNT
        </Button>
      </form>
    </div>
  );
});
