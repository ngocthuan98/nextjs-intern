import Link from "next/link";
import React from "react";
import styled from "styled-components";

const NavbarStyled = styled.nav`
  background-color: #0a2640;
  display: flex;
  justify-content: center;
  .container {
    width: 90%;
    margin: 27px 100px 0;
  }
  .logo {
    height: 42px;
    width: 162.22px;
    position: relative;
    top:7px;  
    & > p {
      font-weight: 700;
      display: inline-block;
      font-size: 37.25px;
      position: absolute;
      left: 30.18px;
      top: -15px;
    }
    & > span {
      display: inline-block;
      width: 18.02px;
      height: 11.26px;
      background-color: var(--color-green);
      border-radius: 0px 12.0139px 12.0139px 0px;
    }
    & > span::after {
      content: "";
      display: block;
      position: absolute;
      top: 16px;
      width: 23.91px;
      height: 13.68px;
      background-color: var(--color-green);
      border-radius: 0px 12.0139px 12.0139px 0px;
    }
  }
  .menu{
    font-family:var(--font-OpenSans);
    &-item-contact {
      border: 2px solid #ffffff;
      border-radius: 24px;
    }
  }

`;
export default function Navbar() {
  return (
    <NavbarStyled>
      <div className="container flex justify-between items-center">
        <Link href="/">
          <logo className="logo inline-block text-white ">
            <span></span>
            <p>SiteB</p>
          </logo>
        </Link>
        <ul className="menu flex items-center gap-10">
          <li className="menu-item">
            <Link href="/Page/Blog">Blog</Link>
          </li>
          <li className="menu-item">
            <Link href="/Page/Services">Services</Link>
          </li>
          <li className="menu-item">
            <Link href="/Page/About">About</Link>
          </li>
          <li className="menu-item-contact px-10 py-2 bg-white">Contact</li>
        </ul>
      </div>
    </NavbarStyled>
  );
}
