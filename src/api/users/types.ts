export interface IUserData {
  id: number,
  first_name: string,
  second_name: string,
  display_name: string,
  login: string,
  email: string,
  phone: string,
  avatar: string
}

export interface IChangingUserData {
  email: string;
  login: string;
  first_name: string;
  second_name: string;
  display_name: string;
  phone: string;
}

export interface IChangingUserPassword {
  oldPassword: string;
  newPassword: string;
  repeatPassword?: string;
}

export interface ISearchUser {
  login: string;
}
