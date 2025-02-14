import React, { useState } from "react";
import styled from "styled-components";
import { Input, Button, Form, message } from "antd";
import axios from "axios";
import { Colors } from "../Colors/ColorComponent";
import { breakpoints } from "../FixedComponent/BreakPoints";
const NewsletterForm = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      setLoading(true);

      await axios.post("http://localhost:5009/api/email/subscribe", {
        email: values.email,
      });
      message.success("Subscribed successfully!");
      form.resetFields();
    } catch (error) {
      if (error.errorFields) {
        message.error("Please enter a valid email.");
      } else {
        message.error("Subscription failed. Please try again.");
      }
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
          <Form form={form}>
            <InputWrapper noStyle>
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Please enter your email" },
                  { type: "email", message: "Please enter a valid email" },
                ]}
                style={{ flex: 1, marginBottom: 0 }} // Keeps original styling
              >
                <StyledInput placeholder="Enter your email" />
              </Form.Item>
              <StyledButton
                type="primary"
                loading={loading}
                onClick={handleSubmit}
              >
                Subscribe
              </StyledButton>
            </InputWrapper>
          </Form>
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
  display: grid;
  padding: 3rem 1rem;
  gap: 1rem;
  @media (min-width: ${breakpoints.xs}) {
    padding: 5rem 6rem;
    gap: 5rem;
  }
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
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
  .ant-form-item-explain {
    position: absolute;
    top: 40px;
    left: 10px;
    color: red;
    font-size: 12px;
  }
`;

const StyledInput = styled(Input)`
  flex: 1;
  margin-right: 1rem;
  border-radius: 10px;
  background-color: transparent !important;
  color: white !important;
  border: none !important;

  ::placeholder {
    color: white;
    opacity: 0.8;
    font-weight: 300;
  }

  &::-webkit-input-placeholder,
  &::-moz-placeholder,
  &:-ms-input-placeholder,
  &::-ms-input-placeholder {
    color: white;
    opacity: 0.8;
    font-weight: 100;
    padding-left: 20px;
  }

  &:hover,
  &:focus {
    background: transparent !important;
    outline: none !important;
    box-shadow: none !important;
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
`;
