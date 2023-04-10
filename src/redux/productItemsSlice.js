import { createSlice } from "@reduxjs/toolkit";

const productItemsSlice = createSlice({
  name: "productItems",
  initialState: {
    productItems: null,
  },
  reducers: {
    SET_PRODUCT_ITEMS: (state, action) => {
      state.productItems = action.payload;
    },
  },
});

export const { SET_PRODUCT_ITEMS } = productItemsSlice.actions;

export default productItemsSlice.reducer;
