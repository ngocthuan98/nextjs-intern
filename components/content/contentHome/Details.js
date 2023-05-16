import styled from "styled-components";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import arrayDetail from "../../data/DataDetails";
import Slider from "react-slick";

const DetailStyle = styled.div`
  padding: 60px 80px 60px 130px;
  background-color: var(--color-blueDark);
  color: white;
  .container-detail {
    & > p {
      padding-right: 420px;
      line-height: 36px;
    }
    &-content {
      width: 100%;
      height: auto;
      &-author {
        border-radius: 12px;
        height:auto;
        padding: 25px 49px;
      }
    }
  }
 
  .slick-track {
    display: flex;
    gap:2px;
  }
  .slick-arrow {
    position: absolute;
    padding: 8px 8px;
    background-color: white;
    color: var(--color-blueDark);
    border-radius: 50%;
    &:first-child {
      top: 140px;
      right: 190px;
    }
    &:last-child {
      top: 140px;
      right: 118px;
    }
  }
  @media (max-width: 915px) {
    .container-detail {
      & > p {
        padding-right: 220px;
        line-height: 36px;
      }
      &-content {
        &-author {
          padding: 25px 19px;
        }
      }
    }
    .slick-arrow {
      &:first-child {
        top: 140px;
        right: 105px;
      }
      &:last-child {
        top: 140px;
        right: 60px;
      }
    }
    .slick-track{
      gap:20px;
    }
  }
  @media (max-width: 715px) {
    padding: 60px 50px;
    .container-detail {
      & > p {
        padding-right: 50px;
        line-height: 36px;
      }
      &-content {
        &-author {
          border-radius: 5px;
          padding: 0px 0px;
        }
      }
    }
    .slick-arrow {
      &:first-child {
        top: 180px;
        right: 65px;
      }
      &:last-child {
        top: 180px;
        right: 25px;
      }
    }
    .slick-track{
      gap:5px;
    }
  }
  @media (min-width: 1280px) {
    .slick-arrow {
      &:first-child {
        top: 230px;
        right: 190px;
      }
      &:last-child {
        top: 230px;
        right: 118px;
      }
    }
  }
`;

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIcon className="lg:!w-[36px] lg:!h-[36px]" />{" "}
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIcon className="lg:!w-[36px] lg:!h-[36px]" />
    </div>
  );
}
export default function Details() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <DetailStyle className="relative mt-[189px] lg:!mt-[289px] lg:!py-[96px] lg:!pr-[100px] lg:!pl-[150px] ">
      <div className="container-detail ">
        <p className="text-4xl lg:text-[48px] lg:!leading-[72px] lg:!pr-[520px]">
          An enterprise template to ramp up your company website
        </p>
        {/* <span className="lg:!mt-[-40px]">
          <ArrowForwardIcon className="lg:!w-[36px] lg:!h-[36px]" />
        </span>
        <span className="lg:!mt-[-40px]">
          <ArrowBackIcon className="lg:!w-[36px] lg:!h-[36px]" />
        </span> */}
      </div>
      <Slider {...settings} className="overflow-hidden mt-24">
        {arrayDetail.map((detail) => {
          return (
            <div
              className="container-detail-content-author bg-white text-black font-openSans lg:!w-[350px]"
              key={detail.id}
            >
              <p className="text-xl leading-8 lg:!text-[24px] lg:!leading-[36px]">
                {detail.title}
              </p>
              <div className="flex gap-3 mt-8 lg:!gap-[16px] lg:!mt-[40px]">
                <img
                  src={detail.avatar}
                  alt="avatar"
                  width={40}
                  height={40}
                  className="lg:!w-[58px] lg:!h-[58px]"
                />
                <p className="text-sm text-blueDark font-openSans font-bold lg:!text-[16px] lg:!leading-[32px]">
                  {detail.name}
                  <span className="text-xs block text-blueDark lg:!text-[14px] lg:!leading-[32px] font-normal">
                    {detail.mail}
                  </span>
                </p>
              </div>
            </div>
          );
        })}
      </Slider>
    </DetailStyle>
  );
}
