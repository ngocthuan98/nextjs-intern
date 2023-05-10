import LastestNew from "../../components/content/contentBlog/LastestNew";
import Layout from '../../components/layout/Layout'


export default function Blog() {
  return (
    <Layout secondNavbar={true}>
      <div className="flex flex-col justify-center px-[100px] pt-[40px] pb-0 sm-max:pt-[40px] 
      sm-max:px-[52px]  sm-max:pb-0 lg:pt-[72.5px]">
        <header>
          <div className="text-center text-blueDark">
            <p className="text-xl leading-8 font-openSans sm-max:text-base lg:text-[20px] lg:leading-[32px]">
              Blog
            </p>
            <p className="text-6xl  sm-max:text-3xl lg:text-[64px] lg:leading-[84px]">Thoughts and words</p>
          </div>
          <div className="blog-content grid grid-cols-2 gap-x-24 py-16 border-solid border-b border-blueDark sm-max:gap-x-10 sm-max:py-10 lg:py-[72px] lg:gap-x-[100px]">
            <img src="/image/img14.png" alt="" />
            <div className="flex justify-center flex-col gap-4 sm-max:gap-2">
              <p className="font-openSans text-lg leading-7 font-bold text-blueDark sm-max:text-sm lg:text-[16px] lg:leading-[28px]">
                Category
                <span className="pl-[12px] text-grayLight font-normal">
                  November 22, 2021
                </span>
              </p>
              <p className="text-5xl m-max:text-3xl sm-max:text-base lg:text-[48px] lg:leading-[72px]">
                Pitch termsheet backing validation focus release.
              </p>
              <div className="flex items-center gap-5 lg:gap-[12px]">
                <img src="/image/avatar4.png" alt=""  className="lg:w-[32px] lg:h-[32px]"/>
                <p className="sm-max:text-xs lg:text-[16px] lg:leading-[28px]">Chandler Bing</p>
              </div>
            </div>
          </div>
        </header>
        <section>
          <LastestNew />
        </section>
      </div>
    </Layout>
  );
}
