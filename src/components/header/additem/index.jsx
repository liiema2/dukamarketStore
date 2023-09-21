import React from "react";
import useCrud from '../../../hook/useCRUD.js';

function CartItem({ id, img, name, price, handleRemove }) {
  return (
    <div className="cart__item d-flex justify-content-between align-items-center">
      <div className="cart__inner d-flex">
        <div className="cart__thumb">
          <a href="product-details.html">
            <img src={img} alt="" />
          </a>
        </div>
        <div className="cart__details">
          <h6>
            <a href="product-details.html">{name}: £{price}, Debenhams Plus</a>
          </h6>
          <div className="cart__price">
            <span>${price}.00</span>
          </div>
        </div>
      </div>
      <div className="cart__del" onClick={() => handleRemove(id)}>
        <a href="#"><i className="fal fa-times"></i></a>
      </div>
    </div>
  );
}

function Cart() {
  const { shop, handleRemoveItem } = useCrud();
 
  return (
    <div>
      {shop.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          img={item.img}
          name={item.name}
          price={item.price}
          handleRemove={handleRemoveItem} 
        />
      ))}
    </div>
  );
}

export default Cart;
