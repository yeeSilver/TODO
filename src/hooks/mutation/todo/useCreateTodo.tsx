import { AxiosResponse } from "axios";
import { useMutation } from "@tanstack/react-query";
import { TodoAPI } from "../../../constants/api/api";
import client from "../../../constants/axios/axios";
import { useNavigate } from "react-router-dom";
import { api } from "../../../utils/instance";
import { ACCESS_TOKEN_KEY } from "../../../constants/token";
import token from "../../../utils/localStorage";
import { REQUEST_KEY } from "../../../constants/token";

interface ITodoForm {
  title: string;
  content: string;
}

interface ITodoResponse {
  title: string;
  content: string;
  id: string;
  createAt: string;
  updatedAt: string;
}

interface ICreateTodo {
  data: ITodoResponse;
}

const useCreateTodo = () => {
  const navigate = useNavigate();
  //분리해야 할 듯
  const createRequest = ({ title, content }: ITodoForm) =>
    client.post<ICreateTodo>(`${TodoAPI.TODOS}`, {
      title: title,
      content: content,
    });

  return useMutation(createRequest, {
    onSuccess: (data: AxiosResponse<ICreateTodo>) => {
      // navigate(`/todos/${data.data.id}`);
      console.log(data);
    },
    onError: (error) => {
      alert(error);
      navigate(`/auth`);
      console.log(error);
    },
  });
};

export default useCreateTodo;
