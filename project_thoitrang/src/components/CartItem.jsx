import React from "react";

const CartItem = ({ item }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p>Giá: {item.price} đ</p>
        <p>Số lượng: {item.quantity}</p>
      </div>
    </div>
  );
};

export default CartItem;