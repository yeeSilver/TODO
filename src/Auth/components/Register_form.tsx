import { useForm } from "react-hook-form";
import useRegister from "../hooks/useRegiser";
import { IAuthForm } from "../types";
import { AuthForm, CreateBtn, ErrorText, Input } from "./styles/Register.style";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm<IAuthForm>({ mode: "onBlur" });

  const { mutate } = useRegister();
  const onValid = ({ email, password, confirmedPw }: IAuthForm) => {
    console.log("click");
    if (password !== confirmedPw) {
      setError("confirmedPw", { message: "비밀번호가 일치하지 않습니다." });
    } else {
      console.log({
        email: email,
        password: password,
      });
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
