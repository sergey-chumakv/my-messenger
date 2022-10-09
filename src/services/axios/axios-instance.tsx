import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { toast } from 'react-toastify';
import { IErrorResponse } from '../../api/types';

const config: AxiosRequestConfig = {
  baseURL: 'https://ya-praktikum.tech/api/v2',
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
