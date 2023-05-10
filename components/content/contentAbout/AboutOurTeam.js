import arrayImgTeam from "../../data/DataOutTeam";

export default function AboutOurTeam() {
  return (
    <div>
      <div className="About-team text-grayLight pt-[50px] px-[300px] pb-[52px] m-max:px-[125px]  sm-max:pr-[67px] sm-max:pl-[80px] ">
        <p className="text-xl leading-8 font-openSans sm-max:text-base lg:text-[20px] lg:leading-[32px] lg:mb-[12px]">Our team</p>
        <p className="text-black text-5xl sm-max:text-3xl leading-[35.75px] lg:text-[48px] lg:leading-[72px] lg:mb-[22.5px]">The leadership team</p>
        <p className="text-xl mt-3 font-openSans sm-max:text-base lg:text-[20px] lg:leading-[32px] lg:mt-0  lg:pr-[38px]">
          Conversion angel investor entrepreneur first mover advantage.
          Handshake infographic mass market crowdfunding iteration. Traction
          stock user experience deployment beta innovator incubator focus.
        </p>
      </div>
      <div className="Team-member grid grid-cols-3 gap-16 sm-max:grid-cols-2 sm-max:gap-8 m-max:px-[105px] px-[170px] lg:px-[200px] lg:gap-[51px]  sm-max:pr-[67px] sm-max:pl-[80px]">
        {arrayImgTeam.map((item) => {
          return (
            <div className="flex flex-col sm-max:justify-between" key={item.id}>
              <img src={item.image} alt="team" className="lg:w-[300px] lg:h-[354px]"/>
              <p className="mt-6 text-2xl leading-10 sm-max:text-xl lg:text-[28px] lg:leading-[48px] lg:mt-[24px]">{item.name}</p>
              <p className="mt-3 text-lg font-openSans text-grayLight leading-9 sm-max:text-base lg:text-[20px] lg:leading-[32px] lg:mt-[12px]">General Manager</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
