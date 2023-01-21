import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import useLogin from "../../hooks/mutation/auth/useLogin";

interface IForm {
  inputEmail: string;
  inputPw: string;
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

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<IForm>();
  const onValid = ({ inputEmail, inputPw }: IForm) => {
    mutate({ inputEmail, inputPw });
  };
  const onInvalid = (data: any) => console.log(data, "onInvalid");
  const navigate = useNavigate();
  const onGoSignupPage = () => {
    navigate("/signup");
  };
  const { mutate, error } = useLogin();

  const regexEm =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  return (
    <div>
      <LogInForm onSubmit={handleSubmit(onValid, onInvalid)}>
        <Input
          {...register("inputEmail", {
            required: "이메일 주소가 올바르지 않습니다.",
            pattern: regexEm,
          })}
          placeholder="📧 E-Mail"
        />
        <Input
          {...register("inputPw", {
            required: "최소 8자 이상 입력해주세요.",
            minLength: { value: 8, message: "최소 8자 이상 입력해주세요." },
          })}
          placeholder="🔐 Password"
        />
        <LoginBtn type="submit" disabled={!isValid} onClick={onGoSignupPage}>
          Log In
        </LoginBtn>
      </LogInForm>
    </div>
  );
}
