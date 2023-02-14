import { useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";
import { TodoAPI } from "../../../constants/api";
import client from "../../../utils/axios";
import { IDelResponse } from "../../types/hooktypes";

export const delTodo = (id: string) =>
  client.delete<IDelResponse>(`${TodoAPI.TODOS}/${id}`);

const useDelTodo = () => {
  const navigate = useNavigate();

  const delRequest = (id: string) =>
    client.delete<IDelResponse>(`${TodoAPI.TODOS}/${id}`);

  return useMutation(delRequest, {
    onSuccess: (data: AxiosResponse<IDelResponse>) => {
      navigate("/todos");
    },
    onError: (error) => {
      alert(error);
      navigate(`/`);
      console.log(error);
    },
  });
};

export default useDelTodo;
