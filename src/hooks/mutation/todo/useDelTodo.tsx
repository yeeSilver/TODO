import { useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";
import { TodoAPI } from "../../../constants/api/api";
import client from "../../../constants/axios/axios";

interface IDelResponse {
  data: null;
}

export const delTodo = (id: string) =>
  client.delete<IDelResponse>(`${TodoAPI.TODOS}/${id}`);

const useDelTodo = () => {
  const navigate = useNavigate();

  const delRequest = (id: string) =>
    client.delete<IDelResponse>(`${TodoAPI.TODOS}/${id}`);

  return useMutation(delRequest, {
    onSuccess: (data: AxiosResponse<IDelResponse>) => {
      navigate("/");
    },
    onError: (error) => {
      alert(error);
      navigate(`/auth/login`);
      console.log(error);
    },
  });
};

export default useDelTodo;
