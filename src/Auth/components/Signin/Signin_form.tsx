import { useForm } from "react-hook-form";
import useLogin from "../../hooks/useSignin";
import { IInputForm } from "../../types";
import { ErrorText } from "../Signup/signup.style";
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
    console.log(data, "Check your E-mail or Password");

  const regexEm =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  return (
    <div>
      <LogInForm onSubmit={handleSubmit(onValid, onInvalid)}>
        <Input
          {...register("inputEmail", {
            required: "This is not a valid email address",
            pattern: regexEm,
          })}
          placeholder="📧 example@email.com"
        />

        <Input
          {...register("inputPw", {
            required: "Password must be at least 8 characters long",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long",
            },
          })}
          placeholder="🔐 Password"
        />
        <ErrorText>
          {error ? "Check your email address or password" : null}
        </ErrorText>
        <LoginBtn type="submit" disabled={!isValid}>
          Log In
        </LoginBtn>
      </LogInForm>
    </div>
  );
}
