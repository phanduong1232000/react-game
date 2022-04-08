import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./Menufilter.css";

function Menufilter(props) {
  const [name, setName] = useState();

  const handleChangeName = (e) => {
    const name = e.target.value;
    setName(name);
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
            <h6>Search :</h6>
            <div className="button-filter-sidebar">
              <input
                icon="search"
                className="input-footer-search-sidebar"
                placeholder="Search..."
                onChange={handleChangeName}
              />
              <button className="menufilter-button" onClick={(e) => props.callback(name)}>
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
            <div className="item-body">
              <h6>Sort By:</h6>
              <div className="button-filter">
                <button
                  type="button"
                  onClick={() => props.call("title")}
                  // className={getClassNamesFor("title")}
                >
                  Sắp theo thứ tự
                </button>
                <button
                  type="button"
                  // onClick={() => requestSort("description")}
                  // className={getClassNamesFor("description")}
                >
                  Sắp theo tên
                </button>
                <button
                  type="button"
                  // onClick={() => requestSort("rate")}
                  // className={getClassNamesFor("rate")}
                >
                  Sắp theo giá
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menufilter;
