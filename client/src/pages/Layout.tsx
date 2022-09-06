import {Outlet} from "react-router-dom";
import Navbar from "../navbar";

// тема сисек не раскрыта
const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;