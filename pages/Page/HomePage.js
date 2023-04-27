import Layout from "../../components/layout/Layout";
import styled from "styled-components";
import LogoWall from "../../components/Logo/LogoWall";
import PieCharts from "../../components/chart/PieCharts";
import SmallCircle from "../../components/chart/DotCircle";
import VerticalChart from "../../components/chart/VerticalChart";
import HorizontalChart from "../../components/chart/HorizontalChart";
import Heading from "../../components/content/contentHome/Heading";
import Section from "../../components/content/contentHome/Section";
import Details from "../../components/content/contentHome/Details";
import SecondHeading from "../../components/content/contentHome/SecondHeading";

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
    .header-left {
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
  .header-right {
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
  @media (max-width: 915px) {
    .header .header-left {
      & > p:first-child {
        font-size: 24px;
        line-height: 36px;
      }
      & > p {
        font-size: 8px;
        line-height: 16px;
      }
      &-btn {
        padding: 10px 36px;
        margin-bottom: 5px;
        margin-right: 0px;
        font-size: 10px;
      }
      &-btn-second {
        padding: 10px 47px;
      }
    }
  }
  @media (max-width: 715px) {
    .header .container {
      width: 90%;
      margin: 27px 50px 0;
      &-top {
        grid-template-columns: 30% 70%;
      }
    }
    .header .header-left {
      & > p:first-child {
        font-size: 18px;
        line-height: 24px;
      }
      & > p {
        font-size: 8px;
        line-height: 12px;
      }
      &-btn {
        padding: 8px 19px;
        margin-left: 1px;
        font-size: 8px;
      }
      &-btn-second {
        padding: 8px 30px;
        font-size: 8px;
      }
    }
    .header-right {
      display: grid;
      grid-template-rows: 33% 65%;
      &-dashboard {
        height: 120px;
        background-color: rgba(255, 255, 255, 0.18);
        backdrop-filter: blur(34.3553px);
        border-radius: 10px;
      }
      &-dashboard-second {
        height: auto;
        width: 50%;
      }
    }
  }
  @media (min-width: 1400px) {
    .header .container {
      margin: 65px 100px 0;
    }
    .header .header-left {
      & > p:first-child {
        font-size: 48px;
        line-height: 72px;
        margin-top: 0px;
      }
      & > p {
        margin-top: 8px;
        font-size: 16px;
        line-height: 28px;
      }
      &-btn {
        padding: 16px 56px;
        margin-right: 24px;
        font-size: 20px;
        line-height: 28px;
      }
      &-btn-second {
        padding: 16px 56px;
        font-size: 20px;
        line-height: 28px;
      }
    }
    .header-right {
      flex:40%;
      &-dashboard {
        width: inherit;
        height: 231.9px;
      }
      &-dashboard-second {
        width:100%;
        &-vertical {
          flex: 40%;
          background-color: rgba(255, 255, 255, 0.18);
          backdrop-filter: blur(34.3553px);
          border-radius: 10px;
        }
        &-circle {
          flex: calc(60% - 38.65px);
          background-color: rgba(255, 255, 255, 0.18);
          backdrop-filter: blur(34.3553px);
          border-radius: 10px;
        }
      }
    }
  }
`;
export default function HomePage() {
  return (
    <Layout>
      <HomeStyled>
        <header className="header">
          <div className="container flex flex-col">
            <div className="container-top flex  gap-32 m-max:gap-16 sm-max:gap-x-2 sm-max:grid lg:justify-between lg:gap-[93px]">
              <div className="header-left lg:mt-[56px] lg:w-[567px] lg:h-[310px] lg:pr-20">
                <p className="mt-12">
                  Save time by building fast with SiteB Template
                </p>
                <p>
                  Funding handshake buyer business-to-business metrics iPad
                  partnership.
                  <br /> First mover advantage innovator success deployment
                  non-disclosure.
                </p>
                <div>
                  <span className="header-left-btn">Buy template</span>
                  <span className="header-left-btn-second">Explore</span>
                </div>
              </div>
              <div className="header-right flex flex-col gap-6 sm-max:gap-x-2 lg:w-[493.86px] lg:text-[16px]">
                <div className="header-right-dashboard ">
                  <SmallCircle />
                  <HorizontalChart />
                </div>
                <div className="header-right-dashboard-second flex gap-6 sm-max:grid gap-y-1 lg:!h-[165.34px] lg:gap-[38.65px]">
                  <div className="header-right-dashboard-second-vertical">
                    <SmallCircle />
                    <VerticalChart />
                  </div>
                  <div className="header-right-dashboard-second-circle">
                    <SmallCircle />
                    <PieCharts />
                  </div>
                </div>
              </div>
            </div>
            <LogoWall />
          </div>
        </header>
        <section>
          <article>
            <Heading />
            <Section />
            <Details />
            <SecondHeading />
          </article>
        </section>
      </HomeStyled>
    </Layout>
  );
}
