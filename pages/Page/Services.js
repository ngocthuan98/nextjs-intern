import styled from "styled-components";
import Section from "../../components/content/contentHome/Section";
import AboutValues from "../../components/content/contentAbout/AboutValues";
import Heading from '../../components/content/contentHome/Heading'

const ServicesStyle = styled.div``;

export default function Services() {
  return (
    <ServicesStyle>
      <header><Heading kind="services"/></header>
      <div>
        <Section />
        <AboutValues  kind="services"/>
      </div>
    </ServicesStyle>
  );
}
