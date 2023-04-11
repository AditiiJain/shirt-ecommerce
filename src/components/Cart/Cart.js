import { motion } from "framer-motion";

import "./Cart.css";
import { useSelector } from "react-redux";
import EmptyCart from "../../img/emptyCart.svg";
import { useEffect, useState } from "react";
import CartCard from "../CartCard/CartCard";


function Cart() {
  const [total, setTotal] = useState(0);
  const cartItems = useSelector((state) => state.cartItems.cartItems);
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    let totalPrice = cartItems.reduce(function (accumulator, item) {
      return accumulator + item.quantity * item.price;
    }, 0);
    setTotal(totalPrice);
  }, [total]);

  return (
    <>
      {cartItems && cartItems.length > 0 ? (
        <div className="cart-container">
          <div className="cart-items-container">
            {cartItems &&
              cartItems?.map((cartItem) => (
                <CartCard key={cartItem.id} details={cartItem} />
              ))}
          </div>

          {/* cart total */}
          <div className="cart-bill-container">
            <div className="cart-bill ">
              <p>Sub Total</p>
              <p>₹ {total}</p>
            </div>
            <div className="cart-bill">
              <p>Delivery</p>
              <p>₹ 69.5</p>
            </div>

            <div className="cart-bill">
              <p>Total</p>
              <p> ₹ {total + 69.5}</p>
            </div>

            {user ? (
              <motion.button
                whileTap={{ scale: 0.8 }}
                type="button"
                className="cart-btn"
              >
                Check Out
              </motion.button>
            ) : (
              <motion.button
                whileTap={{ scale: 0.8 }}
                type="button"
                className="cart-btn "
              >
                Login to check out
              </motion.button>
            )}
          </div>
        </div>
      ) : (
        <>
          <div className="empty-cart-container">
            <img src={EmptyCart} alt="cart" />
            <p>Add some itmes to your cart</p>
          </div>
        </>
      )}
    </>
  );
}

export default Cart;
