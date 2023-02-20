import { AxiosResponse } from "axios";
import { useMutation } from "@tanstack/react-query";
import { TodoAPI } from "../../../constants/api";
import client from "../../../utils/axios";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { toDoState } from "../../atoms/recoil";
import { IToDoState } from "../../types/types";
import { ICreateTodo, IUpdate } from "../../types/hooktypes";

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
