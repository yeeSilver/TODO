import React from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { IToDoState, toDoState } from "../../atoms/recoil";
import EditSvg from "../../assets/svg/edit.svg";
import { Link, Outlet, useParams } from "react-router-dom";

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
  display: flex;
  flex-direction: column;
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
  /* padding: 10% 0; */
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
  padding: 10px;
  border: none;
  border-radius: 10px;
  font-size: 1.2rem;
  color: #fff;
  background-color: #a5d0f6;

  transition: all 150ms ease-in-out;
  &:hover {
    cursor: pointer;
  }

  &:active {
    box-shadow: #69869e 3px 3px 6px 0px inset,
      rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
    transform: translateY(2px);
  }
  img {
    width: 30px;
    height: 30px;
  }
`;

const DetailHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;
const CreateDate = styled.p`
  margin-bottom: 30px;
  font-family: "Lobster";
  color: #716e6e;
`;
export default function TodoDetailForm() {
  const todos = useRecoilState(toDoState);

  const {
    handleSubmit,
    register,
    watch,
    formState: { isValid },
  } = useForm<ITodoForm>();
  const onValid = () => {
    console.log("editbtn");
  };

  return (
    <>
      {todos[0][0].updatedAt === undefined ? (
        <div> Loading... </div>
      ) : (
        <Container>
          <DetailCon>
            <DetailHeader>
              <CreateDate>
                {todos[0][0].updatedAt.slice(0, 10)
                  ? todos[0][0].updatedAt.slice(0, 10)
                  : "입력해주세요"}
              </CreateDate>
              <Link to={`/details/${todos[0][0].id}`}>
                <EditBtn id={`${todos[0][0].id}`}>
                  <img src={EditSvg} alt="edit button" />
                </EditBtn>
                <Outlet />
              </Link>
            </DetailHeader>
            <DetailForm onSubmit={handleSubmit(onValid)}>
              <Title
                value={todos[0][0].title}
                {...register("title", {
                  minLength: {
                    value: 1,
                    message: "최소 1글자 이상 입력해주세요",
                  },
                })}
                placeholder={
                  todos[0][0].title ? todos[0][0].title : "입력해주세요"
                }
              />
              <Content
                value={todos[0][0].content}
                {...register("content", {
                  minLength: {
                    value: 1,
                    message: "최소 1글자 이상 입력해주세요",
                  },
                })}
                // placeholder={
                //   todos[0][0].content ? todos[0][0].content : "입력해주세요"
                // }
              />
            </DetailForm>
          </DetailCon>
        </Container>
      )}
    </>
  );
}
