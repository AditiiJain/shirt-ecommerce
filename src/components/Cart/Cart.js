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
    <div>
      {cartItems && cartItems.length > 0 ? (
        <div className=" ">
          <div className="cart-items-container w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-thin">
            {cartItems &&
              cartItems?.map((cartItem) => (
                <CartCard key={cartItem.id} details={cartItem} />
              ))}
          </div>

          {/* cart total */}
          <div className="cart-bill-container w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2">
            <div className="cart-bill ">
              <p>Sub Total</p>
              <p>$ {total}</p>
            </div>
            <div className="cart-bill">
              <p>Delivery</p>
              <p>$ 2.5</p>
            </div>
          

            <div className="cart-bill">
              <p>Total</p>
              <p> $ {total + 2.5}</p>
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
          <div className="w-full h-full flex flex-col items-center justify-center gap-6">
            <img src={EmptyCart} alt="cart" className="w-300" />
            <p className="text-xl text-textColor font-semibold">
              Add some itmes to your cart
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
