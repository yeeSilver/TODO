import { AxiosResponse } from "axios";
import { useMutation } from "@tanstack/react-query";
import { TodoAPI } from "../../../constants/api";
import client from "../../../utils/axios";
import { useNavigate } from "react-router-dom";
import { api } from "../../../utils/instance";
import { ACCESS_TOKEN_KEY } from "../../../constants/token";
import token from "../../../utils/localStorage";
import { REQUEST_KEY } from "../../../constants/token";
import { ITodoForm } from "../../types/types";
import { ICreateTodo } from "../../types/hooktypes";

const useCreateTodo = () => {
  const navigate = useNavigate();

  const createRequest = ({ title, content }: ITodoForm) =>
    client.post<ICreateTodo>(`${TodoAPI.TODOS}`, {
      title: title,
      content: content,
    });

  return useMutation(createRequest, {
    onSuccess: (data: AxiosResponse<ICreateTodo>) => {
      navigate(`/todos`);
      console.log(data);
    },
    onError: (error) => {
      alert(error);
      navigate(`/`);
      console.log(error);
    },
  });
};

export default useCreateTodo;
