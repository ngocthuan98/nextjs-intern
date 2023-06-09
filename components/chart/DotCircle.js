import styled from "styled-components";

const CircleStyle = styled.div`
  margin: 12px 0 0 14px;
  & > span {
    height: 10px;
    width: 10px;
    background-color: #fc5b00;
    display: inline-block;
    border-radius: 50px;
  }
  & > span:nth-child(2) {
    background-color: #ecaa00;
  }
  & > span:last-child {
    background-color: #009d10;
  }
  @media (max-width:715px){
    display:grid;
    grid-template-columns: 5% 5% 5%;
  }
`;
export default function SmallCircle() {
  return (
    <CircleStyle className="flex gap-2 lg:gap-[9.42px]">
      <span></span>
      <span></span>
      <span></span>
    </CircleStyle>
  );
}
