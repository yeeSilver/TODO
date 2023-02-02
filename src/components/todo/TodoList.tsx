import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { SetterOrUpdater, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { IToDoState, toDoState } from "../../atoms/recoil";
import { getTodos } from "../../hooks/mutation/todo/useGetTodos";
import DateDiv from "../common/DateDiv";

interface IPropsTypes {
  todorecoils: IToDoState[];
  setTodos: SetterOrUpdater<IToDoState[]>;
}
const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ConList = styled.section`
  padding: 1.5rem 0;
`;

const ListStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
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

  &:active {
    background-color: #82c4fe;
  }
`;

const DelBtn = styled.button`
  background: transparent;
  border: none;
  font-size: 20px;
  &:hover {
    cursor: pointer;
    scale: calc(1.2);
  }
  &:active ${Board} {
    background-color: #c81414; // 이거 왜 작동 안됨?;
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
  const [isDelClicked, setIsDelClicked] = useState<boolean>(false);

  const onDelClicked = () => {
    setIsDelClicked((prev) => !prev);
  };
  const todoSave = useSetRecoilState<IToDoState[]>(toDoState);
  console.log(todoSave);
  const onSaveDetailTodos = (toDodetails: object) => {
    // console.log(todoObj);
    todoSave([{ toDodetails }]);

    // todoSave() => {
    //   return { ...todoObj };
    // });
  };

  return (
    <div>
      {isLoading ? (
        <div> Loading... </div>
      ) : (
        <Container>
          <DateDiv />
          <ConList>
            {toDoList?.data?.data.map((todo) => (
              <Board
                key={todo.id}
                {...todo}
                onClick={() => onSaveDetailTodos({ ...todo })}
              >
                <DelBtn onClick={onDelClicked}>⛔</DelBtn>
                <Title>{todo.title}</Title>
              </Board>
            ))}
          </ConList>
          <CreateBtn as="button">NEW</CreateBtn>
        </Container>
      )}
    </div>
  );
};

export default TodoList;
