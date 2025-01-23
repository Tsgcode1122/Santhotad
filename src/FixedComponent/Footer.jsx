import React from "react";
import styled from "styled-components";

import { FaFacebookF, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";
const Footer = () => {
  return (
    <Container>
      <Content>
        <Split>
          <div>
            <Name>OneStopBody</Name>
            <Intro></Intro>
          </div>
          <More>
            <Cont>
              <Head>PAGES</Head>
              <p>Home Page</p>
              <p>Shop Page</p>
              <p>Categories</p>
              <p>Shop Body</p>
            </Cont>
            <Cont>
              <Head>COMPANY</Head>
              <p>Contact Us</p>
              <p>Blog Page</p>
              <p>Reviews</p>
              <p>Policy</p>
            </Cont>

            <Cont>
              <Head>OUR SOCIALS</Head>
              <Social>
                <span>
                  <FaFacebookF />
                </span>
                <span>
                  <FaInstagram />
                </span>
                <span>
                  <FaEnvelope />
                </span>
              </Social>
            </Cont>
          </More>
        </Split>
        <Reserve>All Right reserve 2024 OneStopBody</Reserve>
      </Content>
      <Last>
        <p>YOUR SECURE PAYMENT CHANNELS</p>
        {/* <img src={deb} /> */}
      </Last>
    </Container>
  );
};

export default Footer;
const Container = styled.div`
  font-family: "Poppins", sans-serif;
  background: #010700;
  padding: 3rem 2rem 2rem 2rem;
  @media screen and (max-width: 320px) {
    padding: 3rem 1rem 2rem 1rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    padding: 3rem 1.3rem 2rem 1.3rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    padding: 3rem 1.5rem 2rem 1.5rem;
  }
  @media screen and (min-width: 800px) {
    padding: 3rem 5rem 2rem 5rem;
  }
  @media screen and (min-width: 1000px) {
    padding: 3rem 8rem 2rem 8rem;
  }
  @media screen and (min-width: 1200px) {
    padding: 3rem 8rem 2rem 8rem;
  }
`;
const Content = styled.div`
  background-color: #f8fbf8;
  border-radius: 30px;
  padding: 35px 30px 20px 30px;
`;
const Reserve = styled.p`
  background-color: #dfe3e0;
  padding: 10px;
  border-radius: 10px;
  color: gray;
  text-align: center;
`;
const Head = styled.h4``;
const Social = styled.div`
  display: flex;
  gap: 15px;
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #093401;
    padding: 10px;
    border-radius: 50%;
    height: 20px;
    width: 20px;
    svg {
      color: white;
    }
  }
`;
const Split = styled.div`
  @media screen and (min-width: 800px) {
    padding: 0 2rem;
    display: grid;
    grid-template-columns: 35% 65%;
    gap: 40px;
  }
  @media screen and (min-width: 1000px) {
    padding: 0 2rem;
  }
  @media screen and (min-width: 1200px) {
    padding: 0 2rem;
  }
`;
const Cont = styled.div``;
const Intro = styled.p``;
const Name = styled.h2``;
const Last = styled.div`
  p {
    font-size: 13px;
    font-weight: 600;
  }

  text-align: center;
  padding: 1rem 3rem;
  color: white;
  img {
    max-width: 100%;
    @media screen and (min-width: 800px) {
      height: 40px;
    }
    @media screen and (min-width: 1000px) {
      padding: 1 8rem;
    }
    @media screen and (min-width: 1200px) {
    }
  }
`;
const More = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  @media screen and (max-width: 320px) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  }
  @media (min-width: 321px) and (max-width: 399px) {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  }
  @media (min-width: 400px) and (max-width: 499px) {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  }
`;
