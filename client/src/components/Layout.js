import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = (props) => {
  return (
    <React.Fragment>
      <Header></Header>
      {props.children}
      <Footer></Footer>
    </React.Fragment>
  );
};

export default Layout;
