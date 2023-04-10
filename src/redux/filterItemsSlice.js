import { createSlice } from "@reduxjs/toolkit";

const filterItemsSlice = createSlice({
  name: "filterItems",
  initialState: {
    filterItems: [],
    allItems: [],
    sortingValue: "lowest",
    filters: {
      text: "",
    },
  },
  reducers: {
    SET_FILTER_ITEMS: (state, action) => {
      state.filterItems = action.payload;
      state.allItems = action.payload;
    },
    GET_SORT_VALUE: (state, action) => {
      state.sortingValue = action.payload;
    },
    SORTING_PRODUCTS: (state, action) => {
      let newSortData;
      let tempSortProduct = Array.isArray(action.payload)
        ? [...action.payload]
        : [];

      if (state.sortingValue === "lowest") {
        const sortingProducts = (a, b) => {
          return a.price - b.price;
        };
        newSortData = tempSortProduct.sort(sortingProducts);
      }
      if (state.sortingValue === "highest") {
        const sortingProducts = (a, b) => {
          return b.price - a.price;
        };
        newSortData = tempSortProduct.sort(sortingProducts);
      }
      if (state.sortingValue === "a-z") {
        newSortData = tempSortProduct.sort((a, b) => {
          return a.brand.localeCompare(b.brand);
        });
      }
      if (state.sortingValue === "z-a") {
        newSortData = tempSortProduct.sort((a, b) => {
          return b.brand.localeCompare(a.brand);
        });
      }
      state.filterItems = newSortData;
    },
    UPDATE_FILTER_VALUES: (state, action) => {
      const { name, value } = action.payload;
      state.filters = {
        ...state.filters,
        [name]: value,
      };
    },
    FILTER_PRODUCTS: (state, action) => {
      //       let tempFilterProducts = Array.from(state.allItems);
      // console.log(tempFilterProducts)
      //       const { text } = state.filters;

      //       if (text) {
      //         tempFilterProducts = tempFilterProducts.filter((product) => {
      //           return product?.brand?.trim()?.toLowerCase()?.includes(text);
      //         });
      //       }

      //       state.filterItems = tempFilterProducts;

      let tempFilterProducts = action.payload;
      const { text } = state.filters;

      if (text) {
        tempFilterProducts = tempFilterProducts?.filter((product) => {
          return product?.brand?.trim()?.toLowerCase()?.includes(text);
        });
      }

      // state.filterItems =
      //   tempFilterProducts == null ? [] : [...tempFilterProducts];
      // console.log(state.filterItems,"filter")
    },
  },
});

export const {
  SET_FILTER_ITEMS,
  GET_SORT_VALUE,
  SORTING_PRODUCTS,
  UPDATE_FILTER_VALUES,
  FILTER_PRODUCTS,
} = filterItemsSlice.actions;

export default filterItemsSlice.reducer;
