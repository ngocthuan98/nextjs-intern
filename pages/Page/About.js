import styled from "styled-components";
import Layout from "../../components/layout/Layout";
import AboutIntro from "../../components/content/contentAbout/AboutIntro";
import AboutOurTeam from "../../components/content/contentAbout/AboutOurTeam";
import AboutValues from "../../components/content/contentAbout/AboutValues";

const AboutStyle = styled.div`
  header {
    height: auto;
    display: flex;
    justify-content: center;
    .container {
      width: 90%;
      &-header {
        & > p {
          color: #f1f1f1;
          &:nth-child(2) {
            line-height: 47.75px;
          }
        }
      }
    }
  }
  .headerAbout-image {
    height: auto;
    margin-top: -70px;
    display: grid;
    grid-template-columns: 150px 200px 152px;
    gap: 68px;
    & > img {
      width: 200px;
      height: 200px;
      border-radius: 24px;
      &:nth-child(2) {
        grid-row: 1/3;
        grid-column: 2/3;
        height: 468px;
        width: auto;
      }
    }
  }
  @media (max-width: 715px) {
    .headerAbout-image {
      margin-top: -50px;
      grid-template-columns: 100px 100px;
      gap: 10px;
      & > img {
        height: 100px;
        border-radius: 12px;
      }
    }
  }
  @media (min-width:1280px) {
    .headerAbout-image {
      grid-template-columns: 300px 400px 302px;
      gap: 10px;
    }
  }
`;

export default function About() {
  return (
    <Layout>
      <AboutStyle>
        <header className="bg-blueDark">
          <div className="container pt-[27px] px-[235px] pb-[100px] m-max:px-[140px] m-max:pb-[100px] sm-max:px-[50px] sm-max:pb-[70px] lg:!px-[211px] lg:!pt-[57.5px] lg:!pb-[70px]">
            <div className="container-header text-center text-lightWhite">
              <p className="text-xl leading-8 font-openSans lg:text-[20px] lg:leading-[32px] lg:mb-[12px]">About</p>
              <p className="text-5xl text-white lg:text-[64px] lg:!leading-[84px] lg:mb-[17.5px]">
                We love to make great things, things that matter.
              </p>
              <p className="text-xs leading-7 font-openSans m-max:px-4 lg:mb-[70px] lg:text-[16px] lg:leading-[28px]">
                Funding handshake buyer business-to-business metrics iPad
                partnership. First mover advantage innovator success deployment
                non-disclosure.
              </p>
            </div>
          </div>
        </header>
        <div className="headerAbout-image px-[100px] lg:!px-[150px] sm-max:pr-[67px] sm-max:pl-[80px] sm-max:!gap-x-[15px] m-max:!gap-x-[25px] m-max:!gap-y-[10px] lg:!gap-x-[50px] lg:!gap-y-[40px]">
          <img src="/image/img4.png" alt="" className="lg:!w-[300px] lg:!h-[285px]"/>
          <img src="/image/img5.png" alt="" className="sm-max:!h-[210px] m-max:!h-[410px] lg:!w-[400px] lg:!h-[632px] "/>
          <img src="/image/img1.png" alt="" className="lg:!w-[302px] lg:!h-[305px] "/>
          <img src="/image/img12.png" alt="" className="lg:!w-[300px] lg:!h-[303px] lg:mt-[-16px]"/>
          <img src="/image/img13.png" alt="" className="lg:!w-[302px] lg:!h-[287px] "/>
        </div>
        <section>
          <AboutIntro />
          <AboutOurTeam />
          <article>
            <AboutValues />
          </article>
        </section>
      </AboutStyle>
    </Layout>
  );
}
