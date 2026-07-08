import React from "react";

import Header1 from "../Header/Header1";
import Header2 from "../Header/Header2";
import Header3 from "../Header/Header3";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Header1 />
      <Header2 />
      <Header3 />

      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
