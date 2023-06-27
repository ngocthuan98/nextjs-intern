import LastestNew from "../../components/content/contentBlog/LastestNew";
import Layout from "../../components/layout/Layout";
import { useEffect, useState } from "react";
import axios from "axios";
import RefreshIcon from '@mui/icons-material/Refresh';

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loadMore, setLoadMore] = useState(7);
  const [disappear, setDisappear] = useState(true);
  const fetchData = async () => {
    const res = await axios.get(
      "https://web-page-b0sx.onrender.com/blogs/getBlogs"
    );
    setBlogs(res?.data?.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handLoadMore = () => {
    setLoadMore((prev) => prev + 3);
    setDisappear(loadMore >= blogs.length);
  };


  return (
    <Layout secondNavbar={true}>
      <div
        className="flex flex-col justify-center px-[100px] pt-[40px] pb-0 sm-max:pt-[40px] 
      sm-max:px-[52px]  sm-max:pb-0 lg:pt-[72.5px]"
      >
        <header>
          <div className="text-center text-blueDark">
            <p className="text-xl leading-8 font-openSans sm-max:text-base lg:text-[20px] lg:leading-[32px]">
              Blog
            </p>
            <p className="text-6xl  sm-max:text-3xl lg:text-[64px] lg:leading-[84px]">
              Thoughts and words
            </p>
          </div>
          <div className="blog-content grid grid-cols-2 gap-x-24 py-16 border-solid border-b border-blueDark sm-max:gap-x-10 sm-max:py-10 lg:py-[72px] lg:gap-x-[100px]">
            {blogs?<img src={blogs[0]?.image} alt="link image change" className="lg:h-[400px]"/> : <RefreshIcon className="w-[50px] h-[50px] animate-spin"></RefreshIcon>}
            <div className="flex justify-center flex-col gap-4 sm-max:gap-2">
              <p className="font-openSans text-lg leading-7 font-bold text-blueDark sm-max:text-sm lg:text-[16px] lg:leading-[28px]">
                {blogs?blogs[0]?.categoryName : <RefreshIcon className="w-[50px] h-[50px] animate-spin"></RefreshIcon>}
                <span className="pl-[12px] text-grayLight font-normal">
                  November 22, 2021
                </span>
              </p>
              <p className="text-5xl m-max:text-3xl sm-max:text-base lg:text-[48px] lg:leading-[72px]">
                Pitch termsheet backing validation focus release.
              </p>
              <div className="flex items-center gap-5 lg:gap-[12px]">
                {blogs?<img
                  src={blogs[0]?.avatar}
                  alt="link image change"
                  className="lg:w-[32px] lg:h-[32px]"
                />:<RefreshIcon className="w-[50px] h-[50px] animate-spin"></RefreshIcon>}
                <p className="sm-max:text-xs lg:text-[16px] lg:leading-[28px]">
                  {blogs?blogs[0]?.author:<RefreshIcon className="w-[50px] h-[50px] animate-spin"></RefreshIcon>}
                </p>
              </div>
            </div>
          </div>
        </header>
        <section>
          <div className="pt-[50px] px-[85px] pb-0 sm-max:pt-[50px] sm-max:px-0 lg:pt-[96px] lg:px-[100px]">
            <p className="text-5xl mb-10 lg:mb-[40px] lg:text-[48px] lg:leading-[72px]">
              Latest news
            </p>
            <article className="blog grid  grid-cols-3  gap-24  m-max:grid-cols-2 m-max:gap-10 sm-max:grid-cols-1 sm-max:gap-y-10 lg:gap-x-[50px] lg:gap-y-[80px] ">
              {blogs?blogs.slice(1, loadMore).map((blog) => {
                return <LastestNew key={blog?._id} blog={blog} />;
              }) : <RefreshIcon className="w-[50px] h-[50px] animate-spin"></RefreshIcon>}
            </article>
            <div
              onClick={handLoadMore}
              className={`text-center mt-24   lg:!mt-[96px] ${
                disappear == false ? "hidden" : ""
              }`}
            >
              <span className="px-16 py-4 rounded-full border-solid border-2 border-blueDark text-blueDark text-xl font-bold leading-7 font-openSans lg:px-[56px] lg:py-[16px] lg:text-[20px] lg:leading-[28px] ">
                Load more
              </span>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
  