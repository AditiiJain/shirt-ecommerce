import "./FilterSection.css";
import { useDispatch, useSelector } from "react-redux";
import {
  UPDATE_FILTER_VALUES,
  FILTER_PRODUCTS,
} from "../../redux/filterItemsSlice";

function FilterSection() {
  const { text } = useSelector((state) => state.filterItems.filters);
  const productItems = useSelector((state) => state.productItems.productItems);

  // const getUniqueData = (property) => {
  //   let newVal = productItems?.map((product) => product[property]);
  //   newVal = ["All", ...new Set(newVal)];
  //   console.log(newVal);
  // };

  // const categoryData = getUniqueData("category");

  const dispatch = useDispatch();

  const updateFilterValue = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    dispatch(UPDATE_FILTER_VALUES({ name, value }));
    dispatch(FILTER_PRODUCTS(productItems));
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
      {/* <div className="filter-category">
        <h3>Category</h3>
        <div>
          {categoryData?.map((currElem, index) => (
            <button key={index} type="button" value={currElem} name="category">
              {currElem}
            </button>
          ))}
        </div>
      </div> */}
    </div>
  );
}

export default FilterSection;
