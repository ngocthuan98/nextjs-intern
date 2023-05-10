import styled from "styled-components";
import DataLastNewsBlog from "../../data/DataLastestNewBlog";

const LastNewStyle = styled.div`
  .blog {
    & > div:nth-child(3n + 1) {
      .blog-detail-avatar {
        margin-top: 18px;
      }
    }
  }
`;

export default function LastestNew() {
  return (
    <LastNewStyle className="pt-[50px] px-[85px] pb-0 sm-max:pt-[50px] sm-max:px-0 lg:pt-[96px] lg:px-[100px]">
      <p className="text-5xl mb-10 lg:mb-[40px] lg:text-[48px] lg:leading-[72px]">
        Latest news
      </p>
      <article className="blog grid  grid-cols-3  gap-24  m-max:grid-cols-2 m-max:gap-10 sm-max:grid-cols-1 sm-max:gap-y-10 lg:gap-x-[50px] lg:gap-y-[80px] ">
        {DataLastNewsBlog.map((data) => {
          return (
            <div
              className="blog-detail flex flex-col justify-between gap-3 sm-max:justify-between lg:w-[300px]"
              key={data.id}
            >
              <img src={data.image} alt="" />
              <p className="font-openSans text-sm leading-7 font-bold mt-3 text-blueDark sm-max:mt-1 lg:text-[16px] lg:leading-[28px] lg:mt-[11px]">
                Category
                <span className="ml-2 font-normal text-grayLight lg:ml-[12px]">
                  November 22,2021
                </span>
              </p>
              <p className="font-openSans mb-1 sm-max:mb-2 lg:text-[20px] lg:leading-[32px] lg:mb-[12px]">
                {data.content}
              </p>
              <div className="blog-detail-avatar flex items-center gap-5">
                <img src={data.avatar} alt="" />
                <p>{data.name}</p>
              </div>
            </div>
          );
        })}
      </article>
      <div className="text-center mt-24 mb-[60px]  lg:!mt-[96px] ">
        <span className="px-16 py-4 rounded-full border-solid border-2 border-blueDark text-blueDark text-xl font-bold leading-7 font-openSans lg:px-[56px] lg:py-[16px] lg:text-[20px] lg:leading-[28px] ">
          Load more
        </span>
      </div>
    </LastNewStyle>
  );
}
