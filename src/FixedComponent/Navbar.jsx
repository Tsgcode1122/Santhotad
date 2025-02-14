import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Squash as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";

import logo from "../Images/sanlogo.png";
import arrowUp from "../Icons/arrow-up-right.png";
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
          <Link to="/">
            <img src={logo} />{" "}
          </Link>
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
            <Link
              to="/"
              onClick={closeSidebar}
              style={{ background: "black", color: "white" }}
            >
              <span>Projects</span>
            </Link>
            <Link to="/services" onClick={closeSidebar}>
              <span>Services</span>
            </Link>

            <Link to="/about" onClick={closeSidebar}>
              <span>About Us</span>
            </Link>
            <Link to="/blog" onClick={closeSidebar}>
              <span>Blogs</span>
            </Link>
            <Contact1>
              <Link to="/contact">
                Contact Us
                <img src={arrowUp} />{" "}
              </Link>
            </Contact1>
          </LinkContainer>
        </SidebarContent>
      </Sidebar>

      {/* {isSidebarOpen && <Overlay onClick={closeSidebar} />} */}

      <BigNav>
        <BigCon>
          <Link to="/">
            <img src={logo} />{" "}
          </Link>
          <LinkBig>
            <Link to="/">Projects</Link>
            <Link to="/services/architect">Services</Link>
            <Link to="/about">About Us</Link>
            <Link to="/blog">Blogs</Link>
          </LinkBig>
          <Contact>
            <Link to="/contact">
              Contact Us
              <img src={arrowUp} />{" "}
            </Link>
          </Contact>
        </BigCon>
      </BigNav>
    </>
  );
};
const Contact1 = styled.div`
  border: 1.8px solid #0316cd;
  display: inline-block;
  padding: 7px 12px;
  a {
    display: flex;
    align-items: center;
    font-weight: 500;
    justify-content: center;
    gap: 4px;
    color: ${Colors.blue} !important;
  }
  color: ${Colors.blue} !important;

  border-radius: 5px;
`;
const Contact = styled.div`
  border: 1.8px solid #0316cd;
  padding: 7px 12px;
  a {
    display: flex;
    align-items: center;
    font-weight: 500;
    justify-content: center;
    gap: 4px;
    color: ${Colors.blue} !important;
  }
  color: ${Colors.blue} !important;

  border-radius: 5px;
`;

const BigNav = styled.div`
  position: fixed;
  width: 100%;
  top: 0;

  display: none;
  a {
    text-decoration: none;
    font-size: 16px;
  }
  @media screen and (min-width: 820px) {
    display: block;
    justify-content: center;
    align-items: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  z-index: 999 !important;
  background: ${Colors.white};
  img {
    max-width: 100%;
    height: 20px;
  }
`;
const BigCon = styled.div`
  height: 40px;
  padding: 10px 40px;
  display: flex;

  margin: 0 auto;
  max-width: 1200px;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 1000px) {
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
    color: ${Colors.ashBlack};
    font-size: 18px;
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

const NavHeight = styled.div`
  height: 3rem;
`;

const StyledNavbar = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999 !important;
  background: ${Colors.white};
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
  margin: 0px 20px;

  justify-content: space-between;
  img {
    height: 25px;
    margin: 0;
    padding: 0;
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

  background-color: #f5f5f5;

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
