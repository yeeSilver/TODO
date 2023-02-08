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
import DelSvg from "../../assets/svg/remove.svg";
import TodoForm from "./TodoForm";

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

const DelBtn = styled.button`
  background: transparent;
  border: none;
  border-radius: 5px;
  font-size: 20px;

  &:hover {
    cursor: pointer;
  }
  img {
    width: 24px;
    height: 24px;
    background-color: #e69c9cd8;
  }
  img:hover {
    background-color: #f07373d7;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

const Title = styled.p`
  font-size: 20px;
  font-family: "LINESeedKR-Bd";
`;

const TodoList = () => {
  const { isLoading, data: toDoList } = useQuery(["todos"], getTodos, {
    refetchInterval: 5000,
  });

  const todoSave = useSetRecoilState<IToDoState[]>(toDoState);
  const todos = useRecoilState(toDoState);
  const [isDelClicked, setIsDelClicked] = useState<boolean>(false);
  const onDelClicked = () => {
    setIsDelClicked((prev) => !prev);
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
                  <DelBtn onClick={onDelClicked}>
                    <img src={DelSvg} alt="delete button" />
                  </DelBtn>

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
          <DetailCon>
            {isClicked && (
              // <Link to={`details/${todos[0][0].id}`}>
              <TodoDetailForm />

              // </Link>
            )}
          </DetailCon>
        </Container>
      )}
    </div>
  );
};

export default TodoList;
