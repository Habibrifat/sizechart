import { useState } from "react";

function Table() {
  const [colCount, setColCount] = useState(3);
  const [rowCount, setRowCount] = useState(3);
  const columnNames = ["S", "M", "L"];
  const rowNames = ["Bust", "Waist", "Heap"];

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <div className="table-auto m-auto min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2"></th>
                  {[...Array(colCount)].map((_, index) => (
                    <th key={index} className="px-4 py-2">
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
                  <th>
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
                    <td className="px-4 py-2">
                      <input
                        type="text"
                        className="col-input"
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
              </tbody>
            </div>
            <div className="my-4">
              <button
                className="add-btn ms-5"
                onClick={() => setRowCount(rowCount + 1)}
              >
                Add Row
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
