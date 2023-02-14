import { ITodoForm, IToDoState } from "./types";

export interface IUpdate {
  id: string | undefined;
  data: ITodoForm;
}

export interface IUpdateProps {
  onUpdate: (data: object, id: string) => void;
}

export interface IGetTodos {
  data: IToDoState[];
}

export interface ICreateTodo {
  data: IToDoState;
}

export interface IDelResponse {
  data: null;
}
