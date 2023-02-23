import styled from "styled-components";
export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
export const TodoCon = styled.section`
  grid-column: 1 / 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  height: 100vh;
`;
export const DetailCon = styled.section`
  grid-column: 2 / 4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ConList = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
export const ListStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 10px;
  border: none;
  border-radius: 5px;
  /* background-color: #82c4fe; */
  background-color: aliceblue;
  font-size: 24px;
  font-family: "Changa One";
  &:hover {
    cursor: pointer;
  }
`;

export const DefaultList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: #82c4fe;
  font-family: "Changa One";
  font-size: 1.5rem;
`;
export const CreateBtn = styled(ListStyle)`
  transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;

  &:hover {
    box-shadow: 0 0 40px 40px #82c4fe inset;
    cursor: pointer;
  }
  &:active {
    transform: translateY(2px);
  }
`;
export const Board = styled(ListStyle)`
  justify-content: space-between;
  overflow: auto;
  width: 10rem;
  &:active {
    background-color: #82c4fe;
  }
`;

export const Title = styled.p`
  font-size: 20px;
  font-family: "LINESeedKR-Bd";
`;
