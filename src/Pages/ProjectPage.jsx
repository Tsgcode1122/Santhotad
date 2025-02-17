import React, { useEffect } from "react";
import SectionDiv from "../FixedComponent/SectionDiv";
import { Images } from "../PagesImages";
import styled from "styled-components";
import { Link } from "react-router-dom";
import f22 from "../Images/sub.png";
import f2 from "../ProjectImg/projhead.png";
import { breakpoints } from "../FixedComponent/BreakPoints";
import { Colors } from "../Colors/ColorComponent";

const ProjectPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <IntroHero>
        <Content>
          <h3>
            We beleive <br /> in Excellence
          </h3>
        </Content>
      </IntroHero>
      <ServiceDiv>
        <Head>
          <h4>Click Project to review more...</h4>
          <Line />
        </Head>
        <ImageGrid>
          {Images.map((image, index) => (
            <ImageContain key={index}>
              <Link key={index} to={`/projects/${image.id}`}>
                <ImageContainer>
                  <img src={image.img} alt={`Project ${index + 1}`} />
                </ImageContainer>
                <OverlayText>
                  <h2>{image.name}</h2>

                  <p>
                    {image.location} - {image.year}
                  </p>
                </OverlayText>
              </Link>
            </ImageContain>
          ))}
        </ImageGrid>
      </ServiceDiv>
    </>
  );
};

export default ProjectPage;
const ServiceDiv = styled.div`
  padding: 2rem 1.5rem;

  @media (min-width: ${breakpoints.xs}) {
  }

  @media (min-width: ${breakpoints.sm}) {
    padding: 2rem 2.5rem;
  }

  @media (min-width: ${breakpoints.m}) {
    padding: 10px 40px;
  }

  @media (min-width: ${breakpoints.md}) {
    padding: 2rem 3rem;
  }

  @media (min-width: ${breakpoints.lg}) {
    padding: 2rem 0rem;
    margin: 0 auto;
    max-width: 1150px;
  }

  @media (min-width: ${breakpoints.xl}) {
  }

  @media (min-width: ${breakpoints.xxl}) {
    max-width: 1500px;
    padding: 2rem 0rem;
    margin: 0 auto;
  }
`;

const ImageGrid = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

  @media (min-width: ${breakpoints.xs}) {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  }

  @media (min-width: ${breakpoints.sm}) {
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  }

  @media (min-width: ${breakpoints.m}) {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  }

  @media (min-width: ${breakpoints.md}) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }

  @media (min-width: ${breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 15px;

  h4 {
    color: ${Colors.ashBlack};
    font-weight: 300;
    white-space: nowrap;
  }
`;
const OverlayText = styled.div`
  margin-top: 10px;

  background: rgba(255, 255, 255, 0.4);

  border-radius: 8px;
  color: black;

  h2 {
    margin: 0;
    font-size: 15px;
  }

  p {
    font-size: 13px;
    margin-top: 5px;
  }
`;

const Line = styled.div`
  flex-grow: 1;
  height: 1px;
  background: #aaaaaa;
`;
const IntroHero = styled.div`
  height: 30ch;
  @media (min-width: ${breakpoints.m}) {
    height: 35ch;
  }
  @media (min-width: ${breakpoints.lg}) {
    height: 25ch;
  }
  background: url(${f2}) center/cover;
`;

const Content = styled.div`
  display: flex;

  /* align-items: center; */
  justify-content: space-between;
  padding: 0 0 0 1.5rem;
  overflow: hidden;
  @media (min-width: ${breakpoints.m}) {
    padding: 0 0 0 2rem;
  }
  @media (min-width: ${breakpoints.md}) {
    padding: 0 0 0 3rem;
  }
  @media (min-width: ${breakpoints.xl}) {
    padding: 0 0 0 6rem;
  }
  @media (min-width: ${breakpoints.lg}) {
    max-width: 1150px;
    padding: 0 0 0 0rem;
    margin: 0 auto;
  }

  h3 {
    font-size: 35px;

    line-height: 1.1;
    @media (min-width: ${breakpoints.xs}) {
      line-height: 1.2;
      font-size: 40px;
    }
    @media (min-width: ${breakpoints.lg}) {
      line-height: 1.2;
      font-size: 45px;
    }
  }
  img {
    max-width: 100%;
    height: 260px;
    @media (min-width: ${breakpoints.xs}) {
      max-width: 100%;
      height: 450px;
    }
    @media (min-width: ${breakpoints.md}) {
      max-width: 100%;
      height: 550px;
    }

    image-resolution: initial;
  }
`;

const ImageContain = styled.div`
  padding: 8px;
  border: 1px solid #e9e9e9;
  border-radius: 5px;

  a {
    text-decoration: none;
  }
`;
const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 100%;
  height: 250px;
  border-radius: 5px;

  @media (min-width: ${breakpoints.xs}) {
    height: 280px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
    box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.1);
  }
`;
