import { useForm } from "react-hook-form";
import styled from "styled-components";
import useCreateTodo from "../../hooks/mutation/todo/useCreateTodo";

interface ITodoForm {
  title: string;
  content: string;
}

const AddForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 15px;
  width: 50%;
  background-color: white;
  border-radius: 5px;
  border: none;
`;
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Input = styled.input`
  width: 80%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background: transparent;
  color: #2f2e2f;
  font-family: "LINESeedKR-Bd";

  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  &::placeholder {
    color: #6b6b6b;
  }
`;

const Textarea = styled.textarea`
  width: 80%;
  height: 300px;
  padding: 10px;
  margin-top: 5px;
  border: none;
  border-radius: 5px;
  background: transparent;
  color: #2f2e2f;
  font-family: "LINESeedKR-Bd";
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  &::placeholder {
    color: #6b6b6b;
  }
`;

const Text = styled.p`
  font-size: 24px;
  font-family: "Changa One";
  color: #c81414;
  margin-top: 15px;
`;

const BtnBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const Btn = styled.button`
  border: none;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding: 5px;
  border-radius: 5px;
  font-size: 16px;
  &:hover {
    cursor: pointer;
    background-color: #c81414;
    color: wheat;
  }
`;

export default function TodoForm() {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<ITodoForm>();
  const { mutate } = useCreateTodo();
  const onValid = ({ title, content }: ITodoForm) => {
    mutate({ title, content });
  };
  return (
    <AddForm onSubmit={handleSubmit(onValid)}>
      <FormContainer>
        <Text>TITLE</Text>
        <Input
          {...register("title", {
            minLength: { value: 1, message: "최소 1글자 이상 입력해주세요" },
          })}
          placeholder="제목을 입력해주세요"
        />
        <Text>CONTENTS</Text>
        <Textarea
          {...register("content", {
            minLength: { value: 1, message: "최소 1글자 이상 입력해주세요" },
          })}
          placeholder="내용을 입력해주세요"
        />
      </FormContainer>
      <BtnBox>
        <Btn>Cancel</Btn>
        <Btn disabled={!isValid}>Publish</Btn>
      </BtnBox>
    </AddForm>
  );
}
