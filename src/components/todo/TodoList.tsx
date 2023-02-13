import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { SetterOrUpdater, useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { IToDoState, openCreateModal, toDoState } from "../../atoms/recoil";
import SetRecoilTodos from "../../atoms/SetRecoilTodos";
import { getTodos } from "../../hooks/mutation/todo/useGetTodos";
import TodoDetailPage from "../../pages/todo/TodoDetailPage";
import Checkbox from "../common/Checkbox";
import DateDiv from "../common/DateDiv";
import TodoDetailForm from "../todoDetails/TodoDetailForm";

import TodoForm from "./TodoForm";
import { delTodo } from "../../hooks/mutation/todo/useDelTodo";
import { useForm } from "react-hook-form";

interface IPropsTypes {
  todorecoils: IToDoState[];
  setTodos: SetterOrUpdater<IToDoState[]>;
}
const Container = styled.div`
  height: 100vh;
  width: 100vw;
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
const TodoCon = styled.section`
  grid-column: 1 / 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;
`;
const DetailCon = styled.section`
  grid-column: 2 / 4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ConList = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ListStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px;
  margin: 10px;
  border: none;
  border-radius: 5px;
  background-color: #82c4fe;
  font-size: 24px;
  font-family: "Changa One";
  &:hover {
    cursor: pointer;
  }
`;
const CreateBtn = styled(ListStyle)`
  transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
  background-color: aliceblue;
  &:hover {
    box-shadow: 0 0 40px 40px #82c4fe inset;
    cursor: pointer;
  }
  &:active {
    transform: translateY(2px);
  }
`;
const Board = styled(ListStyle)`
  background-color: aliceblue;
  justify-content: space-between;
  overflow: auto;
  width: 10rem;
  &:active {
    background-color: #82c4fe;
  }
`;

const Title = styled.p`
  font-size: 20px;
  font-family: "LINESeedKR-Bd";
`;

export interface TodoListProps {
  title: string;
  content: string;
  id: string;
  createAt: string;
  updatedAt: string;
  onDelClicked?: () => void | undefined;
}

const TodoList = () => {
  const { isLoading, data: toDoList } = useQuery(["todos"], getTodos, {
    refetchInterval: 5000,
  });

  const todoSave = useSetRecoilState<IToDoState[]>(toDoState);
  // const todos = useRecoilState(toDoState);
  // const [isDelClicked, setIsDelClicked] = useState<boolean>(false);

  const onClickDelete = (id: string) => {
    // eslint-disable-next-line no-restricted-globals
    // const resDel = confirm("해당 항목을 정말 삭제하시겠습니까?");
    // if (resDel) {
    //   mutate(id);
    // }
    // // if (resDel) {
    //   console.log(resDel);
    // }
  };

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
