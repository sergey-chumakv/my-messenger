import * as yup from 'yup';

export const INITIAL_VALUES = {
  login: '',
  password: '',
};

export const VALIDATION_SCHEMA = yup.object({
  login: yup
    .string()
    .matches(/^\b[a-zA-Z][\w-]*\b$/, 'validation.login.matches')
    .min(3, 'validation.login.minLength')
    .max(20, 'validation.login.maxLength')
    .required('validation.login.required'),
  password: yup
    .string()
    .min(8, 'validation.password.minLength')
    .max(40, 'validation.password.maxLength')
    .matches(/^\b(?=.*[A-ZА-Я])(?=.*\d).+\b$/, 'validation.password.matches')
    .required('validation.password.required'),
});
