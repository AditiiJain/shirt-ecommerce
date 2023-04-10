import "./MainContainer.css";
import { useSelector } from "react-redux";
import { FilterSection, ProductCard, Sort } from "../../index";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { FILTER_PRODUCTS } from "../../redux/filterItemsSlice";

const MainContainer = () => {
  const filterItems = useSelector((state) => state.filterItems.filterItems);
  // const filter = useSelector((state) => console.log(state,"state") );
  // const filters = useSelector((state) => state?.filterItems?.filters);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(FILTER_PRODUCTS(filterItems));
  // }, [filters]);
  // let filterItems = [];
  // useEffect(() => {}, [filterItems]);
  // console.log(filterItems, "main");
  return (
    <>
      <section className="main-page-container">
        <div className="filter-left-container">
          <FilterSection />
        </div>
        <div className="items-right-container">
          <Sort />
          {/* <ProductList/> */}
          <div className="product-list">
            {filterItems.length > 0 &&
              filterItems.map((item) => (
                <ProductCard key={item.id} product={item} view={true} />
              ))}
            {filterItems.length == 0 && <div>No such Products Available</div>}
          </div>
        </div>
      </section>
    </>
  );
};

export default MainContainer;
