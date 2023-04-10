import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { motion } from "framer-motion";
import { RiRefreshFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { SET_CART_SHOW } from "../redux/cartShowSlice";
import CartItem from "./CartItem";
import EmptyCart from "../img/emptyCart.svg";
import { useEffect, useState } from "react";
import { SET_CART_ITEMS } from "../redux/cartItemsSlice";
function Cart() {
  const [flag, setFlag] = useState(1);
  const [total, setTotal] = useState(0);
  const cartItems = useSelector((state) => state.cartItems.cartItems);
  const user = useSelector((state) => state.user.user);

  const dispatch = useDispatch();

  const showSideSlider = () => {
    const payload = {
      show: false,
      type: "",
    };
    dispatch(SET_SIDE_SLIDER_SHOW(payload));
  };
  useEffect(() => {
    let totalPrice = cartItems.reduce(function (accumulator, item) {
      return accumulator + item.quantity * item.price;
    }, 0);
    setTotal(totalPrice);
  }, [flag, total]);

  const clearCart = () => {
    dispatch(SET_CART_ITEMS([]));
    localStorage.setItem("cartItems", JSON.stringify([]));
  };

  return (
    <div>
        <motion.p
          whileTap={{ scale: 0.75 }}
          className="flex items-center gap-2 p-1 my-2 bg-gray-100 rounded-md hover:shadow-md cursor-pointer text-textColor text-base"
          onClick={clearCart}
        >
          Clear <RiRefreshFill />
        </motion.p>
    
      {cartItems && cartItems.length > 0 ? (
        <div className="w-full h-full bg-cartBg rounded-t-[2rem] flex flex-col">
          <div className="w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-thin">
            {cartItems &&
              cartItems?.map((cartItem) => (
                <CartItem
                  key={cartItem.id}
                  cartItem={cartItem}
                  setFlag={setFlag}
                  flag={flag}
                />
              ))}
          </div>

          {/* cart total */}
          <div className="w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2">
            <div className="w-full flex items-center justify-between">
              <p className="text-gray-400 text-lg">Sub Total</p>
              <p className="text-gray-400 text-lg">$ {total}</p>
            </div>
            <div className="w-full flex items-center justify-between">
              <p className="text-gray-400 text-lg">Delivery</p>
              <p className="text-gray-400 text-lg">$ 2.5</p>
            </div>
            <div className="w-full border-b border-gray-600 my-2"></div>

            <div className="w-full flex items-center justify-between">
              <p className="text-gray-200 text-xl font-semibold">Total</p>
              <p className="text-gray-200 text-xl font-semibold">
                {" "}
                $ {total + 2.5}
              </p>
            </div>

            {user ? (
              <motion.button
                whileTap={{ scale: 0.8 }}
                type="button"
                className="w-full p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-50 text-lg my-2 hover:shadow-lg "
              >
                Check Out
              </motion.button>
            ) : (
              <motion.button
                whileTap={{ scale: 0.8 }}
                type="button"
                className="w-full p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-50 text-lg my-2 hover:shadow-lg "
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
