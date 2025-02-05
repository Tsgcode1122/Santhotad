import React from "react";
import { Form, Input, Button } from "antd";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import styled from "styled-components";

const ContactForm = () => {
  const onFinish = (values) => {
    console.log("Received values: ", values);
  };

  return (
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
          <FacebookOutlined />
          <InstagramOutlined />
          <TwitterOutlined />
        </SocialIcons>
      </Head>
      <StyledForm onFinish={onFinish} layout="vertical">
        <ThreeGroup>
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input.TextArea
              bordered={false}
              style={{ borderBottom: "1px solid black" }}
              autoSize={{ minRows: 1.5 }}
              placeholder="Your Name"
            />
          </Form.Item>
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
              placeholder="Message"
              bordered={false}
              style={{ borderBottom: "1px solid black" }}
              autoSize={{ minRows: 1.5 }}
            />
          </Form.Item>
          <Form.Item name="phone">
            <Input.TextArea
              placeholder="Message"
              bordered={false}
              style={{ borderBottom: "1px solid black" }}
              autoSize={{ minRows: 1.5 }}
            />
          </Form.Item>
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
        <SubmitButton htmlType="submit">Leave us a Message →</SubmitButton>
      </StyledForm>
    </ContactWrapper>
  );
};

export default ContactForm;

const ContactWrapper = styled.div`
  /* max-width: 800px; */
  /* display: flex; */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin: auto; */
  /* text-align: center; */
  padding: 40px 60px;
`;
const Head = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 40px;
`;

const Title = styled.h2`
  font-size: 48px;
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
  grid-template-columns: 1fr 1fr 1fr;
  gap: 50px;
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
    padding: 10px;
    transition: color 0.3s;
    border-radius: 50%;
    height: 15px;
    width: 15px;
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
