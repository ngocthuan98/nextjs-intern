import styled from "styled-components";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import Circle from "../../chart/Circle";

const SectionUp = styled.div`
  padding: 88px 207px 88px 138px;
  .sectionUp-left {
    position: absolute;
    height: 220px;
    bottom: -51px;
    left: 106px;
    box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.12);
    border-radius: 12px;
    padding: 20px 21px;
    .sectionUp-left-chart {
      & > span {
        width: 11px;
        height: 100px;
        background-color: #0dbbfc;
        gap: 11px;
        &:first-child {
          position: relative;
          top: 35px;
          height: 35px;
        }
        &:nth-child(2) {
          position: relative;
          top: 20px;
          height: 20px;
        }
        &:nth-child(3) {
          height: 75px;
        }
        &:nth-child(4) {
          height: 60px;
        }
        &:nth-child(5) {
          background-color: var(--color-blueDark);
        }
        &:nth-child(6) {
          height: 70px;
        }
        &:nth-child(7) {
          height: 84px;
        }
        &:last-child {
          height: 50px;
        }
      }
    }
  }
  .sectionUp-right {
    &-button {
      background: var(--color-blueDark);
      border: 2px solid var(--color-blueDark);
      border-radius: 56px;
    }
  }
  @media (max-width: 715px) {
    display: grid;
    grid-template-columns: 1fr;
    padding: 20px 100px;
    .section-image {
      & > img {
        height: 200px;
      }
    }
    .sectionUp-left {
      left: 30px;
      bottom: -122px;
    }
    .sectionUp-right {
      align-items: center;
    }
  }
  @media (min-width:1400px){
    .sectionUp-left {
    bottom: -100px;
    left: 192px;
    .sectionUp-left-chart {
      & > span {
        width: 170px;
        height: 227.21px;
        &:first-child {
          top: 50px;
          height: 49.74px;
        }
        &:nth-child(2) {
          top: 29px;
          height: 28.83px;
        }
        &:nth-child(3) {
          height: 133.39px;
        }
        &:nth-child(4) {
          height: 92.13px;
        }
        &:nth-child(5) {
          height:177.47px;
          background-color: var(--color-blueDark);
        }
        &:nth-child(6) {
          height: 125.47px;
        }
        &:nth-child(7) {
          height: 149.78px;
        }
        &:last-child {
          height: 68.39px;
        }
      }
    }
  }
`;

const SectionDown = styled.section`
  padding: 0px 207px 0 138px;
  .sectionDown-right-container {
    position: absolute;
    height: 235px;
    width: 200px;
    bottom: -86px;
    left: 28px;
    box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.12);
    border-radius: 12px;
    padding: 20px;
  }
  .sectionDown-left {
    &-content {
      position: absolute;
      top: 200px;
      width: 100%;
      & > p {
        padding: 16px 50px 16px 20px;
        box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.08);
        border-radius: 4px;
        margin-bottom: 14px;
        .icon {
          display: inline-block;
          margin-right: 5px;
          -webkit-filter: brightness(0) saturate(100%);
        }
        &:hover {
          background-color: var(--color-blueDark);
          color: white;
          cursor: pointer;
        }
        &:first-child:hover {
          .icon {
            -webkit-filter: none;
          }
        }
      }
    }
  }
  @media (max-width: 915px) {
    .sectionDown-left {
      &-content {
        position: absolute;
        top: 100px;
        width: 100%;
      }
    }
    .sectionDown-right-container {
      position: absolute;
      height: 235px;
      width: 180px;
      bottom: -86px;
      left: 28px;
      box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.12);
      border-radius: 12px;
      padding: 15px;
      &-content > p {
        font-size: 10px;
      }
    }
  }
  @media (max-width: 715px) {
    display: grid;
    grid-template-columns: 1fr;
    padding: 20px 100px;
    .section-image {
      & > img {
        width: auto;
        height: 200px;
      }
    }
    .sectionDown-left {
      height: 260px;
      &-content {
        position: absolute;
        top: 100px;
        width: 80%;
        & > p {
          padding: 10px 10px 10px 10px;
          font-size: 7px;
        }
      }
    }
    .sectionDown-right {
      & > img {
        height: 200px;
      }
      &-container {
        width: 169px;
        bottom: -140px;
        left: 10px;
        &-content > p {
          font-size: 9px;
        }
      }
    }
  }
`;

