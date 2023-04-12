import "./FilterSection.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  UPDATE_FILTER_VALUES,
  FILTER_PRODUCTS,
} from "../../redux/filterItemsSlice";

function FilterSection() {
  const [categorySelected, setCategorySelected] = useState("");
  const { text } = useSelector((state) => state.filterItems.filters);

  const productItems = useSelector((state) => state.productItems.productItems);
  // const brandData = getUniqueData("brand");

  const getUniqueData = (property) => {
    let newVal = productItems?.map((product) => product[property]);
    newVal = ["all", ...new Set(newVal)];
    return newVal;
  };

  const categoryData = getUniqueData("category");

  const dispatch = useDispatch();

  const updateFilterValue = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    dispatch(UPDATE_FILTER_VALUES({ name, value }));
    dispatch(FILTER_PRODUCTS(productItems));
  };

  return (
    <div className="filter-container">
      <div className="filter-search-container">
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
            className="filter-search"
          />
        </form>
      </div>
      <div className="filter-category-container">
        <h3 className="filter-category-header">Category</h3>
        <div className="filter-category-content">
          {categoryData?.map((currElem, index) => (
            <button
              key={index}
              type="button"
              className={`${currElem == categorySelected?'selected-category':''}`}
              value={currElem}
              name="category"
              onClick={(e) => {
                setCategorySelected(currElem);
                updateFilterValue(e);
              }}
            >
              {currElem}
            </button>
          ))}
        </div>
      </div>
      {/* <div className="filter-brand">
        <h3>Brand</h3>
        {brandData?.map((brand, index) => {
          return (
            <label>
              <input
                type="checkbox"
                checked={checkboxes[index]}
                onChange={(event) => handleCheckboxChange(event, index)}
              />
              {brand}
            </label>
          );
        })}
      </div> */}
    </div>
  );
}

export default FilterSection;
