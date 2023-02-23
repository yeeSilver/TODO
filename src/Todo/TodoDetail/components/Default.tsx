import styled from "styled-components";
import DefaultSvg from "../../../assets/svg/detail_default.svg";
import Signout from "../../../components/Signout";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 60%;
  img {
    width: 100%;
    height: 100%;
  }
`;

const Text = styled.p`
  color: #badefd;
  font-size: 2rem;
  font-family: "Changa One";
  margin: 10px;
  align-items: center;
`;

export default function Default() {
  return (
    <>
      <Div>
        <img src={DefaultSvg} alt="default image" />
        <Text>Hello!</Text>
      </Div>
    </>
  );
}
