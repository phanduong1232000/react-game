import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import text from "../../data.json"

const items = text.items

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item, i) => (
          <div key={i} className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div className="card-bg-market">
              <div className="card-body">
                <h5 className="card-title-market">#{item.title}</h5>
                <div className="card-text-market">
                  <img src={item.img} alt="..." />
                  <p>{item.description}</p>
                  <div className={item.type}>{item.properties}</div>
                  <div className="rate-item">
                    {item.rate} <span>{item.code}</span>
                  </div>
                </div>
                <div className="item-more-market">
                  <a href="/#" className="">
                    Xem Thêm
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}

function Pagin({ itemsPerPage }) {

  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);


  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row row-market justify-content-center">
        <Items currentItems={currentItems} />
        </div>
        <ReactPaginate
          breakLabel="..."
          nextLabel="Trang kế "
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel=" Trang trước"
          renderOnZeroPageCount={null}
          className="pagin-market"
        />
      </div>
      <h2 className="title-market-filter">Tất cả sản phẩm</h2>
      
    </>
  );
}


export default Pagin;
