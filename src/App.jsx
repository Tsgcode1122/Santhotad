import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";

import { Result, Button } from "antd";
import Layout from "./FixedComponent/Layout";
import { Colors } from "./Colors/ColorComponent";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import SingleProjectDetails from "./Pages/SingleProjectDetails";
import ServicePage from "./Pages/ServicePage";
import ContactForm from "./Pages/ContactForm";
import ServiceFromHome from "./Pages/ServiceFromHome";
import ProtectedAdminDashboardPage from "./Admin/ProtectedAdminDashboardPage";
import RegisterLogin from "./Admin/RegisterLogin";
import BlogPage from "./Pages/BlogPage";
import AdminDashboard from "./Admin/AdminDashboard";
import AllPost from "./Admin/AllPost";
import AnimatedCursor from "react-animated-cursor";
const GlobalStyle = createGlobalStyle`

  html, body {
    margin: 0 !important;
    padding: 0 !important;
   /* scroll-behavior: smooth; s */


  font-optical-sizing: auto;


    min-height: 100%;
  }

  body.modal-open {
    overflow: hidden;
  }

  #root {
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }
`;

const StyledResult = styled(Result)`
  .ant-result-title {
    color: black !important;
  }
  .ant-result-subtitle {
    color: black !important;
  }
`;

// Component for handling invalid paths
const InvalidPath = () => {
  const navigate = useNavigate();

  const handleBackHome = () => {
    navigate("/");
  };

  return (
    <StyledResult
      status="404"
      title="404 Not Found"
      subTitle="Oops! The page you are looking for does not exist."
      extra={
        <Button
          type="primary"
          onClick={handleBackHome}
          style={{ background: "black" }}
        >
          Back Home
        </Button>
      }
    />
  );
};

// Define your routes
const routes = [
  {
    element: <Layout />,
    children: [
      { index: true, path: "/", element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },

      { path: "/projects/:imageId", element: <SingleProjectDetails /> },
      { path: "/services/:serviceId", element: <ServiceFromHome /> },

      { path: "/service", element: <ServicePage /> },
      { path: "/contact", element: <ContactForm /> },
      { path: "/registerLogin", element: <RegisterLogin /> },
      { path: "/blog", element: <BlogPage /> },

      { path: "*", element: <InvalidPath /> },
      { path: "/admin", element: <AdminDashboard /> },
      { path: "/allpost", element: <AllPost /> },
      // { path: "/admin/*", element: <ProtectedAdminDashboardPage /> },
    ],
  },
];

const router = createBrowserRouter(routes);

const App = () => (
  <>
    <GlobalStyle />
    {/* <AnimatedCursor /> */}
    <RouterProvider router={router} />
  </>
);

export default App;
