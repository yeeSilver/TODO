import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { openCreateModal, toDoState } from "../../atoms/recoil";
import { getTodos } from "../hooks/useGetTodos";
import DateDiv from "../../../components/DateDiv";
import TodoDetailForm from "../../TodoDetail/components/TodoDetailForm";
import TodoForm from "../../TodoModal/components/todoAdd/TodoForm";

import {
  Board,
  ConList,
  Container,
  CreateBtn,
  DetailCon,
  Title,
  TodoCon,
} from "./TodoList.style";
import { IToDoState } from "../../types/types";

const TodoList = () => {
  const { isLoading, data: toDoList } = useQuery(["todos"], getTodos, {
    refetchInterval: 5000,
  });

  const todoSave = useSetRecoilState<IToDoState[]>(toDoState);

  const [isClicked, setisClicked] = useState(false);

  // const todos = useRecoilState(toDoState);
  const onSaveDetailTodos = (toDodetails: IToDoState) => {
    setisClicked(true);

    todoSave(() => [
      {
        content: toDodetails.content,
        createdAt: toDodetails.createdAt,
        id: toDodetails.id,
        title: toDodetails.title,
        updatedAt: toDodetails.updatedAt,
      },
    ]);
  };

  const [openCreate, setOpenCreate] = useRecoilState<boolean>(openCreateModal);
  const onOpenModal = () => {
    setOpenCreate((prev): boolean => !prev);
  };
  return (
    <div>
      {isLoading ? (
        <div> Loading... </div>
      ) : (
        <Container>
          <TodoCon>
            <DateDiv />
            <div
              style={{
                margin: "1.5rem 0",
                overflow: "auto",
                height: "60%",
              }}
            >
              {toDoList?.data?.data.map((todo) => (
                <ConList key={todo.id} id={todo.id}>
                  <Board
                    key={todo.id}
                    {...todo}
                    onClick={() => {
                      onSaveDetailTodos({
                        ...todo,
                      });
                    }}
                  >
                    <Title>{todo.title}</Title>
                  </Board>
                </ConList>
              ))}
            </div>
            <CreateBtn as="button" onClick={onOpenModal}>
              NEW
            </CreateBtn>
            {openCreate && <TodoForm />}
          </TodoCon>
          <DetailCon>{isClicked && <TodoDetailForm />}</DetailCon>
        </Container>
      )}
    </div>
  );
};

export default TodoList;
