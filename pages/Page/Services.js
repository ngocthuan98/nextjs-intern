import styled from "styled-components";
import Layout from "../../components/layout/Layout";
import Section from "../../components/content/contentHome/Section";
import AboutValues from "../../components/content/contentAbout/AboutValues";
import Heading from "../../components/content/contentHome/Heading";

const ServicesStyle = styled.div``;

export default function Services() {
  return (
    <Layout>
      <ServicesStyle>
        <header>
          <Heading kind="services" />
        </header>
        <div>
          <Section kind = 'services' />
          <AboutValues kind="services" />
        </div>
      </ServicesStyle>
    </Layout>
  );
}
