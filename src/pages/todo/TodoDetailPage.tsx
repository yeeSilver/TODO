import React from "react";
import TodoForm from "../../Todo/TodoModal/components/todoAdd/TodoForm";
import TodoDetailForm from "../../Todo/TodoDetail/components/TodoDetailForm";

export default function TodoDetailPage() {
  return (
    <div style={{ flexBasis: "70%", borderLeft: " thick double #d2e6f8 " }}>
      <TodoDetailForm />
    </div>
  );
}
