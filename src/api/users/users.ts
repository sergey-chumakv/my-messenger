import { http } from '../../services/axios';
import { OK } from '../types';
import {
  IChangingUserData, IChangingUserPassword, IUserData, ISearchUser,
} from './types';

export class UsersApi {
  static changeUserData(data: IChangingUserData) {
    return http.put<OK>('/user/profile', { data });
  }

  static getUser(id: number | string) {
    return http.get<IUserData>(`/user/${id}`);
  }

  static changeUserPassword(data: IChangingUserPassword) {
    return http.put<OK>('/user/password', { data });
  }

  static changeUserAvatar(avatar: File) {
    return http.put<OK>('/user/profile/avatar', { avatar }, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Accept: '*/*',
      },
    });
  }

  static searchUsers(data: ISearchUser) {
    return http.post<IUserData[]>('/user/search', { data });
  }
}
