require("dotenv").config();
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Nav, Error, SideSliderWrapper } from "./index";
import { Provider } from "react-redux";
import store from "./redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { SET_PRODUCT_ITEMS } from "./redux/productItemsSlice";
import { SET_FILTER_ITEMS, SORTING_PRODUCTS } from "./redux/filterItemsSlice";
import { getAllItems } from "./utils/firebaseFunctions";
import { MainContainer, ProductDetails } from "./index";
import { useShowSideSlider } from "./utils/useShowSideSlider";

const App = () => {
  const dispatch = useDispatch();
  const { sideSliderShow } = useShowSideSlider();
  const sorting_value = useSelector((state) => state.filterItems.sortingValue);
  const filterItems = useSelector((state) => state.filterItems.filterItems);
  const filters = useSelector((state) => state.filterItems.filters);
  const productItems = useSelector((state) => state.productItems.productItems);

  const fetchItems = async () => {
    await getAllItems().then((data) => {
      dispatch(SET_PRODUCT_ITEMS(data));
    });
  };

  const filterItemsDispatch = async () => {
    dispatch(SET_FILTER_ITEMS(productItems));
  };

  useEffect(() => {
    fetchItems();
  }, []);

  useEffect(() => {
    filterItemsDispatch();
  }, [productItems]);

  // useEffect(() => {
  // dispatch(FILTER_PRODUCTS(allItems));
  // dispatch(SORTING_PRODUCTS(filterItems));
  // }, [productItems, sorting_value]);
  // }, [productItems, sorting_value, filters]);

  useEffect(() => {
    // dispatch(FILTER_PRODUCTS(allItems));
    dispatch(SORTING_PRODUCTS(filterItems));
  }, [sorting_value, filters]);

  return (
    <div className="page-container">
      <Nav />
      <main className="main-container">
        <Outlet />
        {sideSliderShow && <SideSliderWrapper />}
      </main>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Provider store={store}>
        <App />
      </Provider>
    ),
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/shirt/:shirtId",
        element: <ProductDetails />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
