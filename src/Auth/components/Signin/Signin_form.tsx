import { useForm } from "react-hook-form";
import useLogin from "../../hooks/useSignin";
import { IInputForm } from "../../types";
import { Input, LoginBtn, LogInForm } from "./signin.style";

export default function SigninForm() {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<IInputForm>();

  const { mutate, error } = useLogin();
  const onValid = ({ inputEmail, inputPw }: IInputForm) => {
    mutate({ inputEmail, inputPw });
  };
  const onInvalid = (data: any) =>
    console.log(data, "이메일과 비밀번호를 다시 한번 확인해 주세요");

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
        <LoginBtn type="submit" disabled={!isValid}>
          Log In
        </LoginBtn>
      </LogInForm>
    </div>
  );
}
