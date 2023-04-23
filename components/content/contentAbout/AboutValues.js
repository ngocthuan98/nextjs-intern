import styled from "styled-components";
import arrayValues from "../../data/DataValues";

const AboutValuesStyle = styled.div`
  margin-top: 60px;
  ${(props) =>
    props.kind === "services" &&
    `
        margin-top:140px;
      `}
  .About-value {
    padding: 45px 245px;
    & > p {
      &:nth-child(2) {
        line-height: 35.75px;
      }
      &:last-child {
        padding-right: 10px;
      }
    }
  }
  .Values {
    padding: 0px 225px 45px 245px;
    &-item {
      display: grid;
      grid-template-columns: 22% 78%;
      & > img {
        height: 120px;
        width: 120px;
      }
    }
  }
  @media (max-width:915px){
    .About-value{
      padding: 45px 165px 45px 245px;
    }
    .Values{
      padding: 0px 185px 45px 245px;
    }
  }
  @media (max-width:915px){
    .About-value{
      padding: 45px 80px 45px ;
    }
    .Values{
      padding: 0px 60px 45px  80px;
      &-item {
        & > img {
          height: 100px;
          width: auto;
        }
      }
    }
  }
`;

export default function AboutValues({ kind }) {
  return (
    <AboutValuesStyle kind={kind} className="About bg-blueDark text-white ">
      <div className="About-value ">
        <p className="text-xl leading-8 font-openSans sm-max:text-base">Our values</p>
        <p className=" text-5xl sm-max:text-3xl">Things in we believe</p>
        <p className="text-xl mt-3 font-openSans text-lightWhite sm-max:text-base">
          Conversion angel investor entrepreneur first mover advantage.
          Handshake infographic mass market crowdfunding iteration. Traction
          stock user experience deployment beta innovator incubator focus.
        </p>
      </div>
      <div className="Values grid grid-rows-3 gap-10 ">
        {arrayValues.map((value) => {
          return (
            <div className="Values-item gap-8 sm-max:gap-4">
              <img src={value.image} alt="value" className="rounded-2xl" />
              <div className="flex flex-col justify-round gap-8 sm-max:gap-4">
                <p className="text-2xl sm-max:text-base">{value.title}</p>
                <p className="font-openSans text-xl pr-5 sm-max:text-sm" >{value.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </AboutValuesStyle>
  );
}
