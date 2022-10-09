interface IUser {
  first_name: string;
  second_name: string;
  avatar: string;
  email: string;
  login: string;
  phone: string;
}

interface ILastMessage {
  user: IUser;
  time: string;
  content: string;
}

export interface IChatCard {
  id: number;
  title: string;
  avatar: string;
  unread_count: number;
  last_message: ILastMessage;
}

export interface IChatTitle {
  title: string;
}

export interface IManageChatUsers {
  users: number[];
  chatId: number;
}

export interface IToken {
  token: string
}
