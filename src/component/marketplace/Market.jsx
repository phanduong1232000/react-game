import React from "react";
import Filter from "./Filter";
import "./Market.css";
import Menufilter from "./menufilter/Menufilter";
import Pagin from "./Pagin";



export default function Market() {

  return (
    <>
      <div className="container paddingtop-index">
        <div className="title-market">THƯƠNG TRƯỜNG</div>
        <h3 className="text-center mt-4">Tài sản kỹ thuật số độc quyền</h3>
        <h2 className="text-center hot-market">Sản Phẩm Nổi Bật</h2>
      </div>
      <Pagin itemsPerPage={4} />
      <Filter />
      <Menufilter />
    </>
  );
}


