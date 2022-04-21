import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Issues.css";
const Issues = ({ data }) => {
  const [search, setSearch] = useState("");
  if (search.trim().length > 0) {
    data = data.filter((item) => {
      return item.title.toLowerCase().includes(search.toLowerCase());
    });
  }
  return (
    <>
      <Navbar search={search} setSearch={setSearch} />
      <table className="issues_table">
        <tbody>
          <tr>
            <th>#</th>
            <th>Issues</th>
          </tr>
          {data.map((item) => (
            <tr key={item.number}>
              <td>{item.number}</td>
              <td>{item.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Issues;
