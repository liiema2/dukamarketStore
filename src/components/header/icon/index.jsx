import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import {  faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import AddItem from "../additem"
import useCrud from '../../../hook/useCRUD.js';
import { useSelector } from 'react-redux';
import { selectTotalItems } from "../../../redux/count";
import { selectTotalFilteredValue } from "../../../redux/count";
export default function index() {
  const {shop}=useCrud();
  const countItem = useSelector(selectTotalItems);
  const totalItems = useSelector(selectTotalFilteredValue);
  // console.log(countItem)
  // console.log(totalItems,"sdada")
  return (


<div className="col-xl-4 col-lg-5 col-md-8 col-sm-8">
                        <div className="header-action">
                            <div className="block-userlink">
                                <a className="icon-link" >
                                {/* href="my-account.html" */}
                                <i className="">
                                {/* <FontAwesomeIcon icon={faEnvelope} /> */}
                                <FontAwesomeIcon icon={faUser} size='xs' style={{color: "#fff",}} />
                          
                                </i>
                                <span className="text">
                                <span className="sub">Login </span>
                                My Account </span>
                                </a>
                            </div>
                            <div className="block-wishlist action">
                                <a className="icon-link" >
                                {/* href="wishlist.html" */}
                                <i className="">
                                <FontAwesomeIcon icon={faHeart} style={{color: "#fff",}} />
                                </i>
                                <span className="count">0</span>
                                <span className="text">
                                <span className="sub">Favorite</span>
                                My Wishlist </span>
                                </a>
                            </div>
                            <div className="block-cart action">
                                <a className="icon-link">
                                {/* href="cart.html" */}
                                <i className="">
                                <FontAwesomeIcon icon={faCartShopping} style={{color: "#ffffff",}} />

                                </i>
                                <span className="count">{countItem }</span>
                                <span className="text">
                                <span className="sub">Your Cart:</span>
                                {totalItems} </span>
                                </a>
                                <div className="cart">
                                    <div className="cart__mini">
                                        <ul>
                                            <li>
                                              <div className="cart__title">
                                                <h4>Your Cart</h4>
                                                <span>({countItem } Item in Cart)</span>
                                              </div>
                                            </li>
                                            <li>
                                         
                                              <AddItem></AddItem>
                                            </li>

                                            <li>
                                              <div className="cart__sub d-flex justify-content-between align-items-center">
                                                <h6>Subtotal</h6>
                                                <span className="cart__sub-total">{totalItems}</span>
                                              </div>
                                            </li>
                                            <li>
                                                <a href="cart.html" className="wc-cart mb-10">View cart</a>
                                                <a href="checkout.html" className="wc-checkout">Checkout</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
  
  )
}
