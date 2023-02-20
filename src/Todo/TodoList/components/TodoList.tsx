import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
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
} from "./todoList.style";
import { IToDoState } from "../../types/types";
import SetRecoilTodos from "../hooks/recoils/SetRecoilTodos";

const TodoList = () => {
  const { isLoading, data: toDoList } = useQuery(["todos"], getTodos);
  // console.log(toDoList?.data.data[0])
  const [isClicked, setisClicked] = useState(false);
  const todoSave = useSetRecoilState<IToDoState[]>(toDoState);
  // SetRecoilTodos(toDoList?.data.data[0], todoSave);
  const onSaveDetailTodos = (toDodetails: IToDoState) => {
    // console.log(Board.key);
    setisClicked(true);
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
