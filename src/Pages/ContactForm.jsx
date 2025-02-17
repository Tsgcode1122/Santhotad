import React, { useState, useEffect } from "react";
import { Form, Input, Button, notification, message } from "antd";
import { InstagramOutlined, TwitterOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { TiSocialFacebook } from "react-icons/ti";
import axios from "axios";
import { breakpoints } from "../FixedComponent/BreakPoints";

import SectionDiv from "../FixedComponent/SectionDiv";
const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const onFinish = async (values) => {
    console.log("hy");
    setLoading(true);
    try {
      // Send form data to backend
      await axios.post(
        "https://santhotad.onrender.com/api/email/formSubmission",
        values,
      );

      // Show success notification
      message.success({
        content: "Your message has been sent successfully.",
        style: {
          textAlign: "center",
          marginTop: "20px",
        },
      });

      // Reset form fields
      form.resetFields();
    } catch (error) {
      console.error("Error submitting form:", error);
      notification.error({
        message: "Error",
        description: "Failed to send your message. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };
  const phoneRegex = /^\+?[0-9\s\-()]{7,15}$/;
  return (
    <SectionContainer>
      <ContactWrapper>
        <Head>
          <div>
            <Intro>Get Started</Intro>
            <Title>
              Get in touch with us. <br />
              We're here to assist you
            </Title>
          </div>
          <SocialIcons>
            <TiSocialFacebook />
            <InstagramOutlined />
            <TwitterOutlined />
          </SocialIcons>
        </Head>
        <StyledForm form={form} onFinish={onFinish} layout="vertical" noStyle>
          <ThreeGroup>
            <Form.Item
              name="name"
              rules={[{ required: true, message: "Please enter your name" }]}
            >
              <Input.TextArea
                bordered={false}
                style={{ borderBottom: "1px solid black" }}
                autoSize={{ minRows: 1.2 }}
                placeholder="Your Name"
              />
            </Form.Item>
            <TwoGroup>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: "Please enter a valid email",
                  },
                ]}
              >
                <Input.TextArea
                  placeholder="Email "
                  bordered={false}
                  style={{ borderBottom: "1px solid black" }}
                  autoSize={{ minRows: 1.2 }}
                />
              </Form.Item>
              <Form.Item
                name="number"
                rules={[
                  {
                    // required: true,

                    message: "Please enter a valid number",
                  },
                  {
                    pattern: phoneRegex,
                    message: "Please enter a valid phone number",
                  },
                ]}
              >
                <Input.TextArea
                  placeholder="Phone Number (optional)"
                  bordered={false}
                  style={{ borderBottom: "1px solid black" }}
                  autoSize={{ minRows: 1.2 }}
                />
              </Form.Item>
            </TwoGroup>
          </ThreeGroup>
          <Form.Item
            name="message"
            rules={[{ required: true, message: "Please enter your message" }]}
          >
            <Input.TextArea
              placeholder="Message"
              autoSize={{ minRows: 3 }}
              bordered={false}
              style={{ borderBottom: "1px solid black" }}
            />
          </Form.Item>
          <SubmitButton htmlType="submit" loading={loading}>
            Leave us a Message →
          </SubmitButton>
        </StyledForm>
      </ContactWrapper>
    </SectionContainer>
  );
};

export default ContactForm;
const SectionContainer = styled.div`
  /* margin: 0 auto; */
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
    padding: 2rem 10rem;
  }

  @media (min-width: ${breakpoints.xxl}) {
    max-width: 1500px;
    margin: 0 auto;
    padding: 0 2rem;
  }
`;
const ContactWrapper = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media (min-width: ${breakpoints.xs}) {
    padding-bottom: 4rem;
  }
`;
const Head = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 40px;
`;

const Title = styled.h2`
  font-size: 28px;
  @media (min-width: ${breakpoints.xs}) {
    font-size: 48px;
  }
  font-weight: bold;
  margin: 0;
`;

const Intro = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
  font-weight: 200;
`;

const StyledForm = styled(Form)`
  .ant-form-item {
    margin-bottom: 34px;
  }

  .ant-input {
    border: none;
    border-bottom: 1px solid black;
    border-radius: 0;
    &:focus,
    &:hover {
      border-bottom: 1px solid #1890ff;
      box-shadow: none;
    }
  }
`;
const ThreeGroup = styled.div`
  display: grid;

  gap: 20px;
  @media (min-width: ${breakpoints.md}) {
    grid-template-columns: 30% 65%;
    gap: 50px;
  }

  margin-bottom: 20px;
`;
const TwoGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  @media (min-width: ${breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
    gap: 50px;
  }

  margin-bottom: 20px;
`;

const SocialIcons = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;

  svg {
    /* font-size: 17px; */
    cursor: pointer;
    padding: 7px;
    transition: color 0.3s;
    border-radius: 50%;
    height: 10px;
    width: 10px;
    @media (min-width: ${breakpoints.xs}) {
      height: 15px;
      padding: 10px;
      width: 15px;
    }
    border: 1px solid black;
    &:hover {
      color: #1890ff;
    }
  }
`;

const SubmitButton = styled(Button)`
  background: blue;
  color: white;
  font-weight: bold;
  padding: 20px 30px;

  border-radius: 20px;
  &:hover {
    background: darkblue;
  }
`;
