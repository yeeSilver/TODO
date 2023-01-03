import { useForm } from "react-hook-form";
import styled from "styled-components";

interface IForm {
  email: string;
  pw: string;
}

const LogInForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const LoginBtn = styled.button`
  padding: 10px 5px;
  border-radius: 5px;
  border: none;

  color: ${(props) => (props.disabled ? "default" : "ivory")};
  background-color: ${(props) => (props.disabled ? " #87baeaf8" : "#4289cbf8")};
  &:hover {
    cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  }
`;

const Input = styled.input`
  padding: 10px 5px;
  border-radius: 5px;
  border: none;
  font-size: 1rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export default function Login_form() {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<IForm>();
  const onValid = (data: any) => console.log(data, "onvalid");
  const onInvalid = (data: any) => console.log(data, "onInvalid");
  // const regexEm =
  //   /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  return (
    <div>
      <LogInForm onSubmit={handleSubmit(onValid, onInvalid)}>
        <Input
          {...register("email", {
            required: "이메일 주소가 올바르지 않습니다.",
            // pattern: regexEm,
            // 최소 @, . 포함 조건
            validate: {
              noIncludeAt: (value) =>
                value.includes("@") ? true : "이메일 주소가 올바르지 않습니다.",
              noIncludeDot: (value) =>
                value.includes(".") ? true : "이메일 주소가 올바르지 않습니다.",
            },
          })}
          placeholder="📧 E-Mail"
        />
        <Input
          {...register("pw", {
            required: "최소 8자 이상 입력해주세요.",
            minLength: { value: 8, message: "최소 8자 이상 입력해주세요." },
          })}
          placeholder="🔐 Password"
        />
        <LoginBtn type="submit" disabled={!isValid}>
          Log In
        </LoginBtn>
      </LogInForm>
    </div>
  );
}
