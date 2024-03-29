import React from "react";
import { Card } from "semantic-ui-react";
import texts from "../../data.json";
import "./Market.css";
import Menufilter from "./menufilter/Menufilter";


  const useSortableData = (items, config = null) => {


    const [sortConfig, setSortConfig] = React.useState(config);

    const sortedItems = React.useMemo(() => {
      let sortableItems = [...items];

      const handleString = (string) => {
        let y = string;
        let x = Number(string);

        if (x === Number(string)) {
          return x;
        }
        if (y === string) {
          return y;
        }
      };

      if (sortConfig !== null) {
        sortableItems.sort((a, b) => {
          if (
            handleString(a[sortConfig.key]) < handleString(b[sortConfig.key])
          ) {
            return sortConfig.direction === "ascending" ? -1 : 1;
          }

          if (
            handleString(a[sortConfig.key]) > handleString(b[sortConfig.key])
          ) {
            return sortConfig.direction === "ascending" ? 1 : -1;
          }

          return 0;
        });
      }
      return sortableItems;
    }, [items, sortConfig]);

    const requestSort = (key) => {
      let direction = "ascending";
      if (
        sortConfig &&
        sortConfig.key === key &&
        sortConfig.direction === "ascending"
      ) {
        direction = "descending";
      }
      setSortConfig({ key, direction });
    };

    return { items: sortedItems, requestSort, sortConfig };
  };

  const ProductTable = (props) => {
    const { items, requestSort, sortConfig } = useSortableData(props.products);
    const getClassNamesFor = (name) => {
      if (!sortConfig) {
        return;
      }
      return sortConfig.key === name ? sortConfig.direction : undefined;
    };

  return (
    <>
      <div className="button-filter">
        <button
          type="button"
          onClick={() => requestSort("title")}
          className={getClassNamesFor("title")}
        >
          Sắp theo thứ tự
        </button>
        <button
          type="button"
          onClick={() => requestSort("description")}
          className={getClassNamesFor("description")}
        >
          Sắp theo tên
        </button>
        <button
          type="button"
          onClick={() => requestSort("rate")}
          className={getClassNamesFor("rate")}
        >
          Sắp theo giá
        </button>
      </div>
      <div className="search-input">
      <input
            icon="search"
            className="input-footer-search"
            placeholder="Search..."
            onChange={(e) => props.callback(e.target.value)}
          />{" "}
          <i className="fa-solid fa-magnifying-glass search-i"></i>
      </div>


      <Card.Group style={{ marginTop: 20 }}>
        <div className="container-fluid">
          <div className="row row-market">
            {props.searchInput
              ? props.filteredResults.map((item, i) => {
                  return (
                    <div
                      key={i}
                      className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12"
                    >
                      <div className="card-bg-market">
                        <div className="card-body">
                          <h5 className="card-title-market">#{item.title} </h5>
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
                  );
                })
              : items.map((item, i) => {
                  return (
                    <div
                      key={i}
                      className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12"
                    >
                      <div className="card-bg-market">
                        <div className="card-body">
                          <h5 className="card-title-market">#{item.title} </h5>
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
                  );
                })}
          </div>
        </div>
      </Card.Group>
    </>
  );
};

export default function Filter(props) {
  return (
    <div className="App">
      <ProductTable
        products={texts.items}
        callback={props.callback}
        searchInput={props.searchInput}
        filteredResults={props.filteredResults}
      />
      
       <Menufilter
        callback={props.callback}
        searchInput={props.searchInput}
        filteredResults={props.filteredResults}
        
        
        
      />
    </div>
  );
}
