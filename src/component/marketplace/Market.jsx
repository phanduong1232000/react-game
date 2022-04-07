import React, {useState} from "react";
import Filter from "./Filter";
import "./Market.css";
import Menufilter from "./menufilter/Menufilter";
import Pagin from "./Pagin";
import texts from "../../data.json";


export default function Market() {
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = texts.items.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(texts.items);
    }
  };


  return (
    <>
      <div className="container paddingtop-index">
        <div className="title-market">THƯƠNG TRƯỜNG</div>
        <h3 className="text-center mt-4">Tài sản kỹ thuật số độc quyền</h3>
        <h2 className="text-center hot-market">Sản Phẩm Nổi Bật</h2>
      </div>
      <Pagin itemsPerPage={4} />
      <Filter result={filteredResults} callback={searchItems} searchInput={searchInput} filteredResults={filteredResults} />
      <Menufilter result={filteredResults} callback={searchItems} searchInput={searchInput} filteredResults={filteredResults} />
    </>
  );
}


