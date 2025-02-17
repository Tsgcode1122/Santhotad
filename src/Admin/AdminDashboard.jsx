import React from "react";
import { Layout } from "antd";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";

import Navbar from "./Navbar";
import FooterNav from "./FooterNav";
import { breakpoints } from "../FixedComponent/BreakPoints";
import styled from "styled-components";
const AdminDashboard = () => {
  return (
    <>
      <Navbar />

      <Layout>
        <HideSmall>
          <Sidebar />
        </HideSmall>
        <>
          <Dashboard />
        </>

        <>
          <HideBig>
            <FooterNav />
          </HideBig>
        </>
      </Layout>
    </>
  );
};

export default AdminDashboard;

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
