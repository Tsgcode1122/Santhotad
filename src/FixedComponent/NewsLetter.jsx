import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Input, Button, Checkbox, message } from "antd";
import axios from "axios";
import { Colors } from "../Colors/ColorComponent";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [notify, setNotify] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!email) {
      message.error("Please enter your email address.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(
        "https://cashflowcapital.onrender.com/api/email/subscribe",
        {
          email,
          notify,
        },
      );
      message.success("Subscribed successfully!");
      setEmail("");
      setNotify(false);
    } catch (error) {
      message.error("Subscription failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Content>
        <GroupOne>
          <Title>Subscribe to our Newsletter</Title>
          <p>
            Subscribe for Updates: Stay informed about the latest investor
            updates, financial results, and announcements by subscribing to our
            newsletter
          </p>
        </GroupOne>
        <GroupTwo>
          <InputWrapper noStyle>
            <StyledInput
              placeholder="Enter your email"
              value={email}
              rules={[
                { required: true, message: "Please enter your email!" },
                {
                  type: "email",
                  message: "Please enter a valid email address!",
                },
              ]}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <StyledButton
              type="primary"
              loading={loading}
              onClick={handleSubmit}
            >
              Subscribe
            </StyledButton>
          </InputWrapper>
        </GroupTwo>
      </Content>
    </Container>
  );
};

export default NewsletterForm;
const Container = styled.div`
  background: ${Colors.blue};
`;
const Content = styled.div`
  padding: 5rem 6rem;
  display: grid;
  gap: 5rem;
  grid-template-columns: 1fr 1fr;
  align-items: center;
`;
const GroupOne = styled.div`
  p {
    color: #f9f9f9;
    margin: 0;
    padding-top: 10px;
  }
`;
const GroupTwo = styled.div``;

const Title = styled.h2`
  color: ${Colors.white};
  margin: 0;
  /* line-height: 0.2; */
  padding: 0;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0rem;
  border-radius: 15px;
  height: 50px;
  background: #3256d7;
  /* padding: 0.3rem; */
`;

const StyledInput = styled(Input)`
  flex: 1;
  margin-right: 1rem;
  border-radius: 10px;

  background-color: transparent;
  color: white !important;
  border: none;

  /* Placeholder styling */
  ::placeholder {
    color: white;
    opacity: 0.8;
    font-weight: 300;
    padding: 200px;
  }

  /* Specific browser placeholder styling */
  &::-webkit-input-placeholder {
    color: white;
    opacity: 0.8;
    font-weight: 100;
    padding-left: 20px;
  }
  &::-moz-placeholder {
    color: white;
    opacity: 0.8;
    font-weight: 100;
    padding-left: 20px;
  }
  &:-ms-input-placeholder {
    color: white;
    opacity: 0.8;
    font-weight: 100;
    padding-left: 20px;
  }
  &::-ms-input-placeholder {
    color: white;
  }

  /* Remove the background color on hover */
  &:hover {
    background-color: transparent;
  }

  /* Remove the background color on focus */
  &:focus {
    background-color: transparent;
    outline: none; /* Optionally remove the focus outline */
    box-shadow: none; /* Remove default focus shadow */
  }
`;

const StyledButton = styled(Button)`
  padding: 0.75rem 1rem;
  border-radius: 0 15px 15px 0;
  background: ${Colors.white};
  border: none;
  font-weight: 900;
  height: 50px;
  color: ${Colors.blue};
  &:hover {
    background-color: #4ea3f6;
  }
  @media screen and (max-width: 320px) {
    padding: 0.75rem 0.6rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    padding: 0.75rem 0.6rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    padding: 0.75rem 0.6rem;
  }
`;
