// import styled from "@emotion/styled";
import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
export const DetailCon = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 80%;
  border-radius: 20px;
  background-color: #f0f8ff;
  padding: 10px;
`;

export const DetailForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5%;
  /* padding: 10% 0; */
  height: 85%;
`;

export const Title = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  font-family: "LINESeedKR-Bd";
  font-family: "AbrilFatface";
  background-color: transparent;
  border: none;
  text-align: center;
`;

export const Content = styled.p`
  height: 100%;
  width: 80%;
  padding: 10px;
  font-size: 1.15rem;
  font-family: "LINESeedKR-Bd";
  overflow: auto;
  border: none;
  background-color: transparent;
`;

export const EditBtn = styled.button`
  padding: 10px;
  border: none;
  border-radius: 10px;
  font-size: 1.2rem;
  color: #fff;
  background-color: #a5d0f6;

  transition: all 150ms ease-in-out;
  &:hover {
    cursor: pointer;
  }

  &:active {
    box-shadow: #69869e 3px 3px 6px 0px inset,
      rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
    transform: translateY(2px);
  }
  img {
    width: 30px;
    height: 30px;
  }
`;
export const DelBtn = styled(EditBtn)`
  &:hover {
    cursor: pointer;
    background-color: #f07373d7;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  background-color: #e69c9cd8;
`;

export const DetailHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;
export const CreateDate = styled.p`
  margin-bottom: 30px;
  font-family: "Lobster";
  color: #716e6e;
`;
