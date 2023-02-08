import React from "react";
import TodoForm from "../../components/todo/TodoForm";
import TodoDetailForm from "../../components/todoDetails/TodoDetailForm";

export default function TodoDetailPage() {
  return (
    <div style={{ flexBasis: "70%", borderLeft: " thick double #d2e6f8 " }}>
      <TodoDetailForm />
    </div>
  );
}
