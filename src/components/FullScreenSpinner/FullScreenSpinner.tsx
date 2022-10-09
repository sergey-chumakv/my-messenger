import React from 'react';
import { CircularProgress } from '@mui/material';
import styles from './full-screen-spinner.module.scss';

export function FullScreenSpinner() {
  return (
    <div className={styles.container}>
      <CircularProgress color="secondary" size={70} thickness={4} className={styles.spinner} />
    </div>
  );
}
