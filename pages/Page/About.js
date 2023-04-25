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
      margin: 27px 309px 100px;
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
    padding: 0 100px;
    margin-top: -70px;
    display: grid;
    grid-template-columns: 24% 35% 24%;
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
  @media (max-width: 915px) {
    header {
      .container {
        margin: 27px 200px 100px;
      }
    }
    .headerAbout-image {
      gap: 53px;
    }
  }
  @media (max-width: 715px) {
    header {
      .container {
        margin: 27px 80px 100px;
      }
    }
    .headerAbout-image {
      padding: 0 80px;
      margin-top: -50px;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      & > img {
        width: 120px;
        height: 110px;
        border-radius: 12px;
        &:nth-child(2) {
          height: 230px;
          width: 200px;
        }
      }
    }
  }
`;

export default function About() {
  return (
    <Layout>
      <AboutStyle>
        <header className="bg-blueDark">
          <div className="container">
            <div className="container-header text-center text-lightWhite">
              <p className="text-xl leading-8 font-openSans">About</p>
              <p className="text-5xl text-white">
                We love to make great things, things that matter.
              </p>
              <p className="text-xs leading-7 font-openSans m-max:px-4">
                Funding handshake buyer business-to-business metrics iPad
                partnership. First mover advantage innovator success deployment
                non-disclosure.
              </p>
            </div>
          </div>
        </header>
        <div className="headerAbout-image">
          <img src="/image/img4.png" alt="" />
          <img src="/image/img5.png" alt="" />
          <img src="/image/img1.png" alt="" />
          <img src="/image/img12.png" alt="" />
          <img src="/image/img13.png" alt="" />
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
