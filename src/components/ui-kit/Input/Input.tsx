import React from 'react';
import classNames from 'classnames';
import { TextField, TextFieldProps } from '@mui/material';
import styles from './input.module.scss';

interface InputProps {
    errorMessage?: string;
    className?: string;
}

export function Input({ errorMessage, ...props }: InputProps & TextFieldProps) {
  const {
    className: externalClassName, label, value, error,
  } = props;

  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <div className={externalClassName}>
      <TextField
        {...props}
        label={(value || isFocused) ? ((error && errorMessage) || label) : label}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={classNames('override input-mui', styles.input)}
        variant="outlined"
      />
    </div>
  );
}
