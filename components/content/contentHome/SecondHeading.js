import styled from "styled-components";
import arrayArticle from "../../data/DataSecondHeading";

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
    margin: 32px 177px;
  }
  @media (max-width: 715px){
    padding: 0px 50px 30px;
    .heading-font {
      margin: 0px auto 30px;
      line-height: 36px;
    }
    .article{
      margin:32px 0;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
    }
  }
`;

export default function SecondHeading() {
  return (
    <SecondHeadingStyle>
      <div className="text-center">
        <p className="font-openSans mt-12  text-xl font-normal leading-8 text-grayLight">
          Our Services
        </p>
        <p className="heading-font text-5xl font-normal ">
          Value proposition accelerator product management venture
        </p>
      </div>
      <article className="article grid  grid-cols-3  gap-24  m-max:grid-cols-2 m-max:gap-10  ">
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
