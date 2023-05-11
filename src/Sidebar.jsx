import { BsPlusCircle, BsQuestionOctagonFill } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { AiOutlineArrowLeft, AiTwotoneSetting } from "react-icons/ai";
import { MdPeople } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar-container bg-[#F1F2F4] h-screen">
        <div className="sidebar-logo px-8 py-2">
          <h2 className=" text-2xl">Smart Size</h2>
        </div>
        <NavLink to={"/dashboard"} className="sidebar-nav-link">
          <div className="link-one py-1 px-4 hover:bg-[#D7D7D7] cursor-pointer transition-all ">
            <p className="text-base">
              <span className="inline-block px-4">
                <FaHome />
              </span>
              Dashboard
            </p>
          </div>
          <NavLink
            to={"/new-size-chart"}
            className="link-one py-1 px-4 hover:bg-[#D7D7D7] cursor-pointer transition-all"
          >
            <p className=" text-base">
              <span className="inline-block px-4">
                <BsPlusCircle />
              </span>
              New chart
            </p>
          </NavLink>
          <NavLink className="link-one py-1 px-4 hover:bg-[#D7D7D7] cursor-pointer transition-all">
            <p className=" text-base">
              <span className="inline-block px-4">
                <AiTwotoneSetting />
              </span>
              Settings
            </p>
          </NavLink>
          <NavLink
            to={"/plans"}
            className="link-one py-1 px-4 hover:bg-[#D7D7D7] cursor-pointer transition-all"
          >
            <p className=" text-base">
              <span className="inline-block px-4">
                <MdPeople />
              </span>
              Plans
            </p>
          </NavLink>
          <NavLink
            to={"/help"}
            className="link-one py-1 px-4 hover:bg-[#D7D7D7] cursor-pointer transition-all"
          >
            <p className=" text-base">
              <span className="inline-block px-4">
                <BsQuestionOctagonFill />
              </span>
              Helps
            </p>
          </NavLink>
          <div className="link-one py-1 px-4 hover:bg-[#D7D7D7] cursor-pointer transition-all">
            <p className=" text-base">
              <span className="inline-block px-4">
                <AiOutlineArrowLeft />
              </span>
            </p>
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default Sidebar;
