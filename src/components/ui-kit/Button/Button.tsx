import React from 'react';
import {
  Button as ButtonMUI, ButtonProps as ButtonMUIProps, createTheme, ThemeProvider,
} from '@mui/material';

import styles from './button.module.scss';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '0.5rem',
          fontSize: '1.125rem',
          color: '#fff',
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#639',
    },
    info: {
      main: '#fff',
    },
  },
});

interface ButtonProps extends ButtonMUIProps {
  className?: string;
  children: React.ReactNode;
}

export function Button(props: ButtonProps) {
  const { className: externalClassName, children } = props;

  return (
    <ThemeProvider theme={theme}>
      <div className={externalClassName}>
        <ButtonMUI
          {...props}
          className={styles.button}
        >
          {children}
        </ButtonMUI>
      </div>
    </ThemeProvider>
  );
}
