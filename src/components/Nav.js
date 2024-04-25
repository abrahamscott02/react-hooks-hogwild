import React from "react";
import piggy from "../assets/porco.png";

const Nav = ({ toggleGreasedFilter, handleSortChange }) => {
  return (
    <div className="navWrapper">
      <span className="headerText">HogWild</span>
      <div className="TwirlyPig">
        {/* Greased filter toggle */}
        <label>
          <input type="checkbox" onChange={toggleGreasedFilter} />
          Show Greased Hogs
        </label>
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <span className="normalText">
        A React App for County Fair Hog Fans
      </span>
      {/* Sorting dropdown */}
      <div>
        <select onChange={handleSortChange}>
          <option value="">Sort By</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </div>
    </div>
  );
};

export default Nav;
