import React, { useState } from "react";
import { EditOutlined, ReadOutlined, LogoutOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { message } from "antd";
import { useUserData } from "../context/UserDataContext";

const FooterNav = () => {
  const [activeLink, setActiveLink] = useState("");
  const navigate = useNavigate();
  const { userData } = useUserData();

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    message.success("Logout Successful");
    navigate("/adminlogin");
  };

  return (
    <StyledFooter>
      <StyledLink
        to="/admin"
        active={activeLink === "create"}
        onClick={() => handleLinkClick("create")}
      >
        <IconWrapper>
          <EditOutlined />
          <IconName>Create Blog</IconName>
        </IconWrapper>
      </StyledLink>

      <StyledLink
        to="/admin/allpost"
        active={activeLink === "allpost"}
        onClick={() => handleLinkClick("allpost")}
      >
        <IconWrapper>
          <ReadOutlined />
          <IconName>All Blog Post</IconName>
        </IconWrapper>
      </StyledLink>

      <LogoutButton onClick={handleLogout}>
        <IconWrapper>
          <LogoutOutlined />
        </IconWrapper>
        <IconName>Log out</IconName>
      </LogoutButton>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ active }) => (active ? "red" : "black")};

  svg {
    color: ${({ active }) => (active ? "red" : "black")};
  }
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoutButton = styled.div`
  cursor: pointer;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    color: red;
  }

  svg {
    font-size: 18px;
  }
`;

const IconName = styled.span`
  font-size: 12px;
  margin-top: 5px;
`;

export default FooterNav;
