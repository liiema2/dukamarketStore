import React,{useEffect,useState} from 'react'
import useCrud from "../../../../hook/useCRUD.js";
export default function index(props) {
    // console.log(props.dataFetchApi)
    const [data, setData] = useState([]);

  // useEffect should take a function as the first argument, not an object
  useEffect(() => {
    // Filter the data when props.dataFetchApi changes and set it to the state
    setData(props.dataFetchApi.filter(product => product.category === "Lighting"));
  }, [props.dataFetchApi]); // Make sure to specify props.dataFetchApi as the dependency

  // Now you can log the filtered lightingProducts
  if (data.length > 0) {
    console.log(data, "Lighting Product");
  }

  const { handleAddItem } = useCrud();
  return (
    <div>
         <section className="featured light-bg pt-55 pb-40">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="section__head d-flex justify-content-between mb-30">
                            <div className="section__title">
                                <h5 className="st-titile">Top Featured Products</h5>
                            </div>
                            <div className="button-wrap">
                                <a href="shop">See All Product <i className="fal fa-chevron-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">           
                    <div className="col-xl-6 col-lg-12">
                        <div className="single-features-item single-features-item-d b-radius mb-20">
                            <div className="row  g-0 align-items-center">
                                <div className="col-md-6">
                                    <div className="features-thum">
                                        <div className="features-product-image w-img">
                                            <a href="shop">
                                                
                                            <img src={data[0]?.image || "assets/img/features-product/fpb-1.jpg"} alt="" />
                                                
                                                </a>
                                        </div>
                                        <div className="product__offer">
                                            <span className="discount">{data[0]?.discount || "-15"}</span>
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
                                <div className="col-md-6">
                                    <div className="product__content product__content-d">
                                        <h6><a href="shop">{data[0]?.name || "Samsang Galaxy A70 128GB Dual-SIM"}</a></h6>
                                        <div className="rating ">
                                            <ul className="rating-d">
                                                <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                <li><a href="#"><i className="fal fa-star"></i></a></li>
                                            </ul>
                                            <span>(01 review)</span>
                                        </div>
                                        <div className="price d-price mb-10">
                                            <span>{data[0]?.price }</span>
                                        </div>
                                        <div className="features-des mb-25">
                                            <ul>
                                                <li><a href="shop"><i className="fas fa-circle"></i> Bass and Stereo Sound.</a></li>
                                                <li><a href="shop"><i className="fas fa-circle"></i> Display with 3088 x 1440 pixels resolution.</a></li>
                                                <li><a href="shop"><i className="fas fa-circle"></i> Memory, Storage &amp; SIM: 12GB RAM, 256GB.</a></li>
                                                <li><a href="shop"><i className="fas fa-circle"></i> Androi v10.0 Operating system.</a></li>
                                            </ul>
                                        </div>
                                        <div className="cart-option">
                                            <a href="#" className="cart-btn-2 w-100 mr-10" onClick={()=>{handleAddItem(data[0])}} > Add to Cart</a>
                                            <a href="cart.html" className="transperant-btn"><i className="fal fa-heart"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-12">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="single-features-item b-radius mb-20">
                                    <div className="row  g-0 align-items-center">
                                        <div className="col-6">
                                            <div className="features-thum">
                                                <div className="features-product-image w-img">
                                                    <a href="shop"><img src={data[1]?.image} alt=""/></a>
                                                </div>
                                                <div className="product__offer">
                                                    <span className="discount">-15%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="product__content product__content-d">
                                                <h6><a href="shop">{data[1]?.name}</a></h6>
                                                <div className="rating ">
                                                    <ul>
                                                        <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                    </ul>
                                                    <span>(02 review)</span>
                                                </div>
                                                <div className="price d-price">
                                                    <span>{data[1]?.price}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="single-features-item b-radius mb-20">
                                    <div className="row  g-0 align-items-center">
                                        <div className="col-6">
                                            <div className="features-thum">
                                                <div className="features-product-image w-img">
                                                    <a href="shop"><img src={data[2]?.image} alt=""/></a>
                                                </div>
                                                <div className="product__offer">
                                                    <span className="discount">-5%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="product__content product__content-d">
                                                <h6><a href="shop">{data[2]?.name}</a></h6>
                                                <div className="rating ">
                                                    <ul>
                                                        <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                    </ul>
                                                    <span>(01 review)</span>
                                                </div>
                                                <div className="price d-price">
                                                    <span>{data[2]?.price}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="single-features-item b-radius mb-20">
                                    <div className="row  g-0 align-items-center">
                                        <div className="col-6">
                                            <div className="features-thum">
                                                <div className="features-product-image w-img">
                                                    <a href="shop"><img src={data[3]?.image}alt=""/></a>
                                                </div>
                                                <div className="product__offer">
                                                    <span className="discount">{data[3]?.discount}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="product__content product__content-d">
                                                <h6><a href="shop">{data[3]?.name}</a></h6>
                                                <div className="rating ">
                                                    <ul>
                                                        <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                    </ul>
                                                    <span>(01 review)</span>
                                                </div>
                                                <div className="price d-price">
                                                    <span>{data[3]?.price}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="single-features-item b-radius mb-20">
                                    <div className="row  g-0 align-items-center">
                                        <div className="col-6">
                                            <div className="features-thum">
                                                <div className="features-product-image w-img">
                                                    <a href="shop"><img src={data[4]?.image} alt=""/></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="product__content product__content-d">
                                                <h6><a href="shop">{data[4]?.name}</a></h6>
                                                <div className="rating ">
                                                    <ul>
                                                        <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                    </ul>
                                                    <span>(01 review)</span>
                                                </div>
                                                <div className="price d-price">
                                                    <span>{data[4]?.price}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
