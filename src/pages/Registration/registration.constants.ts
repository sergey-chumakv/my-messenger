import * as yup from 'yup';

import { ISignUpForm } from '../../api/auth/types';

export const INITIAL_VALUES: ISignUpForm = {
  login: '',
  email: '',
  password: '',
  repeatPassword: '',
  phone: '',
  first_name: '',
  second_name: '',
};

export const VALIDATION_SCHEMA = yup.object({
  email: yup
    .string()
    .email('validation.email.email')
    .required('validation.email.required'),
  login: yup
    .string()
    .matches(/^\b[a-zA-Z][\w-]*\b$/, 'validation.login.matches')
    .min(3, 'validation.login.minLength')
    .max(20, 'validation.login.maxLength')
    .required('validation.login.required'),
  first_name: yup
    .string()
    .matches(/^([A-Za-z]([A-Za-z]+-?)+|[А-Яа-я]([А-Яа-я]+-?)+)$/, 'validation.name.matches')
    .required('validation.name.required'),
  second_name: yup
    .string()
    .matches(/^([A-Za-z]([A-Za-z]+-?)+|[А-Яа-я]([А-Яа-я]+-?)+)$/, 'validation.lastName.matches')
    .required('validation.lastName.required'),
  phone: yup
    .string()
    .matches(/^\+?[0-9]{10,15}$/, 'validation.phone.matches')
    .required('validation.phone.required'),
  password: yup
    .string()
    .min(8, 'validation.password.minLength')
    .max(40, 'validation.password.maxLength')
    .matches(/^\b(?=.*[A-ZА-Я])(?=.*\d).+\b$/, 'validation.password.matches')
    .required('validation.password.required'),
  repeatPassword: yup
    .string()
    .equals([yup.ref('password')], 'validation.repeatPassword.equals')
    .required('validation.repeatPassword.required'),
});
