import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { toast } from 'react-toastify';
import { IErrorResponse } from '../../api/types';
import { BASE_URL } from '../constants';

const config: AxiosRequestConfig = {
  baseURL: BASE_URL,
  timeout: 60000,
  withCredentials: true,
};

export const http = axios.create(config);

http.interceptors.response.use(
  (response) => response,
  (err: AxiosError<IErrorResponse>) => {
    if (err.config.url !== '/auth/user') toast.error(err.response?.data.reason || err.message);
    return Promise.reject(err);
  },
);
