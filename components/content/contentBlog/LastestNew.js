
export default function LastestNew({ blog }) {
  return (
    <div className="blog-detail flex flex-col justify-between gap-3 sm-max:justify-between lg:w-[300px]">
      <img src={blog?.image} alt="link image change so no image to show" />
      <p className="font-openSans text-sm leading-7 font-bold mt-3 text-blueDark sm-max:mt-1 lg:text-[16px] lg:leading-[28px] lg:mt-[11px]">
        {blog?.categoryName}
        <span className="ml-2 font-normal text-grayLight lg:ml-[12px]">
          November 22,2021
        </span>
      </p>
      <p className="font-openSans mb-1 sm-max:mb-2 lg:text-[20px] lg:leading-[32px] lg:mb-[12px]">
        {blog?.body}
      </p>
      <div className="blog-detail-avatar flex items-center gap-5">
        <img src={blog?.avatar} alt="link image change so no image to show" />
        <p>{blog?.author}</p>
      </div>
    </div>
  );
}
