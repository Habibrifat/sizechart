import { useState } from "react";

function Table() {
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [inputValue3, setInputValue3] = useState("");
  const [inputValue4, setInputValue4] = useState("");
  const [inputValue5, setInputValue5] = useState("");
  const [inputValue6, setInputValue6] = useState("");

  const handleInputChange1 = (event) => {
    setInputValue1(event.target.value);
  };
  const handleInputChange2 = (event) => {
    setInputValue2(event.target.value);
  };
  const handleInputChange3 = (event) => {
    setInputValue3(event.target.value);
  };
  const handleInputChange4 = (event) => {
    setInputValue4(event.target.value);
  };
  const handleInputChange5 = (event) => {
    setInputValue5(event.target.value);
  };
  const handleInputChange6 = (event) => {
    setInputValue6(event.target.value);
  };

  const handleSubmit1 = (e) => {
    // do something with the input value
    console.log(e);
  };
  const handleSubmit2 = (e) => {
    // do something with the input value
    console.log(e);
  };
  const handleSubmit3 = (e) => {
    // do something with the input value
    console.log(e);
  };
  const handleSubmit4 = (e) => {
    // do something with the input value
    console.log(e);
  };
  const handleSubmit5 = (e) => {
    // do something with the input value
    console.log(e);
  };
  const handleSubmit6 = (e) => {
    // do something with the input value
    console.log(e);
  };

  const [data, setData] = useState([
    ["John Doe", 30, "New York"],
    ["Jane Smith", 25, "Los Angeles"],
    [" Smith", 50, " Angeles"],
  ]);
  const [numColumns, setNumColumns] = useState(3);

  function handleAddColumn() {
    setNumColumns(numColumns + 1);
    setData((prevData) => {
      const newData = prevData.map((rowData) => [...rowData, null]);
      newData.push([...Array(numColumns).fill(null)]);
      return newData;
    });
  }

  function handleAddRow() {
    setData((prevData) => [...prevData, Array(numColumns).fill(null)]);
  }

  return (
    <>
      <div className="column-btn flex justify-items-end items-center w-1/2 m-auto pl-10 pt-5 pb-2">
        <div className="buttons flex">
          <div className=" w-[150px] px-3 flex items-center">
            <input
              className="flex-grow outline-none border-2 border-solid rounded border-[#cfc5c5f5] shadow-2xl mx-2 w-4/5 px-2 text-center text-black placeholder:text-black"
              type="text"
              id="inputField"
              value={inputValue1}
              onChange={handleInputChange1}
              placeholder="S"
            />
            <button
              onClick={handleSubmit1}
              className=" font-medium px-2 py-1 bg-[#26c6da] hover:bg-[#23B8CA] text-white rounded transition-all duration-300"
            >
              X
            </button>
          </div>
          <div className="w-[150px] px-3 flex items-center">
            <input
              className=" flex-grow outline-none border-2 border-solid rounded border-[#cfc5c5f5] shadow-2xl mx-2 w-4/5 px-2 text-center text-black placeholder:text-black"
              type="text"
              id="inputField"
              value={inputValue2}
              onChange={handleInputChange2}
              placeholder="L"
            />
            <button
              onClick={handleSubmit2}
              className=" font-medium px-2 py-1 bg-[#26c6da] hover:bg-[#23B8CA] text-white rounded transition-all duration-300"
            >
              X
            </button>
          </div>
          <div className="w-[150px] px-3 flex items-center">
            <input
              className=" flex-grow outline-none border-2 border-solid rounded border-[#cfc5c5f5] shadow-2xl mx-2 w-4/5 px-2 text-center text-black placeholder:text-black"
              type="text"
              id="inputField"
              value={inputValue3}
              onChange={handleInputChange3}
              placeholder="M"
            />
            <button
              onClick={handleSubmit3}
              className=" font-medium px-2 py-1 bg-[#26c6da] hover:bg-[#23B8CA] text-white rounded transition-all duration-300"
            >
              X
            </button>
          </div>
        </div>
        <div className="add-btn">
          <button
            className="p-2 bg-white text-[#EE7768] border border-solid border-[#EE7768]  rounded"
            onClick={handleAddColumn}
          >
            Add Column
          </button>
        </div>
      </div>
      <div className="flex flex-row-reverse w-1/2 m-auto">
        <div className="flex flex-col w-full m-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50 border-t-2 border-[#7C7878]">
              {/* <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Age
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  City
                </th>
                {Array.from({ length: numColumns - 3 }).map((_, index) => (
                  <th
                    key={index}
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Column {index + 4}
                  </th>
                ))}
              </tr> */}
            </thead>
            <tbody className="bg-white divide-y divide-x divide-gray-200">
              {data.map((rowData, rowIndex) => (
                <tr key={rowIndex}>
                  {rowData.map((cellData, columnIndex) => (
                    <td
                      key={columnIndex}
                      className="px-6 py-4 whitespace-nowrap"
                    >
                      {cellData}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          {/* <div className="flex mt-4">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
              onClick={handleAddColumn}
            >
              Add Column
            </button>
            <button
              className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md"
              onClick={handleAddRow}
            >
              Add Row
            </button>
          </div> */}
        </div>
        <div className="row-btn flex flex-row m-auto pt-5 pb-2 border-[#7C7878]">
          <div className="buttons flex flex-col gap-4">
            <div className=" w-[150px] px-3 flex items-center">
              <input
                className="flex-grow outline-none border-2 border-solid rounded border-[#cfc5c5f5] shadow-2xl mx-2 w-4/5 px-2 text-center text-black placeholder:text-black"
                type="text"
                id="inputField"
                value={inputValue4}
                onChange={handleInputChange4}
                placeholder="Bust"
              />
              <button
                onClick={handleSubmit4}
                className=" font-medium px-2 py-1 bg-[#26c6da] hover:bg-[#23B8CA] text-white rounded transition-all duration-300"
              >
                X
              </button>
            </div>
            <div className="w-[150px] px-3 flex items-center">
              <input
                className=" flex-grow outline-none border-2 border-solid rounded border-[#cfc5c5f5] shadow-2xl mx-2 w-4/5 px-2 text-center text-black placeholder:text-black"
                type="text"
                id="inputField"
                value={inputValue5}
                onChange={handleInputChange5}
                placeholder="Waist"
              />
              <button
                onClick={handleSubmit5}
                className=" font-medium px-2 py-1 bg-[#26c6da] hover:bg-[#23B8CA] text-white rounded transition-all duration-300"
              >
                X
              </button>
            </div>
            <div className="w-[150px] px-3 flex items-center">
              <input
                className=" flex-grow outline-none border-2 border-solid rounded border-[#cfc5c5f5] shadow-2xl mx-2 w-4/5 px-2 text-center text-black placeholder:text-black"
                type="text"
                id="inputField"
                value={inputValue6}
                onChange={handleInputChange6}
                placeholder="Hips"
              />
              <button
                onClick={handleSubmit6}
                className=" font-medium px-2 py-1 bg-[#26c6da] hover:bg-[#23B8CA] text-white rounded transition-all duration-300"
              >
                X
              </button>
            </div>
            <div className="w-[150px] px-3 flex items-center">
              <button
                className="p-2 bg-white text-[#EE7768] border border-solid border-[#EE7768]  rounded"
                onClick={handleAddRow}
              >
                Add row
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Table;
