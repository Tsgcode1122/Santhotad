import React from "react";
import styled from "styled-components";

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
          <div></div>
          <p>Topeadeusi@santhotad.com</p>
        </GroupTwo>
        <GroupThree>
          <p>Number</p>
          <div></div>
          <p>(234) 8038586165</p>
        </GroupThree>
        <GroupFour>
          <p>Office Address</p>
          <div></div>
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
  /* background: #010700; */

  @media screen and (max-width: 320px) {
  }
  @media (min-width: 321px) and (max-width: 399px) {
  }
  @media (min-width: 400px) and (max-width: 499px) {
  }
  @media screen and (min-width: 800px) {
  }
  @media screen and (min-width: 1000px) {
  }
  @media screen and (min-width: 1200px) {
  }
`;
const Content = styled.div``;
const TopOne = styled.div``;
const TopTwo = styled.div``;
const GroupOne = styled.div``;
const GroupTwo = styled.div``;
const GroupThree = styled.div``;
const GroupFour = styled.div``;
