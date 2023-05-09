import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import Measurement from "./components/Measurement ";
import Table from "./components/tableRow";

const SizeChart = () => {
  const options = [
    { value: "small", label: "Small" },
    { value: "medium", label: "Medium" },
    { value: "large", label: "Large" },
    { value: "maximum", label: "Maximum" },
  ];
  const options1 = [
    { value: "centimeters", label: "Centimeters" },
    { value: "inches", label: "Inches" },
  ];
  const [name, setName] = useState("");
  const [header, setHeader] = useState("");
  const [selectedOption, setSelectedOption] = useState("Centimeters");
  const [isFocused, setIsFocused] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [selectedRadioOption, setSelectedRadioOption] = useState("small");

  const handleChangeRadio = (event) => {
    setSelectedRadioOption(event.target.value);
  };

  const handleChangeCheck = () => {
    setIsChecked(!isChecked);
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
  };
  const handleChangeFocus = (e) => {
    setIsFocused(true);
  };
  const handleChangeHeder = (e) => {
    setHeader(e.target.value);
    console.log(e.target.value);
  };
  const handleChangeOption = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className=" bg-[#F3F5F7] p-10 ">
      <div className="size-bg size-name">
        <label className="text-xl font-bold py-3">Select a Name</label>
        <input
          className=" input-field"
          placeholder="Zoom"
          type="text"
          value={name}
          onChange={handleChangeName}
          onFocus={handleChangeFocus}
        />
        {isFocused && (
          <p className="text-sm text-gray-500 mt-1">
            The Name will not be visible to your customer
          </p>
        )}
      </div>
      <div className="size-chart size-bg">
        <label className="text-xl font-bold py-3">Size Chart </label>
        <div className="buttons">
          <button className="size-button">How to Copy data from excel</button>
          <button className="size-button"> cm / inches Conversion</button>
          <button className="size-button">
            <span className=" text-red-600">Tip:</span> Exclude Conversion from
            column
          </button>
          <button className="size-button px-8 max-[580px]:px-4">
            How to...
            <FaEdit className="inline text-xl max-[580px]:text-sm ms-4" />
          </button>
        </div>
        <input
          className="input-field placeholder:text-gray-400"
          placeholder="Click here to add a size chart header (optional)"
          type="text"
          value={header}
          onChange={handleChangeHeder}
        />
        {/* table */}
        <div className="py-5">
          <Table />
        </div>
        <input
          className="input-field placeholder:text-gray-400"
          placeholder="Click here to add a size chart header (optional)"
          type="text"
          value={header}
          onChange={handleChangeHeder}
        />
        {/* Select and Checkbox */}
        <div className="grid grid-cols-2 gap-4 my-8 max-[767px]:grid-cols-1">
          <div className="conversion-popup bg-[#EEEEEE]">
            <h2 className=" text-xl  font-medium pt-2 pb-5 ">
              Conversion cm / inches
            </h2>
            <label htmlFor="conversion" className="text-sm pl-5">
              Initial Values
            </label>
            <div className="select">
              <select
                className=" py-2 px-4 mr-4 border-b border-black w-1/2 max-[580px]:w-full max-[580px]:my-5"
                name="conversion"
                id="conversion"
                value={selectedOption}
                onChange={handleChangeOption}
              >
                {options1.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <input
                className="h-4 w-6"
                type="checkbox"
                id="checkbox"
                checked={isChecked}
                onChange={handleChangeCheck}
              />
              <label className="ps-2" htmlFor="checkbox">
                Conversion cm / inches
              </label>
            </div>
          </div>
          <div className="conversion-popup bg-[#EEEEEE]">
            <h2 className=" text-xl font-medium pt-2 pb-5">
              Popup width on Desktop
            </h2>
            <div>
              {options.map((option) => (
                <label
                  className=" text-xl max-[580px]:text-base  text-gray-500"
                  htmlFor={option.value}
                  key={option.value}
                >
                  <input
                    type="radio"
                    className=" h-4 w-6"
                    id={option.value}
                    value={option.value}
                    checked={selectedRadioOption === option.value}
                    onChange={handleChangeRadio}
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Measurement */}
      <div className="measurement">
        <Measurement />
      </div>
    </div>
  );
};

export default SizeChart;
