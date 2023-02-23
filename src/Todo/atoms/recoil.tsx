import { atom, selector } from "recoil";
import { IToDoState } from "../types/types";

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

export const boxClicked = atom({
  key: "isBoxClicked",
  default: false,
});
