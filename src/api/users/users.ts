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

  static changeUserAvatar(data: FormData) {
    return http.put<OK>('/user/profile/avatar', { data });
  }

  static searchUsers(data: ISearchUser) {
    return http.post<IUserData[]>('/user/search', { data });
  }
}
