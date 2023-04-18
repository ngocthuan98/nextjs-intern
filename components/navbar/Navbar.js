import Link from "next/link";
import React from "react";
import styled from "styled-components";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import { useState } from "react";

const NavbarStyled = styled.nav`
  background-color: #0a2640;
  display: flex;
  justify-content: center;
  .container {
    width: 90%;
    margin: 27px 100px 0;
    &-navbar {
      width: 100%;
    }
  }
  .logo {
    height: 42px;
    width: 162.22px;
    position: relative;
    top: 7px;
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
  .menu {
    font-family: var(--font-OpenSans);
    &-item-contact {
      border: 2px solid #ffffff;
      border-radius: 24px;
    }
  }
  @media (max-width: 820px) {
    .container {
      display: flex;
      justify-content: between;
      height: auto;
      align-items: start;
      position: relative;
      overflow: hidden;
    }
    .menu {
      display: none;
    }
    .menu-second {
      display: block;
    }
    .navbar-button {
      display: block;
      color: white;
      width: 30px;
      margin-top: 10px;
      height: 25px;
      padding: 5px;
      border: 1px solid;
      border-radius: 2px;
    }
    .navbar-second {
      position: absolute;
      width: 150px;
      height: 150px;
      background-color: var(--color-blueDark);
      z-index: 1;
      top: 65px;
      right: -150px;
      transition:all 0.5s ease;
    }
    .open{
      position:fixed;
      width: 150px;
      height: 150px;
      background-color: var(--color-blueDark);
      z-index: 1;
      top: 65px;
      right: 150px;
      transition:all 0.5s ease;
    }
  }
`;
export default function Navbar() {
  const [openLinks, setOpenLinks] = useState();

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <NavbarStyled>
      <div className="container">
        <div className="container-navbar flex justify-between items-center">
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
          <div className="menu-second hidden">
            <ul className={`${openLinks ? 'open': 'navbar-second' }  flex flex-col items-center justify-evenly`}>
              <li className="menu-item">
                <Link href="/Page/Blog">Blog</Link>
              </li>
              <li className="menu-item">
                <Link href="/Page/Services">Services</Link>
              </li>
              <li className="menu-item">
                <Link href="/Page/About">About</Link>
              </li>
              <li className="menu-item-contact px-4 py-1  bg-white">Contact</li>
            </ul>
          </div>
          <DensityMediumIcon onClick={toggleNavbar} className="navbar-button hidden " />
        </div>
      </div>
    </NavbarStyled>
  );
}
