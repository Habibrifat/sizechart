import { FaCheck } from "react-icons/fa";
import { RiEditBoxLine } from "react-icons/ri";
import { IoHomeSharp } from "react-icons/io5";
import { BsFillStarFill } from "react-icons/bs";

const Help = () => {
  return (
    <>
      <div className="help-container my-9">
        <div className="step-section flex items-center justify-center space-x-6">
          <div className="step-card border border-solid border-black border-opacity-40 rounded py-5 px-8 w-96 h-72 ">
            <h2 className=" text-4xl font-bold text-black opacity-60 pt-2">
              Step 1
            </h2>
            <h4 className=" text-xl font-bold text-[#F44336] pt-2">
              Embed app
            </h4>
            <p className="text-base text-black opacity-60 pt-2">
              Activate the App in your Shopify theme
            </p>
            <button className="transition text-sm font-bold bg-black text-white mt-12 mb-4 py-3 px-9 rounded hover:opacity-70 capitalize">
              Embed app
            </button>
          </div>
          <div className="step-card border border-solid border-black border-opacity-40 rounded py-5 px-8 w-96 h-72">
            <h2 className=" text-4xl font-bold text-black opacity-60 pt-2">
              Step 2
            </h2>
            <h4 className=" text-xl font-bold text-[#F44336] pt-2">
              Create size chart
            </h4>
            <p className="text-base text-black opacity-60 pt-2">
              Create your first size chart. Find detailed instructions below
            </p>
            <button className="transition text-sm font-bold bg-black text-white mt-12 mb-4 py-3 px-9 rounded hover:opacity-70 capitalize">
              New Size chart
            </button>
          </div>
          <div className="step-card border border-solid border-black border-opacity-40 rounded py-5 px-8 w-96 h-72">
            <h2 className=" text-4xl font-bold text-black opacity-60 pt-2">
              Step 3
            </h2>
            <h4 className=" text-xl font-bold text-[#F44336] pt-2">
              Add block
            </h4>
            <p className="text-base text-black opacity-60 pt-2">
              Add your SmartSize block in your product page.
            </p>
            <button className="transition text-sm font-bold bg-black text-white mt-12 mb-4 py-3 px-9 rounded hover:opacity-70 capitalize">
              Add block
            </button>
          </div>
        </div>
        <div className="step-one-section border border-solid border-black border-opacity-50 my-14 mx-6 p-9 rounded">
          <h2 className=" text-4xl font-bold pb-2">Step 1 </h2>
          <h4 className=" text-lg text-[#F44336] pb-4">
            Embed SmartSize in your Shopify theme
          </h4>
          <div className="step-one-list text-lg">
            <p className="py-2">
              <span className="inline-block px-2">
                <FaCheck className="text-[#72DC6C]" />
              </span>
              Go to your Shopify admin page
            </p>
            <p className="py-2">
              <span className="inline-block px-2">
                <FaCheck className="text-[#72DC6C]" />
              </span>
              Select Sales Channels > Online Stores > Themes
            </p>
            <p className="py-2">
              <span className="inline-block px-2">
                <FaCheck className="text-[#72DC6C]" />
              </span>
              Select 'Customize'
            </p>
            <p className="py-2">
              <span className="inline-block px-2">
                <FaCheck className="text-[#72DC6C]" />
              </span>
              Select 'Theme Settings'
            </p>
            <p className="py-2">
              <span className="inline-block px-2">
                <FaCheck className="text-[#72DC6C]" />
              </span>
              Select 'App embeds'
            </p>
            <p className="py-2">
              <span className="inline-block px-2">
                <FaCheck className="text-[#72DC6C]" />
              </span>
              Click on 'SmartSize' toggle
            </p>
            <p className="py-2">
              <span className="inline-block px-2">
                <FaCheck className="text-[#72DC6C]" />
              </span>
              Click on 'Save'
            </p>
          </div>
          <button className="text-sm font-bold text-white bg-[#F44336] capitalize my-9 py-3 px-14 rounded hover:opacity-80 transition">
            Embed app
          </button>
        </div>
        <div className="step-two-section border border-solid border-black border-opacity-50 my-14 mx-6 p-9 rounded">
          <h2 className=" text-4xl font-bold pb-2">Step 2 </h2>
          <h4 className=" text-lg text-[#F44336] pb-4">
            Create your first size chart
          </h4>
          <div className="step-one-list text-lg">
            <p className="py-2">
              <span className="inline-block px-2">
                <FaCheck className="text-[#72DC6C]" />
              </span>
              Click
              <span className="bg-black text-white rounded m-1 px-3 tracking-widest">
                ctrl
              </span>
              +
              <span className="inline-block text-sm border-[3px] p-[1px] mx-1 border-solid border-[#666666] text-[#666666]">
                <BsFillStarFill />
              </span>
              (Windows) or
              <span className="bg-black text-white rounded m-1 px-3 tracking-widest">
                cmd
              </span>
              +
              <span className="inline-block text-sm border-[3px] p-[1px] mx-1 border-solid border-[#666666] text-[#666666]">
                <BsFillStarFill />
              </span>
              (Mac) to create a size chart. This will open a new windown so that
              you can follow the instructions
            </p>
            <p className="py-2">
              <span className="inline-block px-2">
                <FaCheck className="text-[#72DC6C]" />
              </span>
              Chose a template
            </p>
            <p className="py-2">
              <span className="inline-block px-2">
                <FaCheck className="text-[#72DC6C]" />
              </span>
              In the Editor: give your size chart a name, add the sizes and any
              measurement instructions
            </p>
            <p className="py-2">
              <span className="inline-block px-2">
                <FaCheck className="text-[#72DC6C]" />
              </span>
              Link the size chart to a product or collection and click on Done
              to save your changes
            </p>
            <p className="py-2">
              <span className="inline-block px-2">
                <FaCheck className="text-[#72DC6C]" />
              </span>
              In the dashboard
              <span className="inline-block px-2 text-gray-500 text-xl">
                <IoHomeSharp />
              </span>
              and publish your size chart
            </p>
          </div>
          <button className="text-lg font-bold text-black bg-white hover:bg-[#EDEDED] border border-solid border-black capitalize my-9 py-3 px-3 rounded hover:opacity-80 transition">
            watch video
            <span className="inline-block ps-2">
              <RiEditBoxLine />
            </span>
          </button>
          <button className="text-lg font-bold text-white bg-black capitalize mx-4 my-9 py-3 px-2 rounded hover:opacity-80 transition">
            new size chart
          </button>
        </div>
      </div>
    </>
  );
};

export default Help;
