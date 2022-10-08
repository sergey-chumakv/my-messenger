import React from 'react';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

import styles from './registration.module.scss';
import { Input } from '../../components/ui-kit/Input';
import { Button } from '../../components/ui-kit/Button';
import { TAuthStore } from '../../store/auth';
import { INITIAL_VALUES, VALIDATION_SCHEMA } from './registration.constants';

interface Props {
  auth: TAuthStore;
}

export const Registration = observer(({ auth }: Props) => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema: VALIDATION_SCHEMA,
    onSubmit: auth.submitRegistration,
  });

  return (
    <div className={styles.page}>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <div className={styles.title}>Sign up to messenger</div>
        <div className={styles.subtitle}>Please fill out the registration form.</div>

        <Input
          className={styles.input}
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && !!formik.errors.email}
          errorMessage={formik.errors.email}
          autoComplete="off"
          name="email"
          label="Email"
        />

        <Input
          className={styles.input}
          value={formik.values.login}
          onChange={formik.handleChange}
          error={formik.touched.login && !!formik.errors.login}
          errorMessage={formik.errors.login}
          autoComplete="off"
          name="login"
          label="Login"
        />

        <Input
          className={styles.input}
          value={formik.values.first_name}
          onChange={formik.handleChange}
          error={formik.touched.first_name && !!formik.errors.first_name}
          errorMessage={formik.errors.first_name}
          autoComplete="off"
          name="first_name"
          label="Name"
        />

        <Input
          className={styles.input}
          value={formik.values.second_name}
          onChange={formik.handleChange}
          error={formik.touched.second_name && !!formik.errors.second_name}
          errorMessage={formik.errors.second_name}
          autoComplete="off"
          name="second_name"
          label="Last name"
        />

        <Input
          className={styles.input}
          value={formik.values.phone}
          onChange={formik.handleChange}
          error={formik.touched.phone && !!formik.errors.phone}
          errorMessage={formik.errors.phone}
          autoComplete="off"
          name="phone"
          label="Phone"
        />

        <Input
          className={styles.input}
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && !!formik.errors.password}
          errorMessage={formik.errors.password}
          autoComplete="off"
          type="password"
          name="password"
          label="Password"
        />

        <Input
          className={styles.input}
          value={formik.values.repeatPassword}
          onChange={formik.handleChange}
          error={formik.touched.repeatPassword && !!formik.errors.repeatPassword}
          errorMessage={formik.errors.repeatPassword}
          autoComplete="off"
          type="password"
          name="repeatPassword"
          label="Password (repeat)"
        />

        <Button className={styles.button} variant="contained" type="submit">SIGN UP</Button>
        <Button className={styles.button} onClick={() => navigate('/login')} color="info" variant="text">
          I HAVE A PROFILE.
        </Button>
      </form>
    </div>
  );
});
