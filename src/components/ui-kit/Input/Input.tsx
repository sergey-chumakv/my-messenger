import React from 'react';
import classNames from 'classnames';
import { TextField, TextFieldProps } from '@mui/material';

import './input-mui.scss';

interface InputProps {
    errorMessage?: string;
    className?: string;
    size?: 'm' | 'l';
    variant?: 'outlined';
}

export const Input = (props: InputProps & Omit<TextFieldProps, 'size'>) => {
  const {
    className: externalClassName,
    errorMessage,
    label,
    value,
    error,
    size = 'l',
    variant = 'outlined',
    ...otherProps
  } = props;

  const [focused, setFocused] = React.useState(false);

  return (
    <div className={externalClassName}>
      <TextField
        {...otherProps}
        variant={variant}
        label={(value || focused) ? ((error && errorMessage) || label) : label}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        size={size === 'm' ? 'small' : 'medium'}
        className={classNames('override input-mui')}
      />
    </div>
  );
};
