import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { toDoState } from "../../../atoms/recoil";
import { useNavigate } from "react-router-dom";
import useUpdateTodo from "../../hooks/useUpdateTodo";
import { ITodoForm } from "../../../types/types";
import {
  AddForm,
  BackBtn,
  Btn,
  FormCon,
  Input,
  Modal,
  Textarea,
  Text,
} from "./todoUpdate.style";
import { IUpdate } from "../../../types/hooktypes";

export default function TodoUpdateForm() {
  const todos = useRecoilState(toDoState);
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<ITodoForm>({
    defaultValues: {
      title: `${todos[0][0].title}`,
      content: `${todos[0][0].content}`,
    },
  });
  const navigate = useNavigate();
  const closeEdit = () => {
    navigate("/");
  };
  const { mutate } = useUpdateTodo();

  const onValid = ({ title, content }: ITodoForm) => {
    const data = { title: title, content: content };
    const id = todos[0][0].id;
    onUpdate({ data, id });
    navigate("/");
  };
  const onUpdate = ({ data, id }: IUpdate) => {
    mutate({ data, id });
  };

  return (
    <Modal>
      <AddForm onSubmit={handleSubmit(onValid)}>
        <BackBtn onClick={closeEdit}>❌</BackBtn>
        <FormCon>
          <Text>TITLE</Text>
          <Input
            {...register("title", {
              required: "최소 1글자 이상 입력해주세요",
              minLength: { value: 1, message: "최소 1글자 이상 입력해주세요" },
            })}
            placeholder="제목을 입력해주세요"
          />
          <Text>CONTENTS</Text>
          <Textarea
            {...register("content", {
              required: "최소 1글자 이상 입력해주세요",
              minLength: { value: 1, message: "최소 1글자 이상 입력해주세요" },
            })}
            placeholder="내용을 입력해주세요"
          />
        </FormCon>
        <div style={{ textAlign: "center" }}>
          <Btn type="submit" disabled={!isValid}>
            SAVE
          </Btn>
        </div>
      </AddForm>
    </Modal>
  );
}
