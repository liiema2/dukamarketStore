import React from 'react'
import AddItem from '../../../shop/additem'
import { useState } from 'react'
export default function index(props) {
    console.log('props', props.data)
     const [checkboxStates, setCheckboxStates] = useState([]);

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    setCheckboxStates((prev) => {
      if (prev.includes(value)) {
        
        return prev.filter((item) => item !== value);
      } else {
       
        return [...prev, value];
      }
    });

    console.log(checkboxStates);
      
      };
  
  return (
    <div>


<div className="shop-area mb-20">
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-4">
                        <div className="product-widget mb-30">
                            <h5 className="pt-title">Product categories</h5>
                            <div className="widget-category-list mt-20">
                                <form action="#">
                                    <div className="single-widget-category">
                                        <input  type="checkbox" id="cat-item-1"     name="cat-item"/>
                                        <label htmlFor="cat-item-1">Clothing &amp; Apparel <span>(12)</span></label>
                                    </div>
                                    <div className="single-widget-category">
                                        <input type="checkbox" value='Consumer Electrics' id="cat-item-2"
          onChange={handleCheckboxChange} name="cat-item"/>
                                        <label htmlFor="cat-item-2">Consumer Electrics <span>(60)</span></label>
                                    </div>
                                    <div className="single-widget-category">
                                        <input type="checkbox"  value='Computers & Technologies' id="cat-item-3"  
           name="cat-item" onChange={handleCheckboxChange}/>
                                        <label htmlFor="cat-item-3">Computers &amp; Technologies <span>(41)</span></label>
                                    </div>
                                    <div className="single-widget-category">
                                        <input type="checkbox" id="cat-item-4" onChange={handleCheckboxChange} value='Phones & Accessories' name="cat-item"/>
                                        <label htmlFor="cat-item-4"> Phones &amp; Accessories <span>(28)</span></label>
                                    </div>
                                    {/* <div className="single-widget-category">
                                        <input type="checkbox" id="cat-item-5"  name="cat-item"/>
                                        <label htmlFor="cat-item-5">Babies &amp; Moms <span>(21)</span></label>
                                    </div> */}
                                    <div className="single-widget-category">
                                        <input type="checkbox" id="cat-item-7"onChange={handleCheckboxChange} value='Books & Office' name="cat-item"/>
                                        <label htmlFor="cat-item-7">Books &amp; Office <span>(62)</span></label>
                                    </div>
                                    <div className="single-widget-category">
                                        <input type="checkbox" id="cat-item-8" onChange={handleCheckboxChange} value='Sport & Outdoo' name="cat-item"/>
                                        <label htmlFor="cat-item-8">Sport &amp; Outdoo <span>(22)</span></label>
                                    </div>
                                    <div className="single-widget-category">
                                        <input type="checkbox" id="cat-item-9"  onChange={handleCheckboxChange} value='Chairs & Stools' name="cat-item"/>
                                        <label htmlFor="cat-item-9">Chairs &amp; Stools <span>(20)</span></label>
                                    </div>
                                    {/* <div className="single-widget-category">
                                        <input type="checkbox" id="cat-item-10" name="cat-item"/>
                                        <label htmlFor="cat-item-10">Furniture &amp; Acessories <span>(06)</span></label>
                                    </div>
                                    <div className="single-widget-category">
                                        <input type="checkbox" id="cat-item-11" name="cat-item"/>
                                        <label htmlFor="cat-item-11">Kitchen &amp; Tableware <span>(30)</span></label>
                                    </div> */}
                              
                                    <div className="single-widget-category">
                                        <input type="checkbox" id="cat-item-13" onChange={handleCheckboxChange} value='Armchairs & Chaises' name="cat-item"/>
                                        <label htmlFor="cat-item-13">Armchairs &amp; Chaises <span>(30)</span></label>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="product-widget mb-30">
                            <h5 className="pt-title">Filter By Price</h5>
                            <div className="price__slider mt-30">
                                <div id="slider-range" className="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"><div className="ui-slider-range ui-corner-all ui-widget-header" style={{left:"0%",width:"100%"}}></div><span tabIndex="0" className="ui-slider-handle ui-corner-all ui-state-default" style={{left:"0%"}}></span><span tabIndex="0" className="ui-slider-handle ui-corner-all ui-state-default" style={{left:"100%"}}></span></div>
                                <div>
                                    <form action="#" className="s-form mt-20">
                                        <input type="text" id="amount" readOnly=""/>
                                        <button type="submit" className="tp-btn-square-lg">Filter</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="product-widget mb-30">
                            <h5 className="pt-title">Choose Color</h5>
                            <div className="product__color mt-20">
                                <ul>
                                   <li>
                                      <a href="#" className="black"></a>
                                   </li>
                                   <li>
                                      <a href="#" className="blue"></a>
                                   </li>
                                   <li>
                                      <a href="#" className="red"></a>
                                   </li>
                                   <li>
                                      <a href="#" className="yellow"></a>
                                   </li>
                                   <li>
                                      <a href="#" className="pink"></a>
                                   </li>
                                   <li>
                                      <a href="#" className="brown"></a>
                                   </li>
                                   <li>
                                      <a href="#" className="green"></a>
                                   </li>
                                   <li>
                                      <a href="#" className="oragne"></a>
                                   </li>
                                </ul>
                          </div>
                        </div>
                        <div className="product-widget mb-30">
                            <h5 className="pt-title">Choose Rating</h5>
                            <div className="widget-category-list mt-20">
                                <form action="#">
                                    <div className="single-widget-rating">
                                        <input type="checkbox" id="star-item-1" name="star-item"/>
                                        <label htmlFor="star-item-1">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <span>(54)</span>
                                        </label>
                                    </div>
                                    <div className="single-widget-rating">
                                        <input type="checkbox" id="star-item-2" name="star-item"/>
                                        <label htmlFor="star-item-2">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fal fa-star"></i>
                                            <span>(37)</span>
                                        </label>
                                    </div>
                                    <div className="single-widget-rating">
                                        <input type="checkbox" id="star-item-3" name="star-item"/>
                                        <label htmlFor="star-item-3">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fal fa-star"></i>
                                            <i className="fal fa-star"></i>
                                            <span>(7)</span>
                                        </label>
                                    </div>
                                    <div className="single-widget-rating">
                                        <input type="checkbox" id="star-item-4" name="star-item"/>
                                        <label htmlFor="star-item-4">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fal fa-star"></i>
                                            <i className="fal fa-star"></i>
                                            <i className="fal fa-star"></i>
                                            <span>(5)</span>
                                        </label>
                                    </div>
                                    <div className="single-widget-rating">
                                        <input type="checkbox" id="star-item-5" name="star-item"/>
                                        <label htmlFor="star-item-5">
                                            <i className="fas fa-star"></i>
                                            <i className="fal fa-star"></i>
                                            <i className="fal fa-star"></i>
                                            <i className="fal fa-star"></i>
                                            <i className="fal fa-star"></i>
                                            <span>(3)</span>
                                        </label>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="product-widget mb-30">
                            <h5 className="pt-title">Choose Size</h5>
                            <div className="widget-category-list mt-20">
                                <form action="#">
                                    <div className="single-widget-category">
                                        <input type="checkbox" id="choose-item-1" name="choose-item"/>
                                        <label htmlFor="choose-item-1">S <span>(12)</span></label>
                                    </div>
                                    <div className="single-widget-category">
                                        <input type="checkbox" id="choose-item-2" name="choose-item"/>
                                        <label htmlFor="choose-item-2">L <span>(60)</span></label>
                                    </div>
                                    <div className="single-widget-category">
                                        <input type="checkbox" id="choose-item-3" name="choose-item"/>
                                        <label htmlFor="choose-item-3">M <span>(41)</span></label>
                                    </div>
                                    <div className="single-widget-category">
                                        <input type="checkbox" id="choose-item-4" name="choose-item"/>
                                        <label htmlFor="choose-item-4">XXL <span>(28)</span></label>
                                    </div>
                                    <div className="single-widget-category">
                                        <input type="checkbox" id="choose-item-5" name="choose-item"/>
                                        <label htmlFor="choose-item-5">2XL <span>(21)</span></label>
                                    </div>
                                    <div className="single-widget-category">
                                        <input type="checkbox" id="choose-item-7" name="choose-item"/>
                                        <label htmlFor="choose-item-7">3XL <span>(62)</span></label>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="product-widget mb-30">
                            <h5 className="pt-title">Choose Brand</h5>
                            <div className="widget-category-list mt-20">
                                <form action="#">
                                    <div className="single-widget-category">
                                        <input type="checkbox" id="brand-item-1" name="brand-item"/>
                                        <label htmlFor="brand-item-1">CarRentals <span>(12)</span></label>
                                    </div>
                                    <div className="single-widget-category">
                                        <input type="checkbox" id="brand-item-2" name="brand-item"/>
                                        <label htmlFor="brand-item-2">CarVoodoo <span>(60)</span></label>
                                    </div>
                                    <div className="single-widget-category">
                                        <input type="checkbox" id="brand-item-3" name="brand-item"/>
                                        <label htmlFor="brand-item-3">Creative <span>(41)</span></label>
                                    </div>
                                    <div className="single-widget-category">
                                        <input type="checkbox" id="brand-item-4" name="brand-item"/>
                                        <label htmlFor="brand-item-4">Impact <span>(28)</span></label>
                                    </div>
                                    <div className="single-widget-category">
                                        <input type="checkbox" id="brand-item-5" name="brand-item"/>
                                        <label htmlFor="brand-item-5">IQVia <span>(21)</span></label>
                                    </div>
                                    <div className="single-widget-category">
                                        <input type="checkbox" id="brand-item-7" name="brand-item"/>
                                        <label htmlFor="brand-item-7">LeadsGreen <span>(62)</span></label>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="product-widget mb-30">
                            <h5 className="pt-title">Special Offers</h5>
                            <div className="product__sm mt-20">
                                <ul>
                                    <li className="product__sm-item d-flex align-items-center">
                                        <div className="product__sm-thumb mr-20">
                                            <a href="product-details.html">
                                                <img src="assets/img/product/sm-1.jpg" alt=""/>
                                            </a>
                                        </div>
                                        <div className="product__sm-content">
                                            <h5 className="product__sm-title">
                                                <a href="product-details.html">classNameic Leather Backpack Daypack 2022</a>
                                            </h5>
                                            <div className="product__sm-price">
                                                <span className="price">$300.00</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="product__sm-item d-flex align-items-center">
                                        <div className="product__sm-thumb mr-20">
                                            <a href="product-details.html">
                                                <img src="assets/img/product/sm-2.jpg" alt=""/>
                                            </a>
                                        </div>
                                        <div className="product__sm-content">
                                            <h5 className="product__sm-title">
                                                <a href="product-details.html">Samsung Galaxy A12, 32GB, Black - (Locked)</a>
                                            </h5>
                                            <div className="product__sm-price">
                                                <span className="price">$150.00</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="product__sm-item d-flex align-items-center">
                                        <div className="product__sm-thumb mr-20">
                                            <a href="product-details.html">
                                                <img src="assets/img/product/sm-3.jpg" alt=""/>
                                            </a>
                                        </div>
                                        <div className="product__sm-content">
                                            <h5 className="product__sm-title">
                                                <a href="#">Coffee Maker AH240a Full Function</a>
                                            </h5>
                                            <div className="product__sm-price">
                                                <span className="price">$300.00</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="product__sm-item d-flex align-items-center">
                                        <div className="product__sm-thumb mr-20">
                                            <a href="product-details.html">
                                                <img src="assets/img/product/sm-4.jpg" alt=""/>
                                            </a>
                                        </div>
                                        <div className="product__sm-content">
                                            <h5 className="product__sm-title">
                                                <a href="product-details.html">Imported Wooden Felt Cushion Chair</a>
                                            </h5>
                                            <div className="product__sm-price">
                                                <span className="price">$120.00</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="product__sm-item d-flex align-items-center">
                                        <div className="product__sm-thumb mr-20">
                                            <a href="product-details.html">
                                                <img src="assets/img/product/sm-5.jpg" alt=""/>
                                            </a>
                                        </div>
                                        <div className="product__sm-content">
                                            <h5 className="product__sm-title">
                                                <a href="product-details.html">Sunhouse Decorative Lights - Imported</a>
                                            </h5>
                                            <div className="product__sm-price">
                                                <span className="price">$110.00</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-9 col-lg-8">
                        <div className="shop-banner mb-30">
                            <div className="banner-image">
                                <img className="banner-l" src="assets/img/banner/sl-banner.jpg" alt=""/>
                                <img className="banner-sm" src="assets/img/banner/sl-banner-sm.png" alt=""/>
                                <div className="banner-content text-center">
                                    <p className="banner-text mb-30">Hurry Up! <br/> Free Shipping All Order Over $99</p>
                                    <a href="shop.html" className="st-btn-d b-radius">Discover now</a>
                                </div>
                            </div>
                        </div>
                        <div className="product-lists-top">
                            <div className="product__filter-wrap">
                                <div className="row align-items-center">
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                        <div className="product__filter d-sm-flex align-items-center">
                                            <div className="product__col">
                                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                                    <li className="nav-item" role="presentation">
                                                      <button className="nav-link active" id="FourCol-tab" data-bs-toggle="tab" data-bs-target="#FourCol" type="button" role="tab" aria-controls="FourCol" aria-selected="true">
                                                        <i className="fal fa-th"></i>
                                                      </button>
                                                    </li>
                                                    <li className="nav-item" role="presentation">
                                                      <button className="nav-link" id="FiveCol-tab" data-bs-toggle="tab" data-bs-target="#FiveCol" type="button" role="tab" aria-controls="FiveCol" aria-selected="false">
                                                        <i className="fal fa-list"></i>
                                                      </button>
                                                    </li>
                                                  </ul>
                                            </div>
                                            <div className="product__result pl-60">
                                                <p>Showing 1-20 of 29 relults</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                        <div className="product__filter-right d-flex align-items-center justify-content-md-end">
                                            <div className="product__sorting product__show-no">
                                                <select>
                                                    <option>10</option>
                                                    <option>20</option>
                                                    <option>30</option>
                                                    <option>40</option>
                                                </select>
                                            </div>
                                            <div className="product__sorting product__show-position ml-20">
                                                <select>
                                                    <option>Latest</option>
                                                    <option>New</option>
                                                    <option>Up comeing</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        </div>
                        <div className="tab-content" id="productGridTabContent">
                            <div className="tab-pane fade  show active" id="FourCol" role="tabpanel" aria-labelledby="FourCol-tab">
                                <div className="tp-wrapper">
                                    <AddItem data={props} check={checkboxStates} ></AddItem>
                                  
                                </div>
                            </div>
                            <div className="tab-pane fade" id="FiveCol" role="tabpanel" aria-labelledby="FiveCol-tab">
                                <div className="tp-wrapper-2">
                                    <div className="single-item-pd">
                                        <div className="row align-items-center">
                                            <div className="col-xl-9">
                                                <div className="single-features-item single-features-item-df b-radius mb-20">
                                                    <div className="row  g-0 align-items-center">
                                                        <div className="col-md-4">
                                                            <div className="features-thum">
                                                                <div className="features-product-image w-img">
                                                                    <a href="product-details.html"><img src="assets/img/product/sm-1.jpg" alt=""/></a>
                                                                </div>
                                                                <div className="product__offer">
                                                                    <span className="discount">-15%</span>
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
                                                        </div>
                                                        <div className="col-md-8">
                                                            <div className="product__content product__content-d">
                                                                <h6><a href="product-details.html">classNameic Leather Backpack Daypack 2022</a></h6>
                                                                <div className="rating mb-5">
                                                                    <ul className="rating-d">
                                                                        <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                                        <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                                        <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                                        <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                                        <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                                    </ul>
                                                                    <span>(01 review)</span>
                                                                </div>
                                                                <div className="features-des">
                                                                    <ul>
                                                                        <li><a href="product-details.html"><i className="fas fa-circle"></i> Bass and Stereo Sound.</a></li>
                                                                        <li><a href="product-details.html"><i className="fas fa-circle"></i> Display with 3088 x 1440 pixels resolution.</a></li>
                                                                        <li><a href="product-details.html"><i className="fas fa-circle"></i> Memory, Storage &amp; SIM: 12GB RAM, 256GB.</a></li>
                                                                        <li><a href="product-details.html"><i className="fas fa-circle"></i> Androi v10.0 Operating system.</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3">
                                                <div className="product-stock mb-15">
                                                    <h5>Availability: <span> 940 in stock</span></h5>
                                                    <h6>$220.00 - <del> $240.00</del></h6>
                                                </div>
                                                <div className="stock-btn ">
                                                    <button type="button" className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
                                                    Add to Cart
                                                    </button>
                                                    <button type="button" className="wc-checkout d-flex align-items-center justify-content-center w-100" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                        Quick View
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-item-pd">
                                        <div className="row align-items-center">
                                            <div className="col-xl-9">
                                                <div className="single-features-item single-features-item-df b-radius mb-20">
                                                    <div className="row  g-0 align-items-center">
                                                        <div className="col-md-4">
                                                            <div className="features-thum">
                                                                <div className="features-product-image w-img">
                                                                    <a href="product-details.html"><img src="assets/img/product/sm-2.jpg" alt=""/></a>
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
                                                        </div>
                                                        <div className="col-md-8">
                                                            <div className="product__content product__content-d">
                                                                <h6><a href="product-details.html">Samsang Galaxy A70 128GB Dual-SIM</a></h6>
                                                                <div className="rating mb-5">
                                                                    <ul className="rating-d">
                                                                        <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                                        <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                                        <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                                        <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                                        <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                                    </ul>
                                                                    <span>(01 review)</span>
                                                                </div>
                                                                <div className="features-des">
                                                                    <ul>
                                                                        <li><a href="product-details.html"><i className="fas fa-circle"></i> Bass and Stereo Sound.</a></li>
                                                                        <li><a href="product-details.html"><i className="fas fa-circle"></i> Display with 3088 x 1440 pixels resolution.</a></li>
                                                                        <li><a href="product-details.html"><i className="fas fa-circle"></i> Memory, Storage &amp; SIM: 12GB RAM, 256GB.</a></li>
                                                                        <li><a href="product-details.html"><i className="fas fa-circle"></i> Androi v10.0 Operating system.</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3">
                                                <div className="product-stock mb-15">
                                                    <h5>Availability: <span> 940 in stock</span></h5>
                                                    <h6>$216.00</h6>
                                                </div>
                                                <div className="stock-btn ">
                                                    <button type="button" className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
                                                    Add to Cart
                                                    </button>
                                                    <button type="button" className="wc-checkout d-flex align-items-center justify-content-center w-100" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                        Quick View
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-item-pd">
                                        <div className="row align-items-center">
                                            <div className="col-xl-9">
                                                <div className="single-features-item single-features-item-df b-radius mb-20">
                                                    <div className="row  g-0 align-items-center">
                                                        <div className="col-md-4">
                                                            <div className="features-thum">
                                                                <div className="features-product-image w-img">
                                                                    <a href="product-details.html"><img src="assets/img/product/sm-3.jpg" alt=""/></a>
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
                                                        </div>
                                                        <div className="col-md-8">
                                                            <div className="product__content product__content-d">
                                                                <h6><a href="product-details.html">Coffee Maker AH240a Full Function</a></h6>
                                                                <div className="rating mb-5">
                                                                    <ul className="rating-d">
                                                                        <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                                        <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                                        <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                                        <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                                        <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                                    </ul>
                                                                    <span>(01 review)</span>
                                                                </div>
                                                                <div className="features-des">
                                                                    <ul>
                                                                        <li><a href="product-details.html"><i className="fas fa-circle"></i> Bass and Stereo Sound.</a></li>
                                                                        <li><a href="product-details.html"><i className="fas fa-circle"></i> Display with 3088 x 1440 pixels resolution.</a></li>
                                                                        <li><a href="product-details.html"><i className="fas fa-circle"></i> Memory, Storage &amp; SIM: 12GB RAM, 256GB.</a></li>
                                                                        <li><a href="product-details.html"><i className="fas fa-circle"></i> Androi v10.0 Operating system.</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3">
                                                <div className="product-stock mb-15">
                                                    <h5>Availability: <span> 940 in stock</span></h5>
                                                    <h6>$125.00</h6>
                                                </div>
                                                <div className="stock-btn ">
                                                    <button type="button" className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
                                                    Add to Cart
                                                    </button>
                                                    <button type="button" className="wc-checkout d-flex align-items-center justify-content-center w-100" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                        Quick View
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-item-pd">
                                        <div className="row align-items-center">
                                            <div className="col-xl-9">
                                                <div className="single-features-item single-features-item-df b-radius mb-20">
                                                    <div className="row  g-0 align-items-center">
                                                        <div className="col-md-4">
                                                            <div className="features-thum">
                                                                <div className="features-product-image w-img">
                                                                    <a href="product-details.html"><img src="assets/img/product/sm-4.jpg" alt=""/></a>
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
                                                        </div>
                                                        <div className="col-md-8">
                                                            <div className="product__content product__content-d">
                                                                <h6><a href="product-details.html">Imported Wooden Felt Cushion Chair</a></h6>
                                                                <div className="rating mb-5">
                                                                    <ul className="rating-d">
                                                                        <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                                        <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                                        <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                                        <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                                        <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                                    </ul>
                                                                    <span>(01 review)</span>
                                                                </div>
                                                                <div className="features-des">
                                                                    <ul>
                                                                        <li><a href="product-details.html"><i className="fas fa-circle"></i> Bass and Stereo Sound.</a></li>
                                                                        <li><a href="product-details.html"><i className="fas fa-circle"></i> Display with 3088 x 1440 pixels resolution.</a></li>
                                                                        <li><a href="product-details.html"><i className="fas fa-circle"></i> Memory, Storage &amp; SIM: 12GB RAM, 256GB.</a></li>
                                                                        <li><a href="product-details.html"><i className="fas fa-circle"></i> Androi v10.0 Operating system.</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3">
                                                <div className="product-stock mb-15">
                                                    <h5>Availability: <span> 940 in stock</span></h5>
                                                    <h6>$160.00</h6>
                                                </div>
                                                <div className="stock-btn ">
                                                    <button type="button" className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
                                                    Add to Cart
                                                    </button>
                                                    <button type="button" className="wc-checkout d-flex align-items-center justify-content-center w-100" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                        Quick View
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-item-pd">
                                        <div className="row align-items-center">
                                            <div className="col-xl-9">
                                                <div className="single-features-item single-features-item-df b-radius mb-20">
                                                    <div className="row  g-0 align-items-center">
                                                        <div className="col-md-4">
                                                            <div className="features-thum">
                                                                <div className="features-product-image w-img">
                                                                    <a href="product-details.html"><img src="assets/img/product/sm-5.jpg" alt=""/></a>
                                                                </div>
                                                                <div className="product__offer">
                                                                    <span className="discount">-15%</span>
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
                                                        </div>
                                                        <div className="col-md-8">
                                                            <div className="product__content product__content-d">
                                                                <h6><a href="product-details.html">Sunhouse Decorative Lights – Imported</a></h6>
                                                                <div className="rating mb-5">
                                                                    <ul className="rating-d">
                                                                        <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                                        <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                                        <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                                        <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                                        <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                                    </ul>
                                                                    <span>(01 review)</span>
                                                                </div>
                                                                <div className="features-des">
                                                                    <ul>
                                                                        <li><a href="product-details.html"><i className="fas fa-circle"></i> Bass and Stereo Sound.</a></li>
                                                                        <li><a href="product-details.html"><i className="fas fa-circle"></i> Display with 3088 x 1440 pixels resolution.</a></li>
                                                                        <li><a href="product-details.html"><i className="fas fa-circle"></i> Memory, Storage &amp; SIM: 12GB RAM, 256GB.</a></li>
                                                                        <li><a href="product-details.html"><i className="fas fa-circle"></i> Androi v10.0 Operating system.</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3">
                                                <div className="product-stock mb-15">
                                                    <h5>Availability: <span> 940 in stock</span></h5>
                                                    <h6>$125.00</h6>
                                                </div>
                                                <div className="stock-btn ">
                                                    <button type="button" className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
                                                    Add to Cart
                                                    </button>
                                                    <button type="button" className="wc-checkout d-flex align-items-center justify-content-center w-100" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                        Quick View
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-item-pd">
                                        <div className="row align-items-center">
                                            <div className="col-xl-9">
                                                <div className="single-features-item single-features-item-df b-radius mb-20">
                                                    <div className="row  g-0 align-items-center">
                                                        <div className="col-md-4">
                                                            <div className="features-thum">
                                                                <div className="features-product-image w-img">
                                                                    <a href="product-details.html"><img src="assets/img/product/sm-6.jpg" alt=""/></a>
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
                                                        </div>
                                                        <div className="col-md-8">
                                                            <div className="product__content product__content-d">
                                                                <h6><a href="product-details.html">Korea Stainless Steel Pot Set 5 Piecs</a></h6>
                                                                <div className="rating mb-5">
                                                                    <ul className="rating-d">
                                                                        <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                                        <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                                        <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                                        <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                                        <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                                    </ul>
                                                                    <span>(01 review)</span>
                                                                </div>
                                                                <div className="features-des">
                                                                    <ul>
                                                                        <li><a href="product-details.html"><i className="fas fa-circle"></i> Bass and Stereo Sound.</a></li>
                                                                        <li><a href="product-details.html"><i className="fas fa-circle"></i> Display with 3088 x 1440 pixels resolution.</a></li>
                                                                        <li><a href="product-details.html"><i className="fas fa-circle"></i> Memory, Storage &amp; SIM: 12GB RAM, 256GB.</a></li>
                                                                        <li><a href="product-details.html"><i className="fas fa-circle"></i> Androi v10.0 Operating system.</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3">
                                                <div className="product-stock mb-15">
                                                    <h5>Availability: <span> 940 in stock</span></h5>
                                                    <h6>$99</h6>
                                                </div>
                                                <div className="stock-btn ">
                                                    <button type="button" className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
                                                    Add to Cart
                                                    </button>
                                                    <button type="button" className="wc-checkout d-flex align-items-center justify-content-center w-100" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                        Quick View
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-item-pd">
                                        <div className="row align-items-center">
                                            <div className="col-xl-9">
                                                <div className="single-features-item single-features-item-df b-radius mb-20">
                                                    <div className="row  g-0 align-items-center">
                                                        <div className="col-md-4">
                                                            <div className="features-thum">
                                                                <div className="features-product-image w-img">
                                                                    <a href="product-details.html"><img src="assets/img/product/sm-7.jpg" alt=""/></a>
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
                                                        </div>
                                                        <div className="col-md-8">
                                                            <div className="product__content product__content-d">
                                                                <h6><a href="product-details.html">HP Stainless Steel Hot Water Bottle</a></h6>
                                                                <div className="rating mb-5">
                                                                    <ul className="rating-d">
                                                                        <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                                        <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                                        <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                                        <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                                        <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                                    </ul>
                                                                    <span>(01 review)</span>
                                                                </div>
                                                                <div className="features-des">
                                                                    <ul>
                                                                        <li><a href="product-details.html"><i className="fas fa-circle"></i> Bass and Stereo Sound.</a></li>
                                                                        <li><a href="product-details.html"><i className="fas fa-circle"></i> Display with 3088 x 1440 pixels resolution.</a></li>
                                                                        <li><a href="product-details.html"><i className="fas fa-circle"></i> Memory, Storage &amp; SIM: 12GB RAM, 256GB.</a></li>
                                                                        <li><a href="product-details.html"><i className="fas fa-circle"></i> Androi v10.0 Operating system.</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3">
                                                <div className="product-stock mb-15">
                                                    <h5>Availability: <span> 940 in stock</span></h5>
                                                    <h6>$125.00</h6>
                                                </div>
                                                <div className="stock-btn ">
                                                    <button type="button" className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
                                                    Add to Cart
                                                    </button>
                                                    <button type="button" className="wc-checkout d-flex align-items-center justify-content-center w-100" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                        Quick View
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-item-pd">
                                        <div className="row align-items-center">
                                            <div className="col-xl-9">
                                                <div className="single-features-item single-features-item-df b-radius mb-20">
                                                    <div className="row  g-0 align-items-center">
                                                        <div className="col-md-4">
                                                            <div className="features-thum">
                                                                <div className="features-product-image w-img">
                                                                    <a href="product-details.html"><img src="assets/img/product/sm-8.jpg" alt=""/></a>
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
                                                        </div>
                                                        <div className="col-md-8">
                                                            <div className="product__content product__content-d">
                                                                <h6><a href="product-details.html">The North Face Womens Resolve 2 Jack</a></h6>
                                                                <div className="rating mb-5">
                                                                    <ul className="rating-d">
                                                                        <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                                        <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                                        <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                                        <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                                        <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                                    </ul>
                                                                    <span>(01 review)</span>
                                                                </div>
                                                                <div className="features-des">
                                                                    <ul>
                                                                        <li><a href="product-details.html"><i className="fas fa-circle"></i> Bass and Stereo Sound.</a></li>
                                                                        <li><a href="product-details.html"><i className="fas fa-circle"></i> Display with 3088 x 1440 pixels resolution.</a></li>
                                                                        <li><a href="product-details.html"><i className="fas fa-circle"></i> Memory, Storage &amp; SIM: 12GB RAM, 256GB.</a></li>
                                                                        <li><a href="product-details.html"><i className="fas fa-circle"></i> Androi v10.0 Operating system.</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3">
                                                <div className="product-stock mb-15">
                                                    <h5>Availability: <span> 940 in stock</span></h5>
                                                    <h6>$140.00</h6>
                                                </div>
                                                <div className="stock-btn ">
                                                    <button type="button" className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
                                                    Add to Cart
                                                    </button>
                                                    <button type="button" className="wc-checkout d-flex align-items-center justify-content-center w-100" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                        Quick View
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tp-pagination text-center">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="basic-pagination pt-30 pb-30">
                                        <nav>
                                           <ul>
                                              <li>
                                                 <a href="shop.html" className="active">1</a>
                                              </li>
                                              <li>
                                                 <a href="shop.html">2</a>
                                              </li>
                                              <li>
                                                 <a href="shop.html">3</a>
                                              </li>
                                             <li>
                                                <a href="shop.html">5</a>
                                             </li>
                                             <li>
                                                <a href="shop.html">6</a>
                                             </li>
                                              <li>
                                                 <a href="shop.html">
                                                    <i className="fal fa-angle-double-right"></i>
                                                 </a>
                                              </li>
                                           </ul>
                                         </nav>
                                     </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
