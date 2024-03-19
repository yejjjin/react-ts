import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => (
  <div>
    <Header name="가을이 홈페이지" />
    <main id="main">
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default Layout;
