import React, { useState, useEffect } from "react";
import { getProduct } from "../../../services/api/product";
import useCrud from "../../../hook/useCRUD.js";
export default function Index() {
  const [searchInput, setSearchInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [dataFetchApi, setDataFetchApi] = useState([]);
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getProduct();
      setDataFetchApi(data);
    };
    fetchData();
  }, []);
  useEffect(() => {
    if (searchInput === "") {
      setSearchData([]);
    }
  }, [searchInput, selectedCategory]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const tempSearchData = dataFetchApi.filter((item) => {
      const regex = new RegExp(searchInput, "i");
      const matchesSearchInput = regex.test(item.name);
      if (
        selectedCategory === "All Categories" &&
        item.name != "banner" &&
        item.name != "hostsale"
      ) {
        return matchesSearchInput; // Return true if it matches the search input
      } else {
        return (
          matchesSearchInput &&
          item.category === selectedCategory &&
          item.name != "banner" &&
          item.name != "hostsale"
        ); // Check both search input and category
      }
    });

    setSearchData(tempSearchData);
  };

  const { handleAddItem } = useCrud();
  return (
    <div
      style={{ display: "flex" }}
      className="col-xl-5 col-lg-4 d-none d-lg-block"
    >
      <div className="col-xl-5 col-lg-4 d-none d-lg-block">
        <div className="header__search">
          <form action="#" onChange={handleSearch}>
            <div className="header__search-box">
              <input
                className="search-input"
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="I'm shopping for..."
              />
              <button className="button" type="submit">
                <i className="far fa-search"></i>
              </button>
            </div>
            <div className="header__search-cat" style={{ left: "1%" }}>
              <select
                style={{ border: "0px none" }}
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value={"All Categories"}>All Categories</option>

                <option value={"Consumer Electrics"}>Consumer Electrics</option>
                <option value={"Phones & Accessories"}>Phones</option>
                <option value={"Computers & Technologies"}>Computers </option>

                <option value={"Books & Office"}>Books & Office</option>
                <option value={"Sport & Outdoo"}>Sport & Outdoo</option>

                <option value={"Armchairs & Chaises"}>
                  Armchairs & Chaises
                </option>
              </select>
            </div>
          </form>
        </div>
      </div>
      <div
        className="resultsContent"
        style={{
          marginTop: "5px",
          position: "absolute",
          background: "white",
          borderRadius: "5px",
          width: "580px",
        }}
      >
        {searchData.map((product) => (
          <div
            className="item-ult"
            key={product._id}
            style={{ display: "flex", padding: "10px" }}
          >
            <div className="thumbs" style={{ display: "flex" }}>
              <a>
                <img
                  alt={product.name}
                  src={product.image}
                  style={{ width: "50px", height: "50px" }}
                />
              </a>
            </div>
            <div
              className="title"
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <a className={`/products/${product.name}`} title={product.name}>
                {product.name}
              </a>
              <p className="f-initial">{product.price}₫</p>
              {product.discount && (
                <p className="f-initial">
                  <del>{product.discount}₫</del>
                </p>
              )}

              <div className="w-50">
                <button
                  style={{ width: "40px", height: "50px", marginLeft: "5px" }}
                  type="button"
                  onClick={() => {
                    handleAddItem(product);
                  }}
                  className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
