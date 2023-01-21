import axios from "axios";
import { AxiosResponse } from "axios";
import { useMutation } from "@tanstack/react-query";
import { AuthAPI } from "../../../constants/api";
import { setLocalStorage } from "../../../utils/localStorage";

interface IForm {
  inputEmail: string;
  inputPw: string;
}

interface ILoginResponse {
  message: string;
  token: string;
}
//로그인 토큰을 받아와서 일치하면 todo페이지로 넘기는 작업

const useLogin = () => {
  //분리가 가능하다면 분리해보자
  const loginRequest = ({ inputEmail, inputPw }: IForm) =>
    axios.post(`${AuthAPI.LOGIN}`, { inputEmail, inputPw });
  return useMutation(loginRequest, {
    onSuccess: (loginData: AxiosResponse<ILoginResponse>) => {
      setLocalStorage("token", loginData.data.token);
      console.log("success");
    },
    onError: (error) => {
      console.log("error");
    },
  });
};

export default useLogin;
