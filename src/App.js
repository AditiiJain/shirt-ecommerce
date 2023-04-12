import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { Nav, Error, SideSliderWrapper } from "./index";
// import { AnimatePresence } from "framer-motion";

// import Footer from "./components/Footer/Footer";

import { Provider } from "react-redux";
import store from "./redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { SET_PRODUCT_ITEMS } from "./redux/productItemsSlice";
import {
  FILTER_PRODUCTS,
  SET_FILTER_ITEMS,
  SORTING_PRODUCTS,
} from "./redux/filterItemsSlice";
import { getAllItems } from "./utils/firebaseFunctions";
import { MainContainer, ProductDetails } from "./index";
import { useShowSideSlider } from "./utils/useShowSideSlider";

// const PrivateRoute = ({ children }) => {
//   const user = useSelector((state) => state.user.user);
//   return user !== null && user.email === "iaditi.jain08@gmail.com" ? (
//     children
//   ) : (
//     <Navigate to="/" replace />
//   );
// };

const App = () => {
  const dispatch = useDispatch();
  const { sideSliderShow } = useShowSideSlider();
  const sorting_value = useSelector((state) => state.filterItems.sortingValue);
  const filterItems = useSelector((state) => state.filterItems.filterItems);
  const filters = useSelector((state) => state.filterItems.filters);
  const allItems = useSelector((state) => state.filterItems.allItems);
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
    // <AnimatePresence mode="wait">
    <div className="page-container">
      <Nav />
      <main className="main-container">
        <Outlet />
        {sideSliderShow && <SideSliderWrapper />}
      </main>

      {/* <Footer /> */}
    </div>
    // </AnimatePresence>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Provider store={store}>
        {/* <FilterContextProvider> */}
        <App />
        {/* </FilterContextProvider> */}
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
      // {
      //   path: "/createItem",
      //   element: (
      //     <PrivateRoute>
      //       <CreateItemContainer />
      //     </PrivateRoute>
      //   ),
      // },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
