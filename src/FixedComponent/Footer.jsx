import React from "react";
import styled from "styled-components";
import { breakpoints } from "../FixedComponent/BreakPoints";
import { FaFacebookF, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";
import NewsletterForm from "./NewsLetter";
const Footer = () => {
  return (
    <Container>
      <TopOne>
        <GroupOne>
          <p>Contact Us</p>
          <h4>
            We are always <br />
            Happy to assist you
          </h4>
        </GroupOne>
        <GroupTwo>
          <p>Email Address</p>
          <MiniDash></MiniDash>
          <p>Topeadeusi@santhotad.com</p>
        </GroupTwo>
        <GroupThree>
          <p>Number</p>
          <MiniDash></MiniDash>
          <p>(234) 8038586165</p>
        </GroupThree>
        <GroupFour>
          <p>Office Address</p>
          <MiniDash></MiniDash>
          <p>
            Suite 227, Oyemekun Commercial Complex, Behind Ministry of Works,
            Oyemekun Road, Akure, Ondo State, Nigeria
          </p>
        </GroupFour>
      </TopOne>
      <NewsletterForm />
    </Container>
  );
};

export default Footer;
const Container = styled.div`
  font-family: "Poppins", sans-serif;
  background: #f2f2f2;

  @media screen and (max-width: 320px) {
  }
  @media (min-width: 321px) and (max-width: 399px) {
  }
  @media (min-width: 400px) and (max-width: 499px) {
  }
`;
const Content = styled.div``;
const TopOne = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 10px;
  padding: 1rem 1rem;
  p {
    margin: 7px 0;
  }
  h4 {
    margin: 7px 0;
  }
  flex-wrap: wrap;
  gap: 10px;
  @media (min-width: ${breakpoints.xs}) {
    gap: 40px;
    padding: 3rem 2rem;
  }
`;
const TopTwo = styled.div``;
const GroupOne = styled.div`
  flex: 1 1 calc(90% - 10px);
  @media (max-width: 768px) {
    flex: 1 1 calc(40% - 10px);
  }

  @media (max-width: 480px) {
    flex: 1 1 100%;
  }
`;
const GroupTwo = styled.div`
  flex: 1 1 calc(20% - 10px);
  @media (max-width: 768px) {
    flex: 1 1 calc(40% - 10px);
  }

  @media (max-width: 480px) {
    flex: 1 1 100%;
  }
`;
const GroupThree = styled.div`
  flex: 1 1 calc(20% - 10px);
  @media (max-width: 768px) {
    flex: 1 1 calc(40% - 10px);
  }

  @media (max-width: 480px) {
    flex: 1 1 100%;
  }
`;
const GroupFour = styled.div`
  flex: 1 1 calc(20% - 10px);
  @media (max-width: 768px) {
    flex: 1 1 calc(40% - 10px);
  }

  @media (max-width: 480px) {
    flex: 1 1 40%;
  }
`;
const MiniDash = styled.div`
  width: 15px;
  height: 2px;
  background: black;
`;
