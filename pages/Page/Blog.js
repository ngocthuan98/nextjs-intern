import styled from "styled-components";
import LastestNew from "../../components/content/contentBlog/LastestNew";
import Layout from '../../components/layout/Layout'

const BlogStyle = styled.div`
  margin: 40px 100px 0;
  @media (max-width: 715px) {
    margin: 40px 52px 0;
  }
`;

export default function Blog() {
  return (
    <Layout secondNavbar={true}>
      <BlogStyle className="flex flex-col justify-center">
        <header>
          <div className="text-center text-blueDark">
            <p className="text-xl leading-8 font-openSans sm-max:text-base">
              Blog
            </p>
            <p className="text-6xl  sm-max:text-3xl">Thoughts and words</p>
          </div>
          <div className="blog-content grid grid-cols-2 gap-x-24 py-16 border-solid border-b border-blueDark sm-max:gap-x-10 sm-max:py-10">
            <img src="/image/img14.png" alt="" />
            <div className="flex justify-center flex-col gap-4 sm-max:gap-2">
              <p className="font-openSans text-lg leading-7 font-bold text-blueDark sm-max:text-sm">
                Category
                <span className="pl-5 text-grayLight font-normal">
                  November 22, 2021
                </span>
              </p>
              <p className="text-5xl m-max:text-3xl sm-max:text-base">
                Pitch termsheet backing validation focus release.
              </p>
              <div className="flex items-center gap-5">
                <img src="/image/avatar4.png" alt="" />
                <p className="sm-max:text-xs">Chandler Bing</p>
              </div>
            </div>
          </div>
        </header>
        <section>
          <LastestNew />
        </section>
      </BlogStyle>
    </Layout>
  );
}
