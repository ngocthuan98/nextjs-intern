import styled from "styled-components";

const HorizontalStyle = styled.div`
  width: 290px;
  .Horizontal-left {
    flex: 15%;
    & > span {
      width: 100%;
      height: 10px;
      background-color: #95abbc;
      border-radius: 5px;
    }
  }
  .Horizontal-right {
    flex: 80%;
    &-span {
      flex: 90%;
      & > span {
        width: 100%;
        height: 10px;
        background-color: white;
        border-radius: 5px;
        &:first-child {
          width: 80%;
          background-color: #8fb6d5;
        }
        &:nth-child(2) {
          width: 30%;
          background-color: #0dbbfc;
        }
        &:last-child {
          width: 75%;
          background-color: var(--color-green);
        }
      }
    }
    &-text {
      & > p {
        position: relative;
        &:first-child {
          bottom: 3px;
          right:30px;
        }
        &:nth-child(2) {
          right: 133px;
          bottom:1.5px;
        }
        &:nth-child(3){
          left: 11px;
        }
        &:last-child {
          right: 41px;
          top:4px;
        }
      }
    }
  }
  @media (max-width: 820px){
    .Horizontal-left{
      flex:10%;
    }
    .Horizontal-right {
      flex: 90%;
      &-span {
        flex: 70%;
      }
      &-text {
        & > p {
          position: relative;
          &:first-child {
            bottom: 3px;
            right:40px;
          }
          &:nth-child(2) {
            right: 150px;
            bottom:1.5px;
          }
          &:nth-child(3){
            left: 5px;
          }
          &:last-child {
            right: 47px;
            top:4px;
          }
        }
      }
  }
`;
export default function HorizontalChart() {
  return (
    <HorizontalStyle className="flex  ml-10 mt-5 gap-4  h-40 m-max:gap-2 m-max:ml-5 m-max:mr-5">
      <div className="Horizontal-left flex flex-col justify-between ">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="Horizontal-right flex justify-center">
        <div className="Horizontal-right-span flex flex-col justify-between">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="Horizontal-right-text flex flex-col justify-between text-white">
          <p>80%</p>
          <p>30%</p>
          <p>100%</p>
          <p>75%</p>
        </div>
      </div>
    </HorizontalStyle>
  );
}
