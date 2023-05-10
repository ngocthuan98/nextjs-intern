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
    font-weight: 600;
    font-family: var(--font-OpenSans);
    &-item-contact {
      border: 2px solid #ffffff;
      border-radius: 24px;
      font-weight: 700;
    }
  }
  ${(props) =>
    props.blog === "blog" &&
    `
    background-color:white;
    a{
      color:var(--color-blueDark);
    }
    .menu {
      &-item-contact {
        border: 2px solid var(--color-blueDark);
      }
    }
    .logo {
      & > p {
          color:var(--color-blueDark);
      }
      & > span {
        background-color: var(--color-blueDark);
      }
      & > span::after {
        background-color: var(--color-blueDark);
      }
    }
      `}
  @media (max-width: 915px) {
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
      border-radius: 4px;
    }
    ${(props) =>
      props.blog === "blog" &&
      ` .menu-second {
        color:
      }
      .navbar-button {
        color: black;
      }
      `}
    .navbar-second {
      position: absolute;
      width: 150px;
      height: 150px;
      background-color: var(--color-blueDark);
      z-index: 1;
      top: 65px;
      right: -132px;
      transition: all 1s ease;
    }
    .open {
      position: fixed;
      width: 150px;
      height: 150px;
      background-color: var(--color-blueDark);
      z-index: 1;
      top: 65px;
      right: 132px;
      transition: all 1s ease;
    }
  }
  @media (max-width: 715px) {
    .container {
      margin: 27px 50px 0;
    }
    .navbar-second {
      position: absolute;
      width: 150px;
      height: 150px;
      background-color: var(--color-blueDark);
      z-index: 1;
      top: 65px;
      right: -80px;
      transition: all 1s ease;
    }
    .open {
      position: fixed;
      width: 150px;
      height: 150px;
      background-color: var(--color-blueDark);
      z-index: 1;
      top: 65px;
      right: 80px;
      transition: all 1s ease;
    }
  }
  @media (min-width: 1280px) {
    font-size: 16px;
    .container {
      width: 90%;
      margin: 56px 100px 0;
    }
    .logo {
      height: 42px;
      width: 162.22px;
      top: 7px;
      & > p {
        font-size: 43.25px;
        line-height: 34px;
        position: absolute;
        left: 22.92%;
        top: 0px;
      }
      & > span {
        position: absolute;
        top: 2px;
        width: 18.02px;
        height: 13.26px;
      }
      & > span::after {
        top: 16px;
        width: 25.91px;
        height: 17.68px;
      }
    }
    .menu {
      gap: 40px;
      line-height: 28px;
      &-item-contact {
        padding: 8px 40px;
      }
    }
  }
`;
export default function Navbar({ blog }) {
  const [openLinks, setOpenLinks] = useState();

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <NavbarStyled blog={blog}>
      <div className="container">
        <div className="container-navbar flex justify-between items-center">
          <Link href="/">
            <div className="logo inline-block text-white ">
              <span></span>
              <p>SiteB</p>
            </div>
          </Link>
          <ul className="menu flex items-center gap-10">
            <li className="menu-item text-white">
              <Link href="/Page/Blog ">Blog</Link>
            </li>
            <li className="menu-item text-white">
              <Link href="/Page/Services">Services</Link>
            </li>
            <li className="menu-item text-white">
              <Link href="/Page/About">About</Link>
            </li>
            <li className="menu-item-contact px-10 py-2 bg-white">Contact</li>
          </ul>
          <div className="menu-second hidden">
            <ul
              className={`${
                openLinks ? "open" : "navbar-second"
              }  flex flex-col items-center justify-evenly`}
            >
              <li className="menu-item ">
                <Link className="!text-white" href="/Page/Blog">Blog</Link>
              </li>
              <li className="menu-item ">
                <Link className="!text-white" href="/Page/Services">Services</Link>
              </li>
              <li className="menu-item ">
                <Link className="!text-white" href="/Page/About">About</Link>
              </li>
              <li className="menu-item-contact px-4 py-1 bg-white ">Contact</li>
            </ul>
          </div>
          <DensityMediumIcon
            onClick={toggleNavbar}
            className="navbar-button hidden  cursor-pointer"
          />
        </div>
      </div>
    </NavbarStyled>
  );
}
