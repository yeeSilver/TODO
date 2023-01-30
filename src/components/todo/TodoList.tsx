import React from "react";
import styled from "styled-components";

const Board = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  width: 200px;
  background-color: aliceblue;
  border-radius: 5px;
  border: none;
`;

const Title = styled.p`
  font-size: 24px;
  font-family: "Changa One";
`;

const DelBtn = styled.button`
  background: transparent;

  border: none;
  font-size: 20px;
  &:hover {
    cursor: pointer;
    scale: calc(1.2);
  }
`;
export default function TodoList() {
  return (
    <>
      <Board>
        <DelBtn>⛔</DelBtn>
        <Title>dlfdkf</Title>
      </Board>
    </>
  );
}
