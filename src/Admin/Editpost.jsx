import React from "react";
import { Layout } from "antd";
import Sidebar from "./Sidebar";

import EditDashboard from "./EditDashboard";

const EditPost = () => {
  return (
    <>
      <Layout style={{ minHeight: "" }}>
        <Sidebar />
        <>
          <EditDashboard />
        </>
      </Layout>
    </>
  );
};

export default EditPost;
