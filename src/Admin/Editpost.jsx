import React from "react";
import { Layout } from "antd";
import Sidebar from "./Sidebar";
import FooterNav from "./FooterNav";
import { breakpoints } from "../FixedComponent/BreakPoints";
import styled from "styled-components";
import EditDashboard from "./EditDashboard";
import Navbar from "./Navbar";

const EditPost = () => {
  return (
    <>
      <Navbar />
      <Layout style={{ minHeight: "" }}>
        <HideSmall>
          <Sidebar />
        </HideSmall>

        <>
          <EditDashboard />
          <HideBig>
            <FooterNav />
          </HideBig>
        </>
        <></>
      </Layout>
    </>
  );
};

export default EditPost;
const HideBig = styled.div`
  @media (min-width: ${breakpoints.m}) {
    display: none;
  }
`;
const HideSmall = styled.div`
  display: none;
  @media (min-width: ${breakpoints.xs}) {
  }
  @media (min-width: ${breakpoints.m}) {
    display: block;
  }
`;
