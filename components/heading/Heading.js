import styled from "styled-components";
import arrayImage from "../data/DataHeading";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";
const HeadingStyle = styled.div`
  .heading-font {
    margin: 0 209px;
    line-height: 42px;
  }
  .heading-detail{
    width:200px;
    height:350px;
    &-explore{
      color:var(--color-blueDark);
      border-bottom: 1px solid var(--color-blueDark);
      &>svg{
        width:15px;
        height:15px;
      }
    }
  }
`;

export default function Heading() {
  return (
    <HeadingStyle>
      <div className="text-center ">
        <p className="font-openSans mt-8  text-lg font-normal leading-8 text-grayLight">
          Our Services
        </p>
        <p className="heading-font text-5xl font-normal ">
          Handshake infographic mass market crowdfunding iteration.
        </p>
      </div>
      <div className="flex  mx-32 mt-8 justify-around">
        {arrayImage.map((data) => {
          return (
            <div className="heading-detail flex flex-col justify-between" key={data}>
              <Image src={data.image} alt="" width="200" height="300" />
              <p className="font-openSans text-2xl font-normal leading-8">{data.title}</p>
              <p className="font-openSans text-xl font-normal leading-7 text-grayLight">Learning curve network effects return on investment.</p>
              <div className=" heading-detail-explore w-32 flex justify-between items-center font-bold pb-2">
                <p>Explore page</p>
                <ArrowForwardIcon />
              </div>
            </div>
          );
        })}
      </div>
    </HeadingStyle>
  );
}
