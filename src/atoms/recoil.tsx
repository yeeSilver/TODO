import { atom } from "recoil";
export interface IToDoState {
  title: string;
  content: string;
  id: string;
  createAt: string;
  updatedAt: string;
}
export const toDoState = atom<IToDoState[]>({
  key: "toDo",
  default: [],
});
