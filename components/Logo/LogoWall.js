import React from "react";
import styled from "styled-components";

const LogoStyle = styled.div`
  height: auto;
  margin: 42px 0;
  position: relative;

  .image {
    width: 98px;
    height: 30px;
  }
  .wallLogo {
    gap: 46px;
  }
  .bg-img {
    position: absolute;
    width: 100%;
    height: 40px;
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
      gap: 30px;
    }
    .image {
      width: 78px;
      height: 20px;
    }
  }
  @media (min-width: 1400px) {
    .wallLogo {
      gap: 66px;
    }
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
    <LogoStyle className="flex">
      <div className="wallLogo flex justify-between overflow-hidden">
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
