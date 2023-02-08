import React, { ReactElement, useState } from "react";
import styled from "styled-components";
interface ICheckForm {
  children?: ReactElement | string;
  id: string;
  onLabelClick?: () => void;
}

const Board = styled.input`
  background-color: aliceblue;
  justify-content: space-between;
  overflow: auto;
  width: 200px;
  &:active {
    background-color: #82c4fe;
  }
`;

const Label = styled.span<{ check: boolean }>`
  position: relative;
  margin-left: 0.3125rem;
`;
function Checkbox({ id, children, onLabelClick }: ICheckForm) {
  const [check, setCheck] = useState(false);
  const handleCheck = () => {
    setCheck((pre) => !pre);
  };
  return (
    <div>
      <Board type="checkbox" id={id} onChange={handleCheck}>
        <label htmlFor={id}>
          <Label onClick={onLabelClick} check={check}>
            {children}
          </Label>
        </label>
      </Board>
    </div>
  );
}

export default Checkbox;
