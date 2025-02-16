import React from "react";
import { Layout } from "antd";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import AllPostContent from "./AllPostContent";
import Navbar from "./Navbar";
const AllPost = () => {
  return (
    <>
      <Navbar />
      <Layout style={{ minHeight: "" }}>
        <Sidebar />
        <>
          <AllPostContent />
        </>
      </Layout>
    </>
  );
};

export default AllPost;
