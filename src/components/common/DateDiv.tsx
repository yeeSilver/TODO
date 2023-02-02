import styled from "styled-components";
import Clock from "react-live-clock";
const DateBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  align-items: center;
  font-size: 20x;
  font-family: "Changa One";
  color: #badefd;
`;
const TimeBox = styled.div`
  font-size: 36px;
  font-family: "Changa One";
  border: line 1px aliceblue;
  color: #a5d0f6;
  text-align: center;
  margin-bottom: 15px;
  /* color: #c81414; */
`;
export default function DateDiv() {
  return (
    <div>
      <DateBox>
        <Clock format={"YYYY MM DD"} ticking={true} />
        <Clock format={"[Today is] dddd"} ticking={true} />
      </DateBox>
      <TimeBox>
        <Clock format={"h:mm a"} ticking={true} />
      </TimeBox>
    </div>
  );
}
