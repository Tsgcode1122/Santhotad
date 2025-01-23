import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Squash as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";
import {
  MailOutlined,
  WhatsAppOutlined,
  SendOutlined,
  HomeOutlined,
  GiftOutlined,
  CreditCardOutlined,
  DashboardOutlined,
  LoginOutlined,
} from "@ant-design/icons";

import { IoMdArrowDropright } from "react-icons/io";
// import logo from "../Images/SH.png";
import { Colors } from "../Colors/ColorComponent";
const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };
  const handleProfileClick = () => {
    setModalVisible(true);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <>
      <StyledNavbar style={{ top: visible ? 0 : "-5rem" }}>
        <HeadSpace>
          <Link to="/">{/* <img src={logo} /> */}</Link>
          <MenuToggle onClick={toggleSidebar}>
            <Hamburger
              toggled={isSidebarOpen}
              toggle={setIsSidebarOpen}
              color="#000000"
            />
          </MenuToggle>
        </HeadSpace>
      </StyledNavbar>
      <NavHeight></NavHeight>
      <Sidebar isOpen={isSidebarOpen} ref={sidebarRef}>
        <SidebarContent>
          <LinkContainer>
            <a
              href="#home"
              onClick={closeSidebar}
              style={{ background: "black", color: "white" }}
            >
              <span>Home</span>
            </a>
            <a href="#about" onClick={closeSidebar}>
              <span>About Us</span>
            </a>

            <a href="#subscribe" onClick={closeSidebar}>
              <span>Subscription</span>
            </a>
            <a href="#store" onClick={closeSidebar}>
              <span>Store</span>
            </a>
            <a href="#faqs" onClick={closeSidebar}>
              <span>Faqs</span>
            </a>
          </LinkContainer>
        </SidebarContent>
      </Sidebar>

      {/* {isSidebarOpen && <Overlay onClick={closeSidebar} />} */}

      <BigNav>
        <BigCon>
          <a href="#home">{/* <img src={logo} /> */}</a>

          <LinkBig>
            <Link>Projects</Link>
            <Link>Services</Link>
            <Link>About Us</Link>
          </LinkBig>
        </BigCon>
      </BigNav>
    </>
  );
};
const BigNav = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  display: none;
  @media screen and (min-width: 820px) {
    display: block;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  z-index: 999 !important;
  background-color: #f2ebe2;
  img {
    max-width: 100%;
    height: 30px;
  }
`;
const BigCon = styled.div`
  padding: 10px 40px;
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 800px) {
    padding: 10px 50px;
  }
  @media screen and (min-width: 1000px) {
    padding: 10px 70px;
  }
  @media screen and (min-width: 1200px) {
    padding: 10px 140px;
  }
`;
const LinkBig = styled.div`
  display: flex;
  border-radius: 20px;
  align-items: center;
  padding: 0 2rem;
  gap: 20px;
  justify-content: space-between;
  a {
    text-decoration: none;
    color: black;
  }
`;

const SidebarContent = styled.div`
  list-style: none;
  a {
    text-decoration: none;
    font-size: 16px;
    color: black;

    padding: 8px;

    img {
      max-width: 100%;
      height: 15px;
    }
    @media screen and (max-width: 320px) {
      font-size: 14px;
    }
    @media (min-width: 321px) and (max-width: 399px) {
      font-size: 16px;
    }
    @media (min-width: 400px) and (max-width: 499px) {
    }
  }
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;

  text-align: center;
  a {
    cursor: pointer;
    text-decoration: none;
    color: black;
    padding: 20px !important;
    text-align: center;
    justify-content: space-between;
    z-index: 999;
  }
`;
const LinkCont = styled(Link)`
  padding: 20px !important;
  &:hover {
    background-color: ${Colors.darkgreen};
    color: white;
  }
`;
const NavHeight = styled.div`
  height: 3rem;
`;

const StyledNavbar = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999 !important;
  background-color: #f2ebe2;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  img {
    max-width: 100%;
    height: 20px;
  }
  @media screen and (min-width: 820px) {
    display: none;
  }
`;

const HeadSpace = styled.div`
  align-items: center;
  display: flex;
  margin: 1px 20px;
  justify-content: space-between;
  img {
    height: 25px;
  }
`;

const MenuToggle = styled.div`
  margin: 0;
  cursor: pointer;
`;

const Sidebar = styled.div`
  position: fixed;
  top: 3rem;
  top: ${({ isOpen }) => (isOpen ? "3rem" : "-400px")};
  width: 100%;
  height: 40vh;
  background-color: #f2ebe2;

  border-left: 0.5px solid #313538;
  transition: top 0.4s ease-in-out;
  z-index: 20;
  overflow-x: hidden;
  @media screen and (max-width: 320px) {
    width: 100%;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    width: 100%;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    width: 100%;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 998;
`;

export default Navbar;
