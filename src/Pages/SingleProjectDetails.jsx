import React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import { Images } from "../PagesImages";
import styled from "styled-components";
const SingleProjectDetails = () => {
  const { imageId } = useParams();
  const image = Images.find((image) => image.id === imageId);
  return (
    <Container>
      <IntroImage>
        <img src={image.img} />
        <h2>{image.name}</h2>
        <DashAdd>
          <Line />
          <p>
            {image.location} {image.year}
          </p>
        </DashAdd>
      </IntroImage>
      <Split1>
        <img src={image.singleImg} />
        <img src={image.singleImg2} />
      </Split1>
      <Split2>
        <img src={image.singleImg3} />
        <img src={image.singleImg4} />
      </Split2>
    </Container>
  );
};

export default SingleProjectDetails;

const Container = style;
