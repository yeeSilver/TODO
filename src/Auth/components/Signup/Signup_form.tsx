import { useForm } from "react-hook-form";
import useRegister from "../../hooks/useSignup";
import { IAuthForm } from "../../types";
import { AuthForm, CreateBtn, ErrorText, Input } from "./signup.style";

export default function SignupForm() {
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
        <Input
          {...register("email", {
            required: "Enter a valid address",

            pattern: {
              value: regexEm,
              message: "This is not a valid email format", // 에러 메세지
            },
          })}
          placeholder="📧 example@email.com"
        />
        <ErrorText>{errors?.email?.message}</ErrorText>

        <Input
          {...register("password", {
            required: "Password must be at least 8 characters long",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long",
            },
          })}
          placeholder="🔐 Password"
        />
        <ErrorText>{errors?.password?.message}</ErrorText>

        <Input
          {...register("confirmedPw", {
            required: "Password does not match",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long",
            },
          })}
          placeholder="🔐 Confirm Password"
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
