export interface IUserData {
    id: number;
    first_name: string;
    second_name: string;
    display_name: string;
    login: string;
    email: string;
    phone: string;
    avatar: string;
}

export interface ISignInForm {
    login: string;
    password: string;
}

export interface ISignUpForm {
    first_name: string;
    second_name: string;
    login: string;
    email: string;
    phone: string;
    password: string;
    repeatPassword?: string;
}

export interface ISignUpResp {
    id: number;
}

export interface IErrorResponse {
    reason: string;
}
