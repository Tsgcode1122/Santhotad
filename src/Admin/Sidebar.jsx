import React, { useState } from "react";
import { Layout } from "antd";
import { PiUsersThree } from "react-icons/pi";
import { BiLogOut } from "react-icons/bi";
import { BsJournalBookmark } from "react-icons/bs";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import styled from "styled-components";
import sanlogo from "../Images/sanwh.png";
import profile from "../Images/Photo.png";

const { Sider } = Layout;
import { Colors } from "../Colors/ColorComponent";
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
  /* width: 100%; */
  /* padding: 10px; */
  margin-bottom: 30px;
  cursor: pointer;
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
`;

const Circle = styled.div`
  background: ${(props) =>
    props.active ? "white" : "rgba(255, 255, 255, 0.1)"};
  border-radius: 50%;
  height: 10px;
  width: 10px;
  display: inline-block;
  margin-right: 5px;
  cursor: pointer;
`;
const Second = styled.div`
  display: flex;
  flex-direction: column;

  /* justify-content: space-between; */
`;
const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState(1);
  const [activeCircle, setActiveCircle] = useState("create");

  return (
    <>
      <SidebarContainer width={300}>
        <Image>
          <img src={sanlogo} alt="Logo" />
        </Image>
        <Second>
          <div>
            <AdminMini>
              <MiniImage>
                <img src={profile} alt="Admin Profile" />
              </MiniImage>
              <p>Welcome Admin</p>
            </AdminMini>
            <Head>Dashboard </Head>
            {["Users", "Blog"].map((item, index) => (
              <MenuDropdown
                key={index}
                onClick={() => setOpenMenu(openMenu === index ? null : index)}
              >
                <Menu active={openMenu === index}>
                  {openMenu === index ? (
                    <IoIosArrowDown />
                  ) : (
                    <IoIosArrowForward />
                  )}{" "}
                  {item === "Users" ? <PiUsersThree /> : <BsJournalBookmark />}{" "}
                  {item}
                </Menu>
                <SubMenu active={openMenu === index}>
                  {item === "Users" ? (
                    <>
                      <p>User 1</p>
                      <p>User 2</p>
                    </>
                  ) : (
                    <>
                      <p onClick={() => setActiveCircle("create")}>
                        {" "}
                        <Circle active={activeCircle === "create"} /> Create
                        Post
                      </p>
                      <p onClick={() => setActiveCircle("all")}>
                        <Circle active={activeCircle === "all"} /> All Posts
                      </p>
                    </>
                  )}
                </SubMenu>
              </MenuDropdown>
            ))}
          </div>
          <LogoutButton>
            <BiLogOut />
            Log out
          </LogoutButton>
        </Second>
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
