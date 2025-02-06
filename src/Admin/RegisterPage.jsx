import React, { useState, useEffect } from "react";
import { Form, Input, Button, message, Modal } from "antd";
import { useUserContext } from "../context/UserContext";
import { useSendEmail } from "../context/SendEmailContext";
import styled, { keyframes } from "styled-components";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { Colors } from "../Colors/ColorComponent";

const RegisterPageContainer = styled.div`
  /* margin: auto; */
  width: 268px;
  /* margin-top: 50px; */
  background: white;

  @media screen and (max-width: 320px) {
    width: 270px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    width: 300px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    width: 380px;
  }
`;

const StyledInput = styled(Input)`
  width: 100%;
`;

const StyledButton = styled(Button)`
  width: 100%;
  background: ${Colors.blue};
`;

const StyledModalInput = styled(Input)`
  width: 100%;
  margin-bottom: 10px;
`;
const RegisterNowText = styled.span`
  display: block;
  text-align: center;
  margin-top: 10px;
  font-weight: 300;
  a {
    color: black !important;
    font-weight: 600;
    &:hover {
      color: ${Colors.blue};
    }
  }
`;
const LoginFormTitle = styled.p`
  text-align: left;
  margin-bottom: 25px;
`;
const RegisterPage = () => {
  const navigate = useNavigate();

  // Handling the manipulation where if you need explaination call me cause lol after many trial so i dont want to temper with the code
  const handleLoginClick = () => {
    navigate("/registerLogin", { state: { activeTab: "login" } });
  };
  const { registerUser } = useUserContext();
  const { ResetSendEmail } = useSendEmail();
  const [form] = Form.useForm();
  const { referralId } = useParams();
  useEffect(() => {
    console.log("Referral ID from URL:", referralId);
  }, [referralId]);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [existingProfile, setExistingProfile] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const validatePassword = (_, value) => {
    if (!value || !/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(value)) {
      return Promise.reject(
        "Password must contain at least one special character",
      );
    }
    return Promise.resolve();
  };

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const email = values.email.toLowerCase();
      const emailExistsResponse = await axios.post(
        "https://cashflowcapital.onrender.com/api/auth/check-exists",
        {
          email: email,
        },
      );
      if (emailExistsResponse.data.exists) {
        setExistingProfile(true);
        setLoading(false);
        return;
      }

      const response = await sendVerificationCode(email);
      setModalVisible(true);
      message.success(
        "Verification code sent, check your email and paste the code",
      );
    } catch (error) {
      console.error("Error sending verification code:", error);
      message.error("Failed to send verification code");
    } finally {
      setLoading(false);
    }
  };

  const handleVerification = async () => {
    try {
      if (!verificationCode) {
        message.error("Please enter the verification code");
        return;
      }
      const response = await verifyCode(verificationCode);
      if (response && response.success) {
        await registerUser({
          ...form.getFieldsValue(),
          email: form.getFieldValue("email").toLowerCase(),
          referralId,
        });
        setExistingProfile(false);
        setRegistrationSuccess(true);
        message.success("Registration Successful");
        form.resetFields();
        setModalVisible(false);
        navigate("/login");
      } else {
        message.error("Invalid verification code");
      }
    } catch (error) {
      console.error("Error verifying code:", error);
    }
  };

  const sendVerificationCode = async (email) => {
    const response = await ResetSendEmail({ email });
  };

  const verifyCode = async (verificationCode) => {
    try {
      const response = await axios.post(
        "https://cashflowcapital.onrender.com/api/email/verify-code",
        {
          verificationCode,
          token: JSON.parse(localStorage.getItem("verificationToken")),
        },
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  return (
    <RegisterPageContainer>
      <Form
        form={form}
        name="register"
        onFinish={onFinish}
        scrollToFirstError
        layout="vertical"
      >
        <LoginFormTitle>Kindly fill in your details</LoginFormTitle>
        <Form.Item
          name="fullName"
          rules={[{ required: true, message: "Please enter your full name" }]}
        >
          <StyledInput placeholder="Username" />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[
            { type: "email", message: "Please enter a valid email" },
            { required: true, message: "Please enter your email" },
          ]}
        >
          <StyledInput placeholder="email@gmail.com" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            { required: true, message: "Please enter your password" },
            { min: 7, message: "Password must be at least 7 characters long" },
            { validator: validatePassword },
          ]}
        >
          <StyledInput.Password placeholder="Password" />
        </Form.Item>

        <Form.Item
          name="confirmPassword"
          dependencies={["password"]}
          hasFeedback
          rules={[
            { required: true, message: "Please confirm your password" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject("The two passwords do not match");
              },
            }),
          ]}
        >
          <StyledInput.Password placeholder=" Confirm Password" />
        </Form.Item>

        <Form.Item>
          <StyledButton type="primary" htmlType="submit" loading={loading}>
            Register
          </StyledButton>
        </Form.Item>
        {/* Already Register  */}
        <RegisterNowText>
          Already registered? <Link to="/login"> Login</Link>
        </RegisterNowText>
      </Form>

      <Modal
        title="Enter Verification Code"
        visible={modalVisible}
        onOk={handleVerification}
        onCancel={() => setModalVisible(false)}
      >
        <StyledModalInput
          placeholder="Verification Code"
          value={verificationCode}
          onChange={(e) => setVerificationCode(e.target.value)}
        />
      </Modal>

      {registrationSuccess && (
        <p style={{ color: "green" }}>Registration successful</p>
      )}
      {existingProfile && (
        <p style={{ color: "red" }}>Profile already exists</p>
      )}
    </RegisterPageContainer>
  );
};

export default RegisterPage;
