import { useSelector, useDispatch } from "react-redux";
import { SET_WISHLIST } from "../redux/wishlistSlice";

export const useWishlist = () => {
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  const dispatch = useDispatch();

  const addToWishlist = (item) => {
    let existingItem = wishlist.find((wishItem) => wishItem.id === item.id);
    if (!existingItem) {
      let newWishlist = [...wishlist, item];
      dispatch(SET_WISHLIST(newWishlist));
      localStorage.setItem("wishlist", JSON.stringify(newWishlist));
    }
  };

  const removeFromWishlist = (item) => {
    let newWishlist = wishlist.filter((product) => product.id !== item.id);
    dispatch(SET_WISHLIST(newWishlist));
    localStorage.setItem("wishlist", JSON.stringify(newWishlist));
  };

  return {
    wishlist,
    addToWishlist,
    removeFromWishlist,
  };
};
