import React from "react";
import Filter from "./Filter";
import "./Market.css";
import Pagin from "./Pagin";
import { useState } from "react";
import text from "../../data.json";

export default function Market() {

  // search
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = text.items.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });

      setFilteredResults(filteredData);
    } else {
      setFilteredResults(text.items);
    }
  };
  // end search

  return (
    <>
      <div className="container paddingtop-index">
        <div className="title-market">THƯƠNG TRƯỜNG</div>
        <h3 className="text-center mt-4">Tài sản kỹ thuật số độc quyền</h3>
        <h2 className="text-center hot-market">Sản Phẩm Nổi Bật</h2>
      </div>
      <Pagin itemsPerPage={4} />
      <Filter
        callback={searchItems}
        searchInput={searchInput}
        filteredResults={filteredResults}
      />
    </>
  );
}
