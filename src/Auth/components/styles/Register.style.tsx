import styled from "styled-components";
export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const CreateBtn = styled.button`
  padding: 10px 5px;
  border-radius: 5px;
  border: none;
  color: ${(props) => (props.disabled ? "default" : "ivory")};
  background-color: ${(props) => (props.disabled ? " #87baeaf8" : "#4289cbf8")};
  &:hover {
    cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  }
`;

export const Input = styled.input`
  padding: 10px 5px;
  border-radius: 5px;
  border: none;
  font-size: 1rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 0.8rem;
`;
