import { PieChart } from "react-minimal-pie-chart";
import styled from "styled-components";

const PieStyle = styled.div`
  .pie-chart {
    width: 80px;
    height: 80px;
    position: relative;
    top: 10px;
    left: 25px;
    transform: rotate(16deg);
    &::after {
      content: "";
      width: 60px;
      height: 60px;
      background-color: #3c5368;
      display: inline-block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
    }
  }
  .pie-line {
    width: 68px;
    height: 42px;
    margin: 20px 20px 0 0;
    & > span {
      height: 8px;
      width: inherit;
      background-color: #95ABBC;
      border-radius:15px;
      &:first-child{
        width: 64px;
      }
      &:nth-child(2){
        width: 60px;
      }
    }
  }
`;
export default function PieCharts() {
  return (
    <PieStyle className="flex justify-between items-center">
      <div className="pie-chart">
        <PieChart
          data={[
            { title: "One", value: 30, color: "#0A2640" },
            { title: "Two", value: 35, color: "#0DBBFC" },
            { title: "Three", value: 35, color: "#69E6A6" },
          ]}
        />
      </div>
      <div className="pie-line flex justify-between items-start flex-col ">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </PieStyle>
  );
}
