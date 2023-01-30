import styled from "styled-components";
import TodoForm from "../../components/todo/TodoForm";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #00000065;
  width: 100vw;
  height: 100vh;
`;
export default function UpdateTodoModal() {
  return (
    <Container>
      <TodoForm />
    </Container>
  );
}
