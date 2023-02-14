import { TodoAPI } from "../../../constants/api";
import client from "../../../utils/axios";
import token from "../../../utils/localStorage";
import { ACCESS_TOKEN_KEY } from "../../../constants/token";
import { IGetTodos } from "../../types/hooktypes";

export const getTodos = () => client.get<IGetTodos>(`${TodoAPI.TODOS}`);
export const getTodosById = async (id: string) => {
  await client.get<IGetTodos>(`${TodoAPI.TODOS}/${id}`);
};

export async function fetchTodos(id: string | undefined) {
  const authtoken = token.getToken(ACCESS_TOKEN_KEY);

  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}/todos/${id}`,
    {
      method: "GET",
      headers: {
        Authorization: `${authtoken}`,
      },
    }
  );

  return response;
}
