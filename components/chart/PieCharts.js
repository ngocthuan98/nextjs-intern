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
  @media (min-width:1280px){
    .pie-line {
      width: 76px;
      height: 52px;
      margin: 45.93px 31.96px 0 0;
      & > span {
        height: 8px;
        &:first-child {
          width: 72px;
        }
        &:nth-child(2) {
          width: 68px;
        }
      }
    }
  }
`;

export default function PieCharts() {
  return (
    <PieStyle className="flex justify-between items-center m-max:justify-center m-max:gap-10 sm-max:pb-5">
      <Circle />
      <div className="pie-line flex justify-between items-start flex-col sm-max:!ml-[10px] sm-max:!mr-[10px]">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </PieStyle>
  );
}
