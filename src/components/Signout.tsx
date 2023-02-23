import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import token from "../utils/localStorage";
import { NavBox } from "./UsernameDiv";
const SignoutBtn = styled(NavBox)`
  position: fixed;
  top: 0;
  right: 0;
  background-color: transparent;
  &:hover {
    cursor: pointer;
    background-color: #f07373d7;
  }
`;
export default function Signout() {
  const navigate = useNavigate();
  const onDeleteToken = () => {
    // eslint-disable-next-line no-restricted-globals
    const res = confirm("Are you sure?");
    if (res) {
      token.clearUsername();
      token.clearToken();
      navigate("/signin", { replace: true });
    }
  };
  return (
    <SignoutBtn as="button" onClick={onDeleteToken}>
      Sign Out
    </SignoutBtn>
  );
}
