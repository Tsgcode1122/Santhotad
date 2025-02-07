import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";

// import ScrollToTopButton from "./ScrollToTopButton";

const Layout = () => {
  const location = useLocation();

  const isAdminPage = location.pathname.startsWith("/admin");

  return (
    <>
      {<Navbar />}
      <Outlet />
      {!isAdminPage & <Footer />}
    </>
  );
};

export default Layout;
