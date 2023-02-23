import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

import { openCreateModal } from "../../../atoms/recoil";
import { ITodoForm } from "../../../types/types";
import useCreateTodo from "../../hooks/useCreateTodo";
import {
  AddForm,
  BackBtn,
  Btn,
  FormCon,
  Input,
  Modal,
  Textarea,
  Text,
} from "./todoForm.style";

export default function TodoForm() {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<ITodoForm>();
  const setOpenCreate = useSetRecoilState<boolean>(openCreateModal);
  const closeModal = () => {
    setOpenCreate((prev): boolean => !prev);
  };
  const { mutate } = useCreateTodo();
  const navigate = useNavigate();
  const onValid = ({ title, content }: ITodoForm) => {
    mutate({ title, content });
    closeModal();
    navigate("/", { replace: true });
  };

  return (
    <Modal>
      <AddForm onSubmit={handleSubmit(onValid)}>
        <BackBtn onClick={closeModal}>❌</BackBtn>
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
            Publish
          </Btn>
        </div>
      </AddForm>
    </Modal>
  );
}
