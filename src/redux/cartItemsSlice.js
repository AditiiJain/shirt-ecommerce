import { createSlice } from "@reduxjs/toolkit";
import { fetchCartItems } from "../utils/fetchLocalStorageData";

const cartItems = fetchCartItems();

const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState: {
    cartItems: cartItems,
  },
  reducers: {
    SET_CART_ITEMS: (state, action) => {
        state.cartItems = action.payload
    },
  },
});

export const { SET_CART_ITEMS } = cartItemsSlice.actions;
export default cartItemsSlice.reducer;
