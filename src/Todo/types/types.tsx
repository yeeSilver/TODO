import { SetterOrUpdater } from "recoil";

export interface IToDoState {
  content: string;
  createdAt: string;
  id: string;
  // id: string | undefined;
  title: string;
  updatedAt: string;
}

export interface IPropsTypes {
  todorecoils: IToDoState[];
  setTodos: SetterOrUpdater<IToDoState[]>;
}

export interface TodoListProps {
  title: string;
  content: string;
  id: string;
  createAt: string;
  updatedAt: string;
  onDelClicked?: () => void | undefined;
}

export interface ITodoForm {
  title: string;
  content: string;
}
