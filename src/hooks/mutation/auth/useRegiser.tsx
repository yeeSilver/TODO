import axios from "axios";
import { AxiosResponse } from "axios";
import { useMutation } from "@tanstack/react-query";
import { AuthAPI } from "../../../constants/api";
import { setLocalStorage } from "../../../utils/localStorage";
import { useNavigate } from "react-router-dom";

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
    axios.post<IRegisterResponse>(`${AuthAPI.REGISTER}`, { email, password });
  return useMutation(registerRequest, {
    onSuccess: ({ data }: AxiosResponse<IRegisterResponse>) => {
      console.log("good");
      setLocalStorage("token", data.token);
      // localStorage.setItem("token", data.token);
      alert(data.message);
      navigate("/");
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

export default useRegister;
