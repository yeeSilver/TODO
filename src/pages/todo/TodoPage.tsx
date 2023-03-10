import React from "react";
import styled from "styled-components";
import TodoForm from "../../Todo/TodoModal/components/todoAdd/TodoForm";
import UpdateTodoModal from "../../Todo/TodoModal/components/UpdateTodoModal";
import TodoDetailPage from "./TodoDetailPage";
import TodoListPage from "./TodoListPage";

const ConTodoPage = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: #787878;
`;

export default function TodoPage() {
  return (
    <ConTodoPage>
      <TodoListPage />
    </ConTodoPage>
  );
}
