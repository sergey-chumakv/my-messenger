import React from 'react';
import { CircularProgress } from '@mui/material';

import styles from './full-screen-spinner.module.scss';
import './spinner-mui.scss';

export const FullScreenSpinner = () => (
  <div className={styles.container}>
    <CircularProgress size={70} thickness={4} className={styles.spinner} />
  </div>
);
