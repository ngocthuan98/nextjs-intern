import styled from "styled-components";

const VerStyle = styled.div`
  margin: 10px 20px 20px;
  & > ul {
    width: 90px;
    height: 77px;
    & > li {
      width: 7px;
      height: 57px;
      background-color: #0DBBFC;
      border-radius: 15px;
      margin-bottom: 20px;
      &:first-child {
        position:relative;
        top:20px;
        height: 20px;
      }
      &:nth-child(2) {
        position:relative;
        top:10px;
        height: 10px;
      }
      &:nth-child(3) {
        height: 40px;
      }
      &:nth-child(4) {
        height: 30px;
      }
      &:nth-child(5) {
        background-color:#95ABBC;
      }
      &:nth-child(6) {
        height: 36px;
      }
      &:nth-child(7) {
        height: 47px;
      }
      &:last-child {
        height: 25px;
      }
    }
  }
`;

export default function VerticalChart() {
  return (
    <VerStyle className="flex">
      <ul className="flex justify-between items-end">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </VerStyle>
  );
}
