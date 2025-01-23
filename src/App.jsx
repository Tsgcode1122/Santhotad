import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";

// import About from "./Pages/About";
// import Services from "./Pages/Services";
// import Gallery from "./Pages/Gallery";
// import Appointment from "./Pages/Appointment";
// import Contact from "./Pages/Contact";
import { Result, Button } from "antd";
import Layout from "./FixedComponent/Layout";
import { Colors } from "./Colors/ColorComponent";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";

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
      // { path: "/contact", element: <Contact /> },
      // { path: "/appointment", element: <Appointment /> },

      // { path: "/services", element: <Services /> },
      // { path: "/gallery", element: <Gallery /> },

      { path: "*", element: <InvalidPath /> },
    ],
  },
];

const router = createBrowserRouter(routes);

const App = () => (
  <>
    <GlobalStyle />
    <RouterProvider router={router} />
  </>
);

export default App;
