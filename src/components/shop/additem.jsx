import React, { useState, useEffect } from 'react';
import useCrud from "../../hook/useCRUD.js";

export default function AddItem(props) {
 const { check, data } = props;
  const { handleAddItem } = useCrud();
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // Lọc dữ liệu dựa trên điều kiện item.category khi check không rỗng
    const filteredItems = data.data.filter((item) => {
      // Kiểm tra nếu check không rỗng và item.category nằm trong danh sách props.check
      if (check && check.length > 0) {
        return (
          item.image &&
          item.name !== "banner" &&
          item.name !== "hostsale" &&
          item.name !== "salebest" &&
          check.includes(item.category)
        );
      }
      // Nếu check rỗng hoặc không được đưa vào, không áp dụng điều kiện kiểm tra
      return item.image && item.name !== "banner" && item.name !== "hostsale" && item.name !== "salebest";
    });

    setFilteredData(filteredItems);
  }, [check, data]);

  const handleAddItem1 = (item) => {
    handleAddItem(item);
  };
  return (
    <div className="row g-0">
      {filteredData.map((item, index) => (
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6" key={index}>
          <div className="product__item product__item-d">
            <div className="product__thumb fix">
              <div className="product-image w-img">
                <a href="product-details.html">
                  <img src={item.image} alt="product" />
                </a>
              </div>
              <div className="product-action">
                <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                  <i className="fal fa-eye"></i>
                  <i className="fal fa-eye"></i>
                </a>
                <a href="#" className="icon-box icon-box-1">
                  <i className="fal fa-heart"></i>
                  <i className="fal fa-heart"></i>
                </a>
                <a href="#" className="icon-box icon-box-1">
                  <i className="fal fa-layer-group"></i>
                  <i className="fal fa-layer-group"></i>
                </a>
              </div>
            </div>
            <div className="product__content-3">
              <h6><a href="product-details.html">{item.name}</a></h6>
              <div className="rating mb-5">
                <ul>
                  <li><a href="#"><i className="fal fa-star"></i></a></li>
                  <li><a href="#"><i className="fal fa-star"></i></a></li>
                  <li><a href="#"><i className="fal fa-star"></i></a></li>
                  <li><a href="#"><i className="fal fa-star"></i></a></li>
                  <li><a href="#"><i className="fal fa-star"></i></a></li>
                </ul>
                <span>(01 review)</span>
              </div>
              <div className="price mb-10">
                <span>{item.price}</span>
              </div>
            </div>
            <div className="product__add-cart-s text-center">
              <button type="button" onClick={() => { handleAddItem1(item) }} className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
                Add to Cart
              </button>
              <button type="button" className="wc-checkout d-flex align-items-center justify-content-center w-100" data-bs-toggle="modal" data-bs-target="#productModalId">
                Quick View
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
