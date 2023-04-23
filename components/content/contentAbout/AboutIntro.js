import styled from "styled-components";

const AboutIntroStyle = styled.div`
  .About-story {
    margin: 50px 217px 60px 245px;
    & > p {
      &:nth-child(2) {
        line-height: 35.75px;
      }
      &:last-child {
        padding-right: 7px;
      }
    }
  }
  .About-number {
    padding: 50px 217px 0 245px;
    color: #f1f1f1;
  }
  .About-stats {
    padding: 0px 174px 50px;
    color: #f1f1f1;
    &-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      & > p {
        &:first-child {
          font-size: 70px;
          color: #4fe9a4;
        }
        &:last-child {
          font-size: 16px;
        }
      }
    }
  }
  @media (max-width:915px){
    .About-story{
      margin: 50px 105px 60px ;
    }
    .About-number {
      padding: 50px 217px 0 245px;
    }
  }
  @media (max-width:715px){
    .About-story{
      margin: 50px 80px 60px ;
    }
    .About-number {
      padding: 50px 80px 0 ;
    }
    .About-stats {
      padding: 0px 50px 50px;
      &-item {
        & > p {
          &:first-child {
            font-size: 35px;
          }
          &:last-child {
            font-size: 11px;
          }
        }
      }
  }
`;

export default function AboutIntro() {
  return (
    <AboutIntroStyle>
      <div className="About-story text-grayLight">
        <p className="text-xl leading-8 font-openSans sm-max:text-base">Our story</p>
        <p className="text-black text-5xl sm-max:text-3xl">
          Handshake infographic mass market crowdfunding iteration.
        </p>
        <p className="text-xl mt-3 font-openSans sm-max:text-base">
          Conversion angel investor entrepreneur first mover advantage.
          Handshake infographic mass market crowdfunding iteration. Traction
          stock user experience deployment beta innovator incubator focus. Sales
          user experience branding growth hacking holy grail monetization
          conversion prototype stock network effects. Learning curve network
          effects return on investment bootstrapping business-to-consumer.
        </p>
      </div>
      <div className="text-center bg-blueDark">
        <div className="About-number">
          <p className="text-xl leading-8 text-white font-openSans sm-max:text-base">Our numbers</p>
          <p className="text-5xl sm-max:text-3xl">
            Handshake infographic mass market crowdfunding iteration.
          </p>
        </div>
        <div className="About-stats flex justify-between items-start ">
          <div className="About-stats-item">
            <p>+400</p>
            <p>Project done</p>
          </div>
          <div className="About-stats-item">
            <p>+200</p>
            <p>Clients</p>
          </div>
          <div className="About-stats-item">
            <p>10</p>
            <p>Industries Served</p>
          </div>
        </div>
      </div>
    </AboutIntroStyle>
  );
}