export default function Section() {
  return (
    <section>
      <SectionUp className="flex gap-32 sm-max:gap-48  lg:!pt-[0px] lg:!pr-[0px] lg:!pb-[224px] lg:!pl-[156px] lg:gap-[150px]">
        <div className="relative section-image">
          <img src="/image/img4.png" alt="" height="300" width="290" className="lg:w-[494px] lg:h-[506px]"/>
          <div className="sectionUp-left bg-white w-56 lg:w-[251px] lg:!h-[388px] lg:!p-[40px]">
            <div className="sectionUp-left-chart flex gap-3 items-end lg:gap-[11px]">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <p className="mt-16 text-blueDark text-2xl font-bold leading-8 lg:mt-[70px] lg:text-[24px] lg:leading-[36.27px]">
              30%
            </p>
            <p className="font-normal text-sm text-blueDark leading-6 lg:text-[14px] lg:leading-[24px]">
              More income in June
            </p>
          </div>
        </div>
        <div className="sectionUp-right flex flex-col justify-end items-start gap-12">
          <p className="text-3xl leading-10">Our Expertise</p>
          <div>
            <p className="mb-3">
              <span className="mr-4 sm-max:mr-2">
                <CheckCircleIcon className="w-8 h-8" />
              </span>
              Health Tech
            </p>
            <p className="mb-3">
              <span className="mr-4 sm-max:mr-2">
                <CheckCircleIcon className="w-8 h-8" />
              </span>
              Travel Tech
            </p>
            <p>
              <span className="mr-4 sm-max:mr-2">
                <CheckCircleIcon className="w-8 h-8" />
              </span>
              SAAS
            </p>
          </div>
          <p className="sectionUp-right-button px-12 py-4 bg-blueDark text-white sm-max:px-6">
            Start now
          </p>
        </div>
      </SectionUp>
      <SectionDown className="flex gap-32 justify-center sm-max:gap-0">
        <div className="sectionDown-left flex-1 relative ">
          <p className="text-3xl leading-10 mt-32 m-max:mt-8 sm-max:mt-16 sm-max:text-center">
            Benefits
          </p>
          <div className="sectionDown-left-content ">
            <p className="">
              <img
                src="/image/icon.png"
                alt="icon"
                width="15"
                height="15"
                className="icon"
              />
              Time & Tech saving
            </p>
            <p>
              <span className="mr-2">
                <VisibilityOutlinedIcon />
              </span>
              Cycle product development
            </p>
            <p>
              <span className="mr-2">
                <WbSunnyOutlinedIcon />
              </span>
              Business-to-consumer long tail.
            </p>
          </div>
        </div>
        <div className="sectionDown-right relative flex-1">
          <img
            src="/image/img5.png"
            alt=""
            height="300"
            width="290"
            className="relative"
          />
          <div className="sectionDown-right-container bg-white flex flex-col justify-between sm-max:justify-around ">
            <Circle kind="secondChart" />
            <div className="sectionDown-right-container-content pl-5 ">
              <p className="mb-2">
                <span className="w-2 h-2  mr-2  bg-blueLight inline-block rounded-md"></span>
                35% - Agile Development
              </p>
              <p className="mb-2">
                <span className="w-2 h-2  mr-2 bg-greenLight inline-block rounded-md"></span>
                30% - Investor bandwidth
              </p>
              <p>
                <span className="w-2 h-2  mr-2 bg-pink inline-block rounded-md"></span>
                35% - A/B testing
              </p>
            </div>
          </div>
        </div>
      </SectionDown>
    </section>
  );
}
