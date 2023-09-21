import React from 'react'
// import Form from './header/form'
import Form from "../../header/form"
import Icon from "../../header/icon"
import Nav from "../../navigationBar"
import Menu from "../../menu"
import { Link } from 'react-router-dom'
// import { UseSelector } from 'react-redux'

export default function header() {


   
    const Background  ='assets/img/bg/menu-item.jpg'
  return ( 
    <header className="header d-blue-bg">
    <div className="header-top">
        <div className="container">
            <div className="header-inner">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-7">
                        <div className="header-inner-start">
                            <div className="header__currency border-right">
                                <div className="s-name">
                                    <span>Language: </span>
                                </div>
                                <select>
                                    <option>English</option>
                                    <option>Deutsch</option>
                                    <option>Français</option>
                                    <option>Espanol</option>
                                </select>
                            </div>
                            <div className="header__lang border-right">
                                <div className="s-name">
                                    <span>Currency: </span>
                                </div>
                                <select>
                                    <option> USD</option>
                                    <option>EUR</option>
                                    <option>INR</option>
                                    <option>BDT</option>
                                    <option>BGD</option>
                                </select>
                            </div>
                            <div className="support d-none d-sm-block">
                                <p>Need Help? <a href="tel:+001123456789">+001 123 456 789</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-5 d-none d-lg-block">
                        <div className="header-inner-end text-md-end">
                            <div className="ovic-menu-wrapper">
                                <ul>
                                    <li><a href="about.html">About Us</a></li>
                                    <li><a href="contact.html">Order Tracking</a></li>
                                    <li><a href="contact.html">Contact Us</a></li>
                                    <li><a href="faq.html">FAQs</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="header-mid">
        <div className="container">
            <div className="heade-mid-inner">
                <div className="row align-items-center">
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4">
                        <div className="header__info">
                            <div className="logo">
                                <Link href="/home" className="logo-image"><img src="assets/img/logo/logo1.svg" alt="logo"/></Link>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-xl-5 col-lg-4 d-none d-lg-block">
                        <div className="header__search">
                            <form action="#">
                                <div className="header__search-box">
                                    <input className="search-input" type="text" placeholder="I'm shopping for..."/>
                                    <button className="button" type="submit"><i className="far fa-search"></i> </button>
                                </div>
                                <div className="header__search-cat"  style={{left:"1%" }}  >
                                    <select 
                                    style={{border:"0px none" }} 
                                    
                                    >
                                        <option>All Categories</option>
                                        <option>Best Seller Products</option>
                                        <option>Top 10 Offers</option>
                                        <option>New Arrivals</option>
                                        <option>Phones &amp; Tablets</option>
                                        <option>Electronics &amp; Digital</option>
                                        <option>Fashion &amp; Clothings</option>
                                        <option>Jewelry &amp; Watches</option>
                                        <option>Health &amp; Beauty</option>
                                        <option>Sound &amp; Speakers</option>
                                        <option>TV &amp; Audio</option>
                                        <option>Computers</option>
                                    </select>
                                    
                                </div>
                            </form>
                        </div>
                    </div> */}
                    <Form></Form>
                    <Icon></Icon>
                </div>
            </div>
        </div>
    </div>
    <div className="header__bottom">
        <div className="container">
            <div className="row g-0 align-items-center">
                <div className="col-lg-3">                        
                    {/* <div className="cat__menu-wrapper side-border d-none d-lg-block">
                        <div className="cat-toggle">
                            <button type="button" className="cat-toggle-btn cat-toggle-btn-1"><i className="fal fa-bars"></i> Shop by department</button>
                            <div className="cat__menu">
                                <nav id="mobile-menu" style={{display: "block"}}>
                                    <ul>
                                        <li>
                                            <a href="shop.html">All Categories <i className="far fa-angle-down"></i></a>
                                            <ul className="mega-menu">
                                                <li><a href="shop.html">Shop Pages</a>
                                                    <ul className="mega-item">
                                                        <li><a href="product-details.html">Standard SHop Page</a></li>
                                                        <li><a href="product-details.html">Shop Right Sidebar</a></li>
                                                        <li><a href="product-details.html">Shop Left Sidebar</a></li>
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
                                                    </ul>
                                                </li>
                                                <li><a href="shop.html">Phone &amp; Tablets</a>
                                                    <ul className="mega-item">
                                                        <li><a href="product-details.html">Catagory 1</a></li>
                                                        <li><a href="product-details.html">Catagory 2</a></li>
                                                        <li><a href="product-details.html">Catagory 3</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="shop.html">Phone and Electronics <i className="far fa-angle-down"></i></a>
                                            <ul className="mega-menu mega-menu-2">
                                                <li><a href="shop.html">Shop Pages</a>
                                                    <ul className="mega-item">
                                                        <li><a href="product-details.html">Standard SHop Page</a></li>
                                                        <li><a href="product-details.html">Shop Right Sidebar</a></li>
                                                        <li><a href="product-details.html">Shop Left Sidebar</a></li>
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
                                                    </ul>
                                                </li>
                                                <li><a href="shop.html">Phone &amp; Tablets</a>
                                                    <ul className="mega-item">
                                                        <li><a href="product-details.html">Catagory 1</a></li>
                                                        <li><a href="product-details.html">Catagory 2</a></li>
                                                        <li><a href="product-details.html">Catagory 3</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="shop.html">Best Seller Products
                                                <span className="cat-label">hot!</span>
                                                <i className="far fa-angle-down"></i>
                                            </a>
                                            <ul className="mega-menu">
                                                <li><a href="shop.html">Shop Pages</a>
                                                    <ul className="mega-item">
                                                        <li><a href="product-details.html">Standard SHop Page</a></li>
                                                        <li><a href="product-details.html">Shop Right Sidebar</a></li>
                                                        <li><a href="product-details.html">Shop Left Sidebar</a></li>
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
                                                    </ul>
                                                </li>
                                                <li><a href="shop.html">Phone &amp; Tablets</a>
                                                    <ul className="mega-item">
                                                        <li><a href="product-details.html">Catagory 1</a></li>
                                                        <li><a href="product-details.html">Catagory 2</a></li>
                                                        <li><a href="product-details.html">Catagory 3</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="shop.html">Top 10 Offers
                                                <span className="cat-label green">new!</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="shop.html">New Arrivals <i className="far fa-angle-down"></i></a>
                                            <ul className="submenu">
                                                <li><a href="shop.html">Home Appliances</a></li>
                                                <li><a href="shop.html">Technology</a>
                                                    <ul className="submenu">
                                                        <li><a href="shop.html">Storage Devices</a></li>
                                                        <li><a href="shop.html">Monitors</a></li>
                                                        <li><a href="shop.html">Laptops</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="shop.html">Office Equipments</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="shop.html">TV &amp; Audio</a></li>
                                        <li><a href="shop.html">Electronics &amp; Digital</a></li>
                                        <li className="d-laptop-none"><a href="shop.html">Fashion &amp; Clothings</a></li>
                                        <li className="d-laptop-none"><a href="shop.html">Jewelry &amp; Watches</a></li>
                                        <li><a href="shop.html">Health &amp; Beauty</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div> */}
                    <Menu></Menu>
                </div>
                {/* <div className="col-lg-6 col-md-6 col-3">
                  <div className="header__bottom-left d-flex d-xl-block align-items-center">
                    <div className="side-menu d-lg-none mr-20">
                      <button type="button" className="side-menu-btn offcanvas-toggle-btn"><i className="fas fa-bars"></i></button>
                    </div>
                    <div className="main-menu d-none d-lg-block">
                        <nav>
                            <ul>
                                <li>
                                    <a href="index.html" className="active">Home <i className="far fa-angle-down"></i></a>
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
                                <li><a href="about.html">About Us</a></li>
                                <li className="has-mega"><a href="shop.html">Shop <i className="far fa-angle-down"></i></a>
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
                </div> */}
                <Nav></Nav>
                <div className="col-lg-3 col-md-6 col-9">
                    <div className="shopeing-text text-sm-end">
                        <p>Spend $120 more and get free shipping!</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
  )
}
