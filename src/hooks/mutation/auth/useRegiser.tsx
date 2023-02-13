import axios from "axios";
import { AxiosResponse } from "axios";
import { useMutation } from "@tanstack/react-query";
import { AuthAPI } from "../../../constants/api/api";
import token from "../../../utils/localStorage";
import { useNavigate } from "react-router-dom";
import { api } from "../../../utils/instance";

interface IRegisterForm {
  email: string;
  password: string;
}

interface IRegisterResponse {
  message: string;
  token: string;
}

const useRegister = () => {
  console.log("useRegister");
  const navigate = useNavigate();
  const registerRequest = ({ email, password }: IRegisterForm) =>
    api.post<IRegisterResponse>(`${AuthAPI.REGISTER}`, {
      email,
      password,
    });
  return useMutation(registerRequest, {
    onSuccess: ({ data }: AxiosResponse<IRegisterResponse>) => {
      console.log("good");
      token.setToken("token", data.token);
      alert(data.message);
      navigate("/todos");
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

export default useRegister;
