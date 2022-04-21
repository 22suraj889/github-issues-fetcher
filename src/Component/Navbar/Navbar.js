import React from "react";
import "./Navbar.css";
const Navbar = ({ search, setSearch }) => {
  return (
    <nav className="navbar">
      <div className="navbar_search">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </div>
    </nav>
  );
};

export default Navbar;
