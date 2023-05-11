import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <>
      <div className="layout-container grid grid-cols-12 ">
        <div className="layout-sidebar col-span-2">
          <Sidebar />
        </div>
        <div className="layout-content col-start-3 col-span-full">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
