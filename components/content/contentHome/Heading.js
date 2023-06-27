import styled from "styled-components";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import  {pageApi}  from "../../api/pageApi";
import { useEffect, useState } from "react";
const HeadingStyle = styled.div`
  ${(props) =>
    props.kind === "services" &&
    ` 
    background-color: var(--color-blueDark);
    color:white;
    .heading-content{
      & >p:first-child{
        color:white;
      }
    }
    .heading-detail{
      &-content{
        display:none;
      }
    }
      `}
  .heading-font {
    padding: 0 209px;
    line-height: 42px;
  }
  .heading-detail {
    width: 200px;
    height: 360px;
    &-explore {
      color: var(--color-blueDark);
      border-bottom: 1px solid var(--color-blueDark);
      & > svg {
        width: 15px;
        height: 15px;
      }
    }
    ${(props) =>
      props.kind === "services" &&
      `
      .heading-detail{
        &-explore{
          color: white;
        border-bottom: 1px solid white;
        }
      }
        `}
  }


  @media (max-width: 715px) {
    .heading-article {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .heading-font {
      padding: 0 50px;
      line-height: 42px;
    }
  }
    ${(props) =>
      props.kind === "services" &&
      `
      .heading-article {
        padding: 35px 150px 99px 153px;
      }
      .heading-detail{
        &-explore{
          color: white;
        border-bottom: 1px solid white;
        }
      }
        `}
  }
`;

export default function Heading({ kind, pages }) {
  const [heading, setHeading] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await pageApi();
      setHeading(data);
    };

    fetchData();
  }, []);


  return (
    <HeadingStyle kind={kind}>
      <div className="heading-content text-center">
        <p className="font-openSans pt-8  text-xl font-normal leading-8 text-grayLight lg:text-[20px] lg:leading-[32px]">
          Our Services
        </p>
        <p className="heading-font text-5xl font-normal sm-max:text-2xl sm-max:text-center lg:text-[48px] lg:!leading-[72px] lg:!px-[279px]">
          Handshake infographic mass market crowdfunding iteration.
        </p>
      </div>
      <article className="heading-article px-[135px]  sm-max:px-[67px] grid grid-cols-3 m-max:grid-cols-2 gap-24  lg:gap-x-[100px] lg:px-[150px] ">
        {heading.slice().reverse().map((data) => {
            return (
              <div
                className={`heading-detail flex flex-col justify-start ${
                  kind === "services" ? "lg:!h-[490px]" : "lg:!h-auto"
                } lg:!w-[100%]  `}
                key={data?._id}
              >
                <img src={data.image} alt="" className="rounded-[24px]" />
                <p className="font-openSans text-2xl font-normal leading-8 lg:text-[24px] lg:leading-[36px] lg:mt-[24px]">
                  {data?.title}
                </p>
                <p className="heading-detail-content font-openSans text-xl font-normal leading-7 text-grayLight lg:text-[20px] lg:leading-[32px] lg:mt-[12px]">
                  {data?.body}
                </p>
                <div className=" heading-detail-explore w-40 flex justify-between items-center font-bold pb-2 mt-1 lg:mt-[28px] lg:w-[162px] lg:pb-[8px]">
                  <p className="font-openSans text-xl font-bold lg:text-[20px] lg:leading-[32px] ">
                    Explore page
                  </p>
                  <ArrowForwardIcon className="lg:!w-[24px] lg:!h-[26px]" />
                </div>
              </div>
            );
          })}
      </article>
    </HeadingStyle>
  );
}
