import styled from "styled-components";
import arrayArticle from "../data/DataSecondHeading";

const SecondHeadingStyle = styled.div`
  .heading-font {
    margin: 0 209px;
    line-height: 42px;
  }
  .heading-detail{
    width:176px;
    }
  }
  .article{
    margin: 32px 198px;
  }
  @media (max-width: 820px){
    .article{
      grid-template-columns:1fr 1fr;
    }
  }
  @media (max-width: 610px){
    .article{
      grid-template-columns:1fr;
    }
  }
`;

export default function SecondHeading() {
  return (
    <SecondHeadingStyle>
      <div className="text-center">
        <p className="font-openSans mt-12  text-lg font-normal leading-8 text-grayLight">
          Our Services
        </p>
        <p className="heading-font text-5xl font-normal ">
          Value proposition accelerator product management venture
        </p>
      </div>
      <article className="article grid  grid-cols-3  gap-16">
        {arrayArticle.map((data) => {
          return (
            <div className="heading-detail flex flex-col" key={data.id}>
              <img src={data.image} alt="" />
              <p className="font-openSans text-sm leading-7 font-bold mt-6">
                {data.title}
                <span className="ml-2 font-normal text-grayLight">
                  November 22,2021
                </span>
              </p>
              <p className="font-openSans mt-3">{data.content}</p>
            </div>
          );
        })}
      </article>
      <div className="text-center mt-24">
        <span className="px-16 py-4 rounded-full border-solid border-2 border-blueDark text-blueDark text-xl font-bold leading-7 font-openSans">
          Load more
        </span>
      </div>
    </SecondHeadingStyle>
  );
}
