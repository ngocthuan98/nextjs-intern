import styled from "styled-components";

const AboutIntroStyle = styled.div`
  .About-stats {
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
  @media (max-width:715px){
    .About-stats {
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
      <div className="About-story text-grayLight pt-[50px] pr-[217px] pb-[60px] pl-[245px] sm-max:pr-[67px] sm-max:pl-[80px] m-max:px-[125px] m-max:pb-[60px] m-max:pt-[50px] lg:pt-[118px] lg:pr-[258px] lg:pb-[96px] lg:pl-[300px]">
        <p className="text-xl leading-8 font-openSans sm-max:text-base lg:text-[20px] lg:leading-[32px] lg:mb-[12px]">
          Our story
        </p>
        <p className="text-black text-5xl sm-max:text-3xl leading-[35.75px] lg:text-[48px] lg:!leading-[72px] lg:mb-[30px]">
          Handshake infographic mass market crowdfunding iteration.
        </p>
        <p className="text-xl mt-3 font-openSans sm-max:text-base pr-[7px] lg:mt-0  lg:pr-[38px] lg:text-[20px] lg:!leading-[32px]">
          Conversion angel investor entrepreneur first mover advantage.
          Handshake infographic mass market crowdfunding iteration. Traction
          stock user experience deployment beta innovator incubator focus. Sales
          user experience branding growth hacking holy grail monetization
          conversion prototype stock network effects. Learning curve network
          effects return on investment bootstrapping business-to-consumer.
        </p>
      </div>
      <div className="text-center bg-blueDark">
        <div className="About-number text-[#f1f1f1]  pt-[50px] pr-[217px] pl-[245px]  sm-max:pr-[67px] sm-max:pl-[80px] m-max:px-[125px] lg:pt-[94px] lg:px-[279px] lg:pb-[82px]">
          <p className="text-xl leading-8 text-white font-openSans sm-max:text-base lg:text-[20px] lg:leading-[32px] lg:mb-[12px]">
            Our numbers
          </p>
          <p className="text-5xl sm-max:text-3xl lg:text-[48px] lg:!leading-[72px] m-max:leading-[48px]">
            Handshake infographic mass market crowdfunding iteration.
          </p>
        </div>
        <div className="About-stats flex justify-between items-start px-[174px] pb-[50px] sm-max:px-[65px] m-max:px-[105px] text-[#f1f1f1] lg:px-[200px] lg:pb-[96px]">
          <div className="About-stats-item lg:gap-[32px]">
            <p className="lg:!text-[96px] lg:leading-[56px] sm-max:!text-[28px] sm-max:!leading-[32px]">+400</p>
            <p className="lg:!text-[24px] lg:leading-[36px]">Project done</p>
          </div>
          <div className="About-stats-item lg:gap-[32px]">
            <p className="lg:!text-[96px] lg:leading-[56px] sm-max:!text-[28px] sm-max:!leading-[32px]">+200</p>
            <p className="lg:!text-[24px] lg:leading-[36px]">Clients</p>
          </div>
          <div className="About-stats-item lg:gap-[32px]">
            <p className="lg:!text-[96px] lg:leading-[56px] sm-max:!text-[28px] sm-max:!leading-[32px]">10</p>
            <p className="lg:!text-[24px] lg:leading-[36px]">Industries Served</p>
          </div>
        </div>
      </div>
    </AboutIntroStyle>
  );
}
