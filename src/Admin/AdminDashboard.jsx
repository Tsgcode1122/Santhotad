import React from "react";
import { Layout } from "antd";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";

const AdminDashboard = () => {
  return (
    <>
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
