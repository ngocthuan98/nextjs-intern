import { PieChart } from "react-minimal-pie-chart";
import styled from "styled-components";

const Chart = styled.div`
  width: 80px;
  height: 80px;
  position: relative;
  top: 10px;
  left: 25px;
  transform: rotate(16deg);
  ${(props) =>
    props.kind === "secondChart" &&
    `
      width: 100px;
      height: 100px;
    `}
  &::after {
    content: "";
    width: 60px;
    height: 60px;
    background-color: #3c5368;
    ${(props) =>
      props.kind === "secondChart" &&
      `
        width: 70px;
        height: 70px;
        background-color: white;
      `}
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
  }
  @media (max-width: 915px) {
    width: 60px;
    height: 60px;
    ${(props) =>
      props.kind === "secondChart" &&
      `
      width: 100px;
      height: 100px;
      left: 22px;
    `}
    &::after {
      width: 40px;
      height: 40px;
      background-color: #3c5368;
      ${(props) =>
        props.kind === "secondChart" &&
        `
          width: 70px;
          height: 70px;
          background-color: white;
        `}
    }
  }
  @media (min-width: 1280px) {
    width: 93.04px;
    height: 93.04px;
    top: 24.77px;
    left: 25px;
    ${(props) =>
      props.kind === "secondChart" &&
      `
        left:0;
        width: 173.47px;
        height: 173.47px;
      `}
    &::after {
      width: 63px;
      height: 63px;
      ${(props) =>
        props.kind === "secondChart" &&
        `
          width: 123px;
          height: 123px;
          background-color: white;
        `}
    }
  }
`;
export default function Circle({ kind }) {
  return (
    <Chart kind={kind}>
      <PieChart
        data={[
          { title: "One", value: 30, color: "#0A2640" },
          { title: "Two", value: 35, color: "#0DBBFC" },
          { title: "Three", value: 35, color: "#69E6A6" },
        ]}
      />
    </Chart>
  );
}
