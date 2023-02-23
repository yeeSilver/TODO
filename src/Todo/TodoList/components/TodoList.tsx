import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { boxClicked, openCreateModal, toDoState } from "../../atoms/recoil";
import { getTodos } from "../hooks/useGetTodos";
import DateDiv from "../../../components/DateDiv";
import TodoDetailForm from "../../TodoDetail/components/TodoDetailForm";
import TodoForm from "../../TodoModal/components/todoAdd/TodoForm";

import {
  Board,
  ConList,
  Container,
  CreateBtn,
  DefaultList,
  DetailCon,
  Title,
  TodoCon,
} from "./todoList.style";
import { IToDoState } from "../../types/types";
import SetRecoilTodos from "../hooks/recoils/SetRecoilTodos";
import Default from "../../TodoDetail/components/Default";

const TodoList = () => {
  const { isLoading, data: toDoList } = useQuery(["todos"], getTodos, {
    refetchInterval: 5000,
  });

  const [isBoxClicked, setisBoxClicked] = useRecoilState<boolean>(boxClicked);

  const todoSave = useSetRecoilState<IToDoState[]>(toDoState);

  const onSaveDetailTodos = (toDodetails: IToDoState) => {
    setisBoxClicked(true);
    SetRecoilTodos(toDodetails, todoSave);
  };

  const toggleActive = () => {};

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
              {toDoList?.data.data[0] !== undefined ? (
                <ConList>
                  {toDoList?.data?.data.map((todo) => (
                    <Board
                      key={todo.id}
                      onClick={() => {
                        onSaveDetailTodos({
                          ...todo,
                        });
                      }}
                    >
                      <Title>{todo.title}</Title>
                    </Board>
                  ))}
                </ConList>
              ) : (
                <DefaultList>
                  <p>Add your TODO!</p>
                </DefaultList>
              )}
            </div>
            <CreateBtn as="button" onClick={onOpenModal}>
              NEW
            </CreateBtn>
            {openCreate && <TodoForm />}
          </TodoCon>
          <DetailCon>
            {isBoxClicked ? <TodoDetailForm /> : <Default />}
          </DetailCon>
        </Container>
      )}
    </div>
  );
};

export default TodoList;
