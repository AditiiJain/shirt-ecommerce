import { createSlice } from "@reduxjs/toolkit";
import { fetchWishlist } from "../utils/fetchLocalStorageData";

const wishlist = fetchWishlist();

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlist: wishlist,
  },
  reducers: {
    SET_WISHLIST: (state, action) => {
      state.wishlist = action.payload;
    },
  },
});

export const { SET_WISHLIST } = wishlistSlice.actions;
export default wishlistSlice.reducer;
