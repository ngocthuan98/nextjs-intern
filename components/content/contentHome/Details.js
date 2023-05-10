import styled from "styled-components";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import arrayDetail from "../../data/DataDetails";

const DetailStyle = styled.div`
  padding: 60px 80px 60px 130px;
  background-color: var(--color-blueDark);
  color: white;
  .container-detail {
    & > p {
      padding-right: 420px;
      line-height: 36px;
    }
    & > span {
      display: inline-block;
      float: right;
      padding: 8px 8px;
      background-color: white;
      color: var(--color-blueDark);
      border-radius: 50%;
      margin-left: 10px;
      &:first-child {
        background-color: red;
      }
    }
    &-content {
      width: 100%;
      height: auto;
      &-author {
        border-radius:12px;
        // height:auto;
        padding: 25px 49px;
        &:nth-child(1) {
          height: 199px;
        }
        &:nth-child(3) {
          height: 222px;
        }
      }
    }
  }
  @media (max-width:915px){
    .container-detail{
      & > p {
        padding-right: 220px;
        line-height: 36px;
      }
    }
  }
  @media (max-width:715px){
    padding: 60px 50px;
    .container-detail{
      & > p {
        padding-right: 50px;
        line-height: 36px;
      }
      &-content {
        width: 100%;
        height: auto;
        &-author {
          border-radius:12px;
          // height:auto;
          padding: 25px 49px;
          &:nth-child(1) {
            height: auto;
          }
          &:nth-child(3) {
            height: auto;
          }
        }
      }
    }
  }
  @media (min-width:1280px){
    .container-detail{
      & > span{
        margin-left:26px;
      }
      &-content {
        &-author {
          padding: 40px;
          &:nth-child(1) {
            height: 322px;
          }
          &:nth-child(3) {
            height: 358px;
          }
        }
      }
    }
  }
`;

export default function Details() {
  return (
    <DetailStyle className=" mt-[189px] lg:!mt-[289px] lg:!py-[96px] lg:!pr-[100px] lg:!pl-[150px] ">
      <div className="container-detail ">
        <p className="text-4xl lg:text-[48px] lg:!leading-[72px] lg:!pr-[520px]">
          An enterprise template to ramp up your company website
        </p>
        <span className="lg:mt-[-40px]">
          <ArrowForwardIcon className="lg:w-[36px] lg:h-[36px]" />
        </span >
        <span className="lg:mt-[-40px]">
          <ArrowBackIcon className="lg:w-[36px] lg:h-[36px]"/>
        </span>
      </div>
      <article className="container-detail-content mt-24 grid grid-cols-3 gap-x-10 m-max:grid-cols-2 sm-max:grid-cols-1 gap-y-5  lg:!gap-x-[22px]">
        {arrayDetail.map((detail) => {
          return (
            <div
              className="container-detail-content-author bg-white text-black font-openSans lg:!w-[350px]"
              key={detail.id}
            >
              <p className="text-xl leading-8 lg:!text-[24px] lg:!leading-[36px]">{detail.title}</p>
              <div className="flex gap-3 mt-8 lg:!gap-[16px] lg:!mt-[40px]">
                <img src={detail.avatar} alt="avatar" width={40} height={40} className="lg:!w-[58px] lg:!h-[58px]" />
                <p className="text-sm text-blueDark font-openSans font-bold lg:!text-[16px] lg:!leading-[32px]">
                  {detail.name}
                  <span className="text-xs block text-blueDark lg:!text-[14px] lg:!leading-[32px] font-normal">{detail.mail}</span>
                </p>
              </div>
            </div>
          );
        })}
      </article>
    </DetailStyle>
  );
}
