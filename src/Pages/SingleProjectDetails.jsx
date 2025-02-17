import React from "react";
import { useParams } from "react-router-dom";
import { Images } from "../PagesImages";
import styled from "styled-components";

const SingleProjectDetails = () => {
  const { imageId } = useParams();
  const image = Images.find((image) => image.id === imageId);

  return (
    <Container>
      {/* First Image - Stands Alone */}
      <IntroImage>
        <img src={image.singleImg0} alt={image.name} />
        <OverlayText>
          <h2>{image.name}</h2>
          <DashAdd>
            <Line />
            <p>
              {image.location} - {image.year}
            </p>
          </DashAdd>
        </OverlayText>
      </IntroImage>

      {/* First Grid - Image Split (60/40) */}
      <SplitGridOne>
        <img src={image.singleImg} alt="Project Image 1" />
        <img src={image.singleImg2} alt="Project Image 2" />
      </SplitGridOne>

      {/* Second Grid - Image Split (40/60) */}
      <SplitGridTwo>
        <img src={image.singleImg3} alt="Project Image 3" />
        <img src={image.singleImg4} alt="Project Image 4" />
      </SplitGridTwo>
    </Container>
  );
};

export default SingleProjectDetails;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 20px 60px;
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

/* First Image - Stands Alone */
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
  }
`;

/* Text Overlay at Top Left */
const OverlayText = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  background: rgba(255, 255, 255, 0.4);
  padding: 15px;
  border-radius: 8px;
  color: black;

  h2 {
    margin: 0;
    font-size: 30px;
  }

  p {
    font-size: 16px;
    margin-top: 5px;
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
`;

/* First Grid - 60% / 40% */
const SplitGridOne = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  gap: 10px;
  height: 400px;
  overflow-y: hidden;

  max-width: 1200px;
  border-radius: 10px;
  img {
    max-width: 100%;
    border-radius: 10px;
    object-fit: cover;
  }
`;

/* Second Grid - 40% / 60% */
const SplitGridTwo = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  gap: 10px;
  height: 400px;
  overflow: hidden;
  padding-bottom: 3rem;

  border-radius: 10px;
  max-width: 1200px;
  img {
    border-radius: 10px;
    max-width: 100%;
    object-fit: cover;
  }
`;
