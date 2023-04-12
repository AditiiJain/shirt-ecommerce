import "./MainContainer.css";
import { useSelector } from "react-redux";
import { FilterSection, ProductCard, Sort } from "../../index";

const MainContainer = () => {
  const filterItems = useSelector((state) => state.filterItems.filterItems);

  return (
    <>
      <section className="main-page-container">
        <div className="filter-left-container">
          <FilterSection />
        </div>
        <div className="items-right-container">
          <Sort />
          <div className="product-list">
            {filterItems?.length > 0 &&
              filterItems?.map((item) => (
                <ProductCard key={item.id} product={item} view={true} />
              ))}
            {filterItems?.length == 0 && <div>No such Products Available</div>}
          </div>
        </div>
      </section>
    </>
  );
};

export default MainContainer;
