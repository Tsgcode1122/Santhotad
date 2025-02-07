import React, { useState } from "react";
import { Layout } from "antd";
import { PiUsersThree } from "react-icons/pi";
import { BiLogOut } from "react-icons/bi";
import { BsJournalBookmark } from "react-icons/bs";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import styled from "styled-components";
import sanlogo from "../Images/sanwh.png";
import profile from "../Images/Photo.png";
import { Link } from "react-router-dom";

const { Sider } = Layout;

const SidebarContainer = styled(Sider)`
  margin-top: -4rem;
  z-index: 999;
  position: fixed;
  height: 100vh;
  background: #000d8a !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  img {
    max-width: 100%;
    height: 20px;
  }
`;

const Head = styled.p`
  color: #aaaaaa;
  padding: 10px 5px;
  font-weight: 200;
`;

const AdminMini = styled.div`
  margin-top: 4rem;
  display: flex;
  align-items: center;
  justify-content: left;
  background: rgba(255, 255, 255, 0.2);
  padding: 1px 10px;
  border-radius: 10px;
  gap: 10px;
  color: white;
  text-align: center;
`;

const MiniImage = styled.div`
  img {
    border-radius: 50%;
    height: 30px;
  }
`;

const LogoutButton = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  border: 10px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.08);
  color: white;
  cursor: pointer;
  margin-top: auto;
  padding: 10px;
  svg {
    font-size: 18px;
  }
`;

const MenuDropdown = styled.div`
  margin-bottom: 30px;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
  font-size: 16px;
  padding: 10px;
  background: ${(props) =>
    props.active ? "rgba(255, 255, 255, 0.08)" : "transparent"};
  border-radius: 10px;
  transition: background 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    background: rgba(255, 255, 255, 0.08);
  }
`;

const SubMenu = styled.div`
  padding-left: 40px;
  max-height: ${(props) => (props.active ? "200px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  color: white;
  a {
    color: white !important;
  }
`;

const Circle = styled.div`
  background: ${(props) =>
    props.active ? "white" : "rgba(255, 255, 255, 0.1)"};
  border-radius: 50%;
  height: 10px;
  width: 10px;
  display: inline-block;
  margin-right: 5px;
`;

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [activeCircle, setActiveCircle] = useState("create");

  const handleLinkClick = (circleName) => {
    setActiveCircle(circleName);
    setOpenMenu(null); // Close menu only when clicking the Link
  };

  return (
    <>
      <SidebarContainer width={300}>
        <Image>
          <img src={sanlogo} alt="Logo" />
        </Image>
        <div>
          <AdminMini>
            <MiniImage>
              <img src={profile} alt="Admin Profile" />
            </MiniImage>
            <p>Welcome Admin</p>
          </AdminMini>
          <Head>Dashboard </Head>

          {/* Users Menu */}
          <MenuDropdown>
            <Menu
              active={openMenu === "users"}
              onClick={() => setOpenMenu(openMenu === "users" ? null : "users")}
            >
              {openMenu === "users" ? (
                <IoIosArrowDown />
              ) : (
                <IoIosArrowForward />
              )}
              <PiUsersThree /> Users
            </Menu>
            <SubMenu active={openMenu === "users"}>
              <p>User 1</p>
              <p>User 2</p>
            </SubMenu>
          </MenuDropdown>

          {/* Blog Menu */}
          <MenuDropdown>
            <Menu
              active={openMenu === "blog"}
              onClick={() => setOpenMenu(openMenu === "blog" ? null : "blog")}
            >
              {openMenu === "blog" ? <IoIosArrowDown /> : <IoIosArrowForward />}
              <BsJournalBookmark /> Blog
            </Menu>
            <SubMenu active={openMenu === "blog"}>
              <p>
                <Circle active={activeCircle === "create"} />
                <Link to="/admin" onClick={() => handleLinkClick("create")}>
                  Create Post
                </Link>
              </p>
              <p>
                <Circle active={activeCircle === "all"} />
                <Link to="/allpost" onClick={() => handleLinkClick("all")}>
                  All Posts
                </Link>
              </p>
            </SubMenu>
          </MenuDropdown>
        </div>
        <LogoutButton>
          <BiLogOut />
          Log out
        </LogoutButton>
      </SidebarContainer>
      <SiderGap />
    </>
  );
};

export default Sidebar;

const SiderGap = styled.div`
  min-width: 300px !important;
  background-color: red;
`;
