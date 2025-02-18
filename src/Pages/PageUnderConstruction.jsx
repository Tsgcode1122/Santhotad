import React from "react";
import styled from "styled-components";

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  background-color: #f7f7f7;
`;

const MessageBox = styled.div`
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const Heading = styled.h1`
  font-size: 2rem;
  color: #0b2565;
  margin-bottom: 10px;
`;

const Text = styled.p`
  font-size: 1.2rem;
  color: #333;
`;

const PageUnderConstruction = () => {
  return (
    <PageWrapper>
      <MessageBox>
        <Heading>🚧 Page Under Construction 🚧</Heading>
        <Text>We are working on this page. Please check back later!</Text>
      </MessageBox>
    </PageWrapper>
  );
};

export default PageUnderConstruction;
