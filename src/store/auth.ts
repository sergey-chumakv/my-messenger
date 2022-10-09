import { makeAutoObservable } from 'mobx';

import { ISignInForm, ISignUpForm } from '../api/auth/types';
import { AuthApi } from '../api/auth';
import { IUserData } from '../api/users/types';

class Auth {
  userData: IUserData | null = null;
  isLoading = true;

  get isAuth(): boolean {
    return !!this.userData;
  }

  constructor() {
    makeAutoObservable(this);
  }

  setIsLoading(value: boolean) {
    this.isLoading = value;
  }

  setUserInfo(value: IUserData) {
    this.userData = value;
  }

  authenticate() {
    AuthApi.getUserData().then(() => this.setIsLoading(false));
  }

  removeUser() {
    this.userData = null;
  }

  submitLogin(payload: ISignInForm) {
    AuthApi.signIn(payload);
  }

  submitRegistration(payload: ISignUpForm) {
    const cPayload = { ...payload };
    delete cPayload.repeatPassword;
    AuthApi.signUp(cPayload);
  }
}

export const authStore = new Auth();
export type TAuthStore = typeof authStore;
