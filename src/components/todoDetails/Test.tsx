import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "../../atoms/recoil";

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
const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 15px;
  width: 50%;
  height: 80%;
  background-color: white;
  border-radius: 5px;
  border: none;
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

export default function Test() {
  const todos = useRecoilState(toDoState);
  const { register, handleSubmit } = useForm();
  const onValid = (data: any) => {
    console.log(data);
  };

  const onError = (error: any) => {
    console.log(error);
  };
  const onSubmit = () => {
    console.log("submit");
  };
  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName")} />
        {/* <button type="submit">btn</button> */}
        <input type="submit" />
      </Form>
    </div>
  );
}
