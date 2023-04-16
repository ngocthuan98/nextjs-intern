import React from "react";
import styled from "styled-components";

const FooterStyle = styled.footer`
  background-color: #fff;
  margin: 150px 107px 0px 93px;

  .email {
    background-color: #0a2640;
    height: auto;
    border-radius: 12px;
    padding: 42px 149px 0;
    & > p {
      margin-bottom: 20px;
    }
    &-input {
      border-radius: 240px;
      width: 260px;
      height: 46px;
      margin-left: 47px;
      margin-bottom: 42px;
      font-family: var(--font-OpenSans);
      padding-left: 25px;
      font-size: 14px;
      &::placeholder {
        font-size: 14px;
        padding: 12px 0;
        color: black;
        font-weight: 400;
      }
    }
    &-btn {
      padding: 14px 48px;
      background-color: #65e4a3;
      border: 2px solid #65e4a3;
      border-radius: 56px;
      font-family: var(--font-OpenSans);
      margin-left: 12px;
    }
  }
  .footer-container {
    margin-top: 99px;
    .logo {
      text-color: var(--color-blueDark);
      height: 30px;
      width: 140px;
      position: relative;
      margin-bottom: 20px;
      & > p {
        font-weight: 700;
        display: inline-block;
        font-size: 37.25px;
        position: absolute;
        left: 30.18px;
        top: -15px;
        font-family: var(--font-OpenSans);
      }
      & > span {
        display: inline-block;
        width: 18.02px;
        height: 12.26px;
        background-color: var(--color-blueDark);
        border-radius: 0px 12.0139px 12.0139px 0px;
      }
      & > span::after {
        content: "";
        display: block;
        position: absolute;
        top: 16px;
        width: 23.91px;
        height: 14.68px;
        background-color: var(--color-blueDark);
        border-radius: 0px 12.0139px 12.0139px 0px;
      }
    }
    &-left {
      width: 220px;
      & > p {
        color: var(--color-gray);
      }
    }
    &-right {
      width: calc(100% - 330px);
      height: 143px;
      font-family: var(--font-OpenSans);
      & > ul {
        width: 150px;
        font-weight: 700;
        & > li {
          color: var(--color-gray);
          font-weight: 400;
        }
        & > li:first-child {
          margin-top: 10px;
        }
      }
    }
    .careers {
      &::after {
        content: "Hiring!";
        position:relative;
        left:10px;
        padding: 3.5px 8px;
        font-weight: 700;
        color: var(--color-blueDark);
        border-radius: 120px;
        background-color: var(--color-green);
        light-height: 28px;
        font-size: 9px;
      }
    }
  }
`;
export default function Footer() {
  return (
    <FooterStyle>
      <div className="email flex flex-col">
        <p className="text-5xl text-white text-center">
          An enterprise template to ramp up your company website
        </p>
        <div>
          <input placeholder="Your email address" className="email-input " />
          <span className="email-btn font-bold">Start now</span>
        </div>
      </div>
      <div className="footer-container flex items-center justify-start">
        <div className="footer-container-left mr-32">
          <logo className="logo inline-block">
            <span></span>
            <p>SiteB</p>
          </logo>
          <p>
            Social media validation business model canvas graphical user
            interface launch party creative facebook iPad twitter.
          </p>
          <p className="mt-10">All rights reserved.</p>
        </div>
        <div className="footer-container-right flex gap-24">
          <ul className="flex flex-col justify-between leading-9">
            Landings
            <li>Home</li>
            <li>Products</li>
            <li>Services</li>
          </ul>
          <ul className="flex flex-col justify-between leading-9">
            Company
            <li>Home</li>
            <li className="careers">Careers</li>
            <li>Services</li>
          </ul>
          <ul className="flex flex-col justify-between leading-9">
            Resources
            <li>Blog</li>
            <li>Products</li>
            <li>Services</li>
          </ul>
        </div>
      </div>
    </FooterStyle>
  );
}
