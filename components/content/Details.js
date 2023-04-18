import styled from "styled-components";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import arrayDetail from "../data/DataDetails";

const DetailStyle = styled.div`
  margin: 160px 0 60px;
  padding: 60px 80px 60px 130px;
  height: auto;
  background-color: var(--color-blueDark);
  color: white;
  .container-detail {
    & > p {
      margin-right: 420px;
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
        height:auto;
        width: calc(100% / 3);
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
`;

export default function Details() {
  return (
    <DetailStyle>
      <div className="container-detail">
        <p className="text-4xl">
          An enterprise template to ramp up your company website
        </p>
        <span>
          <ArrowForwardIcon />
        </span>
        <span>
          <ArrowBackIcon />
        </span>
      </div>
      <article className="container-detail-content mt-24 flex justify-between gap-8 ">
        {arrayDetail.map((detail) => {
          return (
            <div
              className="container-detail-content-author bg-white text-black font-openSans"
              key={detail.id}
            >
              <p className="text-xl leading-8">{detail.title}</p>
              <div className="flex gap-3 mt-8">
                <img src={detail.avatar} alt="avatar" width={40} height={40} />
                <p className="text-sm">
                  {detail.name}
                  <span className="text-xs block">{detail.mail}</span>
                </p>
              </div>
            </div>
          );
        })}
      </article>
    </DetailStyle>
  );
}
