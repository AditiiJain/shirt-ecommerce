import React from "react";
import "./CartCard.css";
import { TfiClose } from "react-icons/tfi";

import { useCart } from "../../utils/useCart";
function CartCard({ details }) {
  const { removeFromCart } = useCart();
 
  return (
    <div className="cart-card-container">
      <div className="cart-remove" onClick={() => removeFromCart(details)}>
        <TfiClose />
      </div>
      <div className="cart-card-img-container">
        <img src={details?.images[0]} alt="" />
      </div>
      <div className="cart-card-info">
        <p className="cart-card-brand">{details?.brand}</p>
        <p className="cart-card-description">{details?.shortDescription}</p>
        <p className="cart-card-size">
          <span>Size:</span>
          <span>{details?.selectedSize}</span>
        </p>
        <p className="cart-card-price"> ₹{details?.price}</p>
      </div>
    </div>
  );
}

export default CartCard;
