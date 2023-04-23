import styled from "styled-components";
import arrayImgTeam from "../../data/DataOutTeam";

const AboutTeamStyle = styled.div`
  .About-team {
    margin: 27px 245px 60px;
    & > p {
      &:nth-child(2) {
        line-height: 35.75px;
      }
      &:last-child {
        padding-right: 10px;
      }
    }
  }
  .Team-member{
    padding:0 170px;
  }
  @media (max-width:915px){
    .About-team{
      margin: 27px 185px 60px 245px;
    }
  }
  @media (max-width:915px){
    .About-team{
      margin: 27px 80px 60px ;
    }
    .Team-member{
      padding:0 80px;
    }
  }
`;

export default function AboutOurTeam() {
  return (
    <AboutTeamStyle>
      <div className="About-team text-grayLight">
        <p className="text-xl leading-8 font-openSans sm-max:text-base">Our team</p>
        <p className="text-black text-5xl sm-max:text-3xl">The leadership team</p>
        <p className="text-xl mt-3 font-openSans sm-max:text-base">
          Conversion angel investor entrepreneur first mover advantage.
          Handshake infographic mass market crowdfunding iteration. Traction
          stock user experience deployment beta innovator incubator focus.
        </p>
      </div>
      <div className="Team-member grid grid-cols-3 gap-16 sm-max:grid-cols-2 sm-max:gap-8">
        {arrayImgTeam.map((item) => {
          return (
            <div className="flex flex-col sm-max:justify-between" key={item.id}>
              <img src={item.image} alt="team" />
              <p className="mt-6 text-2xl leading-10 sm-max:text-xl">{item.name}</p>
              <p className="mt-3 text-lg font-openSans text-grayLight leading-9 sm-max:text-base">General Manager</p>
            </div>
          );
        })}
      </div>
    </AboutTeamStyle>
  );
}
