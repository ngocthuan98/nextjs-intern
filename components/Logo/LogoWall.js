import React from "react";
import styled from "styled-components";

const LogoStyle = styled.div`
  height: auto;
  margin: 42px 0;
  position: relative;
  overflow: hidden;

  .image {
    width: 98px;
    height: 30px;
  }
  .wallLogo {
    gap: 46px;
    animation: move 5s linear infinite;
  }
  @keyframes move {
    0% {
      transform: translateX(0px);
    }
    50% {
      transform: translateX(50px);
    }
    100% {
       {
        transform: translateX(0px);
      }
    }
  }
  .bg-img {
    position: absolute;
    width: 102%;
    height: 40px;
    right:-2px;
    background-image: linear-gradient(
      90deg,
      #0a2640 0%,
      rgba(10, 38, 64, 0.109375) 31.6%,
      rgba(10, 38, 64, 0) 72.89%,
      #0a2640 97.87%
    );
  }
  @media (max-width: 915px) {
    .wallLogo {
      gap: 32px;
    }
    .image {
      width: 78px;
      height: 20px;
    }
  }
  @media (max-width: 715px) {
    .wallLogo {
      gap: 20px;
    }
    .image {
      width: 35px;
      height: 15px;
    }
  }
  @media (min-width: 1280px) {
    .image {
      width: 145px;
      height: 42px;
    }
    .bg-img {
      height: 42px;
    }
  }
`;

export default function LogoWall() {
  return (
    <LogoStyle className="flex lg:!mb-[56px]">
      <div className="wallLogo  lg:!gap-[68.5px] m-lg:!gap-[90px] flex justify-between overflow-hidden">
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
