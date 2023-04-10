import { configureStore } from "@reduxjs/toolkit";
import cartItemsSliceReducer from "./cartItemsSlice";
import sideSliderSliceReducer from "./sideSliderShowSlice";
import productItemSliceReducer from "./productItemsSlice";
import userSliceReducer from "./userSlice";
import filterItemsSlice from "./filterItemsSlice";
import wishlistSlice from "./wishlistSlice";

const store = configureStore({
  // slices
  reducer: {
    user: userSliceReducer, //slice name:slice reducers
    productItems: productItemSliceReducer,
    sideSliderShow: sideSliderSliceReducer,
    cartItems: cartItemsSliceReducer,
    filterItems: filterItemsSlice,
    wishlist: wishlistSlice,
    devTools: true,
  },
});

export default store;
