import styled from "styled-components";
import { useEffect, useState } from "react";
import {blogApi} from '../../api/blogApi'
import RefreshIcon from '@mui/icons-material/Refresh';

const SecondHeadingStyle = styled.div`
  @media (max-width: 715px) {
    padding: 0px 50px 30px;
    .heading-font {
      margin: 0px auto 30px;
      line-height: 36px;
    }
    .article {
      margin: 32px 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;

export default function SecondHeading() {
  const [secondHeading, setSecondHeading] = useState([]);
  const [loadMore, setLoadMore] = useState(4);
  const [disappear, setDisappear] = useState(true);
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await blogApi();
      setSecondHeading(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  const handLoadMore = () => {
    setLoadMore((prev) => prev + 3);
    setDisappear(loadMore <= secondHeading.length-4);
  };
  
  return (
    <SecondHeadingStyle className=" lg:mt-[120px] ">
      <div className="text-center">
        <p className="font-openSans mt-12  text-xl font-normal leading-8 text-grayLight lg:text-[20px] lg:leading-[32px]">
          Our Services
        </p>
        <p className="heading-font text-5xl font-normal leading-[46px] mx-[209px] lg:text-[48px] lg:leading-[72px] lg:mx-[279px]">
          Value proposition accelerator product management venture
        </p>
      </div>
      <article className="article px-[201px] py-[32px] grid  grid-cols-3  gap-24 sm-max:px-[50px]  m-max:grid-cols-2 m-max:gap-10 lg:gap-x-[50px]  ">
        {loading?<RefreshIcon className="w-[50px] h-[50px] animate-spin"></RefreshIcon>:secondHeading.slice(1, loadMore).map((data) => {
          return (
            <div className="flex flex-col lg:w-[300px]" key={data?._id}>
              <img src={data?.image} alt="link image change so no image to show" />
              <p className="font-openSans text-sm leading-7 font-bold mt-6 text-blueDark lg:text-[16px] lg:leading-[28px]">
                {data?.categoryName}
                <span className="ml-2 font-normal font-openSans text-grayLight lg:text-[16px] lg:leading-[28px]">
                  November 22,2021
                </span>
              </p>
              <p className="font-openSans mt-3 lg:text-[20px] lg:leading-[32px]">
                {data?.body}
              </p>
            </div>
          );
        })}
      </article>
      <div
        onClick={handLoadMore}
        className={`text-center mt-24   lg:!mt-[96px] ${
          disappear == false ? "hidden" : ""
        }`}
      >
        <span className="px-16 py-4 rounded-full border-solid border-2 border-blueDark text-blueDark text-xl font-bold leading-7 font-openSans lg:px-[56px] lg:py-[16px] lg:text-[20px] lg:leading-[28px] cursor-pointer">
          Load more
        </span>
      </div>
    </SecondHeadingStyle>
  );
}
