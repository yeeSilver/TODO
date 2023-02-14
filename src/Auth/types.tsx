export interface IInputForm {
  inputEmail: string;
  inputPw: string;
}

export interface IAuthForm {
  errors: {
    email: {
      message: string;
    };
  };
  email: string;
  password: string;
  confirmedPw: string;
  extraError?: string;
}
