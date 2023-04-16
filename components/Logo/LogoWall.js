import React from "react";
import Image from "next/image";
import styled from "styled-components";

const LogoStyle = styled.div`
  height: auto;
  margin: 42px 0;
  gap: 40px;
  position: relative;
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
`;

export default function LogoWall() {
  return (
    <LogoStyle className="flex">
      <div className="flex gap-16">
        <Image
          className=""
          src={`/Logo_2.png`}
          alt="logo"
          width="100"
          height="40"
          quality="100"
        />
        <Image
          className=""
          src={`/Logo.png`}
          alt="logo"
          width="100"
          height="40"
          quality="100"
        />
        <Image
          className=""
          src={`/Logo_2.png`}
          alt="logo"
          width="100"
          height="40"
          quality="100"
        />
        <Image
          className=""
          src={`/Logo.png`}
          alt="logo"
          width="100"
          height="40"
          quality="100"
        />
        <Image
          className=""
          src={`/Logo_2.png`}
          alt="logo"
          width="100"
          height="40"
          quality="100"
        />
        <Image
          className=""
          src={`/Logo.png`}
          alt="logo"
          width="100"
          height="40"
          quality="100"
        />
      </div>
      <div className="bg-img"></div>
    </LogoStyle>
  );
}
