import { AxiosResponse } from "axios";
import { useMutation } from "@tanstack/react-query";
import { TodoAPI } from "../../../constants/api/api";
import client from "../../../constants/axios/axios";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { IToDoState, toDoState } from "../../../atoms/recoil";

interface ITodoForm {
  title: string;
  content: string;
}

interface IUpdate {
  data: ITodoForm;
  id: string | undefined;
}
interface ITodoResponse {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}

interface ICreateTodo {
  data: ITodoResponse;
}

const useUpdateTodo = () => {
  const navigate = useNavigate();
  const todoSave = useSetRecoilState<IToDoState[]>(toDoState);

  const updateRequest = ({ data, id }: IUpdate) =>
    client.put<ICreateTodo>(`${TodoAPI.TODOS}/${id}`, {
      title: data.title,
      content: data.content,
    });

  return useMutation(updateRequest, {
    onSuccess: (data: AxiosResponse<ICreateTodo>) => {
      navigate(`/todos`);
      todoSave(() => [
        {
          content: data.data.data.content,
          createdAt: data.data.data.createdAt,
          id: data.data.data.id,
          title: data.data.data.title,
          updatedAt: data.data.data.updatedAt,
        },
      ]);
    },
    onError: (error) => {
      alert(error);
      navigate(`/`);
      console.log(error);
    },
  });
};

export default useUpdateTodo;
