import { FaCheck } from "react-icons/fa";
import { RiEditBoxLine } from "react-icons/ri";
import { IoHomeSharp } from "react-icons/io5";
import { BsFillStarFill } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { Link } from "react-router-dom";

const Help = () => {
  return (
    <>
      <div className="help-container my-9 bg-[#F3F5F7]">
        <div className="step-section flex items-center justify-center space-x-6">
          <div className="step-card border border-solid border-black border-opacity-40 rounded py-5 px-8 w-96 h-72 bg-white">
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
          <div className="step-card border border-solid border-black border-opacity-40 rounded py-5 px-8 w-96 h-72 bg-white">
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
          <div className="step-card border border-solid border-black border-opacity-40 rounded py-5 px-8 w-96 h-72 bg-white">
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
        <div className="step-one-section border border-solid border-black border-opacity-50 my-14 mx-6 p-9 rounded bg-white">
          <h2 className=" text-4xl font-bold pb-2">Step 1 </h2>
          <h4 className=" text-lg text-[#F44336] pb-4">
            Embed SmartSize in your Shopify theme
          </h4>
          <div className="step-one-list text-lg text-[#666666]">
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
        <div className="step-two-section border border-solid border-black border-opacity-50 my-14 mx-6 p-9 rounded bg-white">
          <h2 className=" text-4xl font-bold pb-2">Step 2 </h2>
          <h4 className=" text-lg text-[#F44336] pb-4">
            Create your first size chart
          </h4>
          <div className="step-one-list text-lg text-[#666666]">
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
        <div className="step-three-section border border-solid border-black border-opacity-50 my-14 mx-6 p-9 rounded bg-white">
          <h2 className=" text-4xl font-bold pb-2">Step 3 </h2>
          <h4 className=" text-lg text-[#F44336] pb-4">
            Add block in your product page
          </h4>
          <div className="step-one-list text-lg text-[#666666]">
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
              Search the product for which you created the size chart in Step 2.
              Open it.
            </p>
            <p className="py-2">
              <span className="inline-block px-2">
                <FaCheck className="text-[#72DC6C]" />
              </span>
              On the left menu, select 'Add block'
            </p>
            <p className="py-2">
              <span className="inline-block px-2">
                <FaCheck className="text-[#72DC6C]" />
              </span>
              Select your 'SmartSize' (sizefox) block
            </p>
            <p className="py-2">
              <span className="inline-block px-2">
                <FaCheck className="text-[#72DC6C]" />
              </span>
              Drag and drop the block in the position that you wish to have
            </p>
            <p className="py-2">
              <span className="inline-block px-2">
                <FaCheck className="text-[#72DC6C]" />
              </span>
              Click 'Save'
            </p>
          </div>
          <p className="text-xl mt-9 text-[#666666]">
            <span className=" text-[#F44336]">Important</span> Any troubles? If
            your Shopify theme does not have the option to 'Add block', please
            go to section
            <span className=" text-[#F44336]">
              "Onboarding for special Shopify themes"
            </span>
            below
          </p>
          <button className="text-lg font-bold text-black bg-white hover:bg-[#EDEDED] border border-solid border-black capitalize my-9 py-3 px-3 rounded hover:opacity-80 transition">
            watch video
            <span className="inline-block ps-2">
              <RiEditBoxLine />
            </span>
          </button>
          <button className="text-lg font-bold text-white bg-black capitalize mx-4 my-9 py-3 px-2 rounded hover:opacity-80 transition">
            Add block
          </button>
        </div>
        {/* change the icon and label */}
        <div className="border border-solid border-black border-opacity-50 my-14 mx-6 p-9 rounded bg-white">
          <h2 className=" text-4xl font-bold pb-2">
            How to change the icon and label of your size chart
          </h2>
          <h4 className=" text-lg text-[#F44336] pb-4">
            Chose an icon and a label
          </h4>
          <div className="step-one-list text-lg text-[#666666]">
            <p className="py-2">
              <span className="inline-block px-2">
                <FaCheck className="text-[#72DC6C]" />
              </span>
              Click on
              <span className="inline-block text-xl px-2">
                <FiSettings />
              </span>
              Settings in the left side menu
            </p>
            <p className="py-2">
              <span className="inline-block px-2">
                <FaCheck className="text-[#72DC6C]" />
              </span>
              Select the icon you wish to have
            </p>
            <p className="py-2">
              <span className="inline-block px-2">
                <FaCheck className="text-[#72DC6C]" />
              </span>
              Select the label
            </p>
            <p className="py-2">
              <span className="inline-block px-2">
                <FaCheck className="text-[#72DC6C]" />
              </span>
              Don't adjust the vertical or horizontal position for now. This can
              be done later
            </p>
          </div>
        </div>
        {/* test your size chart */}
        <div className="border border-solid border-black border-opacity-50 my-14 mx-6 p-9 rounded bg-white">
          <h2 className=" text-4xl font-bold pb-2">
            How to test your size chart
          </h2>
          <h4 className=" text-lg text-[#F44336] pb-4">
            Check the size chart in your Store
          </h4>
          <div className="step-one-list text-lg text-[#666666]">
            <p className="py-2">
              <span className="inline-block px-2">
                <FaCheck className="text-[#72DC6C]" />
              </span>
              Go to your Shopify store
            </p>
            <p className="py-2">
              <span className="inline-block px-2">
                <FaCheck className="text-[#72DC6C]" />
              </span>
              Select the product where you have linked the size chart
            </p>
            <p className="py-2">
              <span className="inline-block px-2">
                <FaCheck className="text-[#72DC6C]" />
              </span>
              Click on the size chart
            </p>
          </div>
          <p className="text-xl mt-6 mb-12 text-[#666666]">
            Are you able to see the size chart?
          </p>
        </div>
        {/* Having problems */}
        <div className="border border-solid border-black border-opacity-50 my-14 mx-6 p-9 rounded bg-white">
          <h2 className=" text-4xl font-bold pb-2">Having problems?</h2>
          <h4 className=" text-lg text-[#F44336] pb-4">
            Check the different options
          </h4>
          <div className="step-one-list text-lg text-[#666666]">
            <p className="py-2">
              <span className="inline-block px-2">
                <FaCheck className="text-[#72DC6C]" />
              </span>
              Have you embeded the app? See Step 1
            </p>
            <p className="py-2">
              <span className="inline-block px-2">
                <FaCheck className="text-[#72DC6C]" />
              </span>
              Have you added your SmartSize block? See Step 2
            </p>
            <p className="py-2">
              <span className="inline-block px-2">
                <FaCheck className="text-[#72DC6C]" />
              </span>
              Have you already created your first size chart, linked it to a
              product and published it? See Step 3
            </p>
            <p className="py-2">
              <span className="inline-block px-2">
                <FaCheck className="text-[#72DC6C]" />
              </span>
              If you have a special theme, have you tried adding a code snippet?
              See: (see Onboarding for special Shopify themes
            </p>
          </div>
          <p className="text-xl mt-6 mb-12 text-[#666666]">
            If you are still experiencing issues, no worries! Get in touch with
            us
            <Link to={"/"} className="underline text-[#1976D2] px-1">
              team@smartsize.io
            </Link>
            Our team will be glad to support you
          </p>
        </div>
      </div>
    </>
  );
};

export default Help;
