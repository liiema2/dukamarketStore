import React from 'react'
// import $ from 'slick-carousel'
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css'
import TimeDeal from '../../../timeDealofday'
import  List from '../../../slider/dealsOfDay.jsx'
export default function index( props) {

    const data =props
  

  return (
    <div>

<section className="topsell__area-1 pt-15">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="section__head d-flex justify-content-between mb-10">
                            <div className="section__title">
                                <h5 className="st-titile-d">Top Deals Of The Day</h5>
                            </div>
                            <div className="offer-time">
                                <span className="offer-title d-none d-sm-block">Hurry Up! Offer ends in:</span>
                             <TimeDeal></TimeDeal>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="product-bs-slider">
                        <div className="product-slider swiper-container">
                            <div className="swiper-wrapper" >
                                
                                <List data={data}></List>

                                {/* <div className="product__item swiper-slide w-25">
                                    <div className="product__thumb fix">
                                        <div className="product-image w-img">
                                            <a href="product-details.html">
                                                <img src="assets/img/product/tp-6.jpg" alt="product"/>
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
                                    <div className="product__content">
                                        <h6><a href="product-details.html">Vifa Bluetooth Portable Wireless Speaker</a></h6>
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
                                            <span>$150-$270</span>
                                        </div>
                                        <div className="progress mb-5">
                                            <div className="progress-bar bg-danger" role="progressbar" style={{width:"10%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div className="progress-rate">
                                            <span>Sold:370/1225</span>
                                        </div>
                                    </div>
                                    <div className="product__add-cart text-center">
                                        <button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                                        Add to Cart
                                        </button>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        
                        {/* <div className="bs-button bs-button-prev"><i className="fal fa-chevron-left"></i></div>
                        <div className="bs-button bs-button-next"><i className="fal fa-chevron-right"></i></div> */}
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
