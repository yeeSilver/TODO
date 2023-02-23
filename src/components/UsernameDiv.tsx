import styled from "styled-components";
import { USERNAME } from "../constants/token";
import token from "../utils/localStorage";
import { FaRegUser } from "react-icons/fa";
export const NavBox = styled.div`
  margin: 10px;
  font-size: 20x;
  font-family: "Changa One";
  color: aliceblue;
  border: solid 1px aliceblue;
  padding: 5px;
  border-radius: 10px;
`;
const UsernameBox = styled(NavBox)`
  position: fixed;
`;
export default function UsernameDiv() {
  const username = token.getUsername(USERNAME);
  return (
    <UsernameBox>
      <FaRegUser />
      <span style={{ marginLeft: "5px" }}>{username}</span>
    </UsernameBox>
  );
}
