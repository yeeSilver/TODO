import styled from "styled-components";
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1b1918d5;
`;
export const AddForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 15px;
  width: 50%;
  height: 80%;
  background-color: white;
  border-radius: 5px;
  border: none;
`;

export const BackBtn = styled.button`
  align-self: flex-end;
  &:hover {
    cursor: pointer;
  }
`;
export const FormCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Input = styled.input`
  width: 80%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background: transparent;
  color: #2f2e2f;
  font-family: "LINESeedKR-Bd";

  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  &::placeholder {
    color: #6b6b6b;
  }
`;

export const Textarea = styled.textarea`
  width: 80%;
  height: 300px;
  padding: 10px;
  margin-top: 5px;
  border: none;
  border-radius: 5px;
  background: transparent;
  color: #2f2e2f;
  font-family: "LINESeedKR-Bd";
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  &::placeholder {
    color: #6b6b6b;
  }
`;

export const Text = styled.p`
  font-size: 24px;
  font-family: "Changa One";
  color: #c81414;
  margin-top: 15px;
`;

export const Btn = styled.button`
  border: none;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  margin-top: 20px;
  padding: 5px;
  border-radius: 5px;
  font-size: 16px;
  width: 50%;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => (props.disabled ? "" : " #c81414")};
    color: ${(props) => (props.disabled ? "" : " wheat")};
  }
`;
