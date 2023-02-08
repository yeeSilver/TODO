import { atom, selector } from "recoil";
export interface IToDoState {
  content: string;
  createdAt: string;
  id: string;
  // id: string | undefined;
  title: string;
  updatedAt: string;
}
export const toDoState = atom<IToDoState[]>({
  key: "toDoState",
  default: [],
});

export interface IOpenCreate {
  openCreate: boolean;
}
export const openCreateModal = atom({
  key: "openCreate",
  default: false,
});
