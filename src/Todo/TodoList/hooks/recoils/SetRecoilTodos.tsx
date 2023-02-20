import { IToDoState } from "../../../types/types";
const SetRecoilTodos = (toDodetails: IToDoState, todoSave: any) => {
  return todoSave(() => [
    {
      title: toDodetails.title,
      content: toDodetails.content,
      id: toDodetails.id,
      createdAt: toDodetails.createdAt,
      updatedAt: toDodetails.updatedAt,
    },
  ]);
};

export default SetRecoilTodos;
