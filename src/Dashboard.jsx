import { TfiLayoutGrid2Alt } from "react-icons/tfi";
import { MdStarRate } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      performSearch(searchQuery);
    }
  };

  const performSearch = (query) => {
    // Handle the search logic here
    console.log(query);
  };

  return (
    <>
      <div className="dashboard-container bg-[#F3F5F7] p-9">
        <div className="flex justify-between items-center py-9">
          <h2 className="text-4xl font-bold max-[560px]:text-2xl">Dashboard</h2>
          <Link
            to={"/size-chart"}
            className="text-base font-semibold bg-black text-white py-2 px-6 rounded max-[560px]:text-sm max-[400px]:px-1 max-[400px]:text-xs"
          >
            <span className="inline-block px-2 capitalize">
              <TfiLayoutGrid2Alt />
            </span>
            New size chart
          </Link>
        </div>
        <div className="flex justify-between items-center p-4 bg-[#DEF1D7] rounded max-[560px]:flex-col max-[560px]:p-2">
          <p className="text-[#42343A] text-lg font-bold max-[768px]:text-base max-[560px]:text-sm">
            Thank you for the great feedback! Help us hit 100 reviews and make a
            difference! 🚀
          </p>
          <div className="flex justify-between items-center">
            <p className="text-3xl max-[768px]:text-base ">
              <span className="inline-block">
                <MdStarRate className=" hover:text-yellow-600" />
              </span>
              <span className="inline-block">
                <MdStarRate className=" hover:text-yellow-600" />
              </span>
              <span className="inline-block">
                <MdStarRate className=" hover:text-yellow-600" />
              </span>
              <span className="inline-block">
                <MdStarRate className=" hover:text-yellow-600" />
              </span>
              <span className="inline-block">
                <MdStarRate className=" hover:text-yellow-600" />
              </span>
            </p>
            <p className="text-base ps-4 max-[768px]:text-sm">Rate</p>
          </div>
        </div>
        <div className="relative text-lg text-[#696A6B] focus-within:text-[#00BCD4] my-4">
          <span className="absolute inset-y-0 left-0 flex items-center pl-4">
            <FaSearch />
          </span>
          <input
            className="py-4 max-[560px]:py-2 pl-10 pr-4 rounded-lg w-full bg-[#E5E7E9] focus:outline-none focus:bg-[#424242] focus:placeholder-transparent focus:text-white"
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            onKeyPress={handleKeyPress}
            placeholder="Search..."
          />
        </div>
        <div className="text-center">
          <hr className="h-[2px] mx-auto  bg-[#77746F] border-0 rounded my-6 max-[560px]:my-2" />
          No results
          <hr className="h-[2px] mx-auto bg-[#77746F] border-0 rounded my-6 max-[560px]:my-2" />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
