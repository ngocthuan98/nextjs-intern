import styled from "styled-components";
import DataLastNewsBlog from "../../data/DataLastestNewBlog";

const LastNewStyle = styled.div`
  padding: 50px 85px 0;
  .blog {
    & > div:nth-child(4) {
      .blog-detail-avatar {
        margin-top: 10px;
      }
    }
    & > div:first-child{
      .blog-detail-avatar {
        margin-top: 10px;
      }
    }
  }
  @media (max-width:715px){
    padding: 50px 0 0;
  }
`;

export default function LastestNew() {
  return (
    <LastNewStyle>
      <p className="text-5xl mb-10">Latest news</p>
      <article className="blog grid  grid-cols-3  gap-24  m-max:grid-cols-2 m-max:gap-10 sm-max:gap-y-10 ">
        {DataLastNewsBlog.map((data) => {
          return (
            <div
              className="blog-detail flex flex-col justify-start gap-3 sm-max:justify-between"
              key={data.id}
            >
              <img src={data.image} alt="" />
              <p className="font-openSans text-sm leading-7 font-bold mt-3 text-blueDark sm-max:mt-1">
                Category
                <span className="ml-2 font-normal text-grayLight">
                  November 22,2021
                </span>
              </p>
              <p className="font-openSans mb-1 sm-max:mb-2">{data.content}</p>
              <div className="blog-detail-avatar flex items-center gap-5">
                <img src={data.avatar} alt="" />
                <p>{data.name}</p>
              </div>
            </div>
          );
        })}
      </article>
    </LastNewStyle>
  );
}
