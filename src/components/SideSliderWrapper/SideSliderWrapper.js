import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { motion } from "framer-motion";
import { RiRefreshFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { SET_SIDE_SLIDER_SHOW } from "../../redux/sideSliderShowSlice";
import { SET_CART_ITEMS } from "../../redux/cartItemsSlice";
import "./SideSliderWrapper.css";
import { Wishlist, Cart } from "../../index";
import ViewSimilar from "../ViewSmiliar/ViewSimilar";

function SideSliderWrapper() {
  const dispatch = useDispatch();
  const type = useSelector((state) => state.sideSliderShow.type);
  const showSideSlider = () => {
    const payload = {
      show: false,
      type: "",
    };
    dispatch(SET_SIDE_SLIDER_SHOW(payload));
  };
  const clearCart = () => {
    dispatch(SET_CART_ITEMS([]));
    localStorage.setItem("cartItems", JSON.stringify([]));
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      className="side-slider-container"
    >
      <div className="side-slider-header ">
        <motion.div
          className="go-back-icon"
          whileTap={{ scale: 0.75 }}
          onClick={() => {
            showSideSlider();
          }}
        >
          <MdOutlineKeyboardBackspace className="text-textColor text-3xl " />
        </motion.div>

        {type === "wishlist" && <div>Wishlist</div>}
        {type === "cart" && <div>Cart</div>}
        {type === "viewSimilar" && <div>Similar Shirts</div>}

        {type === "cart" && (
          <div>
            <motion.p
              whileTap={{ scale: 0.9 }}
              className="clear-cart"
              onClick={clearCart}
            >
              Clear <RiRefreshFill />
            </motion.p>
          </div>
        )}
      </div>
      <div className="side-slider-content">
        {type === "wishlist" && <Wishlist />}
        {type === "viewSimilar" && <ViewSimilar />}
        {type === "cart" && <Cart />}
      </div>
    </motion.div>
  );
}

export default SideSliderWrapper;
