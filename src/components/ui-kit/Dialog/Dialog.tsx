import React from 'react';
import { Dialog as MUIDialog } from '@mui/material';

import styles from './dialog.module.scss';
import './dialog-mui.scss';
import { Button } from '../Button';

interface DialogProps {
    isOpen: boolean;
    onClose: (state: false) => void;
    title: string;
    cancel: string;
    confirm: string;
    onSubmit: () => void;
    children: React.ReactNode;
}

export const Dialog = (props: DialogProps) => {
  const {
    isOpen, onClose, title, confirm, onSubmit, children, cancel,
  } = props;

  return (
    <MUIDialog className={styles.dialog} open={isOpen} onClose={() => onClose(false)}>
      <div className={styles.title}>{title}</div>

      {children}

      <div className={styles.actions}>
        <Button className={styles.cancel} size="m" variant="text" onClick={() => onClose(false)}>{cancel}</Button>
        <Button size="m" variant="contained" onClick={() => onSubmit()}>{confirm}</Button>
      </div>
    </MUIDialog>
  );
};
