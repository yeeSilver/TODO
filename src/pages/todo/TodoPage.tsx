import React from "react";
import TodoForm from "../../components/todo/TodoForm";
import UpdateTodoModal from "../../hooks/modal/UpdateTodoModal";
import TodoListPage from "./TodoListPage";

export default function TodoPage() {
  return (
    <div>
      <UpdateTodoModal />
      {/* <TodoListPage /> */}
    </div>
  );
}
