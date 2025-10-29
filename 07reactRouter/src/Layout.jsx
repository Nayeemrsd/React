import React from "react";
import Header from "../component/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../component/Footer/Footer";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      {/*yahan pr jo outlet beach mein use hora wo ooper k header aur neeche k footer ko fixed rakhega*/}
      {/* agr aap iski position change karna chate to wo b kar sakte jaise k upper and middle fixed  */}
      {/* ye sab k liye outlet use hota hai  */}
    </>
  );
}

export default Layout;
