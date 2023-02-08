import { AxiosResponse } from "axios";
import { useMutation } from "@tanstack/react-query";
import { TodoAPI } from "../../../constants/api/api";
import client from "../../../constants/axios/axios";
import { useNavigate } from "react-router-dom";

interface ITodoForm {
  title: string;
  content: string;
}

interface IUpdate {
  data: ITodoForm;
  id: string;
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

const useUpdateTodo = () => {
  const navigate = useNavigate();
  //분리해야 할 듯
  const updateRequest = ({ data, id }: IUpdate) =>
    client.put<ICreateTodo>(`${TodoAPI.TODOS}/${id}`, {
      title: data.title,
      content: data.content,
    });

  return useMutation(updateRequest, {
    onSuccess: (data: AxiosResponse<ICreateTodo>) => {
      navigate(`/`);
      console.log(data);
    },
    onError: (error) => {
      alert(error);
      navigate(`/auth/signin`);
      console.log(error);
    },
  });
};

export default useUpdateTodo;
