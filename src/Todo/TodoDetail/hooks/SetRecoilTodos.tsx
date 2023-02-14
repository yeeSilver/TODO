import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";

import { IToDoState } from "../../types/types";

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
