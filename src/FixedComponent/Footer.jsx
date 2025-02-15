import React from "react";
import styled from "styled-components";
import { breakpoints } from "../FixedComponent/BreakPoints";
import NewsletterForm from "./NewsLetter";
import SectionDiv from "./SectionDiv";

const Footer = () => {
  return (
    <Container>
      <SectionDiv>
        <TopOne>
          <Group>
            <p>Contact Us</p>
            <h4>
              We are always <br /> Happy to assist you
            </h4>
          </Group>
          <Group>
            <h5>Email Address</h5>
            <MiniDash />
            <p>Topeadeusi@santhotad.com</p>
          </Group>
          <Group>
            <h5>Number</h5>
            <MiniDash />
            <p>(234) 8038586165</p>
          </Group>
          <Group>
            <h5>Office Address</h5>
            <MiniDash />
            <article style={{ color: "#333333" }}>
              Suite 227, Oyemekun Commercial Complex, Behind Ministry of Works,
              Oyemekun Road, Akure, Ondo State, Nigeria
            </article>
          </Group>
        </TopOne>
      </SectionDiv>
      <NewsletterForm />
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  font-family: "Poppins", sans-serif;
  background: #f2f2f2;
`;

const TopOne = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;

  @media (max-width: ${breakpoints.md}) {
    gap: 20px;

    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`;

const Group = styled.div`
  p {
    margin: 7px 0;
    padding: 0;
  }

  h5 {
    font-weight: 500;
    margin: 7px 0;
  }
  h4 {
    margin: 7px 0;
  }
  article {
    line-height: 1.3;
    font-size: 15px;
    margin: 7px 0;
    color: #8c8c8c !important;
  }
`;

const MiniDash = styled.div`
  width: 20px;
  height: 2px;
  background: black;
`;
