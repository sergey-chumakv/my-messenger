import * as yup from 'yup';

export const INITIAL_VALUES = {
  login: '',
  password: '',
};

export const VALIDATION_SCHEMA = yup.object({
  login: yup
    .string()
    .matches(/^\b[a-zA-Z][\w-]*\b$/, 'Must start with a letter, only Latin and numbers')
    .min(3, 'Login should be of minimum 3 characters length')
    .max(20, 'Login should be of maximum 20 characters length')
    .required('Login is required'),
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .max(40, 'Password should be of maximum 40 characters length')
    .matches(/^\b(?=.*[A-ZА-Я])(?=.*\d).+\b$/, 'Must contain a capital letter and a number')
    .required('Password is required'),
});
