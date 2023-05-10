import styled from "styled-components";
import arrayValues from "../../data/DataValues";

const AboutValuesStyle = styled.div`
  margin-top: 120px;
  ${(props) =>
    props.kind === "services" &&
    `
        margin-top:280px;
      `}
  .Values {
    &-item {
      grid-template-columns: 20% 80%;
      & > img {
        height: 120px;
        width: 120px;
      }
    }
  }
  @media (max-width:915px){
    ${(props) =>
      props.kind === "services" &&
      `
          margin-top:180px;
        `}
    .About-value{
      padding: 45px 150px 45px 125px;
    }
    .Values{
      padding: 0px 150px 45px 125px;
      &-item {
        & > img {
          height: 100px;
          width: 100px;
        }
      }
    }
  }
  @media (max-width:715px){
    .About-value{
      padding: 45px 67px 45px 80px;
    }
    .Values{
      padding: 0px 60px 45px 80px;
      &-item {
        & > img {
          height: 80px;
          width: 80px;
        }
      }
    }
  }
`;

export default function AboutValues({ kind }) {
  return (
    <AboutValuesStyle kind={kind} className=" bg-blueDark text-white mb-[124px]  sm-max:mb-0">
      <div className="About-value px-[245px] py-[45px] lg:px-[300px] lg:pb-[72px] lg:pt-[112px] ">
        <p className="text-xl leading-8 font-openSans  sm-max:text-base lg:text-[20px] lg:leading-[32px] lg:mb-[12px]">Our values</p>
        <p className=" text-5xl leading-[35.75px] sm-max:text-3xl m-max:text-4xl lg:text-[48px] lg:leading-[72px] lg:mb-[22.5px]">Things in we believe</p>
        <p className="text-xl mt-3 font-openSans pr-[10px]  text-lightWhite sm-max:text-base lg:text-[20px] lg:leading-[32px] ">
          Conversion angel investor entrepreneur first mover advantage.
          Handshake infographic mass market crowdfunding iteration. Traction
          stock user experience deployment beta innovator incubator focus.
        </p>
      </div>
      <div className="Values pr-[225px] pb-[45px] pl-[245px] grid grid-rows-3 gap-10 lg:px-[300px] lg:pb-[123px]">
        {arrayValues.map((value) => {
          return (
            <div key={value.id} className="Values-item gap-8 sm-max:gap-4 lg:gap-[50px] grid ">
              <img src={value.image} alt="value" className="rounded-2xl lg:!w-[150px] lg:!h-[150px]" />
              <div className="flex flex-col justify-round gap-8 sm-max:gap-4 lg:gap-[16px] m-max:gap-6">
                <p className="text-2xl sm-max:text-base m-max:text-xl lg:text-[28px] lg:leading-[48px] ">{value.title}</p>
                <p className="font-openSans text-xl pr-5 sm-max:text-sm m-max:text-[11px] lg:text-[20px] lg:leading-[32px] " >{value.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </AboutValuesStyle>
  );
}
