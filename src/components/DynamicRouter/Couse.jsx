import React from "react";
import { useSearchParams } from "react-router-dom";

function Couse() {
  const [searchParam, setSearchParam] = useSearchParams();
  return (
    <div>
      <h1>Couse table</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>React</td>
            <td>1200</td>
            <td>
              <button
                onClick={() =>
                  setSearchParam({ couse: "ReactJS", price: "12000" })
                }
              >
                Detail
              </button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Java</td>
            <td>1400</td>
            <td>
              <button
                onClick={() =>
                  setSearchParam({ couse: "Java", price: "14000" })
                }
              >
                Detail
              </button>
            </td>
          </tr>
        </tbody>
          </table>
          <h3>khoa hoc la: {searchParam.get("couse")} - gia: {searchParam.get("price")}</h3>
    </div>
  );
}

export default Couse;
