import React from "react";
import styled from "styled-components";
import LogoWall from "../../components/Logo/LogoWall";
import PieCharts from "../../components/chart/PieCharts";
import SmallCircle from "../../components/chart/SmallCircle";
import VerticalChart from "../../components/chart/VerticalChart";
import HorizontalChart from "../../components/chart/HorizontalChart";
import Heading from "../../components/heading/Heading";

const HomeStyled = styled.div`
  .header {
    height: auto;
    background-color: #0a2640;
    display: flex;
    justify-content: center;
    .container {
      width: 90%;
      margin: 27px 100px 0;
    }
    .header-right {
      flex: 50%;
      color: white;
      & > p:first-child {
        font-size: 32px;
        line-height: 55px;
        font-family: inherit;
      }
      & > p {
        font-family: var(--font-OpenSans);
        font-size: 10.5px;
        line-height: 20px;
        color: #f1f1f1;
        font-weight: 400;
      }
      &-btn {
        padding: 14px 48px;
        background-color: #65e4a3;
        border: 2px solid #65e4a3;
        color: var(--color-blueDark);
        border-radius: 56px;
        font-family: var(--font-OpenSans);
        margin-top: 40px;
        margin-right: 5px;
        display: inline-block;
        font-weight: 700;
      }
      &-btn-second {
        padding: 14px 40px;
        border: 2px solid white;
        border-radius: 56px;
        font-family: var(--font-OpenSans);
        display: inline-block;
        font-weight: 700;
      }
    }
  }
  .header-left {
    flex: 50%;
    &-dashboard {
      height: 160px;
      width: 100%;
      background-color: rgba(255, 255, 255, 0.18);
      backdrop-filter: blur(34.3553px);
      border-radius: 10px;
    }
    &-dashboard-second {
      height: 120px;
      width: 100%;
      &-vertical {
        flex: 35%;
        background-color: rgba(255, 255, 255, 0.18);
        backdrop-filter: blur(34.3553px);
        border-radius: 10px;
      }
      &-circle {
        flex: calc(65% - 16.5px);
        background-color: rgba(255, 255, 255, 0.18);
        backdrop-filter: blur(34.3553px);
        border-radius: 10px;
      }
    }
  }
`;
export default function HomePage() {
  return (
    <HomeStyled>
      <header className="header">
        <div className="container flex flex-col">
          <div className="flex gap-32">
            <div className="header-right">
              <p className="mt-12">
                Save time by building fast with SiteB Template
              </p>
              <p>
                Funding handshake buyer business-to-business metrics iPad
                partnership.
                <br /> First mover advantage innovator success deployment
                non-disclosure.
              </p>
              <span className="header-right-btn">Buy template</span>
              <span className="header-right-btn-second">Explore</span>
            </div>
            <div className="header-left flex flex-col gap-6">
              <div className="header-left-dashboard">
                <SmallCircle />
                <HorizontalChart />
              </div>
              <div className="header-left-dashboard-second flex gap-6">
                <div className="header-left-dashboard-second-vertical">
                  <SmallCircle />
                  <VerticalChart />
                </div>
                <div className="header-left-dashboard-second-circle">
                  <SmallCircle />
                  <PieCharts />
                </div>
              </div>
            </div>
          </div>
          <LogoWall />
        </div>
      </header>
      <Heading />
    </HomeStyled>
  );
}
