import { http } from '../../services/axios';
import { IUserData } from '../users/types';
import { OK } from '../types';
import {
  IManageChatUsers, IChatCard, IChatTitle, IToken,
} from './types';

export class ChatsApi {
  static getChats() {
    http.get<IChatCard[]>('', { data: { limit: 999 } });
  }

  static createChat(data: IChatTitle) {
    http.post<OK>('', { data });
  }

  static deleteChat(id: number) {
    http.delete<OK>('', { data: { chatId: id } });
  }

  static getChatUsers(id: number) {
    http.get<IUserData[]>(`/${id}/users`);
  }

  static changeChatAvatar(data: FormData) {
    http.put<OK>('/avatar', { data });
  }

  static addUsers(data: IManageChatUsers) {
    http.put<OK>('/users', { data });
  }

  static deleteUsers(data: IManageChatUsers) {
    http.delete<OK>('/users', { data });
  }

  static getChatToken(chatId: number) {
    http.post<IToken>(`/token/${chatId}`);
  }
}
