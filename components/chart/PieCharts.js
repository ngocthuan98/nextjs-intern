import styled from "styled-components";
import Circle from "./Circle";

const PieStyle = styled.div`
  .pie-line {
    width: 68px;
    height: 42px;
    margin: 20px 20px 0 0;
    & > span {
      height: 8px;
      width: inherit;
      background-color: #95abbc;
      border-radius: 15px;
      &:first-child {
        width: 64px;
      }
      &:nth-child(2) {
        width: 60px;
      }
    }
  }
  @media (max-width: 915px) {
    .pie-line {
      width: 50px;
      height: 38px;
      & > span {
        height: 8px;
        width: inherit;
        background-color: #95abbc;
        border-radius: 15px;
        &:first-child {
          width: 46px;
        }
        &:nth-child(2) {
          width: 42px;
        }
      }
    }
  }
`;

export default function PieCharts() {
  return (
    <PieStyle className="flex justify-between items-center m-max:justify-center m-max:gap-10">
      <Circle />
      <div className="pie-line flex justify-between items-start flex-col ">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </PieStyle>
  );
}
