import React from "react";
import { useForm } from "react-hook-form";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { IToDoState, openCreateModal, toDoState } from "../../atoms/recoil";
import EditSvg from "../../assets/svg/edit.svg";
import useCreateTodo from "../../hooks/mutation/todo/useCreateTodo";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import useUpdateTodo from "../../hooks/mutation/todo/useUpdateTodo";
import {
  fetchTodos,
  getTodosById,
} from "../../hooks/mutation/todo/useGetTodos";
import { useQueries, useQuery } from "@tanstack/react-query";
import { TodoAPI } from "../../constants/api/api";
import client from "../../constants/axios/axios";

interface ITodoForm {
  title: string;
  content: string;
}

interface IUpdate {
  data: ITodoForm;
  id: string;
}
interface ITodoResponse {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}

interface IGetTodos {
  data: ITodoResponse[];
}
const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1b1918d5;
`;
const AddForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 15px;
  width: 50%;
  height: 80%;
  background-color: white;
  border-radius: 5px;
  border: none;
`;

const BackBtn = styled.button`
  align-self: flex-end;
  &:hover {
    cursor: pointer;
  }
`;
const FormCon = styled.div`
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

const Btn = styled.button`
  border: none;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  margin-top: 20px;
  padding: 5px;
  border-radius: 5px;
  font-size: 16px;
  width: 50%;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => (props.disabled ? "" : " #c81414")};
    color: ${(props) => (props.disabled ? "" : " wheat")};
  }
`;

export default function TodoUpdateForm() {
  // const id = useParams().id as string;
  const todos = useRecoilState(toDoState);
  const id = todos[0][0].id as string;

  // const { isLoading, data: todosById } = useQuery(["todosById"], () =>
  //   // getTodosById(id)
  //   fetch(`${client.get<IGetTodos>(`${TodoAPI.TODOS}/${id}`)}`).then((res) =>
  //     res.json()
  //   )
  // );

  // console.log(isLoading ? isLoading : todosById?.data?.data[0].content);
  // console.log(todosById?.data.data.map((el) => el.title));
  const { isLoading, data: todosById } = useQuery<ITodoResponse>(
    ["getTodos", id],
    () => fetchTodos(id).then((res) => res.clone().json())
  );

  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<ITodoForm>({});
  const navigate = useNavigate();
  const closeEdit = () => {
    navigate(-1);
    // navigate("/");
  };
  const { mutate } = useUpdateTodo();

  // const onUpdate = ({ data, id }: IUpdate) => {
  //   console.log("update");
  //   mutate({ data, id });
  // };
  // const onValid = ({ title, content }: ITodoForm) => {
  //   // closeEdit();
  //   console.log("onValid");
  //   const data = { title, content };
  //   onUpdate({ data, id });
  //   closeEdit();
  // };

  const onValid = () => {
    console.log("title");
  };

  const oninvalid = () => {
    console.log("oninvalid");
  };

  return (
    <Modal>
      {isLoading ? (
        <div>로딩중 입니다.</div>
      ) : (
        <AddForm onSubmit={handleSubmit(onValid, oninvalid)}>
          <BackBtn onClick={closeEdit}>❌</BackBtn>
          {/* <AddForm> */}
          {/* <FormCon>
            <Text>TITLE</Text>
            <Input
              {...register("title" || "", {
                required: true,
                minLength: {
                  value: 1,
                  message: "최소 1글자 이상 입력해주세요",
                },
              })}
              placeholder={
                todos[0][0].title ? todos[0][0].title : "입력해주세요"
              }
            />
            <Text>CONTENTS</Text>
            <Textarea
              {...register("content" || "", {
                required: true,
                minLength: {
                  value: 1,
                  message: "최소 1글자 이상 입력해주세요",
                },
              })}
              placeholder={
                todos[0][0].content ? todos[0][0].content : "입력해주세요"
              }
            />
          </FormCon> */}
          <input
            {...register("title",  error={formState.errors?.content ? true : false},{
              required: true,
            })}
            
            placeholder={todos[0][0].title}
          />
          <button type="submit">good</button>

          {/* <div style={{ textAlign: "center" }}>
            <Btn type="submit" disabled={!isValid}>
              Update
            </Btn>
          </div> */}
        </AddForm>
      )}
    </Modal>
  );
}
