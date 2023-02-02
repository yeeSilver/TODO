import axios, { AxiosResponse } from "axios";
import { useMutation } from "@tanstack/react-query";
import { TodoAPI } from "../../../constants/api/api";
import client from "../../../constants/axios/axios";
import { useNavigate } from "react-router-dom";
import token from "../../../utils/localStorage";
import { ACCESS_TOKEN_KEY } from "../../../constants/token";

interface ITodoResponse {
  title: string;
  content: string;
  id: string;
  createAt: string;
  updatedAt: string;
}

interface IGetTodos {
  data: ITodoResponse[];
}

// const navigate = useNavigate();
// const getTodos = () => {
//   return client
//     .get<AxiosResponse<IGetTodos>>(`${TodoAPI.TODOS}`)
//     .then((res) => res.data)
//     .catch(function (error) {
//       console.log(error.response);
//       alert("로그인을 해주세요!");
//     });
// };

export const getTodos = () => client.get<IGetTodos>(`${TodoAPI.TODOS}`);
