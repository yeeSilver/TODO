import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

interface ITodoForm {
  title: string;
  content: string;
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const DetailCon = styled.div`
  position: relative;
  width: 80%;
  height: 80%;
  border-radius: 20px;
  background-color: #f0f8ff;
  padding: 10px;
`;

const DetailForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5%;
  padding: 10% 0;
  height: 85%;
`;

const Title = styled.input`
  font-size: 1.5rem;
  font-weight: 600;
  font-family: "LINESeedKR-Bd";
  font-family: "AbrilFatface";
  background-color: transparent;
  border: none;
  text-align: center;
`;

const Content = styled.textarea`
  height: 100%;
  width: 80%;
  padding: 10px;
  font-size: 1.15rem;
  font-family: "LINESeedKR-Bd";
  overflow: auto;
  border: none;
  background-color: transparent;
`;

const EditBtn = styled.button`
  position: absolute;
  top: 5%;
  right: 5%;
  padding: 10px;
  border: none;
  border-radius: 10px;
  border-color: #a5d0f6;
  font-size: 1.2rem;
  color: #fff;
  box-shadow: 0 0 40px 40px #a5d0f6 inset, 0 0 0 0 #3498db;
  transition: all 150ms ease-in-out;
  &:hover {
    cursor: pointer;
    color: #3498db;
    box-shadow: 0 0 10px 0 #3498db inset, 0 0 10px 4px #3498db;
  }
`;

const CreateDate = styled.p`
  position: absolute;
  top: 5%;
  left: 5%;
  margin-bottom: 30px;
  font-family: "Lobster";
  color: #716e6e;
`;
export default function TodoDetailForm() {
  const { handleSubmit, register } = useForm<ITodoForm>();
  const onValid = () => {
    console.log("editbtn");
  };
  return (
    <Container>
      <DetailCon>
        <CreateDate>2023-02-02</CreateDate>
        <DetailForm onSubmit={handleSubmit(onValid)}>
          <Title
            {...register("title", {
              minLength: { value: 1, message: "최소 1글자 이상 입력해주세요" },
            })}
            placeholder="제목을 입력해주세요"
          />
          <Content
            {...register("content", {
              minLength: { value: 1, message: "최소 1글자 이상 입력해주세요" },
            })}
            placeholder="내용을 입력해주세요"
          />
        </DetailForm>
        <EditBtn>EDIT</EditBtn>
      </DetailCon>
    </Container>
  );
}
