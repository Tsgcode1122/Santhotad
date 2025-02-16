import React from "react";
import { Layout } from "antd";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";

const AdminDashboard = () => {
  return (
    <>
      <Navbar />
      <Layout>
        <Sidebar />
        <>
          <Dashboard />
        </>
      </Layout>
    </>
  );
};

export default AdminDashboard;
