import { http } from '../../services/axios';
import { authStore } from '../../store/auth';
import { ISignInForm, ISignUpForm, ISignUpResp } from './types';
import { IUserData } from '../users/types';
import { OK } from '../types';

export class AuthApi {
  static getUserData() {
    return http.get<IUserData>('/auth/user')
      .then((resp) => authStore.setUserInfo(resp.data))
      .catch(() => authStore.removeUser());
  }

  static signIn(payload: ISignInForm) {
    http.post<OK>('/auth/signin', payload)
      .then(() => this.getUserData());
  }

  static signUp(payload: ISignUpForm) {
    http.post<ISignUpResp>('/auth/signup', payload)
      .then(() => this.getUserData());
  }

  static logout() {
    http.post('/auth/logout').finally(() => authStore.removeUser());
  }
}
