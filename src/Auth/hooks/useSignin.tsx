import axios from "axios";
import { AxiosResponse } from "axios";
import { useMutation } from "@tanstack/react-query";
import { AuthAPI } from "../../constants/api";
import token from "../../utils/localStorage";
import { api } from "../../utils/instance";
import { useNavigate } from "react-router-dom";
import client from "../../utils/axios";
import { ACCESS_TOKEN_KEY, USERNAME } from "../../constants/token";

interface IForm {
  inputEmail: string;
  inputPw: string;
}

interface ILoginResponse {
  message: string;
  token: string;
}
//로그인 토큰을 받아와서 일치하면 todo페이지로 넘기는 작업

const useSignin = () => {
  //분리해야 할 듯
  const navigate = useNavigate();
  const loginRequest = ({ inputEmail, inputPw }: IForm) =>
    api.post(`${AuthAPI.LOGIN}`, {
      email: inputEmail,
      password: inputPw,
    });

  return useMutation(loginRequest, {
    onSuccess: (loginData: AxiosResponse<ILoginResponse>, data: IForm) => {
      token.setToken(ACCESS_TOKEN_KEY, loginData.data.token);
      // .+(?=@)
      const regex = /.+(?=@)/;
      const username = String(data.inputEmail.match(regex));
      token.setUsername(USERNAME, username);
      console.log(username?.[0]);
      navigate(`/todos`);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

export default useSignin;
