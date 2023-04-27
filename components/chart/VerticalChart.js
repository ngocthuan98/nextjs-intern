import styled from "styled-components";

const VerStyle = styled.div`
  margin: 10px 20px 20px;
  & > ul {
    width: 90px;
    height: 77px;
    & > li {
      width: 7px;
      height: 57px;
      background-color: #0dbbfc;
      border-radius: 15px;
      margin-bottom: 20px;
      &:first-child {
        position: relative;
        top: 20px;
        height: 20px;
      }
      &:nth-child(2) {
        position: relative;
        top: 10px;
        height: 10px;
      }
      &:nth-child(3) {
        height: 40px;
      }
      &:nth-child(4) {
        height: 30px;
      }
      &:nth-child(5) {
        background-color: #95abbc;
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
  @media (max-width: 715px) {
    margin: 5px 25px 10px;
    & > ul {
      width: 100px;
      height: 60px;
      & > li {
        width: 7px;
        height: 57px;
        position: relative;
        top: 20px;
        &:first-child {
          top: 40px;
        }
        &:nth-child(2) {
          top: 30px;
        }
      }
    }
  }
  @media (min-width: 1400px) {
    margin: 15.88px 27.91px 20.47px 24.69px;
    & > ul {
      & > li {
        width: 9.3px;
        height: 83.02px;
        &:first-child {
          height: 23.27px;
        }
        &:nth-child(2) {
          height: 13.48px;
        }
        &:nth-child(3) {
          height: 62.4px;
        }
        &:nth-child(4) {
          height: 43.1px;
        }
        &:nth-child(6) {
          height: 58.7px;
        }
        &:nth-child(7) {
          height: 70.06px;
        }
        &:last-child {
          height: 31.99px;
        }
      }
    }
  }
`;

export default function VerticalChart() {
  return (
    <VerStyle className="flex">
      <ul className="flex justify-between items-end lg:!w-[145px] lg:!h-[106px]">
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
