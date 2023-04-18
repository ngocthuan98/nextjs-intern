import React from "react";
import styled from "styled-components";

const LogoStyle = styled.div`
  height: auto;
  margin: 42px 0;
  position: relative;
  .image{
    width: 98px;
    height: 30px;
  }
  .logoWall{
    gap:46px;
  }
  .bg-img {
    position: absolute;
    background-image: linear-gradient(
      90deg,
      #0a2640 0%,
      rgba(10, 38, 64, 0.109375) 31.6%,
      rgba(10, 38, 64, 0) 72.89%,
      #0a2640 97.87%
    );
    width: 100%;
    height: 40px;
  }
  @media (max-width: 915px) {
    .logoWall{
      gap:30px;
    }
    .image{
      width: 78px;
      height: 20px;
    }
  }
`;

export default function LogoWall() {
  return (
    <LogoStyle className="flex">
      <div className=" logoWall flex justify-between overflow-hidden">
        <img className="image" src={`/Logo_2.png`} alt="logo" quality="100" />
        <img className="image" src={`/Logo.png`} alt="logo" quality="100" />
        <img className="image" src={`/Logo_2.png`} alt="logo" quality="100" />
        <img className="image" src={`/Logo.png`} alt="logo" quality="100" />
        <img className="image" src={`/Logo_2.png`} alt="logo" quality="100" />
        <img className="image" src={`/Logo.png`} alt="logo" quality="100" />
        <img className="image" src={`/Logo_2.png`} alt="logo" quality="100" />
      </div>
      <div className="bg-img"></div>
    </LogoStyle>
  );
}
