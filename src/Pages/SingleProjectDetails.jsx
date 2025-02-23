import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Images } from "../PagesImages";
import styled from "styled-components";
import SectionDiv from "../FixedComponent/SectionDiv";
import { breakpoints } from "../FixedComponent/BreakPoints";

const SingleProjectDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const { imageId } = useParams();
  const image = Images.find((image) => image.id === imageId);

  return (
    <SectionDiv>
      <Container>
        {/* First Image - Stands Alone */}
        <IntroImage>
          <img src={image.singleImg0} alt={image.name} />
          <OverlayText>
            <h2>
              {image.name.split(" ").map((word, index) =>
                index > 0 && index % 3 === 0 ? (
                  <>
                    <br />
                    {word}{" "}
                  </>
                ) : (
                  word + " "
                ),
              )}
            </h2>
            <DashAdd>
              <Line />
              <p>
                {image.location} - {image.year}
              </p>
            </DashAdd>
          </OverlayText>
        </IntroImage>

        <SplitGridOne>
          <img src={image.singleImg} alt="Project Image 1" />
          <img src={image.singleImg2} alt="Project Image 2" />
        </SplitGridOne>

        <SplitGridTwo>
          <img src={image.singleImg3} alt="Project Image 3" />
          <img src={image.singleImg4} alt="Project Image 4" />
        </SplitGridTwo>
      </Container>
    </SectionDiv>
  );
};

export default SingleProjectDetails;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  @media screen and (max-width: 320px) {
    gap: 7px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    gap: 8px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    gap: 10px;
  }
  border-radius: 10px;
  img {
    max-width: 100%;
    border-radius: 12px;
    border: 1px solid #ddd;
    transition: transform 0.3s ease-in-out;

    /* &:hover {
      transform: scale(1.05);
    } */
  }
`;

const IntroImage = styled.div`
  position: relative;
  width: 100%;
  /* height: 500px; */
  overflow: hidden;
  border-radius: 10px;
  max-width: 1200px;
  img {
    width: 100%;
    height: 500px;
    border-radius: 10px;
    object-fit: cover;
    @media screen and (max-width: 320px) {
      height: 300px;
    }
    @media (min-width: 321px) and (max-width: 399px) {
      height: 300px;
    }
    @media (min-width: 400px) and (max-width: 499px) {
      height: 300px;
    }
  }
`;

const OverlayText = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  align-items: left;
  background: rgba(255, 255, 255, 0.4);
  padding: 15px;
  border-radius: 8px;
  color: black;
  @media screen and (max-width: 320px) {
    top: 10px;
    left: 10px;
    padding: 5px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    top: 10px;
    left: 10px;
    padding: 5px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    top: 10px;
    left: 10px;
    padding: 5px;
  }
  h2 {
    margin: 0;
    font-size: 30px;
    @media screen and (max-width: 320px) {
      font-size: 20px;
    }
    @media (min-width: 321px) and (max-width: 399px) {
      font-size: 20px;
    }
    @media (min-width: 400px) and (max-width: 499px) {
      font-size: 20px;
    }
  }

  p {
    font-size: 16px;
    margin-top: 5px;
    @media screen and (max-width: 320px) {
      font-size: 14px;
    }
    @media (min-width: 321px) and (max-width: 399px) {
      font-size: 14px;
    }
    @media (min-width: 400px) and (max-width: 499px) {
      font-size: 14px;
    }
  }
`;

const DashAdd = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  justify-content: center;
`;

const Line = styled.div`
  width: 50px;
  height: 1px;
  margin-top: -12px;
  background: #303030;
  @media screen and (max-width: 320px) {
    width: 10px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    width: 20px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    width: 20px;
  }
`;

const SplitGridOne = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;

  gap: 10px;
  width: 100%;
  height: auto;
  overflow: hidden;
  border-radius: 10px;
  border-radius: 10px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
    box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    max-width: 100%;
    object-fit: cover;
  }
`;

const SplitGridTwo = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  gap: 10px;
  width: 100%;
  height: auto;
  overflow: hidden;
  padding-bottom: 3rem;

  border-radius: 10px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
    box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    max-width: 100%;
    object-fit: cover;
  }
`;
