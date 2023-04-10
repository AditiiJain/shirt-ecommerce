import React from "react";
import "./CartCard.css";
import { TfiClose } from "react-icons/tfi";
import { useDispatch, useSelector } from "react-redux";
import { SET_CART_ITEMS } from "../../redux/cartItemsSlice";
function CartCard({ details }) {
  const cartItems = useSelector((state) => state.cartItems.cartItems);
  const dispatch = useDispatch();

  const removeFromCart = () => {
    console.log(details.selectedSize);
    let cart = cartItems.filter((product) => {
     
      return (
        product.id !== details.id &&
        product.selectedSize != details.selectedSize
      );
    });
    dispatch(SET_CART_ITEMS(cart));
    localStorage.setItem("cartItems", JSON.stringify(cart));
  };
  return (
    <div className="cart-card-container">
      <div className="cart-remove" onClick={() => removeFromCart()}>
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
