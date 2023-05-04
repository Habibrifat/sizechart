import { useState } from "react";

function Table() {
  const [colCount, setColCount] = useState(3);
  const [rowCount, setRowCount] = useState(3);
  const columnNames = ["S", "M", "L"];
  const rowNames = ["Bust", "Waist", "Heap"];

  return (
    <>
      <div className="overflow-x-auto">
        <div className="">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 sticky left-0 z-50 bg-white"></th>
              {[...Array(colCount)].map((_, index) => (
                <th
                  key={index}
                  className="px-4 py-2 border-b-2 border-[#7C7878] sticky left-0 z-10"
                >
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
              {/* Add Column */}
              <th className="px-4 py-2 sticky right-0 bg-white z-50">
                <button
                  className="add-btn"
                  onClick={() => setColCount(colCount + 1)}
                >
                  AddColumn
                </button>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {[...Array(rowCount)].map((_, index) => (
              <tr key={index}>
                <td className="px-4 py-2 sticky left-0 z-20 bg-white flex">
                  <input
                    type="text"
                    className="row-input"
                    placeholder={rowNames[index]}
                  />
                  <button
                    className="x-btn"
                    onClick={() => {
                      const newRows = [...Array(rowCount - 1)];
                      newRows.splice(index, 1);
                      setRowCount(rowCount - 1);
                    }}
                  >
                    X
                  </button>
                </td>
                {[...Array(colCount)].map((_, index2) => (
                  <td key={index2} className="border px-4 py-2">
                    <input type="text" className="outline-none" />
                  </td>
                ))}
                {/* <td>
                      <button
                        className="ml-2 text-sm text-gray-600 hover:text-red-600 focus:outline-none"
                        onClick={() => {
                          const newRows = [...Array(rowCount - 1)];
                          newRows.splice(index, 1);
                          setRowCount(rowCount - 1);
                        }}
                      >
                        Delete
                      </button>
                    </td> */}
              </tr>
            ))}
            {/* add row */}
            <div className="my-4 sticky left-0 z-50">
              <button
                className="add-btn ms-6"
                onClick={() => setRowCount(rowCount + 1)}
              >
                Add Row
              </button>
            </div>
          </tbody>
        </div>
      </div>
    </>
  );
}

export default Table;
