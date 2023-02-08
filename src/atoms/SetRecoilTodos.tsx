import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { IToDoState, toDoState } from "./recoil";

function SetRecoilTodos(toDodetails: IToDoState, todoSave: any) {
  todoSave(() => [
    {
      title: toDodetails.title,
      content: toDodetails.content,
      id: toDodetails.id,
      createdAt: toDodetails.createdAt,
      updatedAt: toDodetails.updatedAt,
    },
  ]);
}

export default SetRecoilTodos;
