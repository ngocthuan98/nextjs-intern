import styled from "styled-components";
import arrayImage from "../../data/DataHeading";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const HeadingStyle = styled.div`
  ${(props) =>
    props.kind === "services" &&
    `
    background-color: var(--color-blueDark);
    color:white;
    padding-bottom:40px;
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
    margin: 0 209px;
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
  .heading-article {
    margin: 32px 135px;
  }
  @media (max-width: 820px) {
    .heading-article {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (max-width: 715px) {
    .heading-article {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .heading-font {
      margin: 0 50px;
      line-height: 42px;
    }
  }
`;

export default function Heading({ kind }) {
  return (
    <HeadingStyle kind={kind}>
      <div className="heading-content text-center">
        <p className="font-openSans pt-8  text-xl font-normal leading-8 text-grayLight">
          Our Services
        </p>
        <p className="heading-font text-5xl font-normal sm-max:text-2xl sm-max:text-center ">
          Handshake infographic mass market crowdfunding iteration.
        </p>
      </div>
      <article className="heading-article grid grid-cols-3 gap-24 sm-max:gap-10">
        {arrayImage.map((data) => {
          return (
            <div
              className="heading-detail flex flex-col justify-between"
              key={data.id}
            >
              <img src={data.image} alt="" width={200} height={300} />
              <p className="font-openSans text-2xl font-normal leading-8">
                {data.title}
              </p>
              <p className="heading-detail-content font-openSans text-xl font-normal leading-7 text-grayLight">
                Learning curve network effects return on investment.
              </p>
              <div className=" heading-detail-explore w-40 flex justify-between items-center font-bold pb-2 mt-1">
                <p className="font-openSans text-xl">Explore page</p>
                <ArrowForwardIcon />
              </div>
            </div>
          );
        })}
      </article>
    </HeadingStyle>
  );
}
