import React from 'react'
import {Link} from "react-router-dom"
export default function index() {
  return (
   
           <div className="col-lg-6 col-md-6 col-3">
                  <div className="header__bottom-left d-flex d-xl-block align-items-center">
                    <div className="side-menu d-lg-none mr-20">
                      <button type="button" className="side-menu-btn offcanvas-toggle-btn"><i className="fas fa-bars"></i></button>
                    </div>
                    <div className="main-menu d-none d-lg-block">
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/home" className="active">Home <i className="far fa-angle-down"></i></Link>
                                    <ul className="megamenu-1">
                                        <li><a href="index.html">Home Pages</a>
                                            <ul className="mega-item">
                                                <li><a href="index.html" className="active">Home One</a></li>
                                                <li><a href="index-2.html">Home Two</a></li>
                                                <li><a href="index-3.html">Home Three</a></li>
                                                <li><a href="product-details.html">Shop 3 Column</a></li>
                                                <li><a href="product-details.html">Shop 4 Column</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="shop.html">Product Pages</a>
                                            <ul className="mega-item">
                                                <li><a href="product-details.html">Product Details</a></li>
                                                <li><a href="product-details.html">Product V2</a></li>
                                                <li><a href="product-details.html">Product V3</a></li>
                                                <li><a href="product-details.html">Varriable Product</a></li>
                                                <li><a href="product-details.html">External Product</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="shop.html">Other Pages</a>
                                            <ul className="mega-item">
                                                <li><a href="product-details.html">wishlist</a></li>
                                                <li><a href="product-details.html">Shopping Cart</a></li>
                                                <li><a href="product-details.html">Checkout</a></li>
                                                <li><a href="product-details.html">Login</a></li>
                                                <li><a href="product-details.html">Register</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="shop.html">Phone &amp; Tablets</a>
                                            <ul className="mega-item">
                                                <li><a href="product-details.html">Catagory 1</a></li>
                                                <li><a href="product-details.html">Catagory 2</a></li>
                                                <li><a href="product-details.html">Catagory 3</a></li>
                                                <li><a href="product-details.html">Catagory 4</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="shop.html">Phone &amp; Tablets</a>
                                            <ul className="mega-item">
                                                <li><a href="product-details.html">Catagory 1</a></li>
                                                <li><a href="product-details.html">Catagory 2</a></li>
                                                <li><a href="product-details.html">Catagory 3</a></li>
                                                <li><a href="product-details.html">Catagory 4</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li><Link to="/about">About Us</Link></li>
                                <li className="has-mega"><Link to="/shop">Shop <i className="far fa-angle-down"></i></Link>
                                    <div className="mega-menu">
                                        <div className="container container-mega">
                                            <ul>    
                                                <li>
                                                    <ul>
                                                    <li className="title"><a href="shop.html">SHOP LAYOUT</a></li>
                                                    <li><a href="shop.html">Pagination</a></li>
                                                    <li><a href="shop.html">Ajax Load More</a></li>
                                                    <li><a href="shop.html">Infinite Scroll</a></li>
                                                    <li><a href="shop.html">Sidebar Right</a></li>
                                                    <li><a href="shop.html">Sidebar Left</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <ul>
                                                    <li className="title"><a href="shop.html">SHOP PAGES</a></li>
                                                    <li><a href="shop.html">List View</a></li>
                                                    <li><a href="shop.html">Small Products</a></li>
                                                    <li><a href="shop.html">Large Products</a></li>
                                                    <li><a href="shop.html">Shop — 3 Items</a></li>
                                                    <li><a href="shop.html">Shop — 4 Items</a></li>
                                                    <li><a href="shop.html">Shop — 5 Items</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <ul>
                                                    <li className="title"><a href="shop.html">PRODUCT LAYOUT</a></li>
                                                    <li><a href="shop.html">Description Sticky</a></li>
                                                    <li><a href="shop.html">Product Carousel</a></li>
                                                    <li><a href="shop.html">Gallery Modern</a></li>
                                                    <li><a href="shop.html">Thumbnail Left</a></li>
                                                    <li><a href="shop.html">Thumbnail Right</a></li>
                                                    <li><a href="shop.html">Thumbnail Botttom</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <ul>
                                                    <li className="title"><a href="shop.html">Basketball</a></li>
                                                    <li><a href="shop.html">East Hampton Fleece</a></li>
                                                    <li><a href="shop.html">Faxon Canvas Low</a></li>
                                                    <li><a href="shop.html">Habitasse Dictumst</a></li>
                                                    <li><a href="shop.html">Kaoreet Lobortis</a></li>
                                                    <li><a href="shop.html">NikeCourt Zoom</a></li>
                                                    <li><a href="shop.html">NikeCourts Air Zoom</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <ul>
                                                    <li className="title"><a href="shop.html">Basketball</a></li>
                                                    <li><a href="shop.html">East Hampton Fleece</a></li>
                                                    <li><a href="shop.html">Faxon Canvas Low</a></li>
                                                    <li><a href="shop.html">Habitasse Dictumst</a></li>
                                                    <li><a href="shop.html">Kaoreet Lobortis</a></li>
                                                    <li><a href="shop.html">NikeCourt Zoom</a></li>
                                                    <li><a href="shop.html">NikeCourts Air Zoom</a></li>
                                                    </ul>
                                                </li>
                                                <li className="mega-image hover-effect" style={{backgroundImage: 'url("../../assets/img/bg/menu-item.jpg")'}}> 
                                                    <ul>
                                                      <li><a href="shop.html">
                                                        <h4>Top Cameras <br/> Bestseller Products</h4>
                                                        <h5>4K</h5>
                                                        <h6>Sale Up To <span>60% Off</span></h6>
                                                      </a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="offer mt-40">
                                            <p><b>30% OFF</b> the shipping of your first order with the code: <b>DUKA-SALE30</b></p>
                                        </div>
                                    </div>
                                </li>
                                <li><a href="blog.html">Blog <i className="far fa-angle-down"></i></a>
                                    <ul className="submenu">
                                        <li><a href="blog.html">Blog</a></li>
                                        <li><a href="blog-details.html">Blog Details</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="about.html">Pages <i className="far fa-angle-down"></i></a>
                                    <ul className="submenu">
                                        <li><a href="my-account.html">My Account</a></li>
                                        <li><a href="product-details.html">Product Details</a></li>
                                        <li><a href="faq.html">FAQs pages</a></li>
                                        <li><a href="cart.html">Cart</a></li>
                                        <li><a href="wishlist.html">Wishlist</a></li>
                                        <li><a href="checkout.html">Checkout</a></li>
                                        <li><a href="contact.html">Contact Us</a></li>
                                        <li><a href="404.html">404 Error</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                  </div>
                </div>
 
  )
}
