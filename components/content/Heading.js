import styled from "styled-components";
import arrayImage from "../data/DataHeading";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const HeadingStyle = styled.div`
  .heading-font {
    margin: 0 209px;
    line-height: 42px;
  }
  .heading-detail{
    width:200px;
    height:360px;
    &-explore{
      color:var(--color-blueDark);
      border-bottom: 1px solid var(--color-blueDark);
      &>svg{
        width:15px;
        height:15px;
      }
    }
  }
  .heading-article{
    margin:32px 135px;
  }
  @media (max-width:820px){
    .heading-article{
      grid-template-columns:1fr 1fr;
    }
  }
  @media (max-width:610px){
    .heading-article{
      grid-template-columns:1fr;
    }
  }
`;

export default function Heading() {
  return (
    <HeadingStyle>
      <div className="text-center">
        <p className="font-openSans mt-8  text-lg font-normal leading-8 text-grayLight">
          Our Services
        </p>
        <p className="heading-font text-5xl font-normal ">
          Handshake infographic mass market crowdfunding iteration.
        </p>
      </div>
      <article className="heading-article grid grid-cols-3 gap-24">
        {arrayImage.map((data) => {
          return (
            <div className="heading-detail flex flex-col justify-between" key={data.id}>
              <img src={data.image} alt="" width={200} height={300}/>
              <p className="font-openSans text-2xl font-normal leading-8">{data.title}</p>
              <p className="font-openSans text-xl font-normal leading-7 text-grayLight">Learning curve network effects return on investment.</p>
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
