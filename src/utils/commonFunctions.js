import { SET_SIDE_SLIDER_SHOW } from "../redux/sideSliderShowSlice";
import { SET_WISHLIST } from "../redux/wishlistSlice";
import { SET_CART_ITEMS } from "../redux/cartItemsSlice";
export const showSideSlider = (dispatch, sideSliderShow, type) => {
  //   let payload = {
  //     show: !sideSliderShow,
  //     type: type,
  //   };
  let payload;
  if (type == "") {
    payload = {
      show: false,
      type: type,
    };
  } else {
    payload = {
      show: true,
      type: type,
    };
  }

  dispatch(SET_SIDE_SLIDER_SHOW(payload));
};

export const addToWishlist = (wishlist, dispatch, item) => {
  let existingItem = wishlist.find((wishItem) => wishItem.id === item.id);
  if (!existingItem) {
    let newWishlist = [...wishlist, item];
    dispatch(SET_WISHLIST(newWishlist));
    localStorage.setItem("wishlist", JSON.stringify(newWishlist));
  }
};

export const clearCart = (dispatch) => {
  dispatch(SET_CART_ITEMS([]));
  localStorage.setItem("cartItems", JSON.stringify([]));
};
