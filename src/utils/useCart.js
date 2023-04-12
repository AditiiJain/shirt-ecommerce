import { useSelector, useDispatch } from "react-redux";
import { SET_CART_ITEMS } from "../redux/cartItemsSlice";

export const useCart = () => {
  const cartItems = useSelector((state) => state.cartItems.cartItems);
  const dispatch = useDispatch();

  const addToCart = (item, selectSize) => {
    let temporary = {
      ...item[0],
      selectedSize: selectSize,
      cartId: Date.now(),
    };
    const temp = temporary;
    let newCart = [...cartItems, temp];
    dispatch(SET_CART_ITEMS(newCart));
    localStorage.setItem("cartItems", JSON.stringify(newCart));
  };

  const removeFromCart = (cartItemDetails) => {
    let cart = cartItems.filter((product) => {
      return product?.cartId !== cartItemDetails?.cartId;
    });
    dispatch(SET_CART_ITEMS(cart));
    localStorage.setItem("cartItems", JSON.stringify(cart));
  };

  const clearCart = () => {
    dispatch(SET_CART_ITEMS([]));
    localStorage.setItem("cartItems", JSON.stringify([]));
  };

  return {
    cartItems,
    removeFromCart,
    addToCart,
    clearCart,
  };
};
