import React from "react";
import Slider from "react-slick";
import useCrud from "../../hook/useCRUD.js";
const settings = {
  dots: false,
  infinite: false,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 4,
  // autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear",
  draggable: true,
};
export default function recommended(Props) {
  console.log("recommended", Props.data.dataFetchApi);
  const { handleAddItem } = useCrud();

  // const addItemToCart = (item) => {
  //   handleAddItem(item);
  // };
  const data = Props.data.dataFetchApi;
  return (
    <div className="">
      <Slider {...settings}>
        {data.map((item, index) =>
          item.image &&
          item.name != "banner" &&
          item.category === "Armchairs & Chaises" ? (
            <div className="product__item swiper-slide w-100" key={item._id}>
              <div className="product__thumb fix">
                <div className="product-image w-img">
                  <a href="#">
                    <img src={item.image} alt="product" />
                  </a>
                </div>
                <div className="product__offer">
                  <span className="discount">-{item.discount}</span>
                </div>
                <div className="product-action">
                  <a
                    href="#"
                    className="icon-box icon-box-1"
                    data-bs-toggle="modal"
                    data-bs-target="#productModalId"
                  >
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
              <div className="product__content">
                <h6>
                  <a href="product-details.html">{item.name}</a>
                </h6>
                <div className="rating mb-5">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fal fa-star"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fal fa-star"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fal fa-star"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fal fa-star"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fal fa-star"></i>
                      </a>
                    </li>
                  </ul>
                  <span>(01 review)</span>
                </div>
                <div className="price mb-10">
                  <span>{item.price}</span>
                </div>
                <div className="progress mb-5">
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "10%" }}
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div className="progress-rate">
                  <span>Sold: {item.sold}</span>
                </div>
              </div>
              <div className="product__add-cart text-center">
                <button
                  type="button"
 
                  onClick={()=>{handleAddItem (item)}}
                  className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ) : null
        )}
      </Slider>
    </div>
  );
}
