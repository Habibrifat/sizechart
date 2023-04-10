import React, { useState } from "react";

function Table() {
  const [rowCount, setRowCount] = useState(3); // initial number of rows
  const [colCount, setColCount] = useState(3); // initial number of columns
  const [isVisible1, setIsVisible1] = useState(true);
  const [isVisible2, setIsVisible2] = useState(true);
  const [isVisible3, setIsVisible3] = useState(true);
  const columnNames = ["S", "M", "L"];

  const handleClick1 = () => {
    setIsVisible1(false);
  };
  const handleClick2 = () => {
    setIsVisible2(false);
  };
  const handleClick3 = () => {
    setIsVisible3(false);
  };

  const handleAddRow = () => {
    setRowCount(rowCount + 1);
  };

  const handleAddColumn = () => {
    setColCount(colCount + 1);
  };

  const handleDeleteRow = (e) => {
    if (rowCount > 1) {
      setRowCount(rowCount - 1);
    }
    console.log(e);
  };

  const handleDeleteColumn = () => {
    if (colCount > 1) {
      setColCount(colCount - 1);
    }
  };

  return (
    <div className="overflow-x-auto flex flex-row-reverse">
      <table className="table-auto m-auto">
        <thead>
          <tr className="border-b-4 border-solid border-[#7C7878]">
            {[...Array(colCount)].map((_, index) => (
              <th key={index} className="">
                <input
                  type="text"
                  className="col-input"
                  placeholder={columnNames[index]}
                />
                {colCount > 1 && (
                  <button
                    className="x-btn"
                    onClick={() => {
                      const newColumns = [...Array(colCount - 1)];
                      newColumns.splice(index, 1);
                      setColCount(colCount - 1);
                    }}
                  >
                    X
                  </button>
                )}
              </th>
            ))}
            <button className="add-btn ms-2 m-1" onClick={handleAddColumn}>
              AddColumn
            </button>
          </tr>
        </thead>
        <tbody>
          {[...Array(rowCount)].map((_, rowIndex) => (
            <tr key={rowIndex}>
              {[...Array(colCount)].map((_, colIndex) => (
                <td
                  key={`${rowIndex}-${colIndex}`}
                  className="border px-4 py-2"
                >
                  {/* show  table data */}
                  {/* Row {rowIndex + 1}, Column {colIndex + 1} */}
                  {colCount > 1 && (
                    <input
                      className="ml-2 text-sm text-gray-600 hover:text-red-600 focus:outline-none"
                      // each row delete button
                      // onClick={() => {
                      //   const newRows = [...Array(rowCount)];
                      //   newRows.splice(rowIndex, 1);
                      //   setRowCount(rowCount - 1);
                      // }}
                    ></input>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 flex flex-col gap-2 justify-center w-1/4">
        {isVisible1 && (
          <div className="flex mx-2">
            <input
              className="col-input"
              type="text"
              id="inputField"
              placeholder="Bust"
            />

            <button
              onClick={() => {
                handleDeleteRow();
                handleClick1();
              }}
              className="x-btn"
            >
              X
            </button>
          </div>
        )}
        {isVisible2 && (
          <div className="flex mx-2">
            <input
              className="col-input"
              type="text"
              id="inputField"
              placeholder="Waist"
            />
            <button
              onClick={() => {
                handleDeleteRow();
                handleClick2();
              }}
              className="x-btn"
            >
              X
            </button>
          </div>
        )}
        {isVisible3 && (
          <div className="flex mx-2">
            <input
              className="col-input"
              type="text"
              id="inputField"
              placeholder="Waist"
            />
            <button
              onClick={() => {
                handleDeleteRow();
                handleClick3();
              }}
              className="x-btn"
            >
              X
            </button>
          </div>
        )}
        <button className="add-btn mx-5" onClick={handleAddRow}>
          Add Row
        </button>
      </div>
    </div>
  );
}

export default Table;
