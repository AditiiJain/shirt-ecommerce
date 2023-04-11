export const fetchUser = () => {
  const userInfo =
    localStorage.getItem("user") !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : localStorage.clear();

  return userInfo;
};

export const fetchCartItems = () => {
  const cartItems =
    JSON.parse(localStorage.getItem("cartItems")) !== null &&
    JSON.parse(localStorage.getItem("cartItems")) !== undefined
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [];
  return cartItems;
};
export const fetchWishlist = () => {
  const wishlist =
    JSON.parse(localStorage.getItem("wishlist")) !== null &&
    JSON.parse(localStorage.getItem("wishlist")) !== undefined
      ? JSON.parse(localStorage.getItem("wishlist"))
      : [];
      
  return wishlist;
};
