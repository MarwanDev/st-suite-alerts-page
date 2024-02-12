import React from "react";
import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";
import logo from "../assets/street suite logo-04.png";
import bell from "../assets/bell-icon.png";
import user from "../assets/user.png";
import { CiCircleChevDown } from "react-icons/ci";

const SearchBar = () => {
  return (
    <div className="searchbar-container">
      <img loading="lazy" className="logo" src={logo} alt="logo" />
      <div className="options-container">
        <div className="search">
          <FaSearch
            style={{ border: "none", backgroundColor: "rgba(0, 0, 0, 0)" }}
            className="search-icon"
          />
          <input
            type="text"
            name="Search"
            placeholder="Search"
            style={{ border: "none", width: "100%", minWidth: 388 }}
          />
        </div>
        <div className="user-info">
          <img loading="lazy" src={bell} alt="bell" className="bell" />
          <img loading="lazy" src={user} alt="user" className="user" />
          <div className="user-container">
            <div className="user-name">Moni Roy</div>
            <div className="user-type">Admin</div>
          </div>
          <CiCircleChevDown style={{ color: "#fff", widows: 70, height: 70 }} />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
