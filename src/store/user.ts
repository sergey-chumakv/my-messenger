import { makeAutoObservable } from 'mobx';
import { UsersApi } from '../api/users';
import { AuthApi } from '../api/auth';

class User {
  constructor() {
    makeAutoObservable(this);
  }

  changeAvatar(file: File) {
    UsersApi.changeUserAvatar(file).then(() => AuthApi.getUserData());
  }
}

export const userStore = new User();
export type TUserStore = typeof userStore;
