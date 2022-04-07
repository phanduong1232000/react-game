import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./Menufilter.css";
import texts from "../../../data.json"

const text = texts.items;

function Menufilter() {

  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = text.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(text);
    }
  };

  return (
    <div>
      <button
        className="filter-menu"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        <i className="fa-solid fa-filter"></i>
      </button>

      <div
        className="offcanvas menu-offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header menu-offcanvas-header ">
          <button
            type="button"
            className="btn-close text-reset "
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body menu-canvas-body">
          <h4>FILTER</h4>
          <div className="item-body">
            <h6>Sort By: </h6>
            <div className="button-filter">
              <input
                icon="search"
                className="input-footer"
                placeholder="Search..."
                onChange={(e) => searchItems(e.target.value)}
              />
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menufilter;
