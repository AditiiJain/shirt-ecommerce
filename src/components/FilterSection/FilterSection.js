import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  UPDATE_FILTER_VALUES,
  FILTER_PRODUCTS,
} from "../../redux/filterItemsSlice";

function FilterSection() {
  const text = useSelector((state) => state.filterItems.filters.text);
  const products = useSelector((state) => state.productItems.productItems);
  const dispatch = useDispatch();

  const updateFilterValue = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    dispatch(UPDATE_FILTER_VALUES({ name, value }));
    dispatch(FILTER_PRODUCTS(products));
  };

  return (
    <div className="filter-container">
      <div className="filter-search">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            placeholder="Search by brand"
            type="text"
            name="text"
            value={text}
            onChange={(e) => updateFilterValue(e)}
          />
        </form>
      </div>
    </div>
  );
}

export default FilterSection;
