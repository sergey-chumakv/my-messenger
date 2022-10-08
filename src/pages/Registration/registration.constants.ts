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
    .email('Must be a valid email')
    .required('Email is required'),
  login: yup
    .string()
    .matches(/^\b[a-zA-Z][\w-]*\b$/, 'Must start with a letter, only Latin and numbers')
    .min(3, 'Login should be of minimum 3 characters length')
    .max(20, 'Login should be of maximum 20 characters length')
    .required('Login is required'),
  first_name: yup
    .string()
    .matches(/^([A-Za-z]([A-Za-z]+-?)+|[А-Яа-я]([А-Яа-я]+-?)+)$/, 'Must be in Latin or Cyrillic')
    .required('Name is required'),
  second_name: yup
    .string()
    .matches(/^([A-Za-z]([A-Za-z]+-?)+|[А-Яа-я]([А-Яа-я]+-?)+)$/, 'Must be in Latin or Cyrillic')
    .required('Last name is required'),
  phone: yup
    .string()
    .matches(/^\+?[0-9]{10,15}$/, 'Must be a valid phone')
    .required('Phone is required'),
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .max(40, 'Password should be of maximum 40 characters length')
    .matches(/^\b(?=.*[A-ZА-Я])(?=.*\d).+\b$/, 'Must contain a capital letter and a number')
    .required('Password is required'),
  repeatPassword: yup
    .string()
    .equals([yup.ref('password')], 'Must match password')
    .required('Password is required'),
});
