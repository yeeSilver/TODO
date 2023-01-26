import { useForm } from "react-hook-form";
import styled from "styled-components";
import useRegister from "../../hooks/mutation/auth/useRegiser";

interface IAuthForm {
  errors: {
    email: {
      message: string;
    };
  };
  email: string;
  password: string;
  confirmedPw: string;
  extraError?: string;
}

const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CreateBtn = styled.button`
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

const ErrorText = styled.p`
  color: red;
  font-size: 0.8rem;
`;
export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    setError,
    watch,
    formState: { errors, isValid },
  } = useForm<IAuthForm>({ mode: "onBlur" });
  //{ shouldFocusError: true }
  const { mutate } = useRegister();
  // const clientaxios = useRegister;
  const onValid = ({ email, password, confirmedPw }: IAuthForm) => {
    console.log("click");
    if (password !== confirmedPw) {
      setError("confirmedPw", { message: "비밀번호가 일치하지 않습니다." });
    } else {
      console.log({
        email: email,
        password: password,
      });
      // const data = { email, password };
      mutate({ email, password });
    }
  };

  const regexEm =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  return (
    <div>
      <AuthForm onSubmit={handleSubmit(onValid)}>
        <p>이메일</p>
        <Input
          {...register("email", {
            required: "올바르지 않는 이메일 형식입니다.",

            pattern: {
              value: regexEm,
              message: "이메일 형식을 지켜주세요", // 에러 메세지
            },
          })}
          placeholder="📧 이메일을 입력하세요"
        />
        <ErrorText>{errors?.email?.message}</ErrorText>

        <p>비밀번호</p>
        <Input
          {...register("password", {
            required: "최소 8자 이상 입력해주세요.",
            minLength: { value: 8, message: "최소 8자 이상 입력해주세요." },
          })}
          placeholder="🔐 비밀번호를 입력하세요"
        />
        <ErrorText>{errors?.password?.message}</ErrorText>

        <p>비밀번호 재확인</p>
        <Input
          {...register("confirmedPw", {
            required: "비밀번호가 일치하지 않습니다.",
            minLength: { value: 8, message: "최소 8자 이상 입력해주세요." },
          })}
          placeholder="🔐 비밀번호를 한번 더 입력하세요"
        />
        <ErrorText>{errors?.confirmedPw?.message}</ErrorText>

        <CreateBtn type="submit" disabled={!isValid}>
          Register
        </CreateBtn>
        {errors?.extraError?.message && (
          <ErrorText>{errors?.extraError?.message}</ErrorText>
        )}
      </AuthForm>
    </div>
  );
}
