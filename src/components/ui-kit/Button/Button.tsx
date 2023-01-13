import React from 'react';
import { Button as ButtonMUI, ButtonProps as ButtonMUIProps } from '@mui/material';
import classNames from 'classnames';

import styles from './button.module.scss';
import './button-mui.scss';

interface ButtonProps extends Omit<ButtonMUIProps, 'size'> {
  className?: string;
  children: React.ReactNode;
  size?: 'm' | 'l';
}

export const Button = (props: ButtonProps) => {
  const {
    className: externalClassName, children, size = 'l', variant = 'contained', color = 'primary', ...otherProps
  } = props;

  return (
    <div className={externalClassName}>
      <ButtonMUI
        className={classNames(styles.button, styles[`button_${size}`])}
        variant={variant}
        color={color}
        {...otherProps}
      >
        {children}
      </ButtonMUI>
    </div>
  );
};
